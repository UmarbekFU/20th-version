import Navigation from '@/components/Navigation'
export default function DisclaimerPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-32">
        <div className="max-w-3xl mx-auto px-8">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center">Disclaimer</h1>
          
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
              This website exists in a universe where ideas are probabilistic, humans fallible, and entropy wins. By being here, you accept:
            </p>

            <div className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                Anything written is accurate, useful, or applicable—never all three. The act of observing a writing may itself distort its meaning.
              </p>
              
              <p>
                Most of what you'll find is safe, but sometimes causes unpredictable effects: insights, shifts, or quitting your job for a yak-shaving startup. I deny liability for inevitable outliers.
              </p>
              
              <p>
                The longer you browse, the higher the chance of disorder: typos, contradictions, half-formed metaphors.
              </p>
              
              <p>
                I share thoughts, not guarantees. If you act and it leads to breakthroughs or prizes—that's on you. If it brings chaos, paradoxes, or awkward conversation—that's also on you.
              </p>
              
              <p>
                This site may sometimes read like a late-night whiteboard session. Ideas tested, broken, rebuilt, or abandoned. If you want polished corporate prose, you're in the wrong timeline.
              </p>
              
              <p>
                Nothing here is sacred. If it seems obvious, poke it. If profound, laugh. If confusing, blame the writer, not yourself.
              </p>
              
              <p>
                Any resemblance to truth is coincidence—or a simulation glitch.
              </p>
            </div>

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-8 font-medium">
              In short: read, think, adapt. But don't expect warranties from a universe that still can't decide if Schrödinger's cat is alive, dead, or just ignoring your emails.
            </p>
          </div>
        </div>
      </main>
    </>
  )
}
