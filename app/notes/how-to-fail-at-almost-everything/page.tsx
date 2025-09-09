import Navigation from '@/components/Navigation'
import PlumBackground from '@/components/PlumBackground'
import { getNoteBySlug } from '@/lib/notes'
import { notFound } from 'next/navigation'
import { Lora } from 'next/font/google'

const lora = Lora({ subsets: ['latin'], display: 'swap' })

export default function HowToFailAtAlmostEverythingPage() {
  const note = getNoteBySlug('how-to-fail-at-almost-everything')
  
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
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Systems vs. Goals</h3>
                <p className="leading-relaxed">
                  Adams's most powerful insight: focus on systems, not goals. Goals are for losers because they're 
                  binary—you either achieve them or you don't. Systems are for winners because they're about 
                  continuous improvement. A system is something you do regularly that increases your odds of 
                  success over time, regardless of immediate outcomes.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Energy Management</h3>
                <p className="leading-relaxed">
                  Success is more about energy management than time management. Adams argues that your energy 
                  level is your most important resource. He shares his personal experiments with diet, exercise, 
                  and sleep to optimize his energy throughout the day. The key insight: work with your natural 
                  energy patterns, not against them.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">The Power of Failure</h3>
                <p className="leading-relaxed">
                  Adams's personal story is one of repeated failure followed by eventual success. He failed at 
                  multiple careers, relationships, and business ventures before creating Dilbert. His message: 
                  failure is not the opposite of success—it's a prerequisite. Each failure teaches you something 
                  that brings you closer to success.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Skill Stacking</h3>
                <p className="leading-relaxed">
                  Instead of trying to be the best at one thing, become good at several complementary skills. 
                  Adams calls this "skill stacking." You don't need to be world-class at any single skill, 
                  but being good at multiple skills creates unique combinations that others can't easily replicate.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">The Dilbert Story</h3>
                <p className="leading-relaxed">
                  The creation of Dilbert wasn't a stroke of genius—it was the result of systematic effort. 
                  Adams drew cartoons every day, studied what made people laugh, and gradually improved. 
                  The comic strip succeeded not because of one brilliant idea, but because of consistent 
                  practice and iteration over time.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Personal Finance Philosophy</h3>
                <p className="leading-relaxed">
                  Adams's approach to money is refreshingly practical. He advocates for living below your means, 
                  investing in index funds, and avoiding get-rich-quick schemes. His advice: focus on increasing 
                  your earning potential rather than trying to time the market or find the perfect investment.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">The Importance of Luck</h3>
                <p className="leading-relaxed">
                  Adams acknowledges that luck plays a significant role in success, but argues that you can 
                  increase your luck surface area. By trying more things, meeting more people, and learning 
                  more skills, you create more opportunities for luck to find you. It's not about being lucky—it's 
                  about being prepared for luck when it comes.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Health and Longevity</h3>
                <p className="leading-relaxed">
                  Adams shares his experiments with various health practices, from diet changes to exercise routines. 
                  His approach is data-driven and personal—he tests things on himself and measures the results. 
                  The key insight: small, sustainable changes compound over time to create significant improvements.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">The Power of Affirmations</h3>
                <p className="leading-relaxed">
                  While controversial, Adams discusses his use of affirmations and visualization. He argues that 
                  these practices help program your subconscious mind to notice opportunities and take action. 
                  Whether you believe in the metaphysical aspects or not, the psychological benefits of positive 
                  self-talk are well-documented.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Key Principles</h2>
              <div className="space-y-4">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">1. Systems Over Goals</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    Focus on processes that improve your odds of success rather than specific outcomes.
                  </p>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">2. Energy Management</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    Optimize your energy levels through diet, exercise, and sleep rather than just managing time.
                  </p>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">3. Skill Stacking</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    Combine multiple good skills rather than trying to be world-class at one thing.
                  </p>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">4. Increase Luck Surface Area</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    Try more things, meet more people, and learn more skills to create more opportunities.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Why This Book Matters</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                "How to Fail at Almost Everything and Still Win Big" offers a refreshingly honest and practical 
                approach to success. Unlike most self-help books that promise quick fixes or magical formulas, 
                Adams shares his real experiences with failure and the systems that eventually led to his success.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                The book's greatest strength is its emphasis on systems thinking. In a world obsessed with goals 
                and outcomes, Adams shows us that sustainable success comes from building good habits and processes. 
                His approach is more realistic and achievable than the typical "follow your passion" advice.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Perhaps most importantly, the book normalizes failure as part of the success process. Adams's 
                willingness to share his many failures makes the book relatable and encouraging. It's a reminder 
                that success isn't about avoiding failure—it's about learning from it and using it to build 
                better systems for the future.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
