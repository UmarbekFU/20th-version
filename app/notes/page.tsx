import Navigation from '@/components/Navigation'
import { NotesTabs } from '@/components/NotesTabs'
import PageErrorBoundary from '@/components/PageErrorBoundary'
import fs from 'fs'
import path from 'path'

interface NoteMetadata {
  title: string
  author: string
  date: string
  rating: number
  category: 'book' | 'podcast' | 'course' | 'video' | 'essay' | 'documentary'
  summary: string
  spineColor: string
  textColor: string
  coverImage: string
  duration?: string
  url?: string
  slug: string
}

// Function to dynamically discover notes
function discoverNotes(): NoteMetadata[] {
  const notes: NoteMetadata[] = []
  const notesDir = path.join(process.cwd(), 'app', 'notes')
  
  try {
    if (fs.existsSync(notesDir)) {
      const noteDirs = fs.readdirSync(notesDir, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory())
        .map(dirent => dirent.name)
        .filter(name => name !== '[slug]') // Exclude dynamic route directory
      
      for (const noteDir of noteDirs) {
        const metadataFile = path.join(notesDir, noteDir, 'metadata.ts')
        if (fs.existsSync(metadataFile)) {
          try {
            const fileContent = fs.readFileSync(metadataFile, 'utf-8')
            
            // Extract noteMetadata from the file
            const metadataMatch = fileContent.match(/export const noteMetadata = \{([\s\S]*?)\}/)
            if (metadataMatch) {
              const metadataContent = metadataMatch[1]
              
              // Extract basic fields using regex
              const titleMatch = metadataContent.match(/title:\s*["']([^"']+)["']/)
              const authorMatch = metadataContent.match(/author:\s*["']([^"']+)["']/)
              const dateMatch = metadataContent.match(/date:\s*["']([^"']+)["']/)
              const ratingMatch = metadataContent.match(/rating:\s*(\d+)/)
              const categoryMatch = metadataContent.match(/category:\s*["']([^"']+)["']/)
              const summaryMatch = metadataContent.match(/summary:\s*["']([^"']+)["']/)
              const spineColorMatch = metadataContent.match(/spineColor:\s*["']([^"']+)["']/)
              const textColorMatch = metadataContent.match(/textColor:\s*["']([^"']+)["']/)
              const coverImageMatch = metadataContent.match(/coverImage:\s*["']([^"']+)["']/)
              const durationMatch = metadataContent.match(/duration:\s*["']([^"']+)["']/)
              const urlMatch = metadataContent.match(/url:\s*["']([^"']+)["']/)
              
              if (titleMatch && authorMatch && dateMatch && ratingMatch && categoryMatch && summaryMatch && spineColorMatch && textColorMatch && coverImageMatch) {
                notes.push({
                  slug: noteDir,
                  title: titleMatch[1],
                  author: authorMatch[1],
                  date: dateMatch[1],
                  rating: parseInt(ratingMatch[1]),
                  category: categoryMatch[1] as NoteMetadata['category'],
                  summary: summaryMatch[1],
                  spineColor: spineColorMatch[1],
                  textColor: textColorMatch[1],
                  coverImage: coverImageMatch[1],
                  duration: durationMatch ? durationMatch[1] : undefined,
                  url: urlMatch ? urlMatch[1] : undefined
                })
              }
            }
          } catch (error) {
            console.warn(`Could not extract metadata from ${metadataFile}:`, error)
          }
        }
      }
    }
  } catch (error) {
    console.warn('Could not discover notes:', error)
  }
  
  return notes
}

// Function to get notes by category
function getNotesByCategory(category: NoteMetadata['category']): NoteMetadata[] {
  return discoverNotes().filter(note => note.category === category)
}

export default function NotesPage() {
  const books = getNotesByCategory('book');
  const podcasts = getNotesByCategory('podcast');
  const courses = getNotesByCategory('course');

  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="notes-heading text-3xl sm:text-4xl lg:text-5xl notes-text-primary mb-6 text-center">Notes</h1>
          <p className="notes-content text-lg sm:text-xl notes-text-secondary mb-8 sm:mb-12 text-center max-w-2xl mx-auto">
                Short pieces made me pause.
              </p>
              
          {/* Sliding Tabs for All Content Types */}
          <div className="notes-content">
            <PageErrorBoundary pageName="Notes">
              <NotesTabs books={books} podcasts={podcasts} courses={courses} />
            </PageErrorBoundary>
          </div>

        </div>
      </main>
    </>
  )
}