import Navigation from '@/components/Navigation'
import Link from 'next/link'
import { generateMetadata as genMeta } from '@/lib/metadata'

export const metadata = genMeta('/projects/this-website')

export default function ThisWebsiteProjectPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-32">
        <div className="max-w-3xl mx-auto px-8">
          {/* Project Header */}
          <header className="mb-20 text-center slide-enter">
            <div className="inline-flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-4">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <span>Active Project</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              This Website
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              My personal website built with Next.js and Tailwind CSS. A real place for my thoughts and projects.
            </p>
          </header>
          
          <div className="space-y-20 slide-enter-content">
            
            {/* Project Overview */}
            <section>
              <h2 className="text-2xl font-medium text-gray-700 dark:text-gray-300 mb-8 text-center">The Story</h2>
              <div className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p>
                  This is my personal website, designed to be a real place on the internet rather than just another portfolio. 
                  It's built with modern web technologies and focuses on content over flashy design.
                </p>
                <p>
                  I needed a place to share my thoughts, projects, and ideas. Most portfolio websites feel sterile and 
                  corporate - I wanted something that felt like a real person's space on the internet.
                </p>
                <p>
                  This website scratches my own itch: a place to write, share, and connect with people who think similarly.
                </p>
              </div>
            </section>
            
            {/* Tech Stack */}
            <section>
              <h2 className="text-2xl font-medium text-gray-700 dark:text-gray-300 mb-8 text-center">Tech Stack</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">Frontend</h3>
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                        <span className="text-gray-700 dark:text-gray-300">Next.js 14 (App Router)</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                        <span className="text-gray-700 dark:text-gray-300">TypeScript</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                        <span className="text-gray-700 dark:text-gray-300">Tailwind CSS</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">Features</h3>
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                        <span className="text-gray-700 dark:text-gray-300">Canvas Animation</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                        <span className="text-gray-700 dark:text-gray-300">Dark/Light Mode</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                        <span className="text-gray-700 dark:text-gray-300">Responsive Design</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">Components</h3>
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                        <span className="text-gray-700 dark:text-gray-300">Lucide React Icons</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                        <span className="text-gray-700 dark:text-gray-300">Custom Navigation</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                        <span className="text-gray-700 dark:text-gray-300">Search Functionality</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">Performance</h3>
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                        <span className="text-gray-700 dark:text-gray-300">SSR/SSG</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                        <span className="text-gray-700 dark:text-gray-300">Image Optimization</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                        <span className="text-gray-700 dark:text-gray-300">Fast Loading</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            
            {/* Design Philosophy */}
            <section>
              <h2 className="text-2xl font-medium text-gray-700 dark:text-gray-300 mb-8 text-center">Design Philosophy</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="p-6 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">Content First</h3>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                      The design serves the content, not the other way around. Clean typography, proper spacing, and minimal distractions.
                    </p>
                  </div>
                  
                  <div className="p-6 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">Performance</h3>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                      Fast loading times, optimized images, and efficient code. Built with LCP optimization in mind.
                    </p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="p-6 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">Accessibility</h3>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                      Proper semantic HTML, keyboard navigation, and screen reader support. Everyone should be able to use this website.
                    </p>
                  </div>
                  
                  <div className="p-6 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">Responsive</h3>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                      Works perfectly on all devices - mobile, tablet, and desktop. No compromises on any screen size.
                    </p>
                  </div>
                </div>
              </div>
            </section>
            
            {/* Key Features */}
            <section>
              <h2 className="text-2xl font-medium text-gray-700 dark:text-gray-300 mb-8 text-center">Key Features</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-blue-600 dark:text-blue-400 text-sm font-semibold">1</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Smart Navigation</h3>
                      <p className="text-gray-700 dark:text-gray-300 text-sm">
                        Clean navigation with "Go back" button, social media links, and search functionality. 
                        Keyboard shortcuts (⌘K) for power users.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-green-600 dark:text-green-400 text-sm font-semibold">2</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Rich Content</h3>
                      <p className="text-gray-700 dark:text-gray-300 text-sm">
                        22 different content pages covering essays, projects, notes, and more. Each page follows 
                        the same clean design principles.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-purple-600 dark:text-purple-400 text-sm font-semibold">3</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Interactive Elements</h3>
                      <p className="text-gray-700 dark:text-gray-300 text-sm">
                        Hover effects, animated text changes, and the random page redirector ("Click Me" button). 
                        Adds playfulness without being distracting.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-orange-600 dark:text-orange-400 text-sm font-semibold">4</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Theme Support</h3>
                      <p className="text-gray-700 dark:text-gray-300 text-sm">
                        Automatic light/dark mode detection based on system preferences. Consistent color scheme 
                        across all themes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            
            {/* Project Status */}
            <section>
              <h2 className="text-2xl font-medium text-gray-700 dark:text-gray-300 mb-8 text-center">Project Status</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-green-600 dark:text-green-400 text-lg">✓</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Core Structure</h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    All 22 pages, navigation system, responsive design, and theme support completed.
                  </p>
                </div>
                
                <div className="text-center p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                  <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-yellow-600 dark:text-yellow-400 text-lg">⚡</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">In Progress</h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Adding content to individual pages, writing essays, and refining user experience.
                  </p>
                </div>
                
                <div className="text-center p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-blue-600 dark:text-blue-400 text-lg">→</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Next Steps</h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Blog functionality, content management system, and performance optimizations.
                  </p>
                </div>
              </div>
            </section>
            
            {/* Lessons Learned */}
            <section>
              <h2 className="text-2xl font-medium text-gray-700 dark:text-gray-300 mb-8 text-center">Key Insights</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="border-l-4 border-blue-500 pl-6">
                    <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Start Simple</h3>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                      Begin with a basic structure and add complexity gradually. It's easier to add features than to remove them.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-green-500 pl-6">
                    <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Design System</h3>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                      Having consistent spacing, typography, and colors from the start makes everything look cohesive and professional.
                    </p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="border-l-4 border-purple-500 pl-6">
                    <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Performance Matters</h3>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                      Even a simple website benefits from optimization. Fast loading times improve user experience significantly.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-orange-500 pl-6">
                    <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Content First</h3>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                      Design should serve the content, not dominate it. Users come for the information, not the fancy animations.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-700 mt-20">
        <div className="max-w-3xl mx-auto px-8 py-8">
          <div className="text-center text-sm text-gray-500 dark:text-gray-400">
            Last updated: September 2024
          </div>
        </div>
      </footer>
    </>
  )
}
