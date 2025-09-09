import Navigation from '@/components/Navigation'
import PlumBackground from '@/components/PlumBackground'
import { getNoteBySlug } from '@/lib/notes'
import { notFound } from 'next/navigation'
import { Lora } from 'next/font/google'

const lora = Lora({ subsets: ['latin'], display: 'swap' })

export default function DonQuixotePage() {
  const note = getNoteBySlug('don-quixote')
  
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
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">The Birth of the Modern Novel</h3>
                <p className="leading-relaxed">
                  "Don Quixote" is often considered the first modern novel, establishing many conventions 
                  that would define the genre for centuries. Cervantes created a complex narrative 
                  structure with multiple layers of reality, unreliable narrators, and self-referential 
                  humor that was revolutionary for its time.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Reality vs. Illusion</h3>
                <p className="leading-relaxed">
                  The central tension between Don Quixote's romantic vision of the world and the harsh 
                  reality around him drives the entire narrative. Cervantes explores how our perceptions 
                  shape our reality, and whether it's better to see the world as it is or as we wish 
                  it to be. This theme remains profoundly relevant today.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Sancho Panza: The Voice of Reason</h3>
                <p className="leading-relaxed">
                  Sancho Panza serves as both comic relief and the voice of practical wisdom. His 
                  relationship with Don Quixote represents the eternal struggle between idealism 
                  and pragmatism. Through their conversations, Cervantes explores the value of 
                  both perspectives and the wisdom that emerges from their interaction.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">The Power of Literature</h3>
                <p className="leading-relaxed">
                  Don Quixote's madness is caused by reading too many chivalric romances. Cervantes 
                  both celebrates and critiques the power of literature to shape our worldview. 
                  The novel is a meditation on how stories influence our understanding of reality 
                  and our place in the world.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Social Commentary</h3>
                <p className="leading-relaxed">
                  Through Don Quixote's adventures, Cervantes satirizes the social institutions 
                  of his time: the church, the nobility, the legal system, and the emerging 
                  middle class. The novel provides a panoramic view of Spanish society in the 
                  early 17th century, revealing both its virtues and its absurdities.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">The Nature of Heroism</h3>
                <p className="leading-relaxed">
                  Don Quixote redefines what it means to be a hero. His heroism lies not in 
                  his success, but in his unwavering commitment to his ideals. He fights for 
                  justice, protects the weak, and remains true to his code of honor, even 
                  when it leads to ridicule and failure.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">The Windmill Scene</h3>
                <p className="leading-relaxed">
                  The famous windmill scene encapsulates the novel's central themes. Don Quixote 
                  sees giants where others see windmills, but his courage in facing them is 
                  genuine. The scene raises profound questions about perception, courage, and 
                  the nature of reality itself.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">The Tragic Ending</h3>
                <p className="leading-relaxed">
                  Don Quixote's eventual return to sanity and his death represent the triumph 
                  of reality over illusion. But Cervantes leaves us wondering: was Don Quixote 
                  really mad, or was he the only one who saw the world clearly? The ending 
                  is both heartbreaking and ambiguous, forcing us to question our own assumptions.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Key Themes</h2>
              <div className="space-y-4">
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Idealism vs. Reality</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    The eternal struggle between how we wish the world to be and how it actually is.
                  </p>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">The Power of Stories</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    How literature and narrative shape our understanding of the world and ourselves.
                  </p>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">The Nature of Madness</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    Whether madness is a curse or a gift, and who gets to define what is sane.
                  </p>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">True Heroism</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    Heroism as commitment to ideals rather than success in achieving them.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Why This Book Matters</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                "Don Quixote" is more than a great novel—it's a foundational work that established 
                the modern novel as a serious art form. Cervantes's masterpiece explores themes 
                that remain central to human experience: the tension between idealism and reality, 
                the power of stories to shape our worldview, and the nature of heroism itself.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                The novel's greatest strength is its complexity and ambiguity. Cervantes doesn't 
                provide easy answers to the questions he raises. Is Don Quixote mad or wise? 
                Is it better to see the world as it is or as we wish it to be? The novel 
                invites us to grapple with these questions ourselves, making it a deeply 
                personal and thought-provoking reading experience.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Perhaps most importantly, "Don Quixote" reminds us of the value of idealism 
                in a world that often seems cynical and pragmatic. Don Quixote's commitment 
                to his ideals, however misguided they may seem, represents a kind of courage 
                that we all need. The novel challenges us to consider what we're willing to 
                fight for, even when the odds are against us and others think we're foolish.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
