#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Read the centralized notes data
const notesPath = path.join(__dirname, '../lib/notes.ts');
const notesContent = fs.readFileSync(notesPath, 'utf8');

// Extract the notes array from the TypeScript file
const notesMatch = notesContent.match(/export const notes: Note\[\] = \[([\s\S]*?)\];/);
if (!notesMatch) {
  console.error('Could not find notes array in notes.ts');
  process.exit(1);
}

// Parse the notes (this is a simplified parser - in practice you might want to use a proper TypeScript parser)
const notesArrayContent = notesMatch[1];
const notes = [];

// Simple regex to extract note objects (this is a basic implementation)
const noteRegex = /\{\s*title:\s*"([^"]+)",\s*author:\s*"([^"]+)",\s*date:\s*"([^"]+)",\s*rating:\s*(\d+),\s*coverImage:\s*"([^"]+)",\s*spineColor:\s*"([^"]+)",\s*textColor:\s*"([^"]+)",\s*slug:\s*"([^"]+)",\s*summary:\s*"([^"]+)",\s*content:\s*([^,]+),\s*category:\s*"([^"]+)"(?:,\s*lastRead:\s*"([^"]+)")?(?:,\s*lastListened:\s*"([^"]+)")?(?:,\s*courseTaken:\s*"([^"]+)")?(?:,\s*duration:\s*"([^"]+)")?(?:,\s*url:\s*"([^"]+)")?(?:,\s*tags:\s*\[([^\]]+)\])?/g;

let match;
while ((match = noteRegex.exec(notesArrayContent)) !== null) {
  const note = {
    title: match[1],
    author: match[2],
    date: match[3],
    rating: parseInt(match[4]),
    coverImage: match[5],
    spineColor: match[6],
    textColor: match[7],
    slug: match[8],
    summary: match[9],
    content: match[10].trim(),
    category: match[11],
    lastRead: match[12],
    lastListened: match[13],
    courseTaken: match[14],
    duration: match[15],
    url: match[16],
    tags: match[17] ? match[17].split(',').map(tag => tag.trim().replace(/"/g, '')) : []
  };
  notes.push(note);
}

console.log(`Found ${notes.length} notes to convert`);

// Function to generate the page content
function generatePageContent(note) {
  const categoryIcon = {
    'book': '📚',
    'podcast': '🎧',
    'course': '🎓',
    'video': '🎥',
    'essay': '📝',
    'documentary': '🎬'
  }[note.category] || '📄';

  const dateField = note.lastRead ? 'lastRead' : note.lastListened ? 'lastListened' : note.courseTaken ? 'courseTaken' : null;
  const dateValue = note[dateField];
  const dateLabel = dateField === 'lastRead' ? 'Last Read' : 
                   dateField === 'lastListened' ? 'Last Listened' : 
                   dateField === 'courseTaken' ? 'Course Taken' : 'Date';

  const durationText = note.duration ? ` • Duration: ${note.duration}` : '';
  const urlText = note.url ? ` • <a href="${note.url}" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">Visit Source</a>` : '';

  return `import Navigation from '@/components/Navigation'
import MarkdownRenderer from '@/components/MarkdownRenderer'
import PlumBackground from '@/components/PlumBackground'
import { Lora } from 'next/font/google'

const lora = Lora({ subsets: ['latin'], display: 'swap' })

export default function ${note.title.replace(/[^a-zA-Z0-9]/g, '')}Page() {
  // All data is self-contained - no external dependencies
  const title = "${note.title}"
  const author = "${note.author}"
  const date = "${note.date}"
  const rating = ${note.rating}
  const coverImage = "${note.coverImage}"
  const spineColor = "${note.spineColor}"
  const textColor = "${note.textColor}"
  const summary = "${note.summary}"
  ${dateValue ? `const ${dateField} = "${dateValue}"` : ''}
  ${note.duration ? `const duration = "${note.duration}"` : ''}
  ${note.url ? `const url = "${note.url}"` : ''}
  ${note.tags.length > 0 ? `const tags = ${JSON.stringify(note.tags)}` : ''}
  
  const content = \`${note.content}\`

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
                Rating: {rating}/10${durationText}${urlText}
              </p>
            </div>
          </div>
          
          <div className="mt-8 prose prose-lg max-w-none">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Summary</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              {summary}
            </p>
            
            ${dateValue ? `{/* Date tracking - self-contained */}
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
            </div>` : ''}
            
            <MarkdownRenderer content={content} />
          </div>
        </div>
      </main>
    </>
  )
}`;
}

// Get all note directories
const notesDir = path.join(__dirname, '../app/notes');
const noteDirs = fs.readdirSync(notesDir, { withFileTypes: true })
  .filter(dirent => dirent.isDirectory())
  .map(dirent => dirent.name);

console.log(`Found ${noteDirs.length} note directories`);

// Convert each note
let convertedCount = 0;
for (const note of notes) {
  const noteDir = path.join(notesDir, note.slug);
  const pagePath = path.join(noteDir, 'page.tsx');
  
  if (fs.existsSync(pagePath)) {
    // Check if the page already uses the simple approach (no imports from notes.ts)
    const currentContent = fs.readFileSync(pagePath, 'utf8');
    if (currentContent.includes('getNoteBySlug') || currentContent.includes('from \'@/lib/notes\'')) {
      console.log(`Converting ${note.slug}...`);
      const newContent = generatePageContent(note);
      fs.writeFileSync(pagePath, newContent);
      convertedCount++;
    } else {
      console.log(`Skipping ${note.slug} (already simple)`);
    }
  }
}

console.log(`Converted ${convertedCount} note pages to simple format`);
