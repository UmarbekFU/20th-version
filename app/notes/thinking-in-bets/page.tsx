import Navigation from '@/components/Navigation'
import PlumBackground from '@/components/PlumBackground'
import { getNoteBySlug } from '@/lib/notes'
import { notFound } from 'next/navigation'
import { Lora } from 'next/font/google'

const lora = Lora({ subsets: ['latin'], display: 'swap' })

export default function ThinkingInBetsPage() {
  const note = getNoteBySlug('thinking-in-bets')
  
  if (!note) {
    notFound()
  }

  return (
    <>
      <PlumBackground />
      <Navigation />
      <main className="min-h-screen pt-32">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <img
              src={note.coverImage}
              alt={note.title}
              className="w-32 h-40 md:w-40 md:h-52 object-cover rounded border border-gray-200 dark:border-gray-700 flex-shrink-0"
            />
            <div className="flex-1">
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                {note.title}
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">
                by {note.author}
              </p>
              <p className="text-gray-500 dark:text-gray-500 mb-6">
                Read: {note.date} • Rating: {note.rating}/10
              </p>
            </div>
          </div>
          
          <div className="mt-8 prose prose-lg max-w-none">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Summary</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              {note.summary}
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">My Notes</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Last updated: {new Date().toLocaleDateString()}</p>
            <div className="space-y-6 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">The Poker Mindset</h3>
                <p className="leading-relaxed">
                  Duke's central insight is that life is like poker—we're constantly making 
                  decisions with incomplete information and uncertain outcomes. The key is 
                  to think probabilistically rather than in absolutes, and to separate 
                  the quality of our decision-making process from the results we get.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Resulting and Hindsight Bias</h3>
                <p className="leading-relaxed">
                  One of the most dangerous mental traps is "resulting"—judging the quality 
                  of a decision based on its outcome. Duke shows how this leads to poor 
                  learning and decision-making. A good decision can have a bad outcome, 
                  and a bad decision can have a good outcome. We need to evaluate the 
                  process, not just the result.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">The Power of Probabilistic Thinking</h3>
                <p className="leading-relaxed">
                  Instead of thinking in terms of "right" or "wrong," Duke advocates for 
                  thinking in terms of probabilities. This means acknowledging uncertainty, 
                  considering multiple scenarios, and being comfortable with the idea that 
                  we can't know everything. It's about making the best decision with the 
                  information available.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Separating Skill from Luck</h3>
                <p className="leading-relaxed">
                  In poker and in life, outcomes are determined by both skill and luck. 
                  Duke teaches us to identify which factors we can control (skill) and 
                  which we cannot (luck). This helps us focus on improving our decision-making 
                  process rather than obsessing over outcomes we can't control.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">The Importance of Feedback</h3>
                <p className="leading-relaxed">
                  Duke emphasizes the need for honest feedback and self-reflection. In poker, 
                  players can review their decisions and learn from mistakes. In life, we 
                  need to create similar feedback loops and be willing to admit when we're 
                  wrong. This requires intellectual humility and a growth mindset.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Managing Emotions</h3>
                <p className="leading-relaxed">
                  Emotions can cloud our judgment and lead to poor decisions. Duke shares 
                  strategies for managing emotional responses to both wins and losses, 
                  including taking breaks, reframing situations, and focusing on the 
                  process rather than the outcome.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">The Value of Group Decision-Making</h3>
                <p className="leading-relaxed">
                  Duke advocates for seeking diverse perspectives and creating environments 
                  where people feel safe to express dissenting opinions. Group decision-making 
                  can be more effective than individual decision-making, but only if we 
                  create the right conditions for honest discussion and debate.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Building a Decision-Making System</h3>
                <p className="leading-relaxed">
                  The book provides practical frameworks for improving decision-making, 
                  including how to structure decision-making processes, how to evaluate 
                  information quality, and how to learn from both successes and failures. 
                  The goal is to create a systematic approach to making better decisions.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Key Principles</h2>
              <div className="space-y-4">
                <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Think in Probabilities</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    Acknowledge uncertainty and think in terms of likelihood rather than certainty.
                  </p>
                </div>
                <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Separate Process from Outcome</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    Judge decisions based on the quality of the process, not just the results.
                  </p>
                </div>
                <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Seek Honest Feedback</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    Create environments where people can give and receive honest feedback.
                  </p>
                </div>
                <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Manage Emotions</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    Develop strategies for managing emotional responses to wins and losses.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Why This Book Matters</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                "Thinking in Bets" is more than a book about poker—it's a practical guide 
                to making better decisions in an uncertain world. Duke's insights from 
                professional poker provide valuable lessons for anyone who wants to 
                improve their decision-making skills.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                The book's greatest strength is its practical applicability. Duke doesn't 
                just explain concepts; she provides concrete strategies and frameworks 
                that readers can immediately apply to their own decision-making. Her 
                emphasis on probabilistic thinking and process evaluation is particularly 
                valuable in our complex, uncertain world.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Perhaps most importantly, "Thinking in Bets" challenges us to be more 
                honest about uncertainty and to embrace the discomfort of not knowing. 
                In a world that often rewards false confidence and certainty, Duke's 
                approach offers a more realistic and effective way to navigate 
                complexity and make better decisions.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
