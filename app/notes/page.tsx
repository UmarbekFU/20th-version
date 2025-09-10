import Navigation from '@/components/Navigation'
import PlumBackground from '@/components/PlumBackground'
import { NotesTabs } from '@/components/NotesTabs'
import { discoverNotes, getBooks, getPodcasts, getCourses } from '@/lib/noteDiscovery'
import { Suspense } from 'react'

// Loading component for notes
function NotesLoading() {
  return (
    <div className="min-h-screen pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-pulse">
          <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded mb-6 w-1/3 mx-auto"></div>
          <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded mb-8 w-1/2 mx-auto"></div>
          <div className="space-y-4">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="flex gap-6">
                <div className="w-24 h-32 bg-gray-200 dark:bg-gray-700 rounded"></div>
                <div className="flex-1 space-y-2">
                  <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/3"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// Notes content component
function NotesContent() {
  // Discover notes from the file system - still simple but functional
  const books = getBooks()
  const podcasts = getPodcasts()
  const courses = getCourses()

  return (
    <main className="min-h-screen pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="notes-heading text-3xl sm:text-4xl lg:text-5xl notes-text-primary mb-6 text-center">Notes</h1>
        <p className="notes-content text-lg sm:text-xl notes-text-secondary mb-8 sm:mb-12 text-center max-w-2xl mx-auto">
          Short pieces made me pause.
        </p>

        {/* Bookshelf and organized notes */}
        <NotesTabs books={books} podcasts={podcasts} courses={courses} />
      </div>
    </main>
  )
}

export default function NotesPage() {
  return (
    <>
      <PlumBackground />
      <Navigation />
      <Suspense fallback={<NotesLoading />}>
        <NotesContent />
      </Suspense>
    </>
  )
}



