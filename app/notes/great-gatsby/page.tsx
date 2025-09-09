import Navigation from '@/components/Navigation'
import PlumBackground from '@/components/PlumBackground'
import { getNoteBySlug } from '@/lib/notes'
import { notFound } from 'next/navigation'
import { Lora } from 'next/font/google'

const lora = Lora({ subsets: ['latin'], display: 'swap' })

export default function GreatGatsbyPage() {
  const note = getNoteBySlug('great-gatsby')
  
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
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">The American Dream</h3>
                <p className="leading-relaxed">
                  Gatsby embodies the American Dream in its purest form—the belief that anyone can achieve 
                  anything through hard work and determination. His rise from poverty to wealth represents 
                  the promise of America, but Fitzgerald shows us the dark side of this dream. Gatsby's 
                  wealth is built on crime, and his dream of winning Daisy is ultimately impossible.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">The Green Light</h3>
                <p className="leading-relaxed">
                  The green light at the end of Daisy's dock becomes the novel's most powerful symbol. 
                  It represents Gatsby's hopes and dreams, but also the impossibility of recapturing 
                  the past. The light is both beautiful and unattainable, much like the American Dream 
                  itself. Fitzgerald's use of this symbol shows his mastery of literary technique.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">The Jazz Age</h3>
                <p className="leading-relaxed">
                  Fitzgerald captures the spirit of the 1920s with remarkable precision. The novel 
                  shows both the glamour and the emptiness of the Jazz Age—the parties, the wealth, 
                  the freedom, but also the moral decay and spiritual bankruptcy that lay beneath 
                  the surface. It's a portrait of an era that was both exhilarating and ultimately 
                  destructive.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Class and Social Mobility</h3>
                <p className="leading-relaxed">
                  The novel explores the rigid class structure of 1920s America. Despite Gatsby's 
                  wealth, he can never truly belong to the old money world of Tom and Daisy. His 
                  parties are attended by the nouveau riche, but the established elite remain 
                  separate. Fitzgerald shows how money alone cannot buy social acceptance or love.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">The Corruption of Love</h3>
                <p className="leading-relaxed">
                  Gatsby's love for Daisy is both pure and corrupted. He loves not the real Daisy, 
                  but an idealized version of her that exists only in his imagination. His love 
                  is based on a memory from five years ago, not on the woman she has become. 
                  This shows how the past can become more real than the present.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Nick Carraway as Narrator</h3>
                <p className="leading-relaxed">
                  Nick's role as narrator is crucial to the novel's impact. He's both participant 
                  and observer, close enough to the action to understand it, but distant enough 
                  to see it clearly. His moral compass and his ability to see through the 
                  illusions of others make him the perfect guide through this world of 
                  corruption and decay.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">The Valley of Ashes</h3>
                <p className="leading-relaxed">
                  The valley of ashes represents the moral and spiritual wasteland that lies 
                  between West Egg and New York. It's where the rich dump their waste, both 
                  literal and metaphorical. The eyes of Dr. T.J. Eckleburg watching over this 
                  wasteland suggest a God who has abandoned his creation, leaving only the 
                  hollow shell of religion.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">The Tragic Ending</h3>
                <p className="leading-relaxed">
                  Gatsby's death is both inevitable and tragic. He dies alone, abandoned by 
                  everyone except Nick. His funeral is attended by almost no one, showing 
                  how empty his life of parties and wealth really was. The novel ends with 
                  Nick's reflection on the impossibility of recapturing the past, and the 
                  futility of trying to escape one's origins.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Key Themes</h2>
              <div className="space-y-4">
                <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">The American Dream</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    The promise of upward mobility and success through hard work, and its ultimate failure.
                  </p>
                </div>
                <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">The Past vs. Present</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    The impossibility of recapturing the past and the danger of living in memory.
                  </p>
                </div>
                <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Class and Society</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    The rigid social hierarchy and the limits of wealth in achieving true belonging.
                  </p>
                </div>
                <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Moral Decay</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    The spiritual emptiness beneath the glittering surface of the Jazz Age.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Why This Book Matters</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                "The Great Gatsby" is more than a novel about the Jazz Age—it's a profound meditation 
                on the American Dream and the human condition. Fitzgerald's masterpiece captures the 
                spirit of an era while exploring timeless themes of love, loss, and the pursuit of 
                happiness.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                The novel's greatest strength is its emotional power. Fitzgerald's prose is both 
                beautiful and devastating, capable of capturing the ecstasy of love and the 
                despair of loss in a single sentence. His characters are complex and human, 
                flawed but sympathetic, making their tragedies all the more moving.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Perhaps most importantly, "The Great Gatsby" remains relevant because it speaks 
                to universal human experiences. The desire to recapture the past, the pursuit 
                of an unattainable ideal, the corruption of love by money and social status—these 
                are themes that resonate across time and culture. The novel reminds us that 
                the American Dream, while inspiring, can also be destructive when it becomes 
                an obsession that blinds us to reality.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
