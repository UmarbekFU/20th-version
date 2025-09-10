import Navigation from '@/components/Navigation'
import MarkdownRenderer from '@/components/MarkdownRenderer'
import PlumBackground from '@/components/PlumBackground'
import { Lora } from 'next/font/google'

const lora = Lora({ subsets: ['latin'], display: 'swap' })

export default function TheCompleteFullStackWebDevelopmentBootcampPage() {
  // All data is self-contained - no external dependencies
  const title = "The Complete Full-Stack Web Development Bootcamp"
  const author = "Angela Yu"
  const date = "2024"
  const rating = 9
  const coverImage = "https://picsum.photos/300/400?random=1"
  const spineColor = "#f59e0b"
  const textColor = "#ffffff"
  const summary = "A comprehensive bootcamp covering HTML, CSS, JavaScript, Node.js, React, MongoDB, and more. Perfect for beginners looking to become full-stack developers."
  const duration = "65+ hours"
  const url = "https://www.udemy.com/course/the-complete-web-development-bootcamp/"
  const tags = ["web-development","javascript","react","nodejs","mongodb","html","css"]
  const category = "course"
  
  const content = `## My Notes

*Notes will be added here soon.*

---

## Date Tracking

*Track when you last engaged with this content:*

- **Course Taken:** *[Add date here]*
- **Notes:** *[Add any additional notes about your experience]*`

  return (
    <>
      <PlumBackground />
      <Navigation />
      <main className="min-h-screen pt-32">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <img
              src={coverImage}
              alt={title}
              className="w-32 h-40 md:w-40 md:h-52 object-cover rounded border border-gray-200 dark:border-gray-700 flex-shrink-0"
            />
            <div className="flex-1">
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                {title}
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">
                by {author}
              </p>
              <p className="text-gray-500 dark:text-gray-500 mb-6">
                Rating: {rating}/10 • Duration: 65+ hours • <a href="https://www.udemy.com/course/the-complete-web-development-bootcamp/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">Visit Source</a>
              </p>
            </div>
          </div>
          
          <div className="mt-8 prose prose-lg max-w-none">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Summary</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              {summary}
            </p>
            
            {/* Date tracking - self-contained */}
            <div className="mt-6 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2 flex items-center">
                🎓 Date Tracking
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Course Taken:</strong> *[Add date here]*
              </p>
            </div>
            
            <MarkdownRenderer content={content} />
          </div>
        </div>
      </main>
    </>
  )
}