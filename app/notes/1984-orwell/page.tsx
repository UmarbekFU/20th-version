import Navigation from '@/components/Navigation'
import PlumBackground from '@/components/PlumBackground'
import { getNoteBySlug } from '@/lib/notes'
import { notFound } from 'next/navigation'
import { Lora } from 'next/font/google'

const lora = Lora({ subsets: ['latin'], display: 'swap' })

export default function NineteenEightyFourOrwellPage() {
  const note = getNoteBySlug('1984-orwell')
  
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
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">The Surveillance State</h3>
                <p className="leading-relaxed">
                  Orwell's vision of constant surveillance through telescreens and the Thought Police feels eerily 
                  prescient in our digital age. The idea that "Big Brother is watching you" has evolved from 
                  fiction to a reality where our every move can be tracked, recorded, and analyzed. The novel 
                  forces us to question: how much privacy are we willing to sacrifice for security?
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Newspeak and Thought Control</h3>
                <p className="leading-relaxed">
                  The concept of Newspeak—a language designed to limit thought—is one of Orwell's most brilliant 
                  inventions. By controlling language, the Party controls the very capacity for independent 
                  thought. This idea resonates today as we see how political language can be manipulated to 
                  shape public perception and limit critical thinking.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">The Destruction of Truth</h3>
                <p className="leading-relaxed">
                  "Who controls the past controls the future. Who controls the present controls the past." 
                  Orwell's insight into how totalitarian regimes rewrite history to serve their purposes 
                  remains disturbingly relevant. The novel shows how truth becomes whatever the Party says 
                  it is, regardless of objective reality.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Winston's Rebellion and Defeat</h3>
                <p className="leading-relaxed">
                  Winston Smith's journey from secret rebel to broken conformist is one of literature's most 
                  tragic character arcs. His love affair with Julia represents the last gasp of human 
                  connection in a world designed to eliminate it. His ultimate betrayal and acceptance of 
                  the Party's version of reality is both heartbreaking and inevitable.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">The Proles and False Consciousness</h3>
                <p className="leading-relaxed">
                  Orwell's portrayal of the proles—the working class who make up 85% of the population—reveals 
                  his complex view of class struggle. While they have the potential for revolution, they're 
                  kept docile through bread and circuses. This analysis of how the masses can be controlled 
                  through distraction and basic needs remains insightful.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">O'Brien and the Nature of Power</h3>
                <p className="leading-relaxed">
                  O'Brien's explanation of power—"Power is not a means, it is an end"—is one of the novel's 
                  most chilling moments. He reveals that the Party doesn't seek power to achieve anything 
                  specific; power itself is the goal. This insight into the psychology of totalitarianism 
                  explains why such regimes often seem irrational and self-destructive.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">The Ministry of Truth</h3>
                <p className="leading-relaxed">
                  The irony of the Ministry of Truth, which is responsible for lies and propaganda, perfectly 
                  captures Orwell's understanding of how totalitarian regimes operate. By inverting the 
                  meaning of words and institutions, they create a world where nothing can be trusted, 
                  and reality becomes whatever those in power say it is.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">The Ending: Victory of the Party</h3>
                <p className="leading-relaxed">
                  The novel's devastating ending—Winston's complete psychological destruction and his 
                  final love for Big Brother—shows the ultimate triumph of totalitarianism. Orwell 
                  doesn't offer hope or redemption; he shows us the logical conclusion of unchecked 
                  power. It's a warning, not a prophecy, but one that feels increasingly urgent.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Key Quotes</h2>
              <div className="space-y-4">
                <blockquote className="border-l-4 border-red-500 pl-4 italic text-gray-700 dark:text-gray-300">
                  "War is peace. Freedom is slavery. Ignorance is strength."
                </blockquote>
                <blockquote className="border-l-4 border-red-500 pl-4 italic text-gray-700 dark:text-gray-300">
                  "Big Brother is watching you."
                </blockquote>
                <blockquote className="border-l-4 border-red-500 pl-4 italic text-gray-700 dark:text-gray-300">
                  "Who controls the past controls the future. Who controls the present controls the past."
                </blockquote>
                <blockquote className="border-l-4 border-red-500 pl-4 italic text-gray-700 dark:text-gray-300">
                  "Power is not a means, it is an end."
                </blockquote>
                <blockquote className="border-l-4 border-red-500 pl-4 italic text-gray-700 dark:text-gray-300">
                  "If you want a picture of the future, imagine a boot stamping on a human face—forever."
                </blockquote>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Why This Book Matters</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                "1984" is more than a dystopian novel—it's a warning about the fragility of freedom and 
                the ease with which totalitarianism can take hold. Orwell's insights into surveillance, 
                propaganda, and thought control remain disturbingly relevant in our digital age.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                The novel's greatest strength is its psychological realism. Orwell understood that 
                totalitarianism doesn't just control behavior—it seeks to control thought itself. 
                His portrayal of how this happens, through language manipulation, surveillance, and 
                psychological torture, remains one of literature's most accurate depictions of 
                authoritarian control.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Perhaps most importantly, "1984" reminds us that freedom is not a given—it must be 
                constantly defended. In an age of mass surveillance, algorithmic manipulation, and 
                political polarization, Orwell's warning feels more urgent than ever. The novel 
                challenges us to remain vigilant against the forces that would strip away our 
                humanity and our freedom to think for ourselves.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
