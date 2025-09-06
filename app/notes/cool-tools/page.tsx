import Navigation from '@/components/Navigation'
import PlumBackground from '@/components/PlumBackground'
import { getNoteBySlug } from '@/lib/notes'
import { notFound } from 'next/navigation'

export default function CoolToolsPage() {
  const note = getNoteBySlug('cool-tools')
  
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
            
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Key Insights</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                <strong>Tools as Extensions:</strong> Kelly argues that tools are extensions of human capabilities, 
                allowing us to do things we couldn't do otherwise. This perspective shifts how we think about 
                technology from something that replaces us to something that amplifies us.
              </p>
              
              <p>
                <strong>The Catalog Approach:</strong> Rather than focusing on specific tools, Kelly presents 
                a comprehensive catalog of possibilities. This approach helps readers discover tools they never 
                knew existed and understand the broader landscape of human enhancement.
              </p>
              
              <p>
                <strong>Creativity and Innovation:</strong> The book emphasizes how tools can spark creativity 
                and enable new forms of expression. Kelly shows how the right tool can unlock creative potential 
                that was previously inaccessible.
              </p>
              
              <p>
                <strong>Future of Tools:</strong> Kelly explores how tools are evolving, becoming more intelligent, 
                connected, and capable. He provides insights into what the next generation of tools might look like 
                and how they will continue to expand human possibilities.
              </p>
            </div>
            
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4 mt-8">Why This Book Matters</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              "Cool Tools" is essential reading for anyone interested in the intersection of technology and human 
              potential. Kelly's unique perspective as a technology pioneer and cultural observer provides valuable 
              insights into how tools shape our world and our capabilities. The book serves as both a practical 
              guide and a philosophical exploration of human enhancement through technology.
            </p>
          </div>
        </div>
      </main>
    </>
  )
}
