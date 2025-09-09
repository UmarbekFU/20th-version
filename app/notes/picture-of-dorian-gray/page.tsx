import Navigation from '@/components/Navigation'
import PlumBackground from '@/components/PlumBackground'
import { getNoteBySlug } from '@/lib/notes'
import { notFound } from 'next/navigation'
import { Lora } from 'next/font/google'

const lora = Lora({ subsets: ['latin'], display: 'swap' })

export default function PictureOfDorianGrayPage() {
  const note = getNoteBySlug('picture-of-dorian-gray')
  
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
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">The Aesthetic Philosophy</h3>
                <p className="leading-relaxed">
                  Wilde's novel is a profound exploration of aestheticism and the philosophy of art for art's sake. 
                  Through Lord Henry's influence, we see how the pursuit of beauty and pleasure can become a 
                  dangerous obsession. The book questions whether art should serve moral purposes or exist purely 
                  for its own beauty—a debate that remains relevant in contemporary discussions about art and culture.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">The Duality of Human Nature</h3>
                <p className="leading-relaxed">
                  The portrait serves as a brilliant metaphor for the hidden aspects of our psyche. While Dorian 
                  maintains his outward beauty and innocence, his portrait reveals the true state of his soul—corrupted 
                  by his actions. This duality speaks to the universal human experience of maintaining appearances 
                  while harboring darker impulses within.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">The Corruption of Influence</h3>
                <p className="leading-relaxed">
                  Lord Henry's role as the tempter figure is masterfully crafted. His witty aphorisms and 
                  sophisticated arguments gradually corrupt Dorian's moral compass. The novel explores how 
                  charismatic individuals can lead others astray through the power of persuasion and the 
                  seduction of ideas.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">The Price of Eternal Youth</h3>
                <p className="leading-relaxed">
                  Dorian's wish for eternal beauty comes at a terrible cost—the corruption of his soul. 
                  Wilde brilliantly shows how the pursuit of superficial perfection can lead to spiritual 
                  decay. The novel serves as a cautionary tale about the dangers of vanity and the 
                  impossibility of escaping the consequences of one's actions.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Art as a Mirror</h3>
                <p className="leading-relaxed">
                  The portrait functions as a literal mirror of Dorian's soul, but it also represents 
                  how art can reflect and reveal truths about human nature. Wilde suggests that true 
                  art has the power to expose our deepest selves, for better or worse. The painting 
                  becomes a character in its own right, silently witnessing and recording Dorian's descent.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">The Decadence of Victorian Society</h3>
                <p className="leading-relaxed">
                  Wilde uses Dorian's story to critique the hypocrisy of Victorian society, where outward 
                  respectability often masked inner corruption. The novel exposes the double standards 
                  of a society that prized appearances over substance, and the destructive consequences 
                  of such superficial values.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">The Power of Language</h3>
                <p className="leading-relaxed">
                  Wilde's prose is a masterpiece of wit and elegance. Every line is carefully crafted, 
                  and the dialogue sparkles with intelligence and humor. The novel demonstrates how 
                  language can be used to seduce, manipulate, and reveal character. Lord Henry's 
                  epigrams are particularly memorable for their insight and cynicism.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">The Tragic Hero</h3>
                <p className="leading-relaxed">
                  Despite his moral failings, Dorian remains a compelling and sympathetic character. 
                  His tragic flaw—his vanity and desire for eternal youth—leads to his downfall, 
                  but Wilde allows us to see the humanity beneath the corruption. This complexity 
                  makes the novel's ending all the more powerful and haunting.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Memorable Quotes</h2>
              <div className="space-y-4">
                <blockquote className="border-l-4 border-red-500 pl-4 italic text-gray-700 dark:text-gray-300">
                  "The only way to get rid of a temptation is to yield to it."
                </blockquote>
                <blockquote className="border-l-4 border-red-500 pl-4 italic text-gray-700 dark:text-gray-300">
                  "There is only one thing in the world worse than being talked about, and that is not being talked about."
                </blockquote>
                <blockquote className="border-l-4 border-red-500 pl-4 italic text-gray-700 dark:text-gray-300">
                  "I have grown to love secrecy. It seems to be the one thing that can make modern life mysterious or marvellous to us."
                </blockquote>
                <blockquote className="border-l-4 border-red-500 pl-4 italic text-gray-700 dark:text-gray-300">
                  "The books that the world calls immoral are books that show the world its own shame."
                </blockquote>
                <blockquote className="border-l-4 border-red-500 pl-4 italic text-gray-700 dark:text-gray-300">
                  "Every portrait that is painted with feeling is a portrait of the artist, not of the sitter."
                </blockquote>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Why This Book Matters</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                "The Picture of Dorian Gray" is more than just a Gothic novel—it's a profound meditation on 
                the nature of beauty, morality, and the human condition. Wilde's masterpiece challenges us 
                to examine our own relationship with appearance, influence, and the consequences of our actions.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                The novel's exploration of aestheticism and the philosophy of art remains relevant today, 
                as we continue to grapple with questions about the purpose of art and the role of beauty 
                in our lives. Wilde's wit and wisdom offer insights that transcend the Victorian era and 
                speak to universal human experiences.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Perhaps most importantly, the book serves as a timeless warning about the dangers of 
                vanity, the corruption of influence, and the impossibility of escaping the consequences 
                of our choices. In our age of social media and curated identities, Dorian's story 
                feels more relevant than ever—a reminder that true beauty comes from within and that 
                our actions, not our appearances, define who we truly are.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
