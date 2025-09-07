import Navigation from '@/components/Navigation'
import PlumBackground from '@/components/PlumBackground'
import { NotesTabs } from '@/components/NotesTabs'
import { getNotesByCategory } from '@/lib/notes'

export default function NotesPage() {
  const books = getNotesByCategory('book');
  const podcasts = getNotesByCategory('podcast');
  const courses = getNotesByCategory('course');

  return (
    <>
      <PlumBackground />
      <Navigation />
      <main className="min-h-screen pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="notes-heading text-3xl sm:text-4xl lg:text-5xl notes-text-primary mb-6 text-center">Notes</h1>
          <p className="notes-content text-lg sm:text-xl notes-text-secondary mb-8 sm:mb-12 text-center max-w-2xl mx-auto">
            Short pieces made me pause.
          </p>

          {/* Sliding Tabs for All Content Types */}
          <div className="notes-content">
            <NotesTabs books={books} podcasts={podcasts} courses={courses} />
          </div>

        </div>
      </main>
    </>
  )
}



