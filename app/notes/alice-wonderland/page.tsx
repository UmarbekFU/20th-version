import Navigation from '@/components/Navigation'
import PlumBackground from '@/components/PlumBackground'
import { getNoteBySlug } from '@/lib/notes'
import { notFound } from 'next/navigation'
import { Lora } from 'next/font/google'

const lora = Lora({ subsets: ['latin'], display: 'swap' })

export default function AliceWonderlandPage() {
  const note = getNoteBySlug('alice-wonderland')
  
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
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">The Rabbit Hole</h3>
                <p className="leading-relaxed">
                  Alice's fall down the rabbit hole represents the transition from 
                  childhood to adulthood and the loss of innocence. The journey 
                  into Wonderland is both literal and metaphorical, symbolizing 
                  the confusing and often nonsensical nature of growing up.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Nonsense and Logic</h3>
                <p className="leading-relaxed">
                  Carroll's brilliant use of nonsense challenges conventional 
                  logic and language. The Mad Hatter's riddle "Why is a raven 
                  like a writing desk?" and the Cheshire Cat's disappearing 
                  act show how reality can be both absurd and meaningful.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">The Queen of Hearts</h3>
                <p className="leading-relaxed">
                  The tyrannical Queen of Hearts represents arbitrary authority 
                  and the absurdity of power. Her constant cries of "Off with 
                  their heads!" and her obsession with croquet reflect how 
                  authority can be both terrifying and ridiculous.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Identity and Self</h3>
                <p className="leading-relaxed">
                  Alice's frequent changes in size and her question "Who am I?" 
                  explore themes of identity and self-discovery. The novel 
                  suggests that identity is fluid and that we are constantly 
                  changing and growing.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">The Mad Tea Party</h3>
                <p className="leading-relaxed">
                  The Mad Hatter's tea party is one of literature's most 
                  famous scenes, representing the absurdity of social 
                  conventions and the importance of questioning established 
                  norms. The characters' circular logic and nonsensical 
                  conversations challenge readers to think differently.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Language and Meaning</h3>
                <p className="leading-relaxed">
                  Carroll's playful use of language, puns, and wordplay 
                  shows how meaning can be both constructed and deconstructed. 
                  The novel demonstrates that language is not fixed but 
                  flexible and open to interpretation.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">The Cheshire Cat</h3>
                <p className="leading-relaxed">
                  The enigmatic Cheshire Cat represents wisdom and mystery. 
                  His famous line "We're all mad here" suggests that 
                  madness might be a form of sanity in an insane world, 
                  and his disappearing act shows how truth can be elusive.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">The Ending</h3>
                <p className="leading-relaxed">
                  Alice's awakening from her dream suggests that Wonderland 
                  might be a product of her imagination, but the novel 
                  leaves open the question of what is real and what is 
                  fantasy. The ending challenges us to consider the nature 
                  of reality itself.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Key Themes</h2>
              <div className="space-y-4">
                <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Growing Up</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    The confusing and often nonsensical journey from childhood to adulthood.
                  </p>
                </div>
                <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Questioning Authority</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    The importance of challenging arbitrary rules and social conventions.
                  </p>
                </div>
                <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">The Power of Imagination</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    How imagination can create new worlds and ways of thinking.
                  </p>
                </div>
                <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Language and Reality</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    How language shapes our understanding of reality and meaning.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Why This Book Matters</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                "Alice's Adventures in Wonderland" is more than a children's book—it's a 
                profound exploration of logic, language, and the nature of reality. 
                Carroll's masterpiece challenges readers of all ages to question 
                conventional wisdom and think creatively.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                The novel's greatest strength is its ability to entertain while 
                provoking thought. Carroll's clever wordplay and nonsensical 
                situations are both amusing and intellectually stimulating, 
                showing that learning can be fun and that questioning authority 
                can be liberating.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Perhaps most importantly, "Alice in Wonderland" celebrates the 
                power of imagination and the importance of maintaining a childlike 
                sense of wonder. In a world that often values conformity and 
                conventional thinking, the novel reminds us that sometimes the 
                most profound truths can be found in the most absurd places.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
