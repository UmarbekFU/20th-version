import Navigation from '@/components/Navigation'
import PlumBackground from '@/components/PlumBackground'
import Link from 'next/link'

export default function MorePage() {
  return (
    <>
      <PlumBackground />
      <Navigation />
      <main className="min-h-screen pt-32">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6 sm:mb-8 text-center">More</h1>
          
          <div className="text-center mb-16">
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              Additional pages and sections that might interest you.
            </p>
          </div>

          {/* More Links Grid */}
          <div className="mt-16">
            <div className="space-y-12">
              
              {/* Current Activities */}
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Current</h2>
                <div className="space-y-3">
                  <div>
                    <Link href="/now" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors text-lg">
                      Now
                    </Link>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      What I'm doing and not doing right now
                    </p>
                  </div>
                </div>
              </div>

              {/* Ideas & Thoughts */}
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Ideas & Thoughts</h2>
                <div className="space-y-3">
                  <div>
                    <Link href="/ai" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors text-lg">
                      Atomic Ideas
                    </Link>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      Half-formed thoughts I'm working through
                    </p>
                  </div>
                  <div>
                    <Link href="/questions" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors text-lg">
                      Questions
                    </Link>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      Questions I'm asking myself
                    </p>
                  </div>
                  <div>
                    <Link href="/naq" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors text-lg">
                      NAQ
                    </Link>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      Never Asked Questions
                    </p>
                  </div>
                </div>
              </div>

              {/* Collections */}
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Collections</h2>
                <div className="space-y-3">
                  <div>
                    <Link href="/list" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors text-lg">
                      List
                    </Link>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      Things I consume, own, and do
                    </p>
                  </div>
                  <div>
                    <Link href="/scrapbook" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors text-lg">
                      Scrapbook
                    </Link>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      Screenshots, snippets, and unfinished thoughts
                    </p>
                  </div>
                  <div>
                    <Link href="/photos" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors text-lg">
                      Photos
                    </Link>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      Visual moments that caught my attention
                    </p>
                  </div>
                  <div>
                    <Link href="/tweets" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors text-lg">
                      Tweets
                    </Link>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      My thoughts in 280 characters or less
                    </p>
                  </div>
                  <div>
                    <Link href="/notes" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors text-lg">
                      Notes
                    </Link>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      Short pieces that made me pause from books, podcasts, and courses
                    </p>
                  </div>
                </div>
              </div>

              {/* Tools & Setup */}
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Tools & Setup</h2>
                <div className="space-y-3">
                  <div>
                    <Link href="/uses" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors text-lg">
                      Uses
                    </Link>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      My complete setup and tools
                    </p>
                  </div>
                </div>
              </div>

              {/* Life & Time */}
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Life & Time</h2>
                <div className="space-y-3">
                  <div>
                    <Link href="/lc" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors text-lg">
                      Life Calendar
                    </Link>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      My life visualized week by week
                    </p>
                  </div>
                  <div>
                    <Link href="/yr" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors text-lg">
                      Year in Review
                    </Link>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      Annual reflection on what I've learned
                    </p>
                  </div>
                </div>
              </div>

              {/* Fun & Miscellaneous */}
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Fun & Misc</h2>
                <div className="space-y-3">
                  <div>
                    <Link href="/impossible" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors text-lg">
                      Impossible Page
                    </Link>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      Things that seem impossible but might not be
                    </p>
                  </div>
                  <div>
                    <Link href="/secret" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors text-lg">
                      Secret
                    </Link>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      Hidden things for those who discover them
                    </p>
                  </div>
                  <div>
                    <Link href="/api/random" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors text-lg">
                      Click Me
                    </Link>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      Go to a random page on this website
                    </p>
                  </div>
                  <div>
                    <Link href="/disclaimer" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors text-lg">
                      Disclaimer
                    </Link>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      Important information about this website
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </main>
    </>
  )
}
