#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Simple note template
function generateNoteTemplate(slug, title, author, category = 'book') {
  const categoryIcon = {
    'book': '📚',
    'podcast': '🎧',
    'course': '🎓',
    'video': '🎥',
    'essay': '📝',
    'documentary': '🎬'
  }[category] || '📄';

  const dateField = category === 'book' || category === 'essay' || category === 'documentary' ? 'lastRead' : 
                   category === 'podcast' || category === 'video' ? 'lastListened' : 
                   category === 'course' ? 'courseTaken' : 'date';
  
  const dateLabel = dateField === 'lastRead' ? 'Last Read' : 
                   dateField === 'lastListened' ? 'Last Listened' : 
                   dateField === 'courseTaken' ? 'Course Taken' : 'Date';

  return `import Navigation from '@/components/Navigation'
import MarkdownRenderer from '@/components/MarkdownRenderer'
import PlumBackground from '@/components/PlumBackground'
import { Lora } from 'next/font/google'

const lora = Lora({ subsets: ['latin'], display: 'swap' })

export default function ${title.replace(/[^a-zA-Z0-9]/g, '')}Page() {
  // All data is self-contained - no external dependencies
  const title = "${title}"
  const author = "${author}"
  const date = "2024"
  const rating = 8
  const coverImage = "https://via.placeholder.com/300x400/%2310b981/ffffff?text=${encodeURIComponent(title)}+by+${encodeURIComponent(author)}"
  const spineColor = "#10b981"
  const textColor = "#ffffff"
  const summary = "Summary will be added here soon."
  const ${dateField} = "2024-01-01"
  
  const content = \`## My Notes

*Notes will be added here soon.*

---

## Date Tracking

*Track when you last engaged with this content:*

- **${dateLabel}:** *[Add date here]*
- **Notes:** *[Add any additional notes about your experience]*\`

  return (
    <>
      <PlumBackground />
      <Navigation />
      <main className="min-h-screen pt-32">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <img
              src={coverImage}
              alt={title}
              className="w-32 h-40 md:w-40 md:h-52 object-cover rounded border border-gray-200 dark:border-gray-700 flex-shrink-0"
            />
            <div className="flex-1">
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                {title}
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">
                by {author}
              </p>
              <p className="text-gray-500 dark:text-gray-500 mb-6">
                Rating: {rating}/10
              </p>
            </div>
          </div>
          
          <div className="mt-8 prose prose-lg max-w-none">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Summary</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              {summary}
            </p>
            
            {/* Date tracking - self-contained */}
            <div className="mt-6 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2 flex items-center">
                ${categoryIcon} Date Tracking
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>${dateLabel}:</strong> {new Date(${dateField}).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </p>
            </div>
            
            <MarkdownRenderer content={content} />
          </div>
        </div>
      </main>
    </>
  )
}`;
}

// Get all note directories that are still complex
const notesDir = path.join(__dirname, '../app/notes');
const noteDirs = fs.readdirSync(notesDir, { withFileTypes: true })
  .filter(dirent => dirent.isDirectory())
  .map(dirent => dirent.name);

console.log(`Found ${noteDirs.length} note directories`);

// Check each note page and convert if needed
let convertedCount = 0;
for (const noteDir of noteDirs) {
  const pagePath = path.join(notesDir, noteDir, 'page.tsx');
  
  if (fs.existsSync(pagePath)) {
    const content = fs.readFileSync(pagePath, 'utf8');
    
    if (content.includes('getNoteBySlug') || content.includes('from \'@/lib/notes\'')) {
      console.log(`Converting ${noteDir}...`);
      
      // Generate a basic template (you'll need to fill in the actual data)
      const template = generateNoteTemplate(noteDir, 'Title', 'Author');
      fs.writeFileSync(pagePath, template);
      convertedCount++;
    }
  }
}

console.log(`\nConverted ${convertedCount} note pages to simple format`);
console.log(`\nNext steps:`);
console.log(`1. Each note now has a basic template`);
console.log(`2. You can manually add the actual content to each note`);
console.log(`3. Each note is now completely independent`);
console.log(`4. You can delete the centralized notes.ts file when ready`);
