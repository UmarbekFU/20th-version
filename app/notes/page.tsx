import Navigation from '@/components/Navigation'
import PlumBackground from '@/components/PlumBackground'
import { NotesTabs } from '@/components/NotesTabs'
import { getNotesByCategory } from '@/lib/notes'
import { Lora } from 'next/font/google'

const lora = Lora({ subsets: ['latin'], display: 'swap' })

export default function NotesPage() {
  const books = getNotesByCategory('book');
  const podcasts = getNotesByCategory('podcast');
  const courses = getNotesByCategory('course');

  return (
    <>
      <PlumBackground />
      <Navigation />
      <main className="min-h-screen pt-32">
        <div className="max-w-7xl mx-auto px-8">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4 text-center">Notes</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 text-center">
            Short pieces made me pause.
          </p>

          {/* Sliding Tabs for All Content Types */}
          <div className={lora.className}>
            <NotesTabs books={books} podcasts={podcasts} courses={courses} />
          </div>

        </div>
      </main>
    </>
  )
}



