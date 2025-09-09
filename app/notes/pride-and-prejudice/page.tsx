import Navigation from '@/components/Navigation'
import PlumBackground from '@/components/PlumBackground'
import { getNoteBySlug } from '@/lib/notes'
import { notFound } from 'next/navigation'
import { Lora } from 'next/font/google'

const lora = Lora({ subsets: ['latin'], display: 'swap' })

export default function PrideAndPrejudicePage() {
  const note = getNoteBySlug('pride-and-prejudice')
  
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
                  "It is a truth universally acknowledged, that a single man in possession of a good fortune, 
                  must be in want of a wife." This famous opening line immediately establishes Austen's 
                  satirical tone and the central theme of marriage as both a social necessity and economic 
                  transaction in Regency England.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Elizabeth Bennet</h3>
                <p className="leading-relaxed">
                  Elizabeth is one of literature's most beloved heroines—intelligent, independent, and 
                  unwilling to marry for anything less than love. Her wit and spirit make her a 
                  compelling protagonist, and her journey from prejudice to understanding forms the 
                  heart of the novel.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Mr. Darcy</h3>
                <p className="leading-relaxed">
                  Darcy's transformation from proud and aloof to humble and devoted is one of the 
                  novel's greatest achievements. Austen shows how first impressions can be misleading 
                  and how love can change even the most stubborn character.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Social Commentary</h3>
                <p className="leading-relaxed">
                  Austen's sharp observations about class, gender, and social expectations remain 
                  relevant today. The novel explores how society's rules and expectations can 
                  both constrain and liberate individuals, depending on their circumstances and choices.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">The Marriage Plot</h3>
                <p className="leading-relaxed">
                  The novel examines different approaches to marriage through its various couples. 
                  From the practical Charlotte Lucas to the passionate Lydia Bennet, Austen shows 
                  the many ways people approach this central institution of society.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Austen's Wit</h3>
                <p className="leading-relaxed">
                  Austen's humor and irony are among the novel's greatest strengths. Her ability 
                  to skewer social pretensions while maintaining affection for her characters 
                  creates a unique tone that is both satirical and warm.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">The Importance of Character</h3>
                <p className="leading-relaxed">
                  The novel emphasizes the importance of character over wealth or social position. 
                  Elizabeth's refusal to marry Mr. Collins despite the financial security it would 
                  provide shows Austen's belief in the primacy of personal values over social expectations.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">The Happy Ending</h3>
                <p className="leading-relaxed">
                  The novel's conclusion, with Elizabeth and Darcy's marriage, represents the 
                  triumph of love over prejudice and pride. Austen shows that true happiness 
                  comes from finding a partner who values you for who you are, not what you possess.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Key Themes</h2>
              <div className="space-y-4">
                <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">First Impressions</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    How initial judgments can be wrong and the importance of looking beyond appearances.
                  </p>
                </div>
                <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Social Class</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    The role of wealth and social position in determining marriage prospects and social standing.
                  </p>
                </div>
                <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Women's Agency</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    The limited options available to women and the importance of making wise choices.
                  </p>
                </div>
                <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">True Love</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    The importance of finding a partner who values character over wealth or social position.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Why This Book Matters</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                "Pride and Prejudice" is more than a romance novel—it's a brilliant social comedy 
                that explores the complexities of human nature and society. Austen's masterpiece 
                remains relevant because it addresses universal themes of love, class, and the 
                importance of character.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                The novel's greatest strength is its psychological depth and social insight. 
                Austen's characters are complex and realistic, and her observations about 
                human nature are as true today as they were in 1813. The novel shows how 
                prejudice and pride can blind us to the truth, but also how love and 
                understanding can overcome these obstacles.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Perhaps most importantly, "Pride and Prejudice" celebrates the power of 
                individual choice and the importance of staying true to one's values. 
                Elizabeth's refusal to compromise her principles, even when it would be 
                financially advantageous, is a powerful message about the importance of 
                integrity and self-respect in relationships and life.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
