import Navigation from '@/components/Navigation'
import PlumBackground from '@/components/PlumBackground'
import { getNoteBySlug } from '@/lib/notes'
import { notFound } from 'next/navigation'
import { Lora } from 'next/font/google'

const lora = Lora({ subsets: ['latin'], display: 'swap' })

export default function IliadHomerPage() {
  const note = getNoteBySlug('iliad-homer')
  
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
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">The Wrath of Achilles</h3>
                <p className="leading-relaxed">
                  The epic begins with the famous line "Sing, goddess, the wrath of 
                  Peleus' son Achilles." This wrath, caused by Agamemnon's insult, 
                  drives the entire narrative and reveals the destructive power of 
                  pride and anger. Achilles' withdrawal from battle shows how 
                  individual emotions can have cosmic consequences.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">The Heroic Code</h3>
                <p className="leading-relaxed">
                  The Iliad explores the ancient Greek heroic code, which values 
                  honor, glory, and excellence above all else. Heroes are expected 
                  to fight bravely, win fame, and die gloriously. This code creates 
                  both the epic's grandeur and its tragedy, as it leads to 
                  unnecessary suffering and death.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">The Gods and Fate</h3>
                <p className="leading-relaxed">
                  The gods play a crucial role in the Iliad, intervening in human 
                  affairs and shaping destinies. However, even the gods are subject 
                  to fate, and their interventions often lead to greater suffering. 
                  The epic explores the tension between divine will and human agency.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">The Humanity of War</h3>
                <p className="leading-relaxed">
                  Despite its focus on glory and honor, the Iliad also shows the 
                  human cost of war. Homer's descriptions of death and suffering 
                  are both graphic and compassionate, revealing the tragedy that 
                  lies beneath the heroic surface. The epic humanizes both Greeks 
                  and Trojans.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Hector and Andromache</h3>
                <p className="leading-relaxed">
                  The relationship between Hector and Andromache provides a 
                  counterpoint to the heroic code. Hector's love for his family 
                  and his desire to protect them shows a different kind of 
                  heroism—one based on love and responsibility rather than 
                  glory and honor.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">The Funeral Games</h3>
                <p className="leading-relaxed">
                  The funeral games for Patroclus show how the epic balances 
                  tragedy with celebration. Even in the midst of war and death, 
                  there is room for competition, friendship, and joy. This 
                  scene reveals the complexity of human experience and the 
                  resilience of the human spirit.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">The Ransom of Hector</h3>
                <p className="leading-relaxed">
                  Priam's journey to ransom Hector's body from Achilles is one 
                  of the most moving scenes in literature. It shows how even 
                  the greatest enemies can find common humanity in grief and 
                  loss. This scene reveals the epic's deep compassion and 
                  understanding of human nature.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">The Enduring Legacy</h3>
                <p className="leading-relaxed">
                  The Iliad's influence on Western literature and culture is 
                  immeasurable. Its themes of honor, glory, love, and loss 
                  continue to resonate with readers today. The epic's 
                  exploration of the human condition remains as relevant 
                  and powerful as it was thousands of years ago.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Key Themes</h2>
              <div className="space-y-4">
                <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Honor and Glory</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    The ancient Greek values of honor, glory, and excellence in battle.
                  </p>
                </div>
                <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">The Cost of War</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    The human suffering and tragedy that lies beneath the heroic surface.
                  </p>
                </div>
                <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Fate and Free Will</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    The tension between divine destiny and human choice.
                  </p>
                </div>
                <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Love and Loss</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    The power of love and the pain of loss in the midst of war.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Why This Book Matters</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                "The Iliad" is more than an ancient epic—it's a foundational work 
                of Western literature that continues to influence storytelling 
                today. Homer's masterpiece explores universal themes of honor, 
                glory, love, and loss with timeless power and relevance.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                The epic's greatest strength is its psychological depth and 
                emotional resonance. Despite being thousands of years old, 
                the characters and situations feel remarkably modern. The 
                epic's exploration of human nature, the cost of war, and 
                the power of love speaks to universal human experiences.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Perhaps most importantly, "The Iliad" reminds us of the 
                complexity of human nature and the enduring power of great 
                literature. The epic's ability to move and inspire readers 
                across cultures and centuries is a testament to its 
                profound understanding of what it means to be human.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
