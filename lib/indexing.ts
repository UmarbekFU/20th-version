/**
 * Database-like indexing system for extreme scale
 * Provides fast lookups without full file system scans
 */

import { SimpleNote } from './types';
import fs from 'fs';
import path from 'path';

interface IndexEntry {
  slug: string;
  title: string;
  author: string;
  category: SimpleNote['category'];
  rating: number;
  date: string;
  lastModified: number;
  filePath: string;
}

interface SearchIndex {
  bySlug: Map<string, IndexEntry>;
  byCategory: Map<string, Set<string>>;
  byAuthor: Map<string, Set<string>>;
  byRating: Map<number, Set<string>>;
  byDate: Map<string, Set<string>>;
  fullText: Map<string, Set<string>>; // word -> set of slugs
}

class NoteIndexer {
  private index: SearchIndex;
  private indexFile: string;
  private lastIndexUpdate: number = 0;
  private readonly INDEX_TTL = 5 * 60 * 1000; // 5 minutes

  constructor() {
    this.index = {
      bySlug: new Map(),
      byCategory: new Map(),
      byAuthor: new Map(),
      byRating: new Map(),
      byDate: new Map(),
      fullText: new Map()
    };
    this.indexFile = path.join(process.cwd(), '.next', 'note-index.json');
  }

  // Load index from disk
  private loadIndex(): boolean {
    try {
      if (!fs.existsSync(this.indexFile)) {
        return false;
      }

      const data = fs.readFileSync(this.indexFile, 'utf8');
      const savedIndex = JSON.parse(data);
      
      // Reconstruct Maps from serialized data
      this.index.bySlug = new Map(savedIndex.bySlug);
      this.index.byCategory = new Map(
        Object.entries(savedIndex.byCategory).map(([k, v]) => [k, new Set(v as string[])])
      );
      this.index.byAuthor = new Map(
        Object.entries(savedIndex.byAuthor).map(([k, v]) => [k, new Set(v as string[])])
      );
      this.index.byRating = new Map(
        Object.entries(savedIndex.byRating).map(([k, v]) => [Number(k), new Set(v as string[])])
      );
      this.index.byDate = new Map(
        Object.entries(savedIndex.byDate).map(([k, v]) => [k, new Set(v as string[])])
      );
      this.index.fullText = new Map(
        Object.entries(savedIndex.fullText).map(([k, v]) => [k, new Set(v as string[])])
      );

      this.lastIndexUpdate = savedIndex.lastIndexUpdate || 0;
      return true;
    } catch (error) {
      console.warn('Failed to load note index:', error);
      return false;
    }
  }

