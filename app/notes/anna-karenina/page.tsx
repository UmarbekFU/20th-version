import Navigation from '@/components/Navigation'
import PlumBackground from '@/components/PlumBackground'
import { getNoteBySlug } from '@/lib/notes'
import { notFound } from 'next/navigation'
import { Lora } from 'next/font/google'

const lora = Lora({ subsets: ['latin'], display: 'swap' })

export default function AnnaKareninaPage() {
  const note = getNoteBySlug('anna-karenina')
  
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
                  "Happy families are all alike; every unhappy family is unhappy in its own way." 
                  This famous opening line sets the stage for Tolstoy's exploration of the 
                  complexities of human relationships. The novel examines how different forms 
                  of unhappiness manifest in various family structures and social contexts.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Anna's Tragic Arc</h3>
                <p className="leading-relaxed">
                  Anna Karenina's story is one of the most psychologically complex in literature. 
                  Her affair with Vronsky begins as passionate love but becomes a source of 
                  torment and social isolation. Tolstoy masterfully shows how society's judgment 
                  and her own internal conflicts lead to her tragic end.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Levin's Spiritual Journey</h3>
                <p className="leading-relaxed">
                  Konstantin Levin serves as Tolstoy's alter ego, representing the author's 
                  own struggles with meaning and purpose. Levin's journey from intellectual 
                  despair to spiritual fulfillment through work, family, and faith provides 
                  a counterpoint to Anna's tragic story.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">The Double Plot Structure</h3>
                <p className="leading-relaxed">
                  Tolstoy's use of parallel plots—Anna's tragic love story and Levin's 
                  redemptive journey—creates a rich tapestry of human experience. The 
                  contrast between these two paths illuminates different approaches to 
                  love, happiness, and the search for meaning in life.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Social Commentary</h3>
                <p className="leading-relaxed">
                  The novel provides a panoramic view of Russian society in the 1870s, 
                  exploring the lives of aristocrats, peasants, intellectuals, and 
                  government officials. Tolstoy examines how social class, gender roles, 
                  and political change affect individual lives and relationships.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">The Psychology of Love</h3>
                <p className="leading-relaxed">
                  Tolstoy's exploration of love is remarkably nuanced. He shows how love 
                  can be both liberating and destructive, how it can bring both joy and 
                  suffering. The novel examines different types of love: passionate, 
                  companionate, familial, and spiritual.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">The Role of Women</h3>
                <p className="leading-relaxed">
                  Through Anna, Kitty, and Dolly, Tolstoy explores the limited options 
                  available to women in 19th-century Russian society. Each character 
                  represents a different response to these constraints, from rebellion 
                  to resignation to finding meaning within traditional roles.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">The Train Scene</h3>
                <p className="leading-relaxed">
                  The novel's opening scene, where Anna witnesses a railway accident, 
                  foreshadows her own tragic end. The train becomes a symbol of both 
                  progress and destruction, representing the forces of modernity that 
                  are transforming Russian society and individual lives.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Key Themes</h2>
              <div className="space-y-4">
                <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Love and Marriage</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    The different forms of love and the challenges of maintaining relationships.
                  </p>
                </div>
                <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Social Conventions</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    The tension between individual desire and social expectations.
                  </p>
                </div>
                <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">The Search for Meaning</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    Different paths to finding purpose and fulfillment in life.
                  </p>
                </div>
                <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Moral Responsibility</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    The consequences of our choices and the weight of moral decisions.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Why This Book Matters</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                "Anna Karenina" is more than a great novel—it's a profound exploration of the 
                human condition that remains relevant across cultures and centuries. Tolstoy's 
                masterpiece examines the fundamental questions of love, happiness, and meaning 
                with a depth and complexity that few works can match.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                The novel's greatest strength is its psychological realism. Tolstoy's characters 
                are complex, contradictory, and deeply human. Their struggles with love, duty, 
                and meaning resonate with readers because they reflect universal human experiences. 
                The novel doesn't provide easy answers, but it helps us understand the complexity 
                of our own lives and relationships.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Perhaps most importantly, "Anna Karenina" challenges us to think deeply about 
                the choices we make and their consequences. Through Anna's tragic story and 
                Levin's redemptive journey, Tolstoy shows us different paths through life and 
                invites us to consider which path we want to take. The novel is both a mirror 
                of human experience and a guide for living a meaningful life.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
