import Navigation from '@/components/Navigation'
import PlumBackground from '@/components/PlumBackground'
import Link from 'next/link'

export default function ProjectsPage() {
  return (
    <>
      <PlumBackground />
      <Navigation />
      <main className="min-h-screen pt-32">
        <div className="max-w-3xl mx-auto px-8">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4 text-center">Projects</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 text-center">
            Things I've built and broken.
          </p>

          {/* Projects List */}
          <div className="mt-16 space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">Current Projects</h2>
              <div className="space-y-4">
                <div>
                  <Link 
                    href="/projects/this-website" 
                    className="text-lg text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    This Website
                  </Link>
                  <p className="text-gray-600 dark:text-gray-400 mt-2">
                    My personal website built with Next.js and Tailwind CSS. A place to share thoughts, 
                    projects, and ideas without the constraints of social media.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">Coming Soon</h2>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-600 dark:text-gray-400">
                    More projects are in development. I'm working on tools and applications that solve 
                    real problems I encounter in my daily work and life.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">My Approach</h2>
              <div className="space-y-4">
                <p className="text-gray-700 dark:text-gray-300">
                  I build things to solve my own problems first. If they help others too, that's a bonus. 
                  I prefer simple, focused solutions over complex, feature-rich applications.
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  Most of my projects start as experiments or prototypes. I iterate quickly, learn from 
                  failures, and only polish what actually works. This approach has taught me more than 
                  any amount of planning ever could.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
