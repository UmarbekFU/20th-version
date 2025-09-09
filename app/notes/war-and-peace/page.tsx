import Navigation from '@/components/Navigation'
import PlumBackground from '@/components/PlumBackground'
import { getNoteBySlug } from '@/lib/notes'
import { notFound } from 'next/navigation'
import { Lora } from 'next/font/google'

const lora = Lora({ subsets: ['latin'], display: 'swap' })

export default function WarAndPeacePage() {
  const note = getNoteBySlug('war-and-peace')
  
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
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">The Scope of History</h3>
                <p className="leading-relaxed">
                  Tolstoy's epic spans from 1805 to 1820, covering the Napoleonic 
                  Wars and their impact on Russian society. The novel explores 
                  how historical events shape individual lives and how individuals 
                  contribute to the course of history.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">The Philosophy of History</h3>
                <p className="leading-relaxed">
                  Tolstoy's philosophical digressions on the nature of history 
                  and historical causation are among the novel's most profound 
                  elements. He argues that great historical events are the result 
                  of countless small actions by ordinary people, not the decisions 
                  of great leaders.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Pierre Bezukhov's Journey</h3>
                <p className="leading-relaxed">
                  Pierre's spiritual and intellectual journey from confusion to 
                  enlightenment represents Tolstoy's own philosophical development. 
                  His search for meaning in life, his experiences in war, and his 
                  eventual finding of peace through family life mirror Tolstoy's 
                  personal struggles.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Natasha Rostova's Growth</h3>
                <p className="leading-relaxed">
                  Natasha's transformation from a spirited young girl to a mature 
                  woman represents the ideal of Russian womanhood. Her journey 
                  from innocence to experience, from passion to wisdom, shows 
                  Tolstoy's understanding of human development and the role of women.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">The Battle of Borodino</h3>
                <p className="leading-relaxed">
                  Tolstoy's description of the Battle of Borodino is one of the 
                  most powerful depictions of war in literature. His focus on 
                  the individual experiences of soldiers rather than grand 
                  strategy shows the human cost of war and the chaos of battle.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">The Role of Chance</h3>
                <p className="leading-relaxed">
                  Throughout the novel, Tolstoy emphasizes the role of chance 
                  and coincidence in human affairs. His characters' lives are 
                  shaped by seemingly random events, showing how little control 
                  individuals have over their own destinies.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">The Search for Meaning</h3>
                <p className="leading-relaxed">
                  Many characters in the novel are searching for meaning in life, 
                  whether through philosophy, religion, or personal relationships. 
                  Tolstoy shows how this search is both universal and deeply personal, 
                  and how different people find different answers.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">The Epilogue</h3>
                <p className="leading-relaxed">
                  The novel's epilogue, set in 1820, shows the characters' lives 
                  after the war. Tolstoy's focus on domestic happiness and family 
                  life suggests that true peace and fulfillment come not from 
                  grand historical events but from personal relationships and 
                  everyday life.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Key Themes</h2>
              <div className="space-y-4">
                <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">History and Individual Lives</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    How historical events shape individual destinies and how individuals contribute to history.
                  </p>
                </div>
                <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">The Nature of War</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    The human cost of war and the chaos and randomness of battle.
                  </p>
                </div>
                <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">The Search for Meaning</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    How different people find purpose and fulfillment in life.
                  </p>
                </div>
                <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Family and Love</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    The importance of personal relationships and domestic happiness.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Why This Book Matters</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                "War and Peace" is more than a novel—it's a profound exploration of 
                history, human nature, and the meaning of life. Tolstoy's masterpiece 
                combines epic scope with intimate psychological detail to create 
                one of the greatest works of world literature.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                The novel's greatest strength is its ability to show how individual 
                lives are shaped by historical forces while maintaining focus on 
                the personal and emotional experiences of its characters. Tolstoy's 
                philosophical insights about history, war, and human nature remain 
                relevant and thought-provoking today.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Perhaps most importantly, "War and Peace" reminds us that true 
                meaning and happiness come not from grand historical events or 
                personal achievements, but from the simple joys of family life, 
                love, and human connection. The novel's message of finding peace 
                in the midst of chaos and meaning in the midst of uncertainty 
                continues to resonate with readers across cultures and generations.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
