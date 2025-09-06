import Navigation from '@/components/Navigation'
import PlumBackground from '@/components/PlumBackground'
import { getNoteBySlug, getAllNotes } from '@/lib/notes'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Lora } from 'next/font/google'

const lora = Lora({ subsets: ['latin'], display: 'swap' })

interface NotePageProps {
  params: {
    slug: string
  }
}

export default function NotePage({ params }: NotePageProps) {
  const note = getNoteBySlug(params.slug)
  
  if (!note) {
    notFound()
  }

  return (
    <>
      <PlumBackground />
      <Navigation />
      <main className="min-h-screen pt-32">
        <div className="max-w-4xl mx-auto px-8">

          {/* Note Header */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <img
                src={note.coverImage}
                alt={note.title}
                className="w-48 h-64 object-cover rounded-lg shadow-lg"
              />
              <div className="flex-1">
                <h1 className={`text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4 ${lora.className}`}>
                  {note.title}
                </h1>
                <p className={`text-xl text-gray-600 dark:text-gray-400 mb-2 ${lora.className}`}>
                  by {note.author}
                </p>
                <p className={`text-lg text-gray-500 dark:text-gray-500 mb-4 ${lora.className}`}>
                  Read: {note.date} • Rating: {note.rating}/10
                </p>
                <div className="flex gap-2 mb-6">
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                    {note.category}
                  </span>
                </div>
                <p className={`text-lg text-gray-700 dark:text-gray-300 leading-relaxed ${lora.className}`}>
                  {note.summary}
                </p>
              </div>
            </div>
          </div>

          {/* Note Content */}
          <div className={`prose prose-lg max-w-none dark:prose-invert ${lora.className}`}>
            <h2 className={`text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6 ${lora.className}`}>My Notes</h2>
            <div className={`space-y-6 text-gray-700 dark:text-gray-300 ${lora.className}`}>
              <p>
                This is where my detailed notes and thoughts about "{note.title}" would go. 
                I'm still working on organizing and sharing my thoughts on this book.
              </p>
              <p>
                My notes typically include:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Key concepts that made me stop and think</li>
                <li>Questions I had while reading</li>
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

// Generate static params for all notes
export async function generateStaticParams() {
  const notes = getAllNotes()
  
  return notes.map((note) => ({
    slug: note.slug,
  }))
}
