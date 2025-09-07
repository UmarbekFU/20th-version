import Navigation from '@/components/Navigation'
import PlumBackground from '@/components/PlumBackground'
import Link from 'next/link'

export default function EssaysPage() {
  return (
    <>
      <PlumBackground />
      <Navigation />
      <main className="min-h-screen pt-32">
        <div className="max-w-3xl mx-auto px-8">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center fade-in">Essays</h1>
          
          <div className="prose prose-lg max-w-none fade-in">
            <p className="text-gray-700 dark:text-gray-300 mb-8">
              I write essays when I try to explain something to myself. These are my attempts to understand ideas, 
              concepts, and the world around me through writing.
            </p>

            {/* Sample Essays */}
            <div className="space-y-8">
              <article className="border-b border-gray-200 dark:border-gray-700 pb-8">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                  <Link href="/essays/just-do-more" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    Just Do More
                  </Link>
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  A reflection on the power of consistent action over perfect planning. Sometimes the best way to learn 
                  is to simply start doing and figure it out along the way.
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                  <span>December 2024</span>
                  <span>•</span>
                  <span>5 min read</span>
                </div>
              </article>

              <article className="border-b border-gray-200 dark:border-gray-700 pb-8">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                  <Link href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    The Art of Building in Public
                  </Link>
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Why sharing your process, failures, and learnings publicly can accelerate your growth as a creator 
                  and help others on similar journeys.
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                  <span>Coming Soon</span>
                  <span>•</span>
                  <span>~8 min read</span>
                </div>
              </article>

              <article className="border-b border-gray-200 dark:border-gray-700 pb-8">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                  <Link href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    Systems Thinking for Developers
                  </Link>
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  How understanding systems can make you a better programmer, designer, and problem-solver. 
                  The mental models that changed how I approach complex problems.
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                  <span>Coming Soon</span>
                  <span>•</span>
                  <span>~12 min read</span>
                </div>
              </article>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
