import Navigation from '@/components/Navigation'
import MarkdownRenderer from '@/components/MarkdownRenderer'
import PlumBackground from '@/components/PlumBackground'
import { Lora } from 'next/font/google'

const lora = Lora({ subsets: ['latin'], display: 'swap' })

export default function ThePsychologyofMoneywithMorganHouselPage() {
  // All data is self-contained - no external dependencies
  const title = "The Psychology of Money with Morgan Housel"
  const author = "The Knowledge Project"
  const date = "February 2024"
  const rating = 8
  const coverImage = "https://via.placeholder.com/300x400/%2310b981/ffffff?text=The%20Psychology%20of%20Money%20with%20Morgan%20Housel+by+The%20Knowledge%20Project"
  const spineColor = "#1e40af"
  const textColor = "#ffffff"
  const summary = "Morgan Housel discusses the psychology behind financial decisions, the difference between being rich and being wealthy, and how our emotions drive our money choices."
  const category = "podcast"
  const duration = "1.5 hours"
  const url = "https://fs.blog/knowledge-project/"
  const tags = ["finance","psychology","money","behavior"]
  
  const content = `## My Notes

*Notes will be added here soon.*

---

## Date Tracking

*Track when you last engaged with this content:*

- **Last Listened:** *[Add date here]*
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
                Rating: {rating}/10 • Duration: 1.5 hours • <a href="https://fs.blog/knowledge-project/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">Visit Source</a> • Tags: finance, psychology, money, behavior
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
                🎧 Date Tracking
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Last Listened:</strong> *[Add date here]*
              </p>
            </div>
            
            <MarkdownRenderer content={content} />
          </div>
        </div>
      </main>
    </>
  )
}