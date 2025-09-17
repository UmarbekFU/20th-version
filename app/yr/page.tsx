import Navigation from '@/components/Navigation'
import Link from 'next/link'

export default function YearReviewPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-32">
        <div className="max-w-3xl mx-auto px-8">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4 text-center">Year in Review</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 text-center">
            Annual reflections on what I've learned, built, and experienced.
          </p>
          
          <div className="space-y-6 max-w-2xl mx-auto">
            <Link 
              href="/yr/2025"
              className="group block"
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                2025
              </h2>
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}
