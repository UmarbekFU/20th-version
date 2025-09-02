import Navigation from '@/components/Navigation'
import PlumBackground from '@/components/PlumBackground'
import Link from 'next/link'

export default function AtomicIdeasPage() {
  // Atomic ideas - each leads to its own page
          const atomicIdeas = [
          {
            title: "Everything is my fault",
            href: "/atomic-ideas/everything-is-my-fault"
          },
          {
            title: "Just do more",
            href: "/atomic-ideas/just-do-more"
          }
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
              <Link 
                key={index}
                href={idea.href}
                className="group block"
              >
                <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-relaxed">
                  {idea.title}
                </h3>
              </Link>
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
