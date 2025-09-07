import Navigation from '@/components/Navigation'
import PlumBackground from '@/components/PlumBackground'
import { generateMetadata as genMeta } from '@/lib/metadata'

export const metadata = genMeta('/now')

export default function NowPage() {
  return (
    <>
      <PlumBackground />
      <Navigation />
      <main className="min-h-screen pt-32">
        <div className="max-w-3xl mx-auto px-8">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center slide-enter">Now</h1>
          
          <div className="space-y-16 text-lg md:text-xl text-gray-800 dark:text-gray-200 leading-relaxed max-w-2xl mx-auto slide-enter-content">
            
            {/* What I'm doing now */}
            <section>
              <h2 className="text-2xl font-medium text-gray-700 dark:text-gray-300 mb-8 text-center">What I'm doing now</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                    <a href="/notes" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">What I'm reading</a>
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    The Count of Monte Cristo.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                    <a href="/essays" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">What I'm writing</a>
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    This website and essays about ideas outside of code. Trying to explain things to myself.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                    <a href="/projects" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">What I'm building</a>
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    This website. Trying to make it feel like a real place, not another portfolio.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">A new thing</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Exploring how to write about ideas outside of programming. Wondering why more programmers don't do this.
                  </p>
                </div>
              </div>
            </section>
            
            {/* What I'm not doing */}
            <section>
              <h2 className="text-2xl font-medium text-gray-700 dark:text-gray-300 mb-8 text-center">What I'm not doing</h2>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Building for others first</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Focusing on solving my own problems first. If it helps others, that's a bonus.
                </p>
              </div>
            </section>
            
            {/* Always looking for */}
            <section>
              <h2 className="text-2xl font-medium text-gray-700 dark:text-gray-300 mb-8 text-center">Always looking for</h2>
              <p className="text-gray-700 dark:text-gray-300 text-center">
                People working on interesting problems. The kind where you can't Google the answer. 
                If you're around Tashkent, let's have coffee or work together. I love meeting new people, and I reply to every email, so <a href="/contact" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">say hello</a>.
              </p>
            </section>
          </div>
        </div>
      </main>
      
      {/* Footer with last updated info */}
      <footer className="border-t border-gray-200 dark:border-gray-700 mt-20">
        <div className="max-w-3xl mx-auto px-8 py-8">
          <div className="text-center text-sm text-gray-500 dark:text-gray-400">
            <p>Last updated: September 2, 2025</p>
            <p>Location: Tashkent, Uzbekistan</p>
          </div>
        </div>
      </footer>
    </>
  )
}
