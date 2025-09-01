import Navigation from '@/components/Navigation'
import PlumBackground from '@/components/PlumBackground'

export default function ImpossiblePage() {
  return (
    <>
      <PlumBackground />
      <Navigation />
      <main className="min-h-screen pt-32">
        <div className="max-w-3xl mx-auto px-8">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center">Impossible Page</h1>
          
          <div className="space-y-8 text-lg md:text-xl text-gray-800 dark:text-gray-200 leading-relaxed max-w-2xl mx-auto">
            <p className="text-gray-700 dark:text-gray-300">
              Things that seem impossible but might not be. Ideas that push boundaries and challenge conventional thinking.
            </p>
            
            <div className="text-center">
              <p className="text-gray-600 dark:text-gray-400">
                This page explores ideas that seem impossible at first glance. Coming soon.
              </p>
            </div>
          </div>
        </div>
      </main>
      
      {/* Footer with last updated info */}
      <footer className="border-t border-gray-200 dark:border-gray-700 mt-20">
        <div className="max-w-3xl mx-auto px-8 py-8">
          <div className="text-center text-sm text-gray-500 dark:text-gray-400">
            <p>Last updated: August 31, 2024</p>
          </div>
        </div>
      </footer>
    </>
  )
}
