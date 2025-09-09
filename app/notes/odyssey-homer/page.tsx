import Navigation from '@/components/Navigation'
import PlumBackground from '@/components/PlumBackground'
import { getNoteBySlug } from '@/lib/notes'
import { notFound } from 'next/navigation'
import { Lora } from 'next/font/google'

const lora = Lora({ subsets: ['latin'], display: 'swap' })

export default function OdysseyHomerPage() {
  const note = getNoteBySlug('odyssey-homer')
  
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
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">The Hero's Journey</h3>
                <p className="leading-relaxed">
                  Odysseus's ten-year journey home from Troy represents the archetypal 
                  hero's journey that has influenced countless stories since. His 
                  adventures, trials, and ultimate return home embody the universal 
                  human experience of seeking one's place in the world.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">The Power of Cunning</h3>
                <p className="leading-relaxed">
                  Unlike other Greek heroes who rely on brute strength, Odysseus 
                  succeeds through intelligence, wit, and cunning. His famous 
                  "Nobody" trick with the Cyclops and his strategic thinking 
                  throughout his journey show that wisdom can be more powerful than force.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">The Cyclops Encounter</h3>
                <p className="leading-relaxed">
                  The encounter with Polyphemus the Cyclops is one of the most 
                  famous episodes in literature. Odysseus's clever escape using 
                  the name "Nobody" demonstrates the power of wit over strength 
                  and has become a symbol of human ingenuity.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">The Sirens and Temptation</h3>
                <p className="leading-relaxed">
                  The Sirens episode explores the theme of temptation and the 
                  importance of self-control. Odysseus's solution—having his 
                  men tie him to the mast while they plug their ears—shows 
                  the value of preparation and the recognition of human weakness.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Penelope's Faithfulness</h3>
                <p className="leading-relaxed">
                  Penelope's twenty-year wait for Odysseus represents the ideal 
                  of marital fidelity and the power of love. Her clever ruse 
                  of weaving and unweaving the shroud shows that she shares 
                  her husband's intelligence and resourcefulness.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">The Suitors and Justice</h3>
                <p className="leading-relaxed">
                  The slaughter of the suitors upon Odysseus's return represents 
                  the restoration of order and justice. This violent conclusion 
                  shows the ancient Greek belief in the importance of maintaining 
                  proper social and familial hierarchies.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">The Role of the Gods</h3>
                <p className="leading-relaxed">
                  The gods play a crucial role in Odysseus's journey, with 
                  Athena supporting him and Poseidon opposing him. This 
                  divine intervention reflects the ancient Greek belief 
                  that human fate is influenced by supernatural forces.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">The Theme of Homecoming</h3>
                <p className="leading-relaxed">
                  The longing for home and family is central to the epic. 
                  Odysseus's determination to return to Ithaca despite 
                  numerous obstacles reflects the universal human desire 
                  for belonging and the comfort of familiar places and people.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Key Themes</h2>
              <div className="space-y-4">
                <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">The Journey Home</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    The universal human desire to return to one's origins and find belonging.
                  </p>
                </div>
                <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Wisdom vs. Strength</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    The power of intelligence and cunning over brute force.
                  </p>
                </div>
                <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Loyalty and Fidelity</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    The importance of remaining true to one's commitments and loved ones.
                  </p>
                </div>
                <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">The Human Condition</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    The challenges and triumphs of being human in a world of gods and monsters.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Why This Book Matters</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                "The Odyssey" is more than an ancient epic—it's a foundational work of 
                Western literature that continues to influence storytelling today. 
                Homer's masterpiece explores universal themes of homecoming, heroism, 
                and the human condition with timeless relevance.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                The epic's greatest strength is its psychological depth and emotional 
                resonance. Despite being thousands of years old, the characters and 
                situations feel remarkably modern. Odysseus's struggles, Penelope's 
                faithfulness, and Telemachus's coming of age speak to universal 
                human experiences.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Perhaps most importantly, "The Odyssey" celebrates the power of 
                human intelligence and determination. Odysseus's success through 
                wit rather than strength offers a different model of heroism that 
                emphasizes the value of wisdom, patience, and strategic thinking. 
                The epic reminds us that the greatest adventures are often the 
                journey home to ourselves and those we love.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
