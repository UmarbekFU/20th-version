import Navigation from '@/components/Navigation'
import PlumBackground from '@/components/PlumBackground'
import { getNoteBySlug } from '@/lib/notes'
import { notFound } from 'next/navigation'
import { Lora } from 'next/font/google'

const lora = Lora({ subsets: ['latin'], display: 'swap' })

export default function StrangerCamusPage() {
  const note = getNoteBySlug('stranger-camus')
  
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
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">The Opening Line</h3>
                <p className="leading-relaxed">
                  "Mother died today. Or maybe yesterday, I don't know." This famous opening 
                  immediately establishes Meursault's emotional detachment and the novel's 
                  existential themes. His inability to feel grief or remember the exact date 
                  of his mother's death sets the tone for the entire story.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">The Absurd</h3>
                <p className="leading-relaxed">
                  Camus's concept of the absurd—the conflict between human desire for meaning 
                  and the universe's indifference—is central to the novel. Meursault's 
                  experiences illustrate how life can seem meaningless and arbitrary, yet 
                  we continue to search for purpose and significance.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Meursault's Indifference</h3>
                <p className="leading-relaxed">
                  Meursault's emotional detachment and refusal to conform to social expectations 
                  make him a controversial protagonist. His indifference to his mother's death, 
                  his casual relationship with Marie, and his lack of remorse for the murder 
                  challenge conventional notions of morality and emotion.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">The Murder Scene</h3>
                <p className="leading-relaxed">
                  The murder of the Arab on the beach is described with clinical detachment, 
                  emphasizing the arbitrary nature of violence and death. Meursault's 
                  explanation that he killed because of the sun's heat illustrates how 
                  external forces can drive human actions beyond rational control.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">The Trial</h3>
                <p className="leading-relaxed">
                  The trial focuses not on the murder itself but on Meursault's character 
                  and his failure to conform to social expectations. The prosecution uses 
                  his emotional detachment and his behavior at his mother's funeral as 
                  evidence of his moral depravity, showing how society judges people based 
                  on their adherence to conventional norms.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">The Sun and Nature</h3>
                <p className="leading-relaxed">
                  The sun and natural elements play a crucial role in the novel, representing 
                  the indifferent forces of the universe. The oppressive heat and blinding 
                  light create an atmosphere of discomfort and disorientation that mirrors 
                  Meursault's psychological state.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">The Priest's Visit</h3>
                <p className="leading-relaxed">
                  Meursault's confrontation with the prison priest represents the conflict 
                  between existentialism and traditional religion. The priest's attempts 
                  to convert Meursault and offer him comfort are met with indifference 
                  and anger, highlighting the novel's rejection of conventional religious solutions.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">The Final Realization</h3>
                <p className="leading-relaxed">
                  In the novel's final pages, Meursault achieves a kind of peace by accepting 
                  the absurdity of existence. His realization that "nothing, nothing had the 
                  least importance" represents a form of existential freedom, even in the 
                  face of death.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Key Themes</h2>
              <div className="space-y-4">
                <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">The Absurd</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    The conflict between human desire for meaning and the universe's indifference.
                  </p>
                </div>
                <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Alienation</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    The isolation and detachment that comes from rejecting social conventions.
                  </p>
                </div>
                <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Authenticity</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    The importance of being true to oneself, even when it leads to social rejection.
                  </p>
                </div>
                <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Death and Meaning</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    How the inevitability of death affects our search for meaning and purpose.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Why This Book Matters</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                "The Stranger" is more than a novel—it's a philosophical exploration of 
                existence, meaning, and the human condition. Camus's masterpiece challenges 
                us to confront the absurdity of life while remaining authentic to ourselves.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                The novel's greatest strength is its uncompromising honesty about the 
                human condition. Camus doesn't offer easy answers or comforting illusions. 
                Instead, he forces us to confront the difficult questions: What gives life 
                meaning? How should we live in a world that seems indifferent to our 
                existence? What is the value of authenticity?
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Perhaps most importantly, "The Stranger" reminds us that the search for 
                meaning is a personal journey that cannot be outsourced to religion, 
                society, or conventional wisdom. Meursault's final acceptance of the 
                absurd represents a form of freedom—the freedom to create our own meaning 
                in a universe that offers none.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
