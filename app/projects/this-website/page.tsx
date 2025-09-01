import Navigation from '@/components/Navigation'
import PlumBackground from '@/components/PlumBackground'
import Link from 'next/link'

export default function ThisWebsiteProjectPage() {
  return (
    <>
      <PlumBackground />
      <Navigation />
      <main className="min-h-screen pt-32">
        <div className="max-w-3xl mx-auto px-8">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4 text-center">This Website</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 text-center">My personal website project</p>
          
          <div className="space-y-8 text-lg md:text-xl text-gray-800 dark:text-gray-200 leading-relaxed max-w-2xl mx-auto">
            
            {/* Project Overview */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">Project Overview</h2>
              <p className="text-gray-700 dark:text-gray-300">
                This is my personal website, designed to be a real place on the internet rather than just another portfolio. 
                It's built with modern web technologies and focuses on content over flashy design.
              </p>
            </section>
            
            {/* Why I Built This */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">Why I Built This</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                I needed a place to share my thoughts, projects, and ideas. Most portfolio websites feel sterile and 
                corporate - I wanted something that felt like a real person's space on the internet.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                This website scratches my own itch: a place to write, share, and connect with people who think similarly.
              </p>
            </section>
            
            {/* Technical Details */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">Technical Details</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">Frontend Framework</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Built with Next.js 14 (App Router) for optimal performance and developer experience. 
                    Uses TypeScript for type safety and better code quality.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">Styling</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Tailwind CSS for utility-first styling. Custom color palette and design system that supports 
                    both light and dark modes automatically.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">Background Animation</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Custom canvas-based "Plum" background animation inspired by antfu.me. Creates a sophisticated, 
                    animated tree-like pattern that adds visual interest without being distracting.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">Icons & Components</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Lucide React for clean, consistent icons. Custom components for navigation, backgrounds, 
                    and interactive elements.
                  </p>
                </div>
              </div>
            </section>
            
            {/* Design Philosophy */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">Design Philosophy</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                <strong>Content First:</strong> The design serves the content, not the other way around. 
                Clean typography, proper spacing, and minimal distractions.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                <strong>Performance:</strong> Fast loading times, optimized images, and efficient code. 
                Built with LCP (Largest Contentful Paint) optimization in mind.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                <strong>Accessibility:</strong> Proper semantic HTML, keyboard navigation, and screen reader support. 
                Everyone should be able to use this website.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Responsive:</strong> Works perfectly on all devices - mobile, tablet, and desktop.
              </p>
            </section>
            
            {/* Features */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">Key Features</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">Navigation</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Clean navigation with "Go back" button, social media links, and search functionality. 
                    Keyboard shortcuts (⌘K for search) for power users.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">Content Pages</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    22 different content pages covering essays, projects, notes, and more. Each page follows 
                    the same clean design principles.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">Interactive Elements</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Hover effects, animated text changes, and the random page redirector ("Click Me" button). 
                    Adds playfulness without being distracting.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">Theme Support</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Automatic light/dark mode detection based on system preferences. Consistent color scheme 
                    across all themes.
                  </p>
                </div>
              </div>
            </section>
            
            {/* Current Status */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">Current Status</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                <strong>Phase:</strong> Active development and content creation
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                <strong>What's Done:</strong> Core website structure, all 22 pages, navigation system, 
                background animation, responsive design, and theme support.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                <strong>In Progress:</strong> Adding content to individual pages, writing essays, 
                and refining the user experience.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Next Steps:</strong> Blog functionality, content management system, and 
                performance optimizations.
              </p>
            </section>
            
            {/* Lessons Learned */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">Lessons Learned</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                <strong>Start Simple:</strong> Begin with a basic structure and add complexity gradually. 
                It's easier to add features than to remove them.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                <strong>Design System:</strong> Having consistent spacing, typography, and colors from the start 
                makes everything look cohesive and professional.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                <strong>Performance Matters:</strong> Even a simple website benefits from optimization. 
                Fast loading times improve user experience significantly.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Content First:</strong> Design should serve the content, not dominate it. 
                Users come for the information, not the fancy animations.
              </p>
            </section>
            
            {/* Back to Projects */}
            <section className="text-center pt-8">
              <Link 
                href="/projects" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 dark:bg-blue-500 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
              >
                ← Back to Projects
              </Link>
            </section>
          </div>
        </div>
      </main>
      
      {/* Footer with last updated info */}
      <footer className="border-t border-gray-200 dark:border-gray-700 mt-20">
        <div className="max-w-3xl mx-auto px-8 py-8">
          <div className="text-center text-sm text-gray-500 dark:text-gray-400">
            <p>Last updated: September 2, 2025</p>
          </div>
        </div>
      </footer>
    </>
  )
}
