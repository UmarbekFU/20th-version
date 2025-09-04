import Navigation from '@/components/Navigation'
import PlumBackground from '@/components/PlumBackground'

export default function DisclaimerPage() {
  return (
    <>
      <PlumBackground />
      <Navigation />
      <main className="min-h-screen pt-32">
        <div className="max-w-3xl mx-auto px-8">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center">Disclaimer</h1>
          
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
              This website operates in a strange universe where ideas are probabilistic, humans are fallible, and entropy always wins. By being here, you tacitly accept the following:
            </p>

            <ul className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed">
              <li>
                Anything written here is accurate, useful, or applicable—but never all three at the same time. The act of observing my writings may itself distort its meaning.
              </li>
              
              <li>
                While most of what you'll find here is safe, occasionally it may cause unpredictable consequences: sudden insights, paradigm shifts, or the urge to quit your job and start a yak-shaving startup. I deny liability for the rare—but inevitable—outliers.
              </li>
              
              <li>
                The longer you browse, the higher the chance you'll encounter disorder: typos, contradictions, or half-baked metaphors.
              </li>
              
              <li>
                I share thoughts, not guarantees. If you use them, you're the one putting real skin in the game. If you choose to act on something here and it leads to breakthroughs, applause, or Nobel Prizes—that's on you. If it leads to mild chaos, paradoxes in your life, your friends avoiding conversations with you—that's also on you.
              </li>
              
              <li>
                This site may sometimes read like a late-night whiteboard session where an idea is tested, broken, rebuilt, and occasionally left in pieces. If you came here for polished corporate prose, you're in the wrong timeline.
              </li>
              
              <li>
                Nothing here should be taken as sacred. If an idea seems obvious, poke it. If it sounds profound, laugh at it. If it's confusing, assume the problem is with the writer, not with you
              </li>
              
              <li>
                Any resemblance between our words and universal truth is purely coincidental—or evidence that the simulation is glitching.
              </li>
            </ul>

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-8 font-medium">
              In short: read, think, adapt—but don't expect warranties from a universe that still can't decide if Schrödinger's cat is alive, dead, or just ignoring your emails.
            </p>
          </div>
        </div>
      </main>
    </>
  )
}
