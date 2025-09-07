import Navigation from '@/components/Navigation'
import PlumBackground from '@/components/PlumBackground'
import Link from 'next/link'

export default function SimpleVsEasyPage() {
  return (
    <>
      <PlumBackground />
      <Navigation />
      <main className="min-h-screen pt-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link 
              href="/ai" 
              className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors text-sm font-medium"
            >
              ← Back to Atomic Ideas
            </Link>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-8">
            Simple vs Easy
          </h1>

          <div className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300">
            <p className="text-xl leading-relaxed mb-8">
              Simple is not the same as easy.
            </p>

            <p className="mb-6">
              There are things that are easy to implement but create dependencies (complex) versus things that might be harder initially but stand alone (simple).
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4 mt-8">Simple</h2>
            <p className="mb-4">
              Simple comes from Latin <em>simplex</em>: "one fold" or "one twist."
            </p>
            <p className="mb-6">
              The opposite of simple is complex. <em>Complectere</em>: "to braid together." When something is complex, you can't understand one part without understanding the others. They're tangled together like headphone cables in your pocket.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4 mt-8">Easy</h2>
            <p className="mb-4">
              Easy comes from Latin <em>adjacens</em>: "to lie near." Something is easy when it's close to us. Physically at hand. Familiar to our experience. Within our current capabilities.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4 mt-8">The Distinction</h2>
            <p className="mb-4">
              The opposite of easy isn't "difficult." It's "hard."
            </p>

            <p className="mb-4">
              <strong>Difficult</strong> comes from Latin <em>difficilis</em>: <em>dis-</em> ("not") + <em>facilis</em> ("easy"). So "difficult" just means "not easy" - it's about the gap between our abilities and what's required.
            </p>

            <p className="mb-6">
              <strong>Hard</strong> comes from Old English <em>hearde</em>, meaning "firmly" or "severely." Hard is an inherent property. The thing itself is resistant or strong.
            </p>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg my-8">
              <p className="mb-4">
                A rock is hard. A math problem is difficult for some, easy for others.
              </p>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4 mt-8">The Website Principle</h2>
            <p className="mb-6">
              Each function should be hard but simple. Hard because it requires effort and thought. Simple because it stands alone, untangled from dependencies.
            </p>

            <div className="border-l-4 border-blue-500 pl-6 my-8">
              <p className="text-lg italic text-gray-600 dark:text-gray-400">
                "The best code is not the code that is easiest to write, but the code that is easiest to understand and maintain."
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
