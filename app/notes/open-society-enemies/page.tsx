import Navigation from '@/components/Navigation'
import PlumBackground from '@/components/PlumBackground'
import { getNoteBySlug } from '@/lib/notes'
import { notFound } from 'next/navigation'
import { Lora } from 'next/font/google'

const lora = Lora({ subsets: ['latin'], display: 'swap' })

export default function OpenSocietyEnemiesPage() {
  const note = getNoteBySlug('open-society-enemies')
  
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
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">The Open Society vs. Closed Society</h3>
                <p className="leading-relaxed">
                  Popper's central distinction between open and closed societies is 
                  fundamental to understanding his political philosophy. The open 
                  society is characterized by critical thinking, individual freedom, 
                  and the ability to change institutions through rational discussion. 
                  The closed society is tribal, authoritarian, and resistant to change.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">The Critique of Plato</h3>
                <p className="leading-relaxed">
                  Popper's attack on Plato is one of the most controversial aspects 
                  of the book. He argues that Plato's Republic is a blueprint for 
                  totalitarianism, with its philosopher-kings, rigid class system, 
                  and suppression of individual freedom. This critique challenges 
                  the traditional view of Plato as a defender of justice and truth.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">The Critique of Hegel and Marx</h3>
                <p className="leading-relaxed">
                  Popper's analysis of Hegel and Marx focuses on their historicism—the 
                  belief that history follows inevitable laws. He argues that this 
                  belief leads to totalitarianism because it justifies the suppression 
                  of individual freedom in the name of historical necessity.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">The Philosophy of Science</h3>
                <p className="leading-relaxed">
                  Popper's philosophy of science, particularly his concept of 
                  falsifiability, is central to his defense of the open society. 
                  He argues that scientific knowledge is provisional and subject 
                  to revision, which supports the idea that social institutions 
                  should also be open to criticism and change.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Piecemeal Social Engineering</h3>
                <p className="leading-relaxed">
                  Popper advocates for piecemeal social engineering rather than 
                  utopian social engineering. Instead of trying to redesign society 
                  from scratch, we should make small, incremental changes that 
                  can be tested and revised. This approach is more compatible 
                  with the open society and less likely to lead to totalitarianism.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">The Paradox of Tolerance</h3>
                <p className="leading-relaxed">
                  Popper addresses the paradox of tolerance: if we are tolerant 
                  of everything, we will be destroyed by the intolerant. He 
                  argues that we should not tolerate intolerance, and that 
                  the open society must be prepared to defend itself against 
                  its enemies.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">The Role of Institutions</h3>
                <p className="leading-relaxed">
                  Popper emphasizes the importance of institutions in maintaining 
                  the open society. Democratic institutions, the rule of law, 
                  and free markets are essential for protecting individual 
                  freedom and enabling social progress. These institutions 
                  must be constantly defended and improved.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">The Defense of Liberalism</h3>
                <p className="leading-relaxed">
                  The book is ultimately a defense of liberal democracy against 
                  its totalitarian enemies. Popper argues that the open society 
                  is not only morally superior but also more effective at 
                  solving social problems and promoting human flourishing. 
                  The book remains relevant today as a defense of democratic 
                  values against authoritarianism.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Key Themes</h2>
              <div className="space-y-4">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Open vs. Closed Society</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    The fundamental distinction between societies that embrace change and those that resist it.
                  </p>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Critique of Historicism</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    The rejection of the belief that history follows inevitable laws.
                  </p>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Piecemeal Social Engineering</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    The advocacy for incremental social change rather than revolutionary transformation.
                  </p>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Defense of Liberalism</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    The argument that liberal democracy is superior to totalitarianism.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Why This Book Matters</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                "The Open Society and Its Enemies" is more than a political treatise—it's 
                a profound defense of liberal democracy and a warning against the 
                dangers of totalitarianism. Popper's analysis of the philosophical 
                roots of authoritarianism remains relevant and essential reading 
                for understanding contemporary political challenges.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                The book's greatest strength is its ability to connect abstract 
                philosophical ideas to concrete political problems. Popper shows 
                how seemingly innocent philosophical concepts can lead to 
                totalitarian politics, and how the defense of the open society 
                requires both philosophical clarity and political vigilance.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Perhaps most importantly, "The Open Society and Its Enemies" 
                reminds us that the open society is not a natural state but 
                a fragile achievement that must be constantly defended. In 
                an age of rising authoritarianism and political polarization, 
                Popper's defense of liberal democracy and his warning against 
                the enemies of the open society are more relevant than ever.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
