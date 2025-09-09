import Navigation from '@/components/Navigation'
import PlumBackground from '@/components/PlumBackground'
import { getNoteBySlug } from '@/lib/notes'
import { notFound } from 'next/navigation'
import { Lora } from 'next/font/google'

const lora = Lora({ subsets: ['latin'], display: 'swap' })

export default function LittlePrincePage() {
  const note = getNoteBySlug('little-prince')
  
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
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">The Wisdom of Childhood</h3>
                <p className="leading-relaxed">
                  The Little Prince represents the pure, unfiltered wisdom of childhood—the ability to see 
                  beyond surface appearances to the essential nature of things. His questions and observations 
                  expose the absurdity of adult concerns and remind us of what truly matters in life. 
                  Saint-Exupéry shows us that children often understand the world better than adults do.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">The Rose and Love</h3>
                <p className="leading-relaxed">
                  The prince's relationship with his rose is the heart of the story. It teaches us that 
                  love is not about possession or control, but about care and responsibility. The rose 
                  is both beautiful and difficult, demanding and fragile. Through this relationship, 
                  we learn that true love requires both joy and sacrifice.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">The Fox and Taming</h3>
                <p className="leading-relaxed">
                  The fox's lesson about taming is one of the most profound in literature. "You become 
                  responsible, forever, for what you have tamed." This teaches us that relationships 
                  create mutual responsibility and that the time we invest in others makes them unique 
                  and irreplaceable. It's a beautiful meditation on the nature of connection.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">The Grown-ups and Their Absurdities</h3>
                <p className="leading-relaxed">
                  Through the prince's encounters with various adults on different planets, Saint-Exupéry 
                  satirizes the preoccupations of grown-up life. The king who rules over nothing, the 
                  businessman who counts stars he can't own, the geographer who never leaves his desk—all 
                  represent the empty pursuits that adults mistake for meaningful activity.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">The Baobab Trees</h3>
                <p className="leading-relaxed">
                  The baobab trees that threaten to destroy the prince's planet represent the small 
                  problems that, if ignored, can grow into major disasters. This is a metaphor for 
                  the importance of addressing problems early and maintaining vigilance over the things 
                  we care about. It's a lesson in responsibility and foresight.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">The Snake and Death</h3>
                <p className="leading-relaxed">
                  The snake represents death, but in a way that's both mysterious and beautiful. The 
                  prince's decision to return to his planet through the snake's bite is not presented 
                  as an ending, but as a transformation. It suggests that death might be a return 
                  to a more essential state of being.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">The Pilot's Journey</h3>
                <p className="leading-relaxed">
                  The pilot's encounter with the prince transforms him from a practical adult focused 
                  on survival to someone who can see the world with wonder and imagination. His 
                  struggle to repair his plane becomes secondary to the deeper journey of understanding 
                  what the prince teaches him about life and love.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">The Stars and Memory</h3>
                <p className="leading-relaxed">
                  The prince's promise that he will be laughing among the stars suggests that love 
                  and connection transcend physical separation. The pilot's ability to hear the 
                  prince's laughter in the stars represents the way that meaningful relationships 
                  continue to influence us even after they end. It's a beautiful meditation on 
                  the persistence of love and memory.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Memorable Quotes</h2>
              <div className="space-y-4">
                <blockquote className="border-l-4 border-yellow-500 pl-4 italic text-gray-700 dark:text-gray-300">
                  "It is only with the heart that one can see rightly; what is essential is invisible to the eye."
                </blockquote>
                <blockquote className="border-l-4 border-yellow-500 pl-4 italic text-gray-700 dark:text-gray-300">
                  "You become responsible, forever, for what you have tamed."
                </blockquote>
                <blockquote className="border-l-4 border-yellow-500 pl-4 italic text-gray-700 dark:text-gray-300">
                  "All grown-ups were once children... but only few of them remember it."
                </blockquote>
                <blockquote className="border-l-4 border-yellow-500 pl-4 italic text-gray-700 dark:text-gray-300">
                  "The most beautiful things in the world cannot be seen or touched, they are felt with the heart."
                </blockquote>
                <blockquote className="border-l-4 border-yellow-500 pl-4 italic text-gray-700 dark:text-gray-300">
                  "It is the time you have wasted for your rose that makes your rose so important."
                </blockquote>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Why This Book Matters</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                "The Little Prince" is more than a children's book—it's a profound meditation on 
                the human condition that speaks to readers of all ages. Saint-Exupéry's fable 
                reminds us of the importance of wonder, imagination, and emotional connection 
                in a world that often values only the practical and measurable.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                The book's greatest strength is its ability to make us see the world with fresh 
                eyes. Through the prince's innocent questions and observations, we're reminded 
                of the beauty and mystery that surrounds us every day. It's a call to return 
                to the wonder and curiosity of childhood while retaining the wisdom of experience.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Perhaps most importantly, "The Little Prince" teaches us about the nature of 
                love and responsibility. In a world where relationships are often treated as 
                disposable, the book reminds us that true connection requires investment, 
                care, and a willingness to be responsible for what we love. It's a timeless 
                message about the value of human connection and the importance of seeing 
                beyond the surface to what truly matters.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
