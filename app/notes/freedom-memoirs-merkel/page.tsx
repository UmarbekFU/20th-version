import Navigation from '@/components/Navigation'
import PlumBackground from '@/components/PlumBackground'
import { getNoteBySlug } from '@/lib/notes'
import { notFound } from 'next/navigation'
import { Lora } from 'next/font/google'

const lora = Lora({ subsets: ['latin'], display: 'swap' })

export default function FreedomMemoirsMerkelPage() {
  const note = getNoteBySlug('freedom-memoirs-merkel')
  
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
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">The East German Experience</h3>
                <p className="leading-relaxed">
                  Merkel's upbringing in East Germany provides crucial context for understanding her leadership style. 
                  Her experience of living under an authoritarian regime shaped her deep appreciation for freedom and 
                  democracy. This background gave her a unique perspective on the fragility of democratic institutions 
                  and the importance of protecting them.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Crisis Leadership</h3>
                <p className="leading-relaxed">
                  The book reveals Merkel's approach to crisis management through multiple global challenges: the 
                  2008 financial crisis, the European debt crisis, the refugee crisis, and the COVID-19 pandemic. 
                  Her methodical, data-driven decision-making process and her ability to maintain calm under pressure 
                  offer valuable lessons for leadership in uncertain times.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">The Art of Compromise</h3>
                <p className="leading-relaxed">
                  Merkel's political philosophy centered on finding practical solutions through compromise rather than 
                  ideological purity. Her ability to work across party lines and build coalitions demonstrates the 
                  importance of pragmatism in democratic governance. This approach, while sometimes frustrating to 
                  supporters, often led to stable, long-term solutions.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">European Integration</h3>
                <p className="leading-relaxed">
                  As a key architect of European policy, Merkel's memoirs provide insight into the complex dynamics 
                  of EU decision-making. Her commitment to European unity, despite numerous challenges, reflects a 
                  deep understanding of the continent's history and the necessity of cooperation in an interconnected world.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Personal Reflections</h3>
                <p className="leading-relaxed">
                  What makes these memoirs particularly compelling is Merkel's willingness to reflect on her personal 
                  journey and the emotional toll of leadership. Her honesty about the loneliness of decision-making 
                  and the weight of responsibility humanizes one of the most powerful leaders of our time.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Science and Politics</h3>
                <p className="leading-relaxed">
                  Merkel's scientific background (she has a PhD in quantum chemistry) influenced her approach to 
                  governance. Her emphasis on evidence-based decision-making and her respect for expertise, particularly 
                  during the COVID-19 pandemic, highlights the importance of scientific literacy in political leadership.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Gender and Leadership</h3>
                <p className="leading-relaxed">
                  As one of the few female world leaders, Merkel's memoirs offer insights into navigating male-dominated 
                  political spaces. Her approach—focusing on competence rather than gender—and her ability to command 
                  respect through expertise rather than charisma provides a model for effective leadership regardless of gender.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">The Weight of History</h3>
                <p className="leading-relaxed">
                  Merkel's awareness of Germany's historical responsibility, particularly regarding the Holocaust and 
                  World War II, shaped her approach to international relations. Her commitment to multilateralism and 
                  her cautious approach to military intervention reflect a deep understanding of the consequences of 
                  unchecked power.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Key Insights</h2>
              <div className="space-y-4">
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Leadership Philosophy</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    "Leadership is not about being the loudest voice in the room, but about listening carefully, 
                    analyzing thoroughly, and acting decisively when the time is right."
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Crisis Management</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    "In times of crisis, people need stability and clear communication. Panic and uncertainty 
                    only make difficult situations worse."
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">European Vision</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    "Europe's strength lies in its diversity and its ability to find common solutions to shared challenges. 
                    Unity does not mean uniformity."
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Why This Book Matters</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                "Freedom: Memoirs 1954 – 2021" offers a rare glimpse into the mind of one of the most influential 
                leaders of the 21st century. Merkel's reflections on her journey from East German scientist to 
                German chancellor provide valuable insights into leadership, crisis management, and the challenges 
                of governing in an increasingly complex world.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                The book is particularly relevant for understanding how to navigate political challenges with 
                integrity, how to make difficult decisions under pressure, and how to maintain democratic values 
                in the face of populism and authoritarianism. Merkel's emphasis on evidence-based decision-making 
                and her commitment to multilateral cooperation offer a model for effective governance in our 
                interconnected world.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Beyond politics, the memoirs reveal the personal cost of leadership and the importance of 
                maintaining one's values and principles even in the most challenging circumstances. Merkel's 
                story is ultimately one of resilience, integrity, and the power of quiet determination—qualities 
                that are increasingly rare but desperately needed in our current political climate.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
