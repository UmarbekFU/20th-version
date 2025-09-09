import Navigation from '@/components/Navigation'
import PlumBackground from '@/components/PlumBackground'
import { getNoteBySlug } from '@/lib/notes'
import { notFound } from 'next/navigation'
import { Lora } from 'next/font/google'

const lora = Lora({ subsets: ['latin'], display: 'swap' })

export default function PovertyHistoricismPage() {
  const note = getNoteBySlug('poverty-historicism')
  
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
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">What is Historicism?</h3>
                <p className="leading-relaxed">
                  Popper defines historicism as the belief that history follows 
                  inevitable laws and that we can predict the future course of 
                  human development. This belief, he argues, is not only false 
                  but also dangerous because it leads to totalitarian politics 
                  and the suppression of individual freedom.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">The Poverty of Historicism</h3>
                <p className="leading-relaxed">
                  Popper's central argument is that historicism is "poor" because 
                  it is based on a fundamental misunderstanding of the nature of 
                  scientific knowledge and social change. Historicists believe 
                  they can discover the laws of history, but Popper shows that 
                  this is impossible and leads to dangerous political consequences.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">The Problem of Prediction</h3>
                <p className="leading-relaxed">
                  Popper argues that we cannot predict the future course of 
                  history because human knowledge is constantly growing and 
                  changing. New knowledge can fundamentally alter the course 
                  of events, making long-term historical predictions impossible. 
                  This is the "Oedipal effect" of social prediction.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">The Unity of Science</h3>
                <p className="leading-relaxed">
                  Popper argues that there is no fundamental difference between 
                  the natural and social sciences. Both use the same method of 
                  conjecture and refutation, and both are subject to the same 
                  limitations. The historicist belief that social science is 
                  fundamentally different is mistaken.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">The Method of Piecemeal Social Engineering</h3>
                <p className="leading-relaxed">
                  Instead of trying to redesign society from scratch, Popper 
                  advocates for piecemeal social engineering—making small, 
                  incremental changes that can be tested and revised. This 
                  approach is more compatible with the open society and less 
                  likely to lead to totalitarianism.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">The Critique of Utopianism</h3>
                <p className="leading-relaxed">
                  Popper criticizes utopian social engineering, which tries to 
                  create a perfect society based on a blueprint. This approach 
                  is not only impossible but also dangerous because it leads 
                  to the suppression of individual freedom and the use of 
                  violence to achieve the utopian goal.
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
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">The Defense of the Open Society</h3>
                <p className="leading-relaxed">
                  The book is ultimately a defense of the open society against 
                  its historicist enemies. Popper argues that the open society 
                  is not only morally superior but also more effective at 
                  solving social problems and promoting human flourishing. 
                  The book remains relevant today as a defense of democratic 
                  values against authoritarianism.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Key Arguments</h2>
              <div className="space-y-4">
                <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">The Impossibility of Historical Prediction</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    Human knowledge growth makes long-term historical prediction impossible.
                  </p>
                </div>
                <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">The Unity of Science</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    Natural and social sciences use the same method of conjecture and refutation.
                  </p>
                </div>
                <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Piecemeal Social Engineering</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    Incremental social change is superior to revolutionary transformation.
                  </p>
                </div>
                <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">The Critique of Utopianism</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    Utopian social engineering leads to totalitarianism and violence.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Why This Book Matters</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                "The Poverty of Historicism" is more than a critique of a particular 
                philosophical position—it's a defense of the open society and a 
                warning against the dangers of totalitarian thinking. Popper's 
                analysis of historicism remains relevant and essential reading 
                for understanding contemporary political and social challenges.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                The book's greatest strength is its ability to connect abstract 
                philosophical arguments to concrete political problems. Popper 
                shows how seemingly innocent philosophical beliefs can lead to 
                dangerous political consequences, and how the defense of the 
                open society requires both philosophical clarity and political vigilance.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Perhaps most importantly, "The Poverty of Historicism" reminds 
                us that the open society is not a natural state but a fragile 
                achievement that must be constantly defended. In an age of 
                rising authoritarianism and political polarization, Popper's 
                defense of liberal democracy and his warning against historicist 
                thinking are more relevant than ever.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