  // Save index to disk
  private saveIndex(): void {
    try {
      const data = {
        bySlug: Array.from(this.index.bySlug.entries()),
        byCategory: Object.fromEntries(
          Array.from(this.index.byCategory.entries()).map(([k, v]) => [k, Array.from(v)])
        ),
        byAuthor: Object.fromEntries(
          Array.from(this.index.byAuthor.entries()).map(([k, v]) => [k, Array.from(v)])
        ),
        byRating: Object.fromEntries(
          Array.from(this.index.byRating.entries()).map(([k, v]) => [k, Array.from(v)])
        ),
        byDate: Object.fromEntries(
          Array.from(this.index.byDate.entries()).map(([k, v]) => [k, Array.from(v)])
        ),
        fullText: Object.fromEntries(
          Array.from(this.index.fullText.entries()).map(([k, v]) => [k, Array.from(v)])
        ),
        lastIndexUpdate: this.lastIndexUpdate
      };

      // Ensure directory exists
      const dir = path.dirname(this.indexFile);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }

      fs.writeFileSync(this.indexFile, JSON.stringify(data, null, 2));
    } catch (error) {
      console.warn('Failed to save note index:', error);
    }
  }

  // Check if index needs updating
  private needsUpdate(): boolean {
    const now = Date.now();
    return (now - this.lastIndexUpdate) > this.INDEX_TTL;
  }

  // Build full-text search index
  private buildFullTextIndex(entry: IndexEntry): void {
    const text = `${entry.title} ${entry.author}`.toLowerCase();
    const words = text.split(/\s+/).filter(word => word.length > 2);
    
    words.forEach(word => {
      if (!this.index.fullText.has(word)) {
        this.index.fullText.set(word, new Set());
      }
      this.index.fullText.get(word)!.add(entry.slug);
    });
  }

  // Add entry to all indexes
  private addToIndexes(entry: IndexEntry): void {
    // By slug
    this.index.bySlug.set(entry.slug, entry);

    // By category
    if (!this.index.byCategory.has(entry.category)) {
      this.index.byCategory.set(entry.category, new Set());
    }
    this.index.byCategory.get(entry.category)!.add(entry.slug);

    // By author
    if (!this.index.byAuthor.has(entry.author)) {
      this.index.byAuthor.set(entry.author, new Set());
    }
    this.index.byAuthor.get(entry.author)!.add(entry.slug);

    // By rating
    if (!this.index.byRating.has(entry.rating)) {
      this.index.byRating.set(entry.rating, new Set());
    }
    this.index.byRating.get(entry.rating)!.add(entry.slug);

    // By date
    if (!this.index.byDate.has(entry.date)) {
      this.index.byDate.set(entry.date, new Set());
    }
    this.index.byDate.get(entry.date)!.add(entry.slug);

    // Full-text search
    this.buildFullTextIndex(entry);
  }

  // Rebuild entire index
  private rebuildIndex(): void {
    console.log('Rebuilding note index...');
    
    // Clear existing index
    this.index.bySlug.clear();
    this.index.byCategory.clear();
    this.index.byAuthor.clear();
    this.index.byRating.clear();
    this.index.byDate.clear();
    this.index.fullText.clear();

    const notesDir = path.join(process.cwd(), 'app/notes');
    if (!fs.existsSync(notesDir)) {
      console.warn('Notes directory not found');
      return;
    }

    const noteDirs = fs.readdirSync(notesDir, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory())
      .map(dirent => dirent.name)
      .filter(name => name !== '[slug]');

    let processed = 0;
    for (const noteDir of noteDirs) {
      try {
        const pageFile = path.join(notesDir, noteDir, 'page.tsx');
        if (fs.existsSync(pageFile)) {
          const stats = fs.statSync(pageFile);
          const content = fs.readFileSync(pageFile, 'utf8');
          
          // Extract basic info (simplified version of the full parser)
          const titleMatch = content.match(/const\s+title\s*=\s*["'`]([^"'`]+)["'`]/);
          const authorMatch = content.match(/const\s+author\s*=\s*["'`]([^"'`]+)["'`]/);
          const ratingMatch = content.match(/const\s+rating\s*=\s*(\d+)/);
          const dateMatch = content.match(/const\s+date\s*=\s*["'`]([^"'`]+)["'`]/);
          const categoryMatch = content.match(/const\s+category\s*=\s*["'`]([^"'`]+)["'`]/);

          const entry: IndexEntry = {
            slug: noteDir,
            title: titleMatch?.[1] || noteDir.replace(/-/g, ' '),
            author: authorMatch?.[1] || 'Unknown Author',
            category: (categoryMatch?.[1] as SimpleNote['category']) || 'book',
            rating: parseInt(ratingMatch?.[1] || '5'),
            date: dateMatch?.[1] || new Date().getFullYear().toString(),
            lastModified: stats.mtime.getTime(),
            filePath: pageFile
          };

          this.addToIndexes(entry);
          processed++;
        }
      } catch (error) {
        console.warn(`Failed to index ${noteDir}:`, error);
      }
    }

    this.lastIndexUpdate = Date.now();
    this.saveIndex();
    console.log(`Indexed ${processed} notes`);
  }

  // Get or rebuild index
  private getIndex(): SearchIndex {
    if (this.index.bySlug.size === 0 || this.needsUpdate()) {
      if (!this.loadIndex() || this.needsUpdate()) {
        this.rebuildIndex();
      }
    }
    return this.index;
  }

  // Public API methods
  getNotesByCategory(category: SimpleNote['category']): IndexEntry[] {
    const index = this.getIndex();
    const slugs = index.byCategory.get(category) || new Set();
    return Array.from(slugs).map(slug => index.bySlug.get(slug)!).filter(Boolean);
  }

  getNotesByAuthor(author: string): IndexEntry[] {
    const index = this.getIndex();
    const slugs = index.byAuthor.get(author) || new Set();
    return Array.from(slugs).map(slug => index.bySlug.get(slug)!).filter(Boolean);
  }

  getNotesByRating(minRating: number): IndexEntry[] {
    const index = this.getIndex();
    const results: IndexEntry[] = [];
    
    for (let rating = 10; rating >= minRating; rating--) {
      const slugs = index.byRating.get(rating) || new Set();
      results.push(...Array.from(slugs).map(slug => index.bySlug.get(slug)!).filter(Boolean));
    }
    
    return results;
  }

  searchNotes(query: string): IndexEntry[] {
    const index = this.getIndex();
    const words = query.toLowerCase().split(/\s+/).filter(word => word.length > 2);
    
    if (words.length === 0) return [];

    let resultSlugs: Set<string> | null = null;
    
    for (const word of words) {
      const wordSlugs = index.fullText.get(word) || new Set();
      if (resultSlugs === null) {
        resultSlugs = new Set(wordSlugs);
      } else {
        // Intersection for AND search
        resultSlugs = new Set([...resultSlugs].filter(slug => wordSlugs.has(slug)));
      }
    }

    return resultSlugs ? Array.from(resultSlugs).map(slug => index.bySlug.get(slug)!).filter(Boolean) : [];
  }

  getNoteBySlug(slug: string): IndexEntry | null {
    const index = this.getIndex();
    return index.bySlug.get(slug) || null;
  }

  getAllNotes(): IndexEntry[] {
    const index = this.getIndex();
    return Array.from(index.bySlug.values());
  }

  getStats() {
    const index = this.getIndex();
    return {
      totalNotes: index.bySlug.size,
      categories: index.byCategory.size,
      authors: index.byAuthor.size,
      lastUpdate: this.lastIndexUpdate,
      indexAge: Date.now() - this.lastIndexUpdate
    };
  }
}

// Singleton instance
const noteIndexer = new NoteIndexer();

export { noteIndexer, type IndexEntry };
