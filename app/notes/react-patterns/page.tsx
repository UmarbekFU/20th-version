import Navigation from '@/components/Navigation'
import PlumBackground from '@/components/PlumBackground'
import { Lora } from 'next/font/google'
import Link from 'next/link'

const lora = Lora({ subsets: ['latin'], display: 'swap' })

export default function ReactPatternsPage() {
  return (
    <>
      <PlumBackground />
      <Navigation />
      <main className="min-h-screen pt-32">
        <div className="max-w-4xl mx-auto px-8">
          <div className="mb-12">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-48 h-64 bg-gradient-to-br from-green-400 to-green-600 rounded-lg shadow-lg flex items-center justify-center">
                <span className="text-white text-2xl font-bold">R</span>
              </div>
              <div className="flex-1">
                <h1 className={`text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4 ${lora.className}`}>
                  Advanced React Patterns
                </h1>
                <p className={`text-xl text-gray-600 dark:text-gray-400 mb-2 ${lora.className}`}>
                  by Kent C. Dodds
                </p>
                <p className={`text-lg text-gray-500 dark:text-gray-500 mb-4 ${lora.className}`}>
                  Completed: 2024 • Rating: 9/10
                </p>
                <div className="flex gap-2 mb-6">
                  <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm">
                    course
                  </span>
                </div>
                <p className={`text-lg text-gray-700 dark:text-gray-300 leading-relaxed ${lora.className}`}>
                  An in-depth course covering advanced React patterns, performance optimization, and modern development practices.
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
