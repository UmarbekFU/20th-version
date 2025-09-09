import Navigation from '@/components/Navigation'
import PlumBackground from '@/components/PlumBackground'
import { getNoteBySlug } from '@/lib/notes'
import { notFound } from 'next/navigation'
import { Lora } from 'next/font/google'

const lora = Lora({ subsets: ['latin'], display: 'swap' })

export default function DilbertPrinciplePage() {
  const note = getNoteBySlug('dilbert-principle')
  
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
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">The Dilbert Principle</h3>
                <p className="leading-relaxed">
                  Adams's most famous observation: "The most ineffective workers are systematically moved to the 
                  place where they can do the least damage: management." This principle explains why so many 
                  organizations seem to be run by incompetent people. It's not that bad managers are promoted—it's 
                  that good workers are kept in productive roles while problem employees are "promoted" to management.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Corporate Culture and Bureaucracy</h3>
                <p className="leading-relaxed">
                  Adams brilliantly satirizes the absurdities of corporate life: meaningless meetings, 
                  pointless policies, and the disconnect between management and reality. His cartoons 
                  capture the universal frustrations of working in large organizations where common 
                  sense often takes a backseat to procedure and politics.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">The Pointy-Haired Boss</h3>
                <p className="leading-relaxed">
                  The iconic Pointy-Haired Boss represents every clueless manager who makes decisions 
                  based on buzzwords rather than understanding. Adams shows how this character type 
                  survives and even thrives in corporate environments by mastering the art of 
                  appearing busy while avoiding actual work or responsibility.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Engineers vs. Management</h3>
                <p className="leading-relaxed">
                  The book explores the fundamental tension between engineers (who solve problems) 
                  and management (who create them). Adams, himself an engineer, understands both 
                  perspectives and shows how this conflict plays out in real organizations. 
                  Engineers want to build things that work; managers want to look good in meetings.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">The Psychology of Organizations</h3>
                <p className="leading-relaxed">
                  Adams delves into the psychological forces that drive organizational behavior. 
                  He explains how fear, ego, and the need for control create dysfunctional systems 
                  that persist despite their obvious flaws. The book reveals why organizations 
                  often act against their own best interests.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Humor as Truth</h3>
                <p className="leading-relaxed">
                  The book's greatest strength is its ability to make us laugh while revealing 
                  uncomfortable truths about how organizations really work. Adams uses humor 
                  to make complex organizational dynamics accessible and memorable. The cartoons 
                  aren't just funny—they're accurate observations about human nature in groups.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">The Dilbert Phenomenon</h3>
                <p className="leading-relaxed">
                  The book explains how Dilbert became a cultural phenomenon by giving voice to 
                  the frustrations of millions of office workers. Adams tapped into a universal 
                  experience—the absurdity of corporate life—and created characters that people 
                  could immediately recognize and relate to.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Survival Strategies</h3>
                <p className="leading-relaxed">
                  Beyond just satirizing corporate life, Adams offers practical advice for 
                  surviving and even thriving in dysfunctional organizations. He shares insights 
                  about office politics, career advancement, and how to maintain your sanity 
                  while working in environments that often seem designed to drive you crazy.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Key Insights</h2>
              <div className="space-y-4">
                <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">The Peter Principle in Reverse</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    Incompetent workers are promoted to management where they can do the least damage.
                  </p>
                </div>
                <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">The Meeting Paradox</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    The more important a meeting is, the less likely it is to accomplish anything useful.
                  </p>
                </div>
                <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Buzzword Survival</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    Success in corporate environments often depends on mastering meaningless jargon.
                  </p>
                </div>
                <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">The Dilbert Test</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    If your organization could be the subject of a Dilbert cartoon, it probably should be.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Why This Book Matters</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                "The Dilbert Principle" is more than just a collection of funny cartoons—it's a 
                profound analysis of organizational dysfunction that remains relevant decades after 
                its publication. Adams's insights into corporate culture and human behavior in 
                groups are both entertaining and enlightening.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                The book's greatest strength is its ability to make us laugh while revealing 
                uncomfortable truths about how organizations really work. By using humor to 
                explore serious topics, Adams makes complex organizational dynamics accessible 
                and memorable. His observations about management, bureaucracy, and office politics 
                ring true for anyone who has worked in a large organization.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Perhaps most importantly, "The Dilbert Principle" gives voice to the frustrations 
                of millions of workers who feel powerless in the face of organizational absurdity. 
                It's a reminder that you're not alone in your confusion about why organizations 
                work the way they do, and that sometimes the best response to corporate madness 
                is to laugh at it—and then figure out how to work around it.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
