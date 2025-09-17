import Navigation from '@/components/Navigation'
import { Lora } from 'next/font/google'
import { noteMetadata } from './metadata'

const lora = Lora({ subsets: ['latin'], display: 'swap' })

export default function ThinkingFastSlowPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-32">
        <div className="max-w-4xl mx-auto px-8">
          <div className="mb-12">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-48 h-64 rounded-lg shadow-lg overflow-hidden">
                <img
                  src={noteMetadata.coverImage}
                  alt={noteMetadata.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <h1 className={`text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4 ${lora.className}`}>
                  {noteMetadata.title}
                </h1>
                <p className={`text-xl text-gray-600 dark:text-gray-400 mb-2 ${lora.className}`}>
                  by {noteMetadata.author}
                </p>
                <p className={`text-lg text-gray-500 dark:text-gray-500 mb-4 ${lora.className}`}>
                  Read: {noteMetadata.date} • Rating: {noteMetadata.rating}/10
                </p>
                <div className="flex gap-2 mb-6">
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                    📚 {noteMetadata.category}
                  </span>
                </div>
                <p className={`text-lg text-gray-700 dark:text-gray-300 leading-relaxed ${lora.className}`}>
                  {noteMetadata.summary}
                </p>
              </div>
            </div>
          </div>

          <div className={`prose prose-lg max-w-none dark:prose-invert ${lora.className}`}>
            <h2 className={`text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6 ${lora.className}`}>My Notes</h2>
            <div className={`space-y-6 text-gray-700 dark:text-gray-300 ${lora.className}`}>
              <p className="text-center text-lg italic text-gray-500 dark:text-gray-400">
                soon coming
              </p>
            </div>
          </div>

        </div>
      </main>
    </>
  )
}
