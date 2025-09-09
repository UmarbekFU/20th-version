import Navigation from '@/components/Navigation'
import PlumBackground from '@/components/PlumBackground'
import { getNoteBySlug } from '@/lib/notes'
import { notFound } from 'next/navigation'
import { Lora } from 'next/font/google'

const lora = Lora({ subsets: ['latin'], display: 'swap' })

export default function PrinceMachiavelliPage() {
  const note = getNoteBySlug('prince-machiavelli')
  
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
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">The End Justifies the Means</h3>
                <p className="leading-relaxed">
                  Machiavelli's most famous principle suggests that rulers should 
                  do whatever is necessary to maintain power and achieve their 
                  goals, regardless of moral considerations. This pragmatic 
                  approach to politics remains controversial and influential today.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">The Nature of Power</h3>
                <p className="leading-relaxed">
                  Machiavelli's analysis of power is remarkably realistic and 
                  unsentimental. He argues that successful rulers must understand 
                  human nature, particularly the tendency toward self-interest 
                  and the need for security and stability.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Fear vs. Love</h3>
                <p className="leading-relaxed">
                  Machiavelli's famous advice that it's better to be feared than 
                  loved reflects his understanding of human psychology. He argues 
                  that fear is more reliable than love because it's based on 
                  self-interest rather than emotional attachment.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">The Art of War</h3>
                <p className="leading-relaxed">
                  Military power is central to Machiavelli's political theory. 
                  He argues that rulers must maintain strong armies and be 
                  prepared to use force when necessary. The ability to wage 
                  war effectively is essential for maintaining political power.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Fortune and Virtù</h3>
                <p className="leading-relaxed">
                  Machiavelli's concept of virtù (virtue or ability) versus 
                  fortuna (fortune or luck) shows his belief in the importance 
                  of human agency. While fortune plays a role in politics, 
                  skilled leaders can shape their own destiny through wise 
                  decisions and decisive action.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">The Importance of Appearances</h3>
                <p className="leading-relaxed">
                  Machiavelli emphasizes the importance of maintaining a good 
                  reputation and appearing virtuous, even when acting otherwise. 
                  He argues that rulers must be skilled at deception and 
                  manipulation to maintain their power and achieve their goals.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Historical Examples</h3>
                <p className="leading-relaxed">
                  Machiavelli uses numerous examples from ancient and recent 
                  history to illustrate his principles. His analysis of 
                  successful and failed rulers provides practical guidance 
                  for contemporary political leaders.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">The Legacy</h3>
                <p className="leading-relaxed">
                  "The Prince" has been both praised and condemned for its 
                  realistic approach to politics. While some see it as a 
                  guide to tyranny, others view it as a practical manual 
                  for effective leadership in difficult circumstances.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Key Principles</h2>
              <div className="space-y-4">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Pragmatic Leadership</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    Leaders must do what is necessary to achieve their goals, regardless of moral considerations.
                  </p>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Understanding Human Nature</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    Successful leaders must understand the self-interested nature of human beings.
                  </p>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">The Importance of Power</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    Military strength and the ability to use force are essential for maintaining political power.
                  </p>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Strategic Deception</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    Leaders must be skilled at maintaining appearances and using deception when necessary.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Why This Book Matters</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                "The Prince" is more than a political treatise—it's a foundational 
                work of political philosophy that continues to influence leaders 
                and thinkers today. Machiavelli's realistic analysis of power and 
                leadership remains relevant in our complex political world.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                The book's greatest strength is its honesty about the nature of 
                political power. Machiavelli doesn't sugarcoat the difficult 
                choices that leaders must make, and his analysis of human nature 
                and political dynamics is remarkably insightful and accurate.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Perhaps most importantly, "The Prince" challenges us to think 
                critically about the relationship between morality and politics. 
                While the book's advice may seem cynical, it forces us to 
                confront the difficult question of how to achieve good ends 
                in a world where power and morality often conflict.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
