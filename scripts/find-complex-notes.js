#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Get all note directories
const notesDir = path.join(__dirname, '../app/notes');
const noteDirs = fs.readdirSync(notesDir, { withFileTypes: true })
  .filter(dirent => dirent.isDirectory())
  .map(dirent => dirent.name);

console.log(`Found ${noteDirs.length} note directories`);

// Check each note page
const complexNotes = [];
const simpleNotes = [];

for (const noteDir of noteDirs) {
  const pagePath = path.join(notesDir, noteDir, 'page.tsx');
  
  if (fs.existsSync(pagePath)) {
    const content = fs.readFileSync(pagePath, 'utf8');
    
    if (content.includes('getNoteBySlug') || content.includes('from \'@/lib/notes\'')) {
      complexNotes.push(noteDir);
    } else {
      simpleNotes.push(noteDir);
    }
  }
}

console.log(`\nSimple notes (${simpleNotes.length}):`);
simpleNotes.forEach(note => console.log(`  ✓ ${note}`));

console.log(`\nComplex notes that need conversion (${complexNotes.length}):`);
complexNotes.forEach(note => console.log(`  ✗ ${note}`));

console.log(`\nSummary:`);
console.log(`  Simple: ${simpleNotes.length}`);
console.log(`  Complex: ${complexNotes.length}`);
console.log(`  Total: ${noteDirs.length}`);

// Generate a simple template for conversion
if (complexNotes.length > 0) {
  console.log(`\nTemplate for converting complex notes:`);
  console.log(`
// Replace the complex imports with:
import Navigation from '@/components/Navigation'
import MarkdownRenderer from '@/components/MarkdownRenderer'
import PlumBackground from '@/components/PlumBackground'
import { Lora } from 'next/font/google'

const lora = Lora({ subsets: ['latin'], display: 'swap' })

export default function YourNotePage() {
  // All data is self-contained - no external dependencies
  const title = "Your Title"
  const author = "Author Name"
  const date = "2024"
  const rating = 8
  const coverImage = "https://via.placeholder.com/300x400/color/ffffff?text=Title+by+Author"
  const spineColor = "#color"
  const textColor = "#ffffff"
  const summary = "Your summary here"
  const lastRead = "2024-01-01" // or lastListened, courseTaken, etc.
  
  const content = \`## My Notes

*Notes will be added here soon.*

---

## Date Tracking

*Track when you last engaged with this content:*

- **Last Read:** *[Add date here]*
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
                📚 Date Tracking
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Last Read:</strong> {new Date(lastRead).toLocaleDateString('en-US', {
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
}`);
}
