import Navigation from '@/components/Navigation'
import PlumBackground from '@/components/PlumBackground'

export default function NotesPage() {
  return (
    <>
      <PlumBackground />
      <Navigation />
      <main className="min-h-screen pt-32">
        <div className="max-w-3xl mx-auto px-8">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center">Notes</h1>
          
          <div className="space-y-8 text-lg md:text-xl text-gray-800 dark:text-gray-200 leading-relaxed max-w-2xl mx-auto">
            <p className="text-gray-700 dark:text-gray-300">
              My notes from books, articles, and conversations. These aren't summaries—they're my thoughts, 
              questions, and reactions to what I'm reading and learning.
            </p>
          </div>

          {/* Notes Content */}
          <div className="mt-16 space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">Recent Notes</h2>
              <div className="space-y-4">
                <p className="text-gray-600 dark:text-gray-400">
                  I'm currently reading and taking notes on several books about systems thinking, 
                  creativity, and the intersection of technology and human experience.
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  Notes will be added here as I complete books and organize my thoughts. 
                  I prefer to take time with my notes rather than rushing through them.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">My Note-Taking Approach</h2>
              <div className="space-y-4">
                <p className="text-gray-700 dark:text-gray-300">
                  I don't summarize books—I argue with them. I write down questions, challenge assumptions, 
                  and connect ideas to my own experiences. The goal is to understand, not just remember.
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  I use a simple system: one note per book, organized by themes rather than chapters. 
                  This helps me see patterns and connections across different authors and ideas.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">Coming Soon</h2>
              <div className="space-y-4">
                <p className="text-gray-600 dark:text-gray-400">
                  Notes from books I'm currently reading will appear here soon. I'm working on 
                  organizing and sharing my thoughts on what I'm learning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
