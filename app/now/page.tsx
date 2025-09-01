import Navigation from '@/components/Navigation'
import PlumBackground from '@/components/PlumBackground'

export default function NowPage() {
  return (
    <>
      <PlumBackground />
      <Navigation />
      <main className="min-h-screen pt-32">
        <div className="max-w-3xl mx-auto px-8">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center">Now</h1>
          
          <div className="space-y-12 text-lg md:text-xl text-gray-800 dark:text-gray-200 leading-relaxed max-w-2xl mx-auto">
            
            {/* What I'm doing now */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6 text-center">What I'm doing now</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">What I'm reading</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Systems thinking and complexity theory. Books that challenge my assumptions about how the world works.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">What I'm writing</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    This website and essays about ideas outside of code. Trying to explain things to myself.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">What I'm building</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    This website. Trying to make it feel like a real place, not another portfolio.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">A new thing</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Exploring how to write about ideas outside of programming. Wondering why more programmers don't do this.
                  </p>
                </div>
              </div>
            </section>
            
            {/* What I'm not doing */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6 text-center">What I'm not doing</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">Social media scrolling</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Avoiding endless feeds. Preferring deep work and meaningful conversations.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">Building for others first</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Focusing on solving my own problems first. If it helps others, that's a bonus.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">Following trends</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Avoiding the latest shiny thing. Sticking to what actually works for me.
                  </p>
                </div>
              </div>
            </section>
            
            {/* Always looking for */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6 text-center">Always looking for</h2>
              <p className="text-gray-700 dark:text-gray-300">
                People working on interesting problems. The kind where you can't Google the answer. 
                If you're around Tashkent, let's have coffee or work together.
              </p>
            </section>
          </div>
        </div>
      </main>
      
      {/* Footer with last updated info */}
      <footer className="border-t border-gray-200 dark:border-gray-700 mt-20">
        <div className="max-w-3xl mx-auto px-8 py-8">
          <div className="text-center text-sm text-gray-500 dark:text-gray-400">
            <p>Last updated: August 31, 2024</p>
            <p>Location: Tashkent, Uzbekistan</p>
          </div>
        </div>
      </footer>
    </>
  )
}
