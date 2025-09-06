import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read the notes data directly from the file
const notesContent = fs.readFileSync(path.join(__dirname, '..', 'lib', 'notes.ts'), 'utf8');

// Extract the notes array using regex (simple approach for this use case)
const notesMatch = notesContent.match(/export const notes = \[([\s\S]*?)\];/);
if (!notesMatch) {
  console.error('Could not find notes array in lib/notes.ts');
  process.exit(1);
}

// Parse the notes (this is a simplified parser - in production you'd want a proper TypeScript parser)
const notesText = notesMatch[1];
const notes = [];

// Split by book entries and parse each one
const bookEntries = notesText.split(/\s*{\s*title:/).filter(entry => entry.trim());
bookEntries.forEach(entry => {
  try {
    // Extract basic info using regex
    const titleMatch = entry.match(/title:\s*"([^"]+)"/);
    const authorMatch = entry.match(/author:\s*"([^"]+)"/);
    const slugMatch = entry.match(/slug:\s*"([^"]+)"/);
    const categoryMatch = entry.match(/category:\s*"([^"]+)"/);
    const dateMatch = entry.match(/date:\s*"([^"]+)"/);
    const ratingMatch = entry.match(/rating:\s*(\d+)/);
    const summaryMatch = entry.match(/summary:\s*"([^"]+)"/);
    const coverImageMatch = entry.match(/coverImage:\s*"([^"]+)"/);
    const durationMatch = entry.match(/duration:\s*"([^"]+)"/);

    if (titleMatch && slugMatch && categoryMatch) {
      notes.push({
        title: titleMatch[1],
        author: authorMatch ? authorMatch[1] : 'Unknown',
        slug: slugMatch[1],
        category: categoryMatch[1],
        date: dateMatch ? dateMatch[1] : '2024',
        rating: ratingMatch ? parseInt(ratingMatch[1]) : 8,
        summary: summaryMatch ? summaryMatch[1] : 'No summary available.',
        coverImage: coverImageMatch ? coverImageMatch[1] : '/images/placeholder.jpg',
        duration: durationMatch ? durationMatch[1] : null
      });
    }
  } catch (error) {
    console.warn('Error parsing entry:', error.message);
  }
});

console.log(`Found ${notes.length} notes to process`);

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
notes.forEach(note => {
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
console.log(`📚 Books: ${notes.filter(n => n.category === 'book').length}`);
console.log(`🎧 Podcasts: ${notes.filter(n => n.category === 'podcast').length}`);
console.log(`🎓 Courses: ${notes.filter(n => n.category === 'course').length}`);
