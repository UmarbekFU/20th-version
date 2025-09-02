import Navigation from '@/components/Navigation'
import PlumBackground from '@/components/PlumBackground'
import Link from 'next/link'

export default function EssaysPage() {
  return (
    <>
      <PlumBackground />
      <Navigation />
      <main className="min-h-screen pt-32">
        <div className="max-w-3xl mx-auto px-8">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center">Essays</h1>
          
          <div className="space-y-8 text-lg md:text-xl text-gray-800 dark:text-gray-200 leading-relaxed max-w-2xl mx-auto">
            <p className="text-gray-700 dark:text-gray-300">
              I write essays when I try to explain something to myself. These are my attempts to understand ideas, 
              concepts, and the world around me through writing.
            </p>
          </div>

                  {/* Coming Soon */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            Essays coming soon. I'm working on ideas about systems thinking, 
            creativity, and the intersection of technology and human experience.
          </p>
        </div>
        </div>
      </main>
    </>
  )
}
