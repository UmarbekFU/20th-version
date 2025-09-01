import Navigation from '@/components/Navigation'
import PlumBackground from '@/components/PlumBackground'

export default function ContactPage() {
  return (
    <>
      <PlumBackground />
      <Navigation />
      <main className="min-h-screen pt-32">
        <div className="max-w-3xl mx-auto px-8">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center">Contact</h1>
          
          <div className="space-y-8 text-lg md:text-xl text-gray-800 dark:text-gray-200 leading-relaxed max-w-2xl mx-auto">
            <p className="text-gray-700 dark:text-gray-300">
              I love meeting new people, and I reply to every email. Say hello! I'm always open to conversations, 
              collaborations, and coffee meetings in Tashkent.
            </p>
            
            <div className="text-center">
              <p className="text-gray-600 dark:text-gray-400">
                Get in touch with me. I'm always open to conversations, collaborations, and coffee meetings in Tashkent. Coming soon.
              </p>
            </div>
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
