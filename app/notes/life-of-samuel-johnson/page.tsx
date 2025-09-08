import Navigation from '@/components/Navigation'
import PlumBackground from '@/components/PlumBackground'
import { getNoteBySlug } from '@/lib/notes'
import { notFound } from 'next/navigation'
import { Lora } from 'next/font/google'

const lora = Lora({ subsets: ['latin'], display: 'swap' })

export default function LifeOfSamuelJohnsonPage() {
  const note = getNoteBySlug('life-of-samuel-johnson')
  
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
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">The Art of Biography</h3>
                <p className="leading-relaxed">
                  Boswell's approach to biography was revolutionary for its time. Rather than presenting a sanitized, 
                  hagiographic account, he captured Johnson in all his complexity—his wit, his melancholy, his prejudices, 
                  and his profound humanity. This honest portrayal makes Johnson feel remarkably alive and relatable.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Johnson's Wit and Wisdom</h3>
                <p className="leading-relaxed">
                  The book is filled with Johnson's memorable quotes and observations. His ability to cut through 
                  pretension with sharp wit while maintaining deep compassion for human frailty is extraordinary. 
                  His thoughts on literature, morality, and human nature remain remarkably relevant today.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">The Power of Conversation</h3>
                <p className="leading-relaxed">
                  Boswell shows us the lost art of meaningful conversation. The gatherings at Johnson's club, 
                  the debates over dinner, the late-night discussions—these scenes reveal how intellectual 
                  discourse and friendship can elevate the human spirit. It's a reminder of what we've lost 
                  in our digital age.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Johnson's Struggles</h3>
                <p className="leading-relaxed">
                  What makes this biography so powerful is that Boswell doesn't shy away from Johnson's struggles 
                  with depression, his financial difficulties, or his personal failings. This vulnerability 
                  makes Johnson's achievements all the more inspiring—he was a great man despite, not because of, 
                  his perfections.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">The Dictionary Project</h3>
                <p className="leading-relaxed">
                  Boswell's detailed account of Johnson's work on the Dictionary of the English Language reveals 
                  the monumental effort behind this achievement. The story of how Johnson single-handedly 
                  compiled the first comprehensive English dictionary is both inspiring and humbling.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Friendship and Loyalty</h3>
                <p className="leading-relaxed">
                  The relationship between Boswell and Johnson is itself a study in friendship. Boswell's 
                  devotion to Johnson, despite the latter's often difficult personality, shows the depth 
                  of human connection possible when we look beyond surface irritations to see the soul within.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Timeless Relevance</h3>
                <p className="leading-relaxed">
                  Despite being written over two centuries ago, this biography feels remarkably modern. 
                  Johnson's observations about human nature, society, and the pursuit of knowledge are 
                  as insightful today as they were in the 18th century. It's a testament to the universality 
                  of great literature.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Key Quotes</h2>
              <div className="space-y-4">
                <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-700 dark:text-gray-300">
                  "The true measure of a man is how he treats someone who can do him absolutely no good."
                </blockquote>
                <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-700 dark:text-gray-300">
                  "When a man is tired of London, he is tired of life; for there is in London all that life can afford."
                </blockquote>
                <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-700 dark:text-gray-300">
                  "No man but a blockhead ever wrote, except for money."
                </blockquote>
                <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-700 dark:text-gray-300">
                  "Patriotism is the last refuge of a scoundrel."
                </blockquote>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Why This Book Matters</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                "The Life of Samuel Johnson" is more than just a biography—it's a masterclass in human observation, 
                a celebration of intellectual friendship, and a window into 18th-century London society. Boswell's 
                achievement lies not just in documenting Johnson's life, but in capturing the essence of what it 
                means to be human: flawed, brilliant, struggling, and ultimately inspiring.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                This book reminds us that greatness isn't about perfection—it's about authenticity, intellectual 
                curiosity, and the courage to be fully human. In our age of curated social media personas and 
                superficial connections, Johnson's raw honesty and Boswell's faithful documentation offer a 
                refreshing alternative: the beauty of genuine human complexity.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
