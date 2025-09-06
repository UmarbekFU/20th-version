const fs = require('fs');
const path = require('path');

// Read the notes.ts file
const notesPath = path.join(__dirname, '..', 'lib', 'notes.ts');
const notesContent = fs.readFileSync(notesPath, 'utf8');

// Extract all the note objects using a more robust approach
const noteObjects = [];
const noteRegex = /{\s*title:\s*"([^"]+)",\s*author:\s*"([^"]+)",\s*date:\s*"([^"]+)",\s*rating:\s*(\d+),\s*coverImage:\s*"([^"]+)",\s*spineColor:\s*"([^"]+)",\s*textColor:\s*"([^"]+)",\s*slug:\s*"([^"]+)",\s*summary:\s*"([^"]+)",\s*category:\s*"([^"]+)"(?:,\s*duration:\s*"([^"]+)")?(?:,\s*url:\s*"([^"]+)")?(?:,\s*tags:\s*\[([^\]]+)\])?\s*}/g;

let match;
while ((match = noteRegex.exec(notesContent)) !== null) {
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
    category: match[10],
    duration: match[11] || null,
    url: match[12] || null,
    tags: match[13] ? match[13].split(',').map(tag => tag.trim().replace(/"/g, '')) : []
  };
  noteObjects.push(note);
}

console.log(`Found ${noteObjects.length} notes to process`);

// Template for individual note pages
const generateNotePage = (note) => `import Navigation from '@/components/Navigation'
import PlumBackground from '@/components/PlumBackground'
import { getNoteBySlug } from '@/lib/notes'
import { notFound } from 'next/navigation'
import { Lora } from 'next/font/google'

const lora = Lora({ subsets: ['latin'], display: 'swap' })

export default function ${note.slug.charAt(0).toUpperCase() + note.slug.slice(1).replace(/-/g, '')}Page() {
  const note = getNoteBySlug('${note.slug}')
  
  if (!note) {
    notFound()
  }

  return (
    <>
      <PlumBackground />
      <Navigation />
      <main className="min-h-screen pt-32">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <img
              src={note.coverImage}
              alt={note.title}
              className="w-32 h-40 md:w-40 md:h-52 object-cover rounded border border-gray-200 dark:border-gray-700 flex-shrink-0"
            />
            <div className="flex-1">
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                {note.title}
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">
                by {note.author}
              </p>
              <p className="text-gray-500 dark:text-gray-500 mb-6">
                ${note.category === 'book' ? 'Read' : note.category === 'podcast' ? 'Listened' : 'Completed'}: {note.date} • Rating: {note.rating}/10${note.duration ? ` • Duration: ${note.duration}` : ''}
              </p>
            </div>
          </div>
          
          <div className="mt-8 prose prose-lg max-w-none">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Summary</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              {note.summary}
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">My Notes</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                This is where my detailed notes and thoughts about "${note.title}" would go. 
                I'm still working on organizing and sharing my thoughts on this ${note.category}.
              </p>
              <p>
                My notes typically include:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Key concepts that made me stop and think</li>
                <li>Questions I had while ${note.category === 'book' ? 'reading' : note.category === 'podcast' ? 'listening' : 'learning'}</li>
                <li>Connections to other ideas I've encountered</li>
                <li>Practical applications I want to try</li>
                <li>Disagreements or alternative perspectives</li>
              </ul>
              <p>
                I prefer to take time with my notes rather than rushing through them, 
                so this content will be added as I complete my analysis.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
`;

// Create directories and pages
let createdCount = 0;
noteObjects.forEach(note => {
  const pageDir = path.join(__dirname, '..', 'app', 'notes', note.slug);
  const pageFile = path.join(pageDir, 'page.tsx');
  
  // Create directory if it doesn't exist
  if (!fs.existsSync(pageDir)) {
    fs.mkdirSync(pageDir, { recursive: true });
  }
  
  // Generate and write the page
  const pageContent = generateNotePage(note);
  fs.writeFileSync(pageFile, pageContent);
  
  createdCount++;
  console.log(`${createdCount}. Created page for: ${note.title} (${note.category})`);
});

console.log(`\\n✅ Successfully generated ${createdCount} individual note pages!`);
console.log(`📚 Books: ${noteObjects.filter(n => n.category === 'book').length}`);
console.log(`🎧 Podcasts: ${noteObjects.filter(n => n.category === 'podcast').length}`);
console.log(`🎓 Courses: ${noteObjects.filter(n => n.category === 'course').length}`);
console.log(`📹 Videos: ${noteObjects.filter(n => n.category === 'video').length}`);
console.log(`📝 Essays: ${noteObjects.filter(n => n.category === 'essay').length}`);
console.log(`🎬 Documentaries: ${noteObjects.filter(n => n.category === 'documentary').length}`);
