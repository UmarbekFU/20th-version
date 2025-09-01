import Navigation from '@/components/Navigation'
import PlumBackground from '@/components/PlumBackground'

export default function UsesPage() {
  return (
    <>
      <PlumBackground />
      <Navigation />
      <main className="min-h-screen pt-32">
        <div className="max-w-3xl mx-auto px-8">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center">Uses</h1>
          
          <div className="space-y-8 text-lg md:text-xl text-gray-800 dark:text-gray-200 leading-relaxed max-w-2xl mx-auto">
            <p className="text-gray-700 dark:text-gray-300">
              A complete list of my setup: hardware, software, apps, daily routines, and tools I use and recommend.
            </p>
          </div>

          {/* Uses Content */}
          <div className="mt-16 space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">Hardware</h2>
              <div className="space-y-4">
                <p className="text-gray-600 dark:text-gray-400">
                  My computer setup, phone, and other physical tools. I prefer simple, reliable 
                  hardware that gets out of the way and lets me focus on what matters.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">Software</h2>
              <div className="space-y-4">
                <p className="text-gray-700 dark:text-gray-300">
                  Applications, tools, and services that make my work and life easier. I'm always 
                  experimenting with new tools, but I stick with what actually works.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">Daily Routines</h2>
              <div className="space-y-4">
                <p className="text-gray-700 dark:text-gray-300">
                  Habits, workflows, and processes that help me stay productive and creative. 
                  These are the routines that have stood the test of time.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">Coming Soon</h2>
              <div className="space-y-4">
                <p className="text-gray-600 dark:text-gray-400">
                  I'm documenting my complete setup and workflows. This will include everything 
                  from my development environment to my morning routine.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
