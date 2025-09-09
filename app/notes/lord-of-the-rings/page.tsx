import Navigation from '@/components/Navigation'
import PlumBackground from '@/components/PlumBackground'
import { getNoteBySlug } from '@/lib/notes'
import { notFound } from 'next/navigation'
import { Lora } from 'next/font/google'

const lora = Lora({ subsets: ['latin'], display: 'swap' })

export default function LordOfTheRingsPage() {
  const note = getNoteBySlug('lord-of-the-rings')
  
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
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">The Power of the Ring</h3>
                <p className="leading-relaxed">
                  The One Ring represents the corrupting influence of power and the 
                  temptation to use evil means for good ends. Tolkien's exploration 
                  of how power corrupts even the most noble intentions is one of 
                  the most profound themes in fantasy literature.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">The Fellowship</h3>
                <p className="leading-relaxed">
                  The diverse group of characters in the Fellowship represents 
                  different aspects of heroism and the importance of cooperation 
                  in facing great challenges. Each member brings unique strengths 
                  and weaknesses, showing that true heroism comes in many forms.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Frodo's Burden</h3>
                <p className="leading-relaxed">
                  Frodo's journey with the Ring is both physical and spiritual. 
                  His gradual corruption by the Ring's power shows how even the 
                  purest hearts can be tempted and how the burden of responsibility 
                  can become overwhelming.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">The World-Building</h3>
                <p className="leading-relaxed">
                  Tolkien's creation of Middle-earth is unparalleled in its depth 
                  and detail. From the languages and cultures to the geography and 
                  history, every aspect of the world feels real and lived-in. 
                  This attention to detail creates an immersive reading experience.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">The Nature of Evil</h3>
                <p className="leading-relaxed">
                  Sauron represents pure evil, but Tolkien's portrayal of evil is 
                  more nuanced than simple black and white. The Ring's corruption 
                  affects everyone differently, and even the most evil characters 
                  have complex motivations and histories.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">The Theme of Sacrifice</h3>
                <p className="leading-relaxed">
                  Throughout the trilogy, characters must make difficult choices 
                  and sacrifices for the greater good. From Gandalf's fall in 
                  Moria to Frodo's decision to leave the Shire, the story 
                  explores the cost of heroism and the price of victory.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">The Scouring of the Shire</h3>
                <p className="leading-relaxed">
                  The final chapter, where the hobbits return to find their 
                  homeland corrupted, is one of the most powerful in the trilogy. 
                  It shows that evil doesn't just exist in faraway places—it 
                  can corrupt even the most innocent and peaceful communities.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">The End of the Third Age</h3>
                <p className="leading-relaxed">
                  The trilogy's ending, with the departure of the elves and 
                  the beginning of the Age of Men, represents a bittersweet 
                  transition. It shows that all good things must come to an 
                  end, but also that new beginnings are possible.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Key Themes</h2>
              <div className="space-y-4">
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">The Corrupting Power of Power</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    How the desire for power can corrupt even the most noble intentions.
                  </p>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">The Importance of Friendship</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    How friendship and loyalty can help us overcome even the greatest challenges.
                  </p>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">The Nature of Heroism</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    True heroism often comes from unexpected places and requires great sacrifice.
                  </p>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">The End of an Era</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    How great changes mark the end of one age and the beginning of another.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Why This Book Matters</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                "The Lord of the Rings" is more than a fantasy epic—it's a profound 
                exploration of good and evil, power and corruption, and the nature 
                of heroism. Tolkien's masterpiece has influenced countless works of 
                fantasy and continues to resonate with readers of all ages.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                The trilogy's greatest strength is its emotional depth and moral 
                complexity. While the story is set in a fantastical world, the 
                themes and characters feel real and relatable. Tolkien's exploration 
                of friendship, sacrifice, and the corrupting influence of power 
                speaks to universal human experiences.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Perhaps most importantly, "The Lord of the Rings" reminds us that 
                even the smallest and most ordinary people can make a difference 
                in the world. Frodo's journey from a simple hobbit to the savior 
                of Middle-earth shows that heroism is not about being powerful or 
                perfect, but about being willing to do what's right, even when 
                it's difficult and dangerous.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
