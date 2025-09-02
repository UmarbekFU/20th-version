import Navigation from '@/components/Navigation'
import PlumBackground from '@/components/PlumBackground'
import TwitterComments from '@/components/TwitterComments'
import Link from 'next/link'
import { generateMetadata as genMeta } from '@/lib/metadata'

export const metadata = genMeta('/ai/emf')

export default function EverythingIsMyFaultPage() {
  return (
    <>
      <PlumBackground />
      <Navigation />
      <main className="min-h-screen pt-32">
        <div className="max-w-3xl mx-auto px-8">
          {/* Atomic Idea Header */}
          <header className="mb-12">
            <div className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              Sep 2
            </div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              Everything is my fault
            </h1>
            <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
              <span>Atomic Ideas</span>
            </div>
          </header>

          {/* Atomic Idea Content */}
          <article className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
              For years, I raged against the world.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              They lied.<br/>
              They took advantage.<br/>
              They didn't keep their word
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Do you hear the rhythm? <em>They. They. They.</em>
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Every sentence began with someone else's name, and I was always the victim.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              When someone upsets you, the instinct is to blame them. But I came to a conclusion
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              If someone lied to me, perhaps I made truth too costly to speak.<br/>
              If someone took advantage, perhaps I left the door open and called it trust.<br/>
              If someone didn't keep their word, perhaps I built on promises instead of proof.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Saying "it's my fault" means: <em>I'm in control.</em>
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Suddenly I wasn't wronged. They were just playing their part in the situation I helped create.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              I made it happen.<br/>
              I can learn from it.<br/>
              Nothing to complain about.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              It was strangely joyful to decide it was all my fault.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Better than forgiveness. Forgiveness still keeps you as the victim, still assumes they were the aggressor.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              When someone let me down, my fault.<br/>
              I could have not depended on them.<br/>
              I could have picked someone more reliable.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              When my government sucks, my fault.<br/>
              I could vote, get involved, or move somewhere else.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              When boss is mean to me, my fault.<br/>
              I could get better at my job, find a new job, or start my own business.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              When you take responsibility, you keep the power to solve the problem.<br/>
              If you don't, you give that power away.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Responsibility equals agency.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Complaining = saying <em>I have no power.</em><br/>
              It's "I can't change this, so I'll just whine."
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              "All the good opportunities are taken."<br/>
              "You can't succeed unless you're rich."<br/>
              "The system is rigged."
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Yes, life isn't fair.<br/>
              The world is tilted.<br/>
              But it's not all luck.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Your actions change outcomes.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Over decades, persistence beats luck.<br/>
              The trick is time.<br/>
              Success takes longer than you think.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              That's why vision matters. Alexander the Great dreamed of a "world empire", Napoleon of unified Europe under French influence, Walt Disney of Disneyland and Disney World, Bezos of "the everything store", Jobs of the iPad decades before it existed.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              A big vision keeps you going long enough to make it real.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              If you believe you can't change anything, you won't try. If you don't try, you prove yourself right. Cynicism becomes self-fulfilling.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Even worse, we often ask for advice when we secretly want to fail. Then we can blame the advice-giver.<br/>
              We set ourselves up to be victims.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              When everything is your fault, you stop being a victim.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              You stop being someone things happen <strong>to</strong>.<br/>
              You become someone who <strong>makes things happen</strong>.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-8">
              Blame yourself • Take responsibility • Preserve your agency • Save yourself
            </p>
          </article>

          {/* Twitter Comments */}
          <TwitterComments 
            title="Everything is my fault"
          />

          {/* Read in Other Languages */}
          <section className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
            <p className="text-gray-600 dark:text-gray-400">
              Read in: <Link href="/ai/emf/uz" className="text-blue-600 dark:text-blue-400 hover:underline">O'zbekcha</Link>, <Link href="/ai/emf/ru" className="text-blue-600 dark:text-blue-400 hover:underline">Русский</Link>
            </p>
          </section>
        </div>
      </main>
    </>
  )
}
