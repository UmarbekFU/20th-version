import Navigation from '@/components/Navigation'
import PlumBackground from '@/components/PlumBackground'
import { Lora } from 'next/font/google'
import Link from 'next/link'

const lora = Lora({ subsets: ['latin'], display: 'swap' })

export default function NotesPage() {
  return (
    <>
      <PlumBackground />
      <Navigation />
      <main className="min-h-screen pt-32">
        <div className="max-w-4xl mx-auto px-8">
          <h1 className={`text-5xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center ${lora.className}`}>
            Notes
          </h1>
          
          <div className={`space-y-16 text-lg text-gray-800 dark:text-gray-200 leading-relaxed max-w-2xl mx-auto ${lora.className}`}>
            
            {/* Books Section */}
            <section>
              <h2 className={`text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-8 ${lora.className}`}>
                Books
              </h2>
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className={`text-xl font-medium text-gray-900 dark:text-gray-100 mb-2 ${lora.className}`}>
                    <Link href="/notes/antifragile" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      Antifragile
                    </Link>
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-2">by Nassim Nicholas Taleb</p>
                  <p className="text-gray-700 dark:text-gray-300">
                    Things that gain from disorder. Taleb's framework for systems that benefit from volatility and uncertainty.
                  </p>
                </div>
                
                <div className="border-l-4 border-red-500 pl-6">
                  <h3 className={`text-xl font-medium text-gray-900 dark:text-gray-100 mb-2 ${lora.className}`}>
                    <Link href="/notes/thinking-fast-slow" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      Thinking, Fast and Slow
                    </Link>
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-2">by Daniel Kahneman</p>
                  <p className="text-gray-700 dark:text-gray-300">
                    The definitive work on human decision-making. Kahneman's Nobel Prize-winning insights on cognitive biases.
                  </p>
                </div>
              </div>
            </section>

            {/* Podcasts Section */}
            <section>
              <h2 className={`text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-8 ${lora.className}`}>
                Podcasts
              </h2>
              <div className="space-y-6">
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className={`text-xl font-medium text-gray-900 dark:text-gray-100 mb-2 ${lora.className}`}>
                    <Link href="/notes/knowledge-project" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      The Knowledge Project
                    </Link>
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-2">by Shane Parrish</p>
                  <p className="text-gray-700 dark:text-gray-300">
                    Conversations with the world's most interesting people about the ideas that shape their lives.
                  </p>
                </div>
              </div>
            </section>

            {/* Courses Section */}
            <section>
              <h2 className={`text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-8 ${lora.className}`}>
                Courses
              </h2>
              <div className="space-y-6">
                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className={`text-xl font-medium text-gray-900 dark:text-gray-100 mb-2 ${lora.className}`}>
                    <Link href="/notes/react-patterns" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      Advanced React Patterns
                    </Link>
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-2">by Kent C. Dodds</p>
                  <p className="text-gray-700 dark:text-gray-300">
                    An in-depth course covering advanced React patterns, performance optimization, and modern development practices.
                  </p>
                </div>
              </div>
            </section>

            {/* Coming Soon */}
            <section className="text-center py-12">
              <p className={`text-gray-500 dark:text-gray-400 italic ${lora.className}`}>
                More notes coming soon...
              </p>
            </section>
          </div>
        </div>
      </main>
    </>
  )
}
