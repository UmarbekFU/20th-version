import Navigation from '@/components/Navigation'
import PlumBackground from '@/components/PlumBackground'
import Link from 'next/link'

export default function AtomicIdeasPage() {
  // Sample atomic ideas - these would be your actual ideas
  const atomicIdeas = [
    "The best tools are the ones you forget you're using",
    "Complexity is the enemy of understanding",
    "Most problems are actually communication problems",
    "The internet made us all neighbors but strangers",
    "Reading is thinking with someone else's brain",
    "Simplicity is not the absence of complexity, but the mastery of it",
    "The best learning happens when you're building something real",
    "Time is the only truly finite resource",
    "Most people optimize for the wrong things",
    "The best ideas often come from combining existing ones",
    "Failure is just feedback in disguise",
    "The more you know, the more you realize you don't know",
    "Consistency beats perfection every time",
    "The best solutions are often the simplest ones",
    "Your environment shapes your thinking more than you think"
  ]

  return (
    <>
      <PlumBackground />
      <Navigation />
      <main className="min-h-screen pt-32">
        <div className="max-w-4xl mx-auto px-8">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4 text-center">Atomic Ideas</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-16 text-center max-w-2xl mx-auto">
            Half-formed thoughts I'm working through. Some will become something useful. Most won't. That's fine.
          </p>

          {/* Atomic Ideas List */}
          <div className="space-y-6 max-w-2xl mx-auto">
            {atomicIdeas.map((idea, index) => (
              <div 
                key={index}
                className="group cursor-pointer"
              >
                <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-relaxed">
                  {idea}
                </h3>
              </div>
            ))}
          </div>

          {/* Footer Note */}
          <div className="mt-16 text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              More atomic ideas are brewing. These are just the ones I've captured so far.
            </p>
          </div>
        </div>
      </main>
    </>
  )
}
