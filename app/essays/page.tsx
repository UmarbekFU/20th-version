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
          <h1 className="text-5xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center fade-in">Essays</h1>
          
          <div className="prose prose-lg max-w-none fade-in">
            <p className="text-gray-700 dark:text-gray-300 mb-8">
              I write essays when I try to explain something to myself. These are my attempts to understand ideas, 
              concepts, and the world around me through writing.
            </p>

            {/* Empty State */}
            <div className="text-center py-16">
              <p className="text-gray-500 dark:text-gray-400 text-lg">
                No essays yet. Check back soon for my thoughts and reflections.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
