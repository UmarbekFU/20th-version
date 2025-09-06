import Navigation from '@/components/Navigation'
import PlumBackground from '@/components/PlumBackground'
import { getNoteBySlug } from '@/lib/notes'
import { notFound } from 'next/navigation'

export default function ExcellentAdviceForLivingPage() {
  const note = getNoteBySlug('excellent-advice-for-living')
  
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
            
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Key Life Lessons</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                <strong>Embrace Uncertainty:</strong> Life is inherently uncertain, and the best approach 
                is to embrace this uncertainty rather than fight it. Learn to be comfortable with not knowing 
                and use it as a source of creativity and growth.
              </p>
              
              <p>
                <strong>Focus on Systems, Not Goals:</strong> Instead of obsessing over specific outcomes, 
                focus on building systems and processes that naturally lead to good results. Systems are 
                more reliable than goals because they can adapt and evolve.
              </p>
              
              <p>
                <strong>Learn to Learn:</strong> The most valuable skill is the ability to learn new things 
                quickly and effectively. In a rapidly changing world, the ability to adapt and acquire new 
                knowledge is more important than any specific expertise.
              </p>
              
              <p>
                <strong>Practice Gratitude:</strong> Regularly acknowledging what you're grateful for can 
                significantly improve your mental health and overall life satisfaction. Gratitude is a 
                practice that can be cultivated and strengthened over time.
              </p>
              
              <p>
                <strong>Embrace Failure:</strong> Failure is not the opposite of success; it's a necessary 
                part of the learning process. Each failure provides valuable information that can guide 
                future decisions and improve future outcomes.
              </p>
              
              <p>
                <strong>Build Relationships:</strong> The quality of your relationships is one of the most 
                important predictors of life satisfaction. Invest time and energy in building and maintaining 
                meaningful connections with others.
              </p>
              
              <p>
                <strong>Stay Curious:</strong> Maintain a sense of wonder and curiosity about the world. 
                Curiosity is the driving force behind learning, creativity, and personal growth. It keeps 
                you engaged and motivated throughout life.
              </p>
              
              <p>
                <strong>Practice Patience:</strong> Good things take time to develop. Learn to be patient 
                with yourself and others, and understand that meaningful progress often happens slowly and 
                incrementally.
              </p>
            </div>
            
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4 mt-8">Why This Book Matters</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              "Excellent Advice for Living" distills decades of wisdom from one of the most thoughtful 
              observers of technology and culture. Kelly's insights are practical, actionable, and grounded 
              in real experience. This book serves as a valuable guide for anyone looking to navigate life 
              with more wisdom, purpose, and effectiveness. It's particularly valuable for young people 
              starting their journey and anyone looking to reflect on and improve their approach to living.
            </p>
          </div>
        </div>
      </main>
    </>
  )
}
