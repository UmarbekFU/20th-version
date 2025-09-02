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

                  {/* Essays Collection */}
        <div className="mt-16">
          <div className="space-y-8">
            <div className="group">
              <Link href="/essays/just-do-more" className="block">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-2">
                  Just do more
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Why business leads to technology, which leads to science. The 100x principle and the power of iteration over perfection.
                </p>
              </Link>
            </div>
          </div>
        </div>
        </div>
      </main>
    </>
  )
}
