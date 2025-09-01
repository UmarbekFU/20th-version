import Navigation from '@/components/Navigation'
import PlumBackground from '@/components/PlumBackground'

export default function YearReview2025Page() {
  return (
    <>
      <PlumBackground />
      <Navigation />
      <main className="min-h-screen pt-32">
        <div className="max-w-3xl mx-auto px-8">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4 text-center">2025</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 text-center">
            Year in Review
          </p>
          
          <div className="space-y-8 text-lg md:text-xl text-gray-800 dark:text-gray-200 leading-relaxed max-w-2xl mx-auto">
            <p className="text-gray-700 dark:text-gray-300">
              This year's review will be published at the end of 2025.
            </p>
          </div>
        </div>
      </main>
    </>
  )
}
