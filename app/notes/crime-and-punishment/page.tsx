import Navigation from '@/components/Navigation'
import PlumBackground from '@/components/PlumBackground'
import { getNoteBySlug } from '@/lib/notes'
import { notFound } from 'next/navigation'
import { Lora } from 'next/font/google'

const lora = Lora({ subsets: ['latin'], display: 'swap' })

export default function CrimeAndPunishmentPage() {
  const note = getNoteBySlug('crime-and-punishment')
  
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
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Raskolnikov's Theory</h3>
                <p className="leading-relaxed">
                  Raskolnikov's belief that some people are "extraordinary" and therefore 
                  above conventional morality drives the entire plot. His theory that 
                  great men can commit crimes for the greater good reflects the 
                  intellectual currents of 19th-century Russia, particularly the 
                  influence of utilitarianism and nihilism.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">The Psychology of Guilt</h3>
                <p className="leading-relaxed">
                  Dostoevsky's masterful portrayal of Raskolnikov's psychological 
                  deterioration after the murder is one of literature's greatest 
                  achievements. The novel shows how guilt manifests physically and 
                  mentally, how it affects relationships and decision-making, and 
                  how it ultimately becomes unbearable.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Sonya: The Redemptive Force</h3>
                <p className="leading-relaxed">
                  Sonya Marmeladova represents the possibility of redemption through 
                  love and faith. Her willingness to sacrifice herself for her family 
                  and her unconditional love for Raskolnikov provide the moral 
                  counterpoint to his intellectual arrogance and moral relativism.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">The City as Character</h3>
                <p className="leading-relaxed">
                  St. Petersburg becomes a character in its own right, with its 
                  oppressive atmosphere, poverty, and moral decay reflecting 
                  Raskolnikov's inner state. The city's labyrinthine streets and 
                  cramped apartments create a sense of claustrophobia and 
                  psychological pressure.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">The Role of Dreams</h3>
                <p className="leading-relaxed">
                  Dreams play a crucial role in the novel, revealing Raskolnikov's 
                  subconscious fears and desires. His dream about the beaten horse 
                  foreshadows his own moral awakening, while other dreams provide 
                  insight into his psychological state and moral development.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">The Investigation</h3>
                <p className="leading-relaxed">
                  Porfiry Petrovich's psychological investigation of Raskolnikov 
                  is a masterclass in detective work. Rather than relying on 
                  physical evidence, he uses psychological pressure and moral 
                  persuasion to extract a confession, showing that the real 
                  punishment begins before the crime is discovered.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">The Nature of Punishment</h3>
                <p className="leading-relaxed">
                  The novel explores different forms of punishment: legal, social, 
                  and psychological. Raskolnikov's greatest punishment is not his 
                  imprisonment but his isolation from humanity and his inability 
                  to find peace. The novel suggests that true punishment comes 
                  from within, not from external authority.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">The Epilogue: Redemption</h3>
                <p className="leading-relaxed">
                  The novel's epilogue shows Raskolnikov's path to redemption 
                  through suffering, love, and faith. His transformation from 
                  intellectual arrogance to humble acceptance of his humanity 
                  represents Dostoevsky's belief in the possibility of spiritual 
                  renewal through suffering and love.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Key Themes</h2>
              <div className="space-y-4">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Moral Relativism</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    The dangerous consequences of believing that some people are above moral law.
                  </p>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">The Psychology of Crime</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    How committing a crime affects the human psyche and relationships.
                  </p>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Redemption Through Suffering</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    The possibility of spiritual renewal through suffering and love.
                  </p>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">The Nature of Punishment</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    Different forms of punishment and their effectiveness in achieving justice.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Why This Book Matters</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                "Crime and Punishment" is more than a psychological thriller—it's a profound 
                exploration of morality, justice, and the human condition. Dostoevsky's 
                masterpiece examines the consequences of moral relativism and the possibility 
                of redemption through suffering and love.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                The novel's greatest strength is its psychological depth. Dostoevsky's 
                portrayal of Raskolnikov's inner turmoil is unmatched in literature. 
                The novel shows how intellectual arrogance can lead to moral blindness 
                and how the consequences of our actions extend far beyond what we 
                initially imagine.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Perhaps most importantly, "Crime and Punishment" challenges us to 
                examine our own moral assumptions and the consequences of our choices. 
                Through Raskolnikov's journey from intellectual arrogance to humble 
                acceptance of his humanity, Dostoevsky shows us that true wisdom 
                comes not from believing we are above others, but from recognizing 
                our shared humanity and the need for love, forgiveness, and redemption.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
