import Navigation from '@/components/Navigation'
import PlumBackground from '@/components/PlumBackground'
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
  // Simple hard-coded notes - no dependencies
  const notes: Record<string, any> = {
    'antifragile': {
      title: 'Antifragile',
      author: 'Nassim Nicholas Taleb',
      date: '2024',
      rating: 9,
      category: 'book',
      summary: 'Things that gain from disorder. Taleb\'s framework for systems that benefit from volatility and uncertainty.',
      color: 'from-orange-400 to-red-600',
      letter: 'A'
    },
    'thinking-fast-slow': {
      title: 'Thinking, Fast and Slow',
      author: 'Daniel Kahneman',
      date: '2024',
      rating: 10,
      category: 'book',
      summary: 'The definitive work on human decision-making. Kahneman\'s Nobel Prize-winning insights on cognitive biases.',
      color: 'from-red-400 to-red-600',
      letter: 'T'
    },
    'knowledge-project': {
      title: 'The Knowledge Project',
      author: 'Shane Parrish',
      date: '2024',
      rating: 9,
      category: 'podcast',
      summary: 'Conversations with the world\'s most interesting people about the ideas that shape their lives.',
      color: 'from-blue-400 to-blue-600',
      letter: 'K'
    },
    'react-patterns': {
      title: 'Advanced React Patterns',
      author: 'Kent C. Dodds',
      date: '2024',
      rating: 9,
      category: 'course',
      summary: 'An in-depth course covering advanced React patterns, performance optimization, and modern development practices.',
      color: 'from-green-400 to-green-600',
      letter: 'R'
    }
  }
  
  const note = notes[params.slug]
  
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
              <div className={`w-48 h-64 bg-gradient-to-br ${note.color} rounded-lg shadow-lg flex items-center justify-center`}>
                <span className="text-white text-2xl font-bold">{note.letter}</span>
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
                </p>
                <div className="flex gap-2 mb-6">
                  <span className={`px-3 py-1 ${
                    note.category === 'book' ? 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200' :
                    note.category === 'podcast' ? 'bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200' :
                    'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200'
                  } rounded-full text-sm`}>
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
              <p className="text-center text-lg italic text-gray-500 dark:text-gray-400">
                soon coming
              </p>
            </div>
          </div>

          {/* Back to Notes */}
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <Link
              href="/notes"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Notes
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}

