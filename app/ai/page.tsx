import Navigation from '@/components/Navigation'
import PlumBackground from '@/components/PlumBackground'
import Link from 'next/link'

export default function AtomicIdeasPage() {
  // Atomic ideas - each leads to its own page
          const atomicIdeas = [
          {
            title: "Everything is my fault",
            href: "/ai/emf"
          },
          {
            title: "Just do more",
            href: "/ai/jdm"
          },
          {
            title: "Free will fallacy",
            href: "/ai/fwf"
          },
          {
            title: "Telegram Culture: 10 Commandments",
            href: "/ai/tc"
          }
        ]

  return (
    <>
      <PlumBackground />
      <Navigation />
      <main className="min-h-screen pt-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="notes-heading text-3xl sm:text-4xl lg:text-5xl notes-text-primary mb-6 text-center">Atomic Ideas</h1>
          <p className="notes-content text-lg sm:text-xl notes-text-secondary mb-16 text-center max-w-2xl mx-auto">
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
                <h3 className="notes-title text-lg notes-text-primary group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-relaxed">
                  {idea.title}
                </h3>
              </Link>
            ))}
          </div>

          {/* Footer Note */}
          <div className="mt-16 text-center">
            <p className="notes-meta notes-text-muted">
              More atomic ideas are brewing. These are just the ones I've captured so far.
            </p>
          </div>
        </div>
      </main>
    </>
  )
}
