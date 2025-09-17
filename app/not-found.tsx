import Link from 'next/link'
import Navigation from '@/components/Navigation'
export default function NotFound() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-32 flex items-center justify-center">
        <div className="text-center max-w-2xl mx-auto px-8">
          <h1 className="text-6xl font-bold text-blue-600 dark:text-blue-400 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Page Not Found</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
          </p>
          <div className="space-x-4">
            <Link 
              href="/" 
              className="inline-block px-6 py-3 bg-blue-600 dark:bg-blue-500 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors font-medium"
            >
              Go Home
            </Link>
            <Link 
              href="/essays" 
              className="inline-block px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 rounded-lg hover:border-blue-400 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Browse Essays
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}
