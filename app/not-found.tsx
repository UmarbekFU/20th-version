import Link from 'next/link'
import Navigation from '@/components/Navigation'

export default function NotFound() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-32 flex items-center justify-center">
        <div className="text-center max-w-2xl mx-auto px-8">
          <h1 className="text-6xl font-bold text-accent mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-text-primary mb-4">Page Not Found</h2>
          <p className="text-text-muted mb-8">
            The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
          </p>
          <div className="space-x-4">
            <Link 
              href="/" 
              className="inline-block px-6 py-3 bg-accent text-background rounded-lg hover:bg-accent-alt transition-colors font-medium"
            >
              Go Home
            </Link>
            <Link 
              href="/essays" 
              className="inline-block px-6 py-3 border border-hairline text-text-primary rounded-lg hover:border-accent hover:text-accent transition-colors"
            >
              Browse Essays
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}
