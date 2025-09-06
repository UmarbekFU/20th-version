import Navigation from '@/components/Navigation'
import PlumBackground from '@/components/PlumBackground'
import { getNoteBySlug } from '@/lib/notes'
import { notFound } from 'next/navigation'

export default function TheInevitablePage() {
  const note = getNoteBySlug('the-inevitable')
  
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
            
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">The 12 Technological Forces</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                <strong>Becoming:</strong> Everything is in a constant state of becoming something else. 
                Products and services are never finished, always evolving and improving.
              </p>
              
              <p>
                <strong>Cognifying:</strong> Intelligence is being added to everything. From simple objects 
                to complex systems, AI is making everything smarter and more capable.
              </p>
              
              <p>
                <strong>Flowing:</strong> Information flows freely across networks, creating new opportunities 
                for sharing, collaboration, and innovation. The flow of data becomes more valuable than the data itself.
              </p>
              
              <p>
                <strong>Screening:</strong> Screens are becoming the primary interface for human interaction 
                with information and each other. We're moving toward a screen-based culture.
              </p>
              
              <p>
                <strong>Accessing:</strong> Ownership is being replaced by access. We're moving from a 
                possession-based economy to an access-based one, where experiences matter more than things.
              </p>
              
              <p>
                <strong>Sharing:</strong> Collaboration and sharing are becoming the default modes of operation. 
                The sharing economy represents a fundamental shift in how we think about resources and value.
              </p>
              
              <p>
                <strong>Filtering:</strong> As information becomes abundant, filtering becomes crucial. 
                The ability to find relevant, high-quality content becomes a key competitive advantage.
              </p>
              
              <p>
                <strong>Remixing:</strong> Everything is becoming remixable. Digital content can be easily 
                combined, modified, and repurposed, leading to new forms of creativity and expression.
              </p>
              
              <p>
                <strong>Interacting:</strong> We're moving from passive consumption to active interaction. 
                Technology is becoming more responsive and engaging, creating immersive experiences.
              </p>
              
              <p>
                <strong>Tracking:</strong> Everything is being monitored and measured. Data collection 
                is becoming ubiquitous, enabling new insights and optimization opportunities.
              </p>
              
              <p>
                <strong>Questioning:</strong> The answers are becoming less important than the questions. 
                In a world of abundant information, asking the right questions becomes the key skill.
              </p>
              
              <p>
                <strong>Beginning:</strong> We're still in the early stages of the digital revolution. 
                The most significant changes and innovations are yet to come.
              </p>
            </div>
            
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4 mt-8">Why This Book Matters</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              "The Inevitable" provides a roadmap for understanding the future of technology and its impact on society. 
              Kelly's framework of 12 forces helps readers navigate the complex landscape of technological change 
              and understand the underlying patterns that will shape our world. This book is essential for anyone 
              who wants to understand how technology will continue to transform our lives and work.
            </p>
          </div>
        </div>
      </main>
    </>
  )
}
