import Navigation from '@/components/Navigation'
import PlumBackground from '@/components/PlumBackground'
import { notFound } from 'next/navigation'
import { Lora } from 'next/font/google'
import { getNoteBySlug, getCategoryIcon } from '@/lib/notes-discovery'

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
              <div className="w-48 h-64 rounded-lg shadow-lg overflow-hidden">
                <img
                  src={note.coverImage}
                  alt={note.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <h1 className={`text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4 ${lora.className}`}>
                  {note.title}
                </h1>
                <p className={`text-xl text-gray-600 dark:text-gray-400 mb-2 ${lora.className}`}>
                  by {note.author}
                </p>
                <p className={`text-lg text-gray-500 dark:text-gray-500 mb-4 ${lora.className}`}>
                  {note.category === 'book' ? 'Read' : note.category === 'podcast' ? 'Listened' : 'Completed'}: {note.date} • Rating: {note.rating}/10
                  {note.duration && ` • ${note.duration}`}
                </p>
                <div className="flex gap-2 mb-6">
                  <span className={`px-3 py-1 ${
                    note.category === 'book' ? 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200' :
                    note.category === 'podcast' ? 'bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200' :
                    'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200'
                  } rounded-full text-sm`}>
                    {getCategoryIcon(note.category)} {note.category}
                  </span>
                </div>
                <p className={`text-lg text-gray-700 dark:text-gray-300 leading-relaxed ${lora.className}`}>
                  {note.summary}
                </p>
                {note.url && (
                  <div className="mt-4">
                    <a
                      href={note.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
                    >
                      {note.category === 'podcast' ? 'Listen' : note.category === 'course' ? 'Take Course' : 'View'} →
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Note Content */}
          <div className={`prose prose-lg max-w-none dark:prose-invert ${lora.className}`}>
            <h2 className={`text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6 ${lora.className}`}>My Notes</h2>
            <div className={`space-y-8 text-gray-700 dark:text-gray-300 ${lora.className}`}>
              {note.content ? (
                <div className="space-y-6">
                  <p className="text-lg leading-relaxed">{note.content}</p>
                  
                  {note.keyInsights && note.keyInsights.length > 0 && (
                    <div>
                      <h3 className={`text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4 ${lora.className}`}>Key Insights</h3>
                      <ul className="space-y-2">
                        {note.keyInsights.map((insight, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-blue-500 mr-2">•</span>
                            <span>{insight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {note.quotes && note.quotes.length > 0 && (
                    <div>
                      <h3 className={`text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4 ${lora.className}`}>Notable Quotes</h3>
                      <div className="space-y-4">
                        {note.quotes.map((quote, index) => (
                          <blockquote key={index} className="border-l-4 border-blue-500 pl-4 italic text-gray-600 dark:text-gray-400">
                            "{quote}"
                          </blockquote>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {note.tags && note.tags.length > 0 && (
                    <div>
                      <h3 className={`text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4 ${lora.className}`}>Tags</h3>
                      <div className="flex flex-wrap gap-2">
                        {note.tags.map((tag, index) => (
                          <span key={index} className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm">
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <p className="text-center text-lg italic text-gray-500 dark:text-gray-400">
                  soon coming
                </p>
              )}
            </div>
          </div>

        </div>
      </main>
    </>
  )
}

