import Navigation from '@/components/Navigation'
import PlumBackground from '@/components/PlumBackground'
import TwitterComments from '@/components/TwitterComments'
import Link from 'next/link'
import { generateMetadata as genMeta } from '@/lib/metadata'

export const metadata = genMeta('/ai/fwf')

export default function FreeWillFallacyPage() {
  return (
    <>
      <PlumBackground />
      <Navigation />
      <main className="min-h-screen pt-32">
        <div className="max-w-3xl mx-auto px-8">
          {/* Atomic Idea Header */}
          <header className="mb-12">
            <div className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              Dec 20
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              Free will fallacy
            </h1>
            <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
              <span>Atomic Ideas</span>
            </div>
          </header>

          {/* Atomic Idea Content */}
          <article className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
              Stephen Hawking says free will is illusion. We're atoms. Atoms follow rigid laws. Therefore we have no choice.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              This is reductionism. A mistake. It is also a mistake of scale.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Laws of physics aren't a person making you do things.<br/>
              They're not some supernatural force pushing atoms around.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Laws of physics are just descriptions.<br/>
              They describe what happens.<br/>
              They don't make it happen.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              It's like saying the rulebook controls the chess game.<br/>
              No. The rulebook just describes how chess works.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Reality has levels: atomic, molecular, biological, human thought. Just because low-level descriptions exist doesn't eliminate high-level explanations.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              When you lose at chess to a computer, the silicon didn't beat you, the program did. The program is an abstraction over atoms, like human thought.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              When I decide, I decide. Not my atoms. Not physics laws.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              My decision-making is a high-level process that's as real as any physical process.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              We obsess over absolute foundations. No absolute foundation for knowledge exists.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Every fundamental theory raises the question: why this way, not another? The questions never end.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-8">
              Well, the best way is to work at the level that explains what you need to explain.
            </p>
          </article>

          {/* Twitter Comments */}
          <TwitterComments 
            title="Free will fallacy"
          />

          {/* Back to Atomic Ideas */}
          <section className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
            <p className="text-gray-600 dark:text-gray-400">
              <Link href="/ai" className="text-blue-600 dark:text-blue-400 hover:underline">← Back to Atomic Ideas</Link>
            </p>
          </section>
        </div>
      </main>
    </>
  )
}
