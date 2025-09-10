# Note Page Template

Each note page should be completely self-contained with no external dependencies. Here's the simple pattern:

## Book Page Template

```tsx
import Navigation from '@/components/Navigation'
import MarkdownRenderer from '@/components/MarkdownRenderer'
import PlumBackground from '@/components/PlumBackground'
import { Lora } from 'next/font/google'

const lora = Lora({ subsets: ['latin'], display: 'swap' })

export default function BookPage() {
  // All data is self-contained - no external dependencies
  const title = "Book Title"
  const author = "Author Name"
  const date = "2024"
  const rating = 9
  const coverImage = "https://via.placeholder.com/300x400/%23color/ffffff?text=Book+Title+by+Author"
  const spineColor = "#color"
  const textColor = "#ffffff"
  const summary = "Brief summary of the book."
  const lastRead = "2024-12-14"
  
  const content = `## My Notes

Your detailed notes here...

## Key Takeaways

- Point 1
- Point 2

## Why This Book Matters

Your analysis here...`

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
                Rating: {rating}/10
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
                📚 Date Tracking
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Last Read:</strong> {new Date(lastRead).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </p>
            </div>
            
            <MarkdownRenderer content={content} />
          </div>
        </div>
      </main>
    </>
  )
}
```

## Podcast Page Template

For podcasts, use `🎧` icon and `Last Listened` instead of `Last Read`.

## Course Page Template

For courses, use `🎓` icon and `Course Taken` instead of `Last Read`.

## Key Principles

1. **No external dependencies** - All data is defined within the component
2. **Self-contained date tracking** - Inline JSX, no separate component
3. **Simple variables** - Individual const declarations, not objects
4. **One fold** - Each file stands alone, no braiding with other files

This is **simple** (one fold) not **easy** (familiar). It requires more initial work but creates true independence.
