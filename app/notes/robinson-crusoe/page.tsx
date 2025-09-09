import Navigation from '@/components/Navigation'
import PlumBackground from '@/components/PlumBackground'
import { getNoteBySlug } from '@/lib/notes'
import { notFound } from 'next/navigation'
import { Lora } from 'next/font/google'

const lora = Lora({ subsets: ['latin'], display: 'swap' })

export default function RobinsonCrusoePage() {
  const note = getNoteBySlug('robinson-crusoe')
  
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
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">The Birth of the Novel</h3>
                <p className="leading-relaxed">
                  "Robinson Crusoe" is often considered the first English novel, 
                  establishing many conventions that would define the genre. 
                  Defoe's use of first-person narration, detailed descriptions, 
                  and realistic settings created a new form of storytelling.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Self-Reliance and Survival</h3>
                <p className="leading-relaxed">
                  Crusoe's transformation from helpless castaway to master of 
                  his island represents the triumph of human ingenuity and 
                  determination. His systematic approach to survival shows 
                  how reason and hard work can overcome even the most 
                  challenging circumstances.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">The Colonial Subtext</h3>
                <p className="leading-relaxed">
                  The novel reflects 18th-century attitudes toward colonization 
                  and the "civilizing" mission. Crusoe's relationship with Friday 
                  and his transformation of the island into a European-style 
                  settlement reveal the colonial mindset of the era.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">The Relationship with Friday</h3>
                <p className="leading-relaxed">
                  Crusoe's relationship with Friday is complex and problematic 
                  by modern standards. While it shows the possibility of 
                  cross-cultural friendship, it also reflects the power 
                  dynamics of colonialism and the assumption of European superiority.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">The Spiritual Journey</h3>
                <p className="leading-relaxed">
                  Crusoe's isolation leads to a spiritual awakening and 
                  deeper understanding of God's providence. His conversion 
                  from reckless adventurer to pious survivor shows how 
                  hardship can lead to personal growth and religious faith.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">The Psychology of Isolation</h3>
                <p className="leading-relaxed">
                  Defoe's detailed exploration of Crusoe's mental state 
                  during his years of isolation is remarkably modern. 
                  The novel shows how humans adapt to extreme circumstances 
                  and the importance of maintaining hope and purpose.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">The Return to Civilization</h3>
                <p className="leading-relaxed">
                  Crusoe's eventual return to England and his discovery 
                  that he has become wealthy through his plantation 
                  investments shows how his island experience has 
                  transformed him from a reckless youth to a successful businessman.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">The Legacy</h3>
                <p className="leading-relaxed">
                  "Robinson Crusoe" has influenced countless works of 
                  literature and popular culture, from "Swiss Family 
                  Robinson" to "Cast Away." The story of a person 
                  stranded on a desert island has become a universal 
                  metaphor for human resilience and adaptability.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Key Themes</h2>
              <div className="space-y-4">
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Self-Reliance</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    The power of individual determination and hard work to overcome adversity.
                  </p>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Colonialism</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    The 18th-century European view of colonization and cultural superiority.
                  </p>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Spiritual Growth</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    How isolation and hardship can lead to personal and spiritual development.
                  </p>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Human Adaptability</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    The remarkable ability of humans to adapt to extreme circumstances.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Why This Book Matters</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                "Robinson Crusoe" is more than an adventure story—it's a foundational 
                work of English literature that established the novel as a serious 
                art form. Defoe's masterpiece explores themes of survival, self-reliance, 
                and human adaptability that remain relevant today.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                The novel's greatest strength is its psychological realism and 
                detailed exploration of human nature. Defoe's portrayal of 
                Crusoe's transformation from helpless castaway to master of 
                his island is both inspiring and thought-provoking, showing 
                the power of human determination and ingenuity.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Perhaps most importantly, "Robinson Crusoe" reminds us of the 
                importance of self-reliance and the human capacity for adaptation. 
                While the novel reflects the colonial attitudes of its time, 
                it also celebrates the universal human qualities of resilience, 
                creativity, and the ability to find meaning and purpose even 
                in the most challenging circumstances.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
