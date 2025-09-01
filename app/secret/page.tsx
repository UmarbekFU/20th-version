import Navigation from '@/components/Navigation'
import PlumBackground from '@/components/PlumBackground'

export default function SecretPage() {
  return (
    <>
      <PlumBackground />
      <Navigation />
      <main className="min-h-screen pt-32">
        <div className="max-w-3xl mx-auto px-8">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center">Secret</h1>
          
          <div className="space-y-8 text-lg md:text-xl text-gray-800 dark:text-gray-200 leading-relaxed max-w-2xl mx-auto">
            <p className="text-gray-700 dark:text-gray-300">
              A page for things that don't fit anywhere else. Sometimes the best ideas are hidden in plain sight.
            </p>
          </div>

          {/* Secret Content */}
          <div className="mt-16 space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">What's Here</h2>
              <div className="space-y-4">
                <p className="text-gray-700 dark:text-gray-300">
                  This is where I put things that are too experimental, too personal, or too weird 
                  for the main sections of my website.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">Why Keep Secrets?</h2>
              <div className="space-y-4">
                <p className="text-gray-700 dark:text-gray-300">
                  Not everything needs to be public. Some ideas need time to develop, some thoughts 
                  are too raw to share, and some experiments are better kept quiet until they're ready.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">Coming Soon</h2>
              <div className="space-y-4">
                <p className="text-gray-600 dark:text-gray-400">
                  I'm working on some secret projects and ideas. When they're ready to see the light, 
                  they'll appear here first before moving to their proper sections.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
