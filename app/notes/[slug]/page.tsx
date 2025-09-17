import Navigation from '@/components/Navigation'
import { notFound } from 'next/navigation'
import { Lora } from 'next/font/google'
import fs from 'fs'
import path from 'path'

const lora = Lora({ subsets: ['latin'], display: 'swap' })

interface NoteMetadata {
  title: string
  author: string
  date: string
  rating: number
  category: 'book' | 'podcast' | 'course' | 'video' | 'essay' | 'documentary'
  summary: string
  spineColor: string
  textColor: string
  coverImage: string
  duration?: string
  url?: string
  content?: string
  keyInsights?: string[]
  quotes?: string[]
  tags?: string[]
}

// Function to get category icon
function getCategoryIcon(category: NoteMetadata['category']): string {
  const icons: Record<NoteMetadata['category'], string> = {
    book: '📚',
    podcast: '🎧',
    course: '🎓',
    video: '🎥',
    essay: '📝',
    documentary: '🎬'
  }
  
  return icons[category] || '📄'
}

// Function to dynamically get note by slug
function getNoteBySlug(slug: string): NoteMetadata | null {
  try {
    const metadataFile = path.join(process.cwd(), 'app', 'notes', slug, 'metadata.ts')
    
    if (!fs.existsSync(metadataFile)) {
      return null
    }
    
    const fileContent = fs.readFileSync(metadataFile, 'utf-8')
    
    // Extract noteMetadata from the file
    const metadataMatch = fileContent.match(/export const noteMetadata = \{([\s\S]*?)\}/)
    if (!metadataMatch) {
      return null
    }
    
    const metadataContent = metadataMatch[1]
    
    // Extract all fields using regex
    const titleMatch = metadataContent.match(/title:\s*["']([^"']+)["']/)
    const authorMatch = metadataContent.match(/author:\s*["']([^"']+)["']/)
    const dateMatch = metadataContent.match(/date:\s*["']([^"']+)["']/)
    const ratingMatch = metadataContent.match(/rating:\s*(\d+)/)
    const categoryMatch = metadataContent.match(/category:\s*["']([^"']+)["']/)
    const summaryMatch = metadataContent.match(/summary:\s*["']([^"']+)["']/)
    const spineColorMatch = metadataContent.match(/spineColor:\s*["']([^"']+)["']/)
    const textColorMatch = metadataContent.match(/textColor:\s*["']([^"']+)["']/)
    const coverImageMatch = metadataContent.match(/coverImage:\s*["']([^"']+)["']/)
    const durationMatch = metadataContent.match(/duration:\s*["']([^"']+)["']/)
    const urlMatch = metadataContent.match(/url:\s*["']([^"']+)["']/)
    
    if (!titleMatch || !authorMatch || !dateMatch || !ratingMatch || !categoryMatch || !summaryMatch || !spineColorMatch || !textColorMatch || !coverImageMatch) {
      return null
    }
    
    return {
      title: titleMatch[1],
      author: authorMatch[1],
      date: dateMatch[1],
      rating: parseInt(ratingMatch[1]),
      category: categoryMatch[1] as NoteMetadata['category'],
      summary: summaryMatch[1],
      spineColor: spineColorMatch[1],
      textColor: textColorMatch[1],
      coverImage: coverImageMatch[1],
      duration: durationMatch ? durationMatch[1] : undefined,
      url: urlMatch ? urlMatch[1] : undefined,
      content: undefined,
      keyInsights: undefined,
      quotes: undefined,
      tags: undefined
    }
  } catch (error) {
    console.warn(`Could not load note ${slug}:`, error)
    return null
  }
}

interface NotePageProps {
  params: {
    slug: string
  }
}

export default function NotePage({ params }: NotePageProps) {
  const note = getNoteBySlug(params.slug)
  
  if (!note) {
    notFound()
  }

  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-32">
        <div className="max-w-4xl mx-auto px-8">

          {/* Note Header */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-48 h-64 rounded-lg shadow-lg overflow-hidden">
                <img
                  src={note.coverImage}
                  alt={note.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <h1 className={`text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4 ${lora.className}`}>
                  {note.title}
                </h1>
                <p className={`text-xl text-gray-600 dark:text-gray-400 mb-2 ${lora.className}`}>
                  by {note.author}
                </p>
                <p className={`text-lg text-gray-500 dark:text-gray-500 mb-4 ${lora.className}`}>
                  {note.category === 'book' ? 'Read' : note.category === 'podcast' ? 'Listened' : 'Completed'}: {note.date} • Rating: {note.rating}/10
                  {note.duration && ` • ${note.duration}`}
                </p>
                <div className="flex gap-2 mb-6">
                  <span className={`px-3 py-1 ${
                    note.category === 'book' ? 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200' :
                    note.category === 'podcast' ? 'bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200' :
                    'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200'
                  } rounded-full text-sm`}>
                    {getCategoryIcon(note.category)} {note.category}
                  </span>
                </div>
                <p className={`text-lg text-gray-700 dark:text-gray-300 leading-relaxed ${lora.className}`}>
                  {note.summary}
                </p>
                {note.url && (
                  <div className="mt-4">
                    <a
                      href={note.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
                    >
                      {note.category === 'podcast' ? 'Listen' : note.category === 'course' ? 'Take Course' : 'View'} →
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Note Content */}
          <div className={`prose prose-lg max-w-none dark:prose-invert ${lora.className}`}>
            <h2 className={`text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6 ${lora.className}`}>My Notes</h2>
            <div className={`space-y-8 text-gray-700 dark:text-gray-300 ${lora.className}`}>
              {note.content ? (
                <div className="space-y-6">
                  <p className="text-lg leading-relaxed">{note.content}</p>
                  
                  {note.keyInsights && note.keyInsights.length > 0 && (
                    <div>
                      <h3 className={`text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4 ${lora.className}`}>Key Insights</h3>
                      <ul className="space-y-2">
                        {note.keyInsights.map((insight, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-blue-500 mr-2">•</span>
                            <span>{insight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {note.quotes && note.quotes.length > 0 && (
                    <div>
                      <h3 className={`text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4 ${lora.className}`}>Notable Quotes</h3>
                      <div className="space-y-4">
                        {note.quotes.map((quote, index) => (
                          <blockquote key={index} className="border-l-4 border-blue-500 pl-4 italic text-gray-600 dark:text-gray-400">
                            "{quote}"
                          </blockquote>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {note.tags && note.tags.length > 0 && (
                    <div>
                      <h3 className={`text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4 ${lora.className}`}>Tags</h3>
                      <div className="flex flex-wrap gap-2">
                        {note.tags.map((tag, index) => (
                          <span key={index} className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm">
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <p className="text-center text-lg italic text-gray-500 dark:text-gray-400">
                  soon coming
                </p>
              )}
            </div>
          </div>

        </div>
      </main>
    </>
  )
}

