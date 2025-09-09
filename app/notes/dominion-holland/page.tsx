import Navigation from '@/components/Navigation'
import PlumBackground from '@/components/PlumBackground'
import { getNoteBySlug } from '@/lib/notes'
import { notFound } from 'next/navigation'
import { Lora } from 'next/font/google'

const lora = Lora({ subsets: ['latin'], display: 'swap' })

export default function DominionHollandPage() {
  const note = getNoteBySlug('dominion-holland')
  
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
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">The Hidden Influence of Christianity</h3>
                <p className="leading-relaxed">
                  Holland's central argument is that Christian ideas continue to shape 
                  Western society even in our supposedly secular age. Concepts like 
                  human rights, equality, and the dignity of the individual have 
                  their roots in Christian theology, even when we no longer recognize 
                  their religious origins.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">The Revolutionary Nature of Christianity</h3>
                <p className="leading-relaxed">
                  Christianity was revolutionary in the ancient world because it 
                  challenged the hierarchical social order of the Roman Empire. 
                  The idea that all people are equal before God, regardless of 
                  social status, was radical and transformative. This egalitarian 
                  impulse continues to influence modern Western values.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">The Concept of Human Rights</h3>
                <p className="leading-relaxed">
                  The modern concept of human rights, Holland argues, is fundamentally 
                  Christian in origin. The idea that every person has inherent dignity 
                  and worth comes from the Christian belief that all humans are made 
                  in the image of God. This theological foundation underlies much of 
                  modern human rights discourse.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">The Secularization Paradox</h3>
                <p className="leading-relaxed">
                  Holland explores the paradox that as Western society has become 
                  more secular, it has also become more Christian in its values. 
                  The decline of religious practice has not meant the decline of 
                  Christian ethics; instead, these values have been secularized 
                  and universalized.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">The Influence on Modern Politics</h3>
                <p className="leading-relaxed">
                  Christian ideas continue to influence modern political movements, 
                  from the abolition of slavery to the civil rights movement to 
                  contemporary debates about social justice. The moral framework 
                  that drives these movements is often implicitly Christian, even 
                  when the participants are not religious.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">The Challenge to Traditional Hierarchies</h3>
                <p className="leading-relaxed">
                  Christianity's challenge to traditional hierarchies has had 
                  profound implications for Western society. The idea that the 
                  last shall be first and the first shall be last has influenced 
                  everything from political systems to social movements to 
                  economic theories.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">The Role of Suffering and Redemption</h3>
                <p className="leading-relaxed">
                  The Christian emphasis on suffering and redemption has shaped 
                  Western attitudes toward social problems and their solutions. 
                  The idea that suffering can be redemptive and that the oppressed 
                  have a special moral authority continues to influence modern 
                  social and political movements.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">The Future of Christian Values</h3>
                <p className="leading-relaxed">
                  Holland's analysis raises important questions about the future 
                  of Western society. If Christian values are so deeply embedded 
                  in our culture, what happens as religious practice continues 
                  to decline? Can these values survive without their theological 
                  foundation?
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Key Themes</h2>
              <div className="space-y-4">
                <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Hidden Christian Influence</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    How Christian ideas continue to shape secular Western society.
                  </p>
                </div>
                <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Human Rights and Dignity</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    The Christian origins of modern concepts of human rights and equality.
                  </p>
                </div>
                <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">The Secularization Paradox</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    How secularization has made society more Christian in its values.
                  </p>
                </div>
                <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Revolutionary Egalitarianism</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    How Christian ideas challenged and transformed hierarchical societies.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Why This Book Matters</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                "Dominion" is more than a history book—it's a profound exploration of 
                how ideas shape societies and how the past continues to influence 
                the present. Holland's analysis challenges us to understand the 
                deep roots of our modern values and beliefs.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                The book's greatest strength is its ability to make the familiar 
                strange and the strange familiar. By showing how Christian ideas 
                have been secularized and universalized, Holland helps us understand 
                both the power of religious ideas and the complexity of cultural 
                transmission across time.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Perhaps most importantly, "Dominion" forces us to confront the 
                question of what happens to a society when it loses touch with 
                the religious foundations of its values. In an age of increasing 
                secularization, Holland's analysis is both timely and essential 
                for understanding the future of Western civilization.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
