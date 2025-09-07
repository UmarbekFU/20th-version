import Navigation from '@/components/Navigation'
import PlumBackground from '@/components/PlumBackground'
import Link from 'next/link'
import { generateMetadata as genMeta } from '@/lib/metadata'

export const metadata = genMeta('/projects')

export default function ProjectsPage() {
  return (
    <>
      <PlumBackground />
      <Navigation />
      <main className="min-h-screen pt-32">
        <div className="max-w-3xl mx-auto px-8">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4 text-center slide-enter">Projects</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-16 text-center slide-enter">
            Things I've built and broken.
          </p>

          {/* Projects List */}
          <div className="space-y-16 slide-enter-content">
            {/* My Approach */}
            <section>
              <h2 className="text-2xl font-medium text-gray-700 dark:text-gray-300 mb-8 text-center">My Approach</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  I build things to solve my own problems first. If they help others too, that's a bonus. 
                  I prefer simple, focused solutions over complex, feature-rich applications. This philosophy 
                  keeps me grounded and ensures that what I create actually serves a purpose.
                </p>
                
                <p className="text-gray-700 dark:text-gray-300">
                  Most of my projects start as experiments or prototypes. I iterate quickly, learn from 
                  failures, and only polish what actually works. This approach has taught me more than 
                  any amount of planning ever could. There's something powerful about building, breaking, 
                  and rebuilding that you can't get from theory alone.
                </p>
              </div>
            </section>

            {/* Current Projects */}
            <section>
              <h2 className="text-2xl font-medium text-gray-700 dark:text-gray-300 mb-8 text-center">Current Projects</h2>
              <div className="space-y-8">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <Link 
                      href="/projects/tw" 
                      className="text-2xl font-semibold text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      This Website
                    </Link>
                    <span className="text-sm text-green-600 dark:text-green-400 font-medium">
                      Active
                    </span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 text-lg">
                    My personal website built with Next.js and Tailwind CSS. A place to share thoughts, 
                    projects, and ideas without the constraints of social media.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-2">
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      Next.js
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">•</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      TypeScript
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">•</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      Tailwind CSS
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">•</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      Canvas Animation
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Last updated: September 2024
                  </p>
                </div>
              </div>
            </section>

            {/* Archive */}
            <section>
              <h2 className="text-2xl font-medium text-gray-700 dark:text-gray-300 mb-8 text-center">Archive</h2>
              <div className="text-center">
                <p className="text-gray-500 dark:text-gray-400 italic">
                  No archived projects yet. Check back later for completed projects.
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  )
}
