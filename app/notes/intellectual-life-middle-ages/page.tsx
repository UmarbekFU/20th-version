import Navigation from '@/components/Navigation'
import PlumBackground from '@/components/PlumBackground'
import { getNoteBySlug } from '@/lib/notes'
import { notFound } from 'next/navigation'
import { Lora } from 'next/font/google'

const lora = Lora({ subsets: ['latin'], display: 'swap' })

export default function IntellectualLifeMiddleAgesPage() {
  const note = getNoteBySlug('intellectual-life-middle-ages')
  
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
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">The Rise of Universities</h3>
                <p className="leading-relaxed">
                  The Middle Ages saw the birth of the university system, with 
                  institutions like Paris, Oxford, and Bologna becoming centers 
                  of learning. These universities were not just places of 
                  education but also intellectual communities where scholars 
                  could debate, collaborate, and advance knowledge.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Scholasticism and Logic</h3>
                <p className="leading-relaxed">
                  The scholastic method, which emphasized logical reasoning and 
                  debate, became the dominant intellectual approach of the period. 
                  Scholars like Thomas Aquinas used this method to reconcile 
                  faith and reason, creating sophisticated philosophical systems 
                  that would influence Western thought for centuries.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">The Role of the Church</h3>
                <p className="leading-relaxed">
                  The Catholic Church was the primary patron of learning during 
                  the Middle Ages, providing funding, protection, and intellectual 
                  direction. Monasteries served as centers of scholarship, 
                  preserving and transmitting knowledge from antiquity.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">The Translation Movement</h3>
                <p className="leading-relaxed">
                  The translation of Greek and Arabic texts into Latin was one 
                  of the most important intellectual developments of the period. 
                  This movement brought ancient knowledge back to Western Europe 
                  and laid the foundation for the Renaissance.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">The Development of Science</h3>
                <p className="leading-relaxed">
                  Despite popular misconceptions, the Middle Ages saw significant 
                  advances in science and technology. Scholars like Roger Bacon 
                  and Albertus Magnus made important contributions to fields 
                  such as optics, astronomy, and natural philosophy.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">The Role of Women</h3>
                <p className="leading-relaxed">
                  While women faced significant barriers to formal education, 
                  some were able to participate in intellectual life through 
                  convents, courts, and other institutions. Figures like 
                  Hildegard of Bingen and Christine de Pizan made important 
                  contributions to medieval thought.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">The Impact of the Plague</h3>
                <p className="leading-relaxed">
                  The Black Death had a profound impact on intellectual life, 
                  leading to both crisis and innovation. The devastation caused 
                  by the plague forced scholars to rethink traditional approaches 
                  and led to new forms of scholarship and artistic expression.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">The Legacy of Medieval Learning</h3>
                <p className="leading-relaxed">
                  The intellectual achievements of the Middle Ages laid the 
                  foundation for the Renaissance and the Scientific Revolution. 
                  The university system, scholastic method, and translation 
                  movement all contributed to the development of modern 
                  Western civilization.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Key Themes</h2>
              <div className="space-y-4">
                <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">The University System</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    The birth and development of the modern university system.
                  </p>
                </div>
                <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Scholasticism</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    The dominant intellectual method of the period, emphasizing logic and debate.
                  </p>
                </div>
                <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">The Translation Movement</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    The revival of ancient knowledge through translation and scholarship.
                  </p>
                </div>
                <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">The Role of the Church</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    How the Catholic Church shaped and supported intellectual life.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Why This Book Matters</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                "Intellectual Life in the Middle Ages" is more than a history book—it's 
                a comprehensive exploration of a period that is often misunderstood 
                and underestimated. Smith's work reveals the sophistication and 
                diversity of medieval thought, challenging common stereotypes about 
                the "Dark Ages."
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                The book's greatest strength is its ability to show how medieval 
                intellectual life was both continuous with and different from 
                ancient and modern learning. By exploring the universities, 
                scholars, and ideas of the period, Smith helps us understand 
                the complex intellectual landscape of the Middle Ages.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Perhaps most importantly, "Intellectual Life in the Middle Ages" 
                reminds us that the Middle Ages were not a period of intellectual 
                stagnation but a time of significant innovation and achievement. 
                The period's contributions to education, science, and philosophy 
                continue to influence our world today, making it essential reading 
                for anyone interested in the history of ideas.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
