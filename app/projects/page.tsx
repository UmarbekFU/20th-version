import Navigation from '@/components/Navigation'
import Link from 'next/link'
import { generateMetadata as genMeta } from '@/lib/metadata'

export const metadata = genMeta('/projects')

export default function ProjectsPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-32">
        <div className="max-w-3xl mx-auto px-8">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-gray-900 dark:text-gray-100 mb-8 leading-tight text-center slide-enter font-sans">Projects</h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-16 text-center slide-enter font-sans">
            Things I've built and broken.
          </p>

          {/* Projects List */}
          <div className="space-y-16 slide-enter-content">
            {/* My Approach */}
            <section>
              <h2 className="text-2xl font-medium text-gray-700 dark:text-gray-300 mb-8 text-center font-sans">My Approach</h2>
              <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto font-sans">
                <p>
                  I build things to solve my own problems first. If they help others too, that's a bonus.
                </p>
                
                <p>
                  I prefer simple, focused solutions over complex, feature-rich applications. This philosophy 
                  keeps me grounded and ensures that what I create actually serves a purpose.
                </p>
                
                <p>
                  Most of my projects start as experiments or prototypes. I iterate quickly, learn from 
                  failures, and only polish what actually works.
                </p>
                
                <p>
                  This approach has taught me more than any amount of planning ever could. There's something 
                  powerful about building, breaking, and rebuilding that you can't get from theory alone.
                </p>
              </div>
            </section>

            {/* Current Projects */}
            <section>
              <h2 className="text-2xl font-medium text-gray-700 dark:text-gray-300 mb-8 text-center font-sans">Current Projects</h2>
              <div className="space-y-8">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <Link 
                      href="/projects/tw" 
                      className="text-2xl font-semibold text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-sans"
                    >
                      This Website
                    </Link>
                    <span className="text-sm text-green-600 dark:text-green-400 font-medium font-sans">
                      Active
                    </span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 text-lg font-sans">
                    My personal website built with Next.js and Tailwind CSS. A place to share thoughts, 
                    projects, and ideas without the constraints of social media.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-2">
                    <span className="text-sm text-gray-500 dark:text-gray-400 font-sans">
                      Next.js
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400 font-sans">•</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400 font-sans">
                      TypeScript
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400 font-sans">•</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400 font-sans">
                      Tailwind CSS
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400 font-sans">•</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400 font-sans">
                      Canvas Animation
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 font-sans">
                    Last updated: September 2024
                  </p>
                </div>
              </div>
            </section>

            {/* Archive */}
            <section>
              <h2 className="text-2xl font-medium text-gray-700 dark:text-gray-300 mb-8 text-center font-sans">Archive</h2>
              <div className="text-center">
                <p className="text-gray-500 dark:text-gray-400 italic font-sans">
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
