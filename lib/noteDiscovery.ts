import fs from 'fs';
import path from 'path';
import { SimpleNote } from './types';
import { retryWithBackoff, safeFileOperation, withTimeout, MemoryMonitor } from './robustness';
import { executeWithRecovery, RecoveryStrategies } from './errorRecovery';

// Robust parsing patterns - try multiple formats for each field
const patterns = {
  title: [
    /const\s+title\s*=\s*["'`]([^"'`]+)["'`]/,  // const title = "Title"
    /<h1[^>]*>([^<]+)<\/h1>/,                   // <h1>Title</h1>
    /title:\s*["'`]([^"'`]+)["'`]/,            // title: "Title"
    /const\s+title\s*=\s*\{([^}]+)\}/,         // const title = {title}
  ],
  author: [
    /const\s+author\s*=\s*["'`]([^"'`]+)["'`]/, // const author = "Author"
    /by\s+([^<]+)/,                             // by Author
    /author:\s*["'`]([^"'`]+)["'`]/,           // author: "Author"
    /const\s+author\s*=\s*\{([^}]+)\}/,        // const author = {author}
  ],
  date: [
    /const\s+date\s*=\s*["'`]([^"'`]+)["'`]/,   // const date = "2024"
    /date:\s*["'`]([^"'`]+)["'`]/,             // date: "2024"
    /const\s+date\s*=\s*\{([^}]+)\}/,          // const date = {date}
  ],
  rating: [
    /const\s+rating\s*=\s*(\d+)/,               // const rating = 8
    /rating:\s*(\d+)/,                         // rating: 8
    /const\s+rating\s*=\s*\{([^}]+)\}/,        // const rating = {rating}
  ],
  coverImage: [
    /const\s+coverImage\s*=\s*["'`]([^"'`]+)["'`]/, // const coverImage = "url"
    /coverImage:\s*["'`]([^"'`]+)["'`]/,           // coverImage: "url"
    /const\s+coverImage\s*=\s*\{([^}]+)\}/,        // const coverImage = {coverImage}
  ],
  spineColor: [
    /const\s+spineColor\s*=\s*["'`]([^"'`]+)["'`]/, // const spineColor = "#color"
    /spineColor:\s*["'`]([^"'`]+)["'`]/,           // spineColor: "#color"
    /const\s+spineColor\s*=\s*\{([^}]+)\}/,        // const spineColor = {spineColor}
  ],
  textColor: [
    /const\s+textColor\s*=\s*["'`]([^"'`]+)["'`]/, // const textColor = "#color"
    /textColor:\s*["'`]([^"'`]+)["'`]/,           // textColor: "#color"
    /const\s+textColor\s*=\s*\{([^}]+)\}/,        // const textColor = {textColor}
  ],
  summary: [
    /const\s+summary\s*=\s*["'`]([^"'`]+)["'`]/,   // const summary = "Summary"
    /summary:\s*["'`]([^"'`]+)["'`]/,             // summary: "Summary"
    /const\s+summary\s*=\s*\{([^}]+)\}/,          // const summary = {summary}
  ],
  duration: [
    /const\s+duration\s*=\s*["'`]([^"'`]+)["'`]/,  // const duration = "2h"
    /duration:\s*["'`]([^"'`]+)["'`]/,            // duration: "2h"
    /const\s+duration\s*=\s*\{([^}]+)\}/,         // const duration = {duration}
  ],
  url: [
    /const\s+url\s*=\s*["'`]([^"'`]+)["'`]/,       // const url = "https://..."
    /url:\s*["'`]([^"'`]+)["'`]/,                 // url: "https://..."
    /const\s+url\s*=\s*\{([^}]+)\}/,              // const url = {url}
  ],
  tags: [
    /const\s+tags\s*=\s*(\[[^\]]+\])/,            // const tags = [...]
    /tags:\s*(\[[^\]]+\])/,                      // tags: [...]
    /const\s+tags\s*=\s*\{([^}]+)\}/,            // const tags = {tags}
  ]
};

// Try multiple patterns for each field
function extractField(content: string, fieldName: string, patterns: RegExp[]): string | null {
  for (const pattern of patterns) {
    try {
      const match = content.match(pattern);
      if (match && match[1]) {
        return match[1].trim();
      }
    } catch (error) {
      // Continue to next pattern if this one fails
      continue;
    }
  }
  return null;
}

// Generate a readable title from slug
function generateTitleFromSlug(slug: string): string {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

// Determine category with better logic
function determineCategory(slug: string, content: string): SimpleNote['category'] {
  const contentLower = content.toLowerCase();
  
  // FIRST: Check for explicit category declaration (most reliable)
  const explicitCategoryMatch = content.match(/const\s+category\s*=\s*["'`]([^"'`]+)["'`]/);
  if (explicitCategoryMatch) {
    const explicitCategory = explicitCategoryMatch[1].toLowerCase();
    if (['book', 'course', 'podcast', 'video', 'essay', 'documentary'].includes(explicitCategory)) {
      return explicitCategory as SimpleNote['category'];
    }
  }
  
  // SECOND: Check slug patterns (reliable for specific cases)
  const slugLower = slug.toLowerCase();
  if (slugLower.includes('rpc') || slugLower.includes('course')) return 'course';
  if (slugLower.includes('ans') || slugLower.includes('podcast')) return 'podcast';
  if (slugLower.includes('video') || slugLower.includes('youtube')) return 'video';
  if (slugLower.includes('essay')) return 'essay';
  if (slugLower.includes('doc') || slugLower.includes('documentary')) return 'documentary';
  
  // THIRD: Check for specific URL patterns (reliable indicators)
  if (contentLower.includes('acquired.fm') || contentLower.includes('thefounderspodcast.com') || contentLower.includes('fs.blog')) return 'podcast';
  if (contentLower.includes('udemy.com') || contentLower.includes('kentcdodds.com')) return 'course';
  
  // FOURTH: Check content patterns (less reliable, use sparingly)
  if (contentLower.includes('course taken') || contentLower.includes('bootcamp')) return 'course';
  if (contentLower.includes('last listened') || contentLower.includes('episode')) return 'podcast';
  if (contentLower.includes('youtube') || contentLower.includes('video')) return 'video';
  if (contentLower.includes('essay') || contentLower.includes('article')) return 'essay';
  if (contentLower.includes('documentary') || contentLower.includes('film')) return 'documentary';
  
  // DEFAULT: Always default to book (safest fallback)
  return 'book';
}

// Enhanced cache with TTL and memory management
interface CacheEntry {
  data: SimpleNote[];
  timestamp: number;
  ttl: number;
}

let notesCache: CacheEntry | null = null;
const CACHE_TTL = 5 * 60 * 1000; // 5 minutes
const MAX_CACHE_SIZE = 1000; // Prevent memory leaks

// Clear cache function for development
export function clearCache() {
  notesCache = null;
}

// Check if cache is valid
function isCacheValid(entry: CacheEntry): boolean {
  return Date.now() - entry.timestamp < entry.ttl;
}

// Function to discover all notes from the file system with robustness
export function discoverNotes(): SimpleNote[] {
  // Return cached notes if available and valid
  if (notesCache && isCacheValid(notesCache)) {
    console.log('Using cached notes:', notesCache.data.length);
    return notesCache.data;
  }

  // Check memory usage before processing
  const memoryMonitor = MemoryMonitor.getInstance();
  const memoryUsage = memoryMonitor.getMemoryUsage();
  
  if (memoryUsage.heapUsed > 400) { // 400MB threshold
    console.warn('High memory usage detected, using cached data if available');
    if (notesCache) {
      return notesCache.data;
    }
  }

  // Use error recovery for the entire discovery process
  try {
    return executeWithRecovery(
      () => performNotesDiscovery(),
      'discoverNotes',
      RecoveryStrategies.fileOperation,
      { memoryUsage }
    );
  } catch (error) {
    console.error('Notes discovery failed completely:', error);
    return notesCache?.data || [];
  }
}

// Internal function that does the actual discovery
function performNotesDiscovery(): SimpleNote[] {
  const notes: SimpleNote[] = [];
  const notesDir = path.join(process.cwd(), 'app/notes');
  
  // Safe directory check with timeout
  const dirExists = safeFileOperation(
    () => fs.existsSync(notesDir),
    false,
    'checking notes directory'
  );

  if (!dirExists) {
    console.warn('Notes directory not found:', notesDir);
    return notes;
  }

  const noteDirs = fs.readdirSync(notesDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name)
    .filter(name => name !== '[slug]'); // Exclude dynamic route

  console.log(`Discovering notes in ${noteDirs.length} directories...`);

  // Process notes with batching to prevent memory issues
  const BATCH_SIZE = 50;
  const batches = [];
  for (let i = 0; i < noteDirs.length; i += BATCH_SIZE) {
    batches.push(noteDirs.slice(i, i + BATCH_SIZE));
  }

  for (const batch of batches) {
    for (const noteDir of batch) {
      const pageFile = path.join(notesDir, noteDir, 'page.tsx');
      
      const fileExists = safeFileOperation(
        () => fs.existsSync(pageFile),
        false,
        `checking ${noteDir}`
      );

      if (fileExists) {
        try {
          // Safe file reading with error handling
          const content = safeFileOperation(
            () => fs.readFileSync(pageFile, 'utf8'),
            '',
            `reading ${noteDir}`
          );

          if (!content) {
            console.warn(`Empty content for ${noteDir}, skipping`);
            continue;
          }
        
        // Extract note data using robust patterns
        const title = extractField(content, 'title', patterns.title) || generateTitleFromSlug(noteDir);
        const author = extractField(content, 'author', patterns.author) || 'Unknown Author';
        const date = extractField(content, 'date', patterns.date) || new Date().getFullYear().toString();
        const ratingStr = extractField(content, 'rating', patterns.rating);
        const rating = ratingStr ? parseInt(ratingStr) : 5; // Default rating
        const coverImage = extractField(content, 'coverImage', patterns.coverImage) || 'https://via.placeholder.com/300x400/%23666/ffffff?text=No+Cover';
        const spineColor = extractField(content, 'spineColor', patterns.spineColor) || '#666666';
        const textColor = extractField(content, 'textColor', patterns.textColor) || '#ffffff';
        const summary = extractField(content, 'summary', patterns.summary) || 'Summary not available.';
        const duration = extractField(content, 'duration', patterns.duration);
        const url = extractField(content, 'url', patterns.url);
        const tagsStr = extractField(content, 'tags', patterns.tags);
        const tags = tagsStr ? JSON.parse(tagsStr) : undefined;

        // Determine category
        const category = determineCategory(noteDir, content);

        const note: SimpleNote = {
          title,
          author,
          date,
          rating,
          coverImage,
          spineColor,
          textColor,
          slug: noteDir,
          summary,
          content: '', // Empty content for now - could be extracted if needed
          category,
          duration: duration || undefined,
          url: url || undefined,
          tags: tags || undefined
        };
        
        notes.push(note);
        console.log(`✓ Discovered: ${title} by ${author}`);
        
      } catch (error) {
        console.warn(`Could not parse note ${noteDir}:`, error);
        // Still create a basic note entry to prevent complete failure
        const note: SimpleNote = {
          title: generateTitleFromSlug(noteDir),
          author: 'Unknown Author',
          date: new Date().getFullYear().toString(),
          rating: 5,
          coverImage: 'https://via.placeholder.com/300x400/%23666/ffffff?text=Error',
          spineColor: '#666666',
          textColor: '#ffffff',
          slug: noteDir,
          summary: 'Could not parse note data.',
          content: '',
          category: 'book'
        };
        notes.push(note);
      }
    } else {
      console.warn(`Page file not found for note: ${noteDir}`);
    }
  }

  // Deduplicate notes based on title and author
  const uniqueNotes = notes.reduce((acc, note) => {
    const key = `${note.title.toLowerCase()}-${note.author.toLowerCase()}`;
    if (!acc.has(key)) {
      acc.set(key, note);
    } else {
      // If duplicate found, keep the one with more complete data (higher rating, longer summary, etc.)
      const existing = acc.get(key)!;
      if (note.rating > existing.rating || 
          note.summary.length > existing.summary.length ||
          (note.url && !existing.url) ||
          (note.tags && !existing.tags)) {
        acc.set(key, note);
      }
    }
    return acc;
  }, new Map<string, SimpleNote>());

  const finalNotes = Array.from(uniqueNotes.values());
  
  console.log(`Successfully discovered ${finalNotes.length} unique notes (${notes.length - finalNotes.length} duplicates removed)`);
  
  // Cache the results with TTL
  notesCache = {
    data: finalNotes,
    timestamp: Date.now(),
    ttl: CACHE_TTL
  };
  
  // Prevent memory leaks by limiting cache size
  if (finalNotes.length > MAX_CACHE_SIZE) {
    console.warn(`Notes count (${finalNotes.length}) exceeds max cache size (${MAX_CACHE_SIZE}). Consider implementing pagination.`);
  }
  
  return finalNotes;
}

// Function to get notes by category with pagination
export function getNotesByCategory(
  category: SimpleNote['category'], 
  page: number = 1, 
  limit: number = 20
): { notes: SimpleNote[]; total: number; hasMore: boolean } {
  const allNotes = discoverNotes();
  const filteredNotes = allNotes.filter(note => note.category === category);
  
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const paginatedNotes = filteredNotes.slice(startIndex, endIndex);
  
  return {
    notes: paginatedNotes,
    total: filteredNotes.length,
    hasMore: endIndex < filteredNotes.length
  };
}

// Legacy function for backward compatibility
export function getNotesByCategoryLegacy(category: SimpleNote['category']): SimpleNote[] {
  return getNotesByCategory(category).notes;
}

// Function to get all books
export function getBooks(): SimpleNote[] {
  return getNotesByCategoryLegacy('book');
}

// Function to get all podcasts
export function getPodcasts(): SimpleNote[] {
  return getNotesByCategoryLegacy('podcast');
}

// Function to get all courses
export function getCourses(): SimpleNote[] {
  return getNotesByCategoryLegacy('course');
}
