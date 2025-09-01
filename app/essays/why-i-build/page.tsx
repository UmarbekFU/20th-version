import Navigation from '@/components/Navigation'
import PlumBackground from '@/components/PlumBackground'
import Link from 'next/link'

export default function WhyIBuildEssayPage() {
  return (
    <>
      <PlumBackground />
      <Navigation />
      <main className="min-h-screen pt-32">
        <div className="max-w-3xl mx-auto px-8">
          {/* Essay Header */}
          <header className="mb-12">
            <div className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              Jan 15
            </div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              Why I Build
            </h1>
            <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
              <span>Essays</span>
            </div>
          </header>

          {/* Essay Content */}
          <article className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
              I've been thinking about why I feel compelled to build things. Not just software, but ideas, 
              systems, and solutions to problems I encounter. It's not about money or recognition—it's something deeper.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-6">
              The Itch That Needs Scratching
            </h2>
            
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Most of what I build starts with a personal frustration. I encounter a problem, and instead of 
              just complaining about it, I think: "What if I could solve this myself?" This isn't about being 
              a hero—it's about being practical. If something bothers me enough, it probably bothers other people too.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Take this website, for example. I wanted a place to share my thoughts that felt like a real 
              person's space on the internet, not another sterile portfolio. Most personal websites feel corporate 
              and soulless. So I built something different—something that reflects who I actually am.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-6">
              Building as Learning
            </h2>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Building things is how I learn. Reading books gives me theory, but building gives me practice. 
              When I'm coding, I'm not just implementing someone else's ideas—I'm discovering new problems, 
              finding unexpected solutions, and understanding the limitations of my knowledge.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Every project teaches me something new. Sometimes it's technical—like how to optimize a database 
              query or structure a React component. Sometimes it's about process—like how to break down a complex 
              problem into manageable pieces, or when to stop perfecting and ship something.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-6">
              The Joy of Creation
            </h2>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              There's something deeply satisfying about creating something from nothing. Starting with an empty 
              file and ending with a working application. Taking a vague idea and turning it into something 
              concrete and useful. It's like solving a puzzle, but you get to design the pieces yourself.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              I think this is why I prefer building to consuming. Watching someone else solve a problem is 
              interesting, but solving it yourself is exhilarating. You get to make all the decisions, face 
              all the consequences, and learn from all the mistakes.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-6">
              Building for Others
            </h2>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              While I start building for myself, I often end up building for others. When you solve your own 
              problem well, other people with the same problem find you. They don't care about your elegant 
              code or clever architecture—they just want something that works.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              This is where the real magic happens. You get feedback from people who actually use what you built. 
              They find bugs you missed, suggest features you never thought of, and use your creation in ways 
              you never imagined. It's humbling and inspiring at the same time.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-6">
              The Long Game
            </h2>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Building things is a long-term investment. Most of what I build won't be successful in the 
              traditional sense. But every project teaches me something, every failure makes me better, and 
              every success gives me confidence to tackle bigger problems.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-8">
              I build because it's how I understand the world. I build because it's how I grow as a person. 
              I build because it's fun. And maybe, just maybe, I build because the world needs more people 
              who create solutions instead of just complaining about problems.
            </p>
          </article>

          {/* Footnotes */}
          <section className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Footnotes</h3>
            <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <p>
                <sup>1</sup> This doesn't mean I never complain. I do. But I try to channel that energy into building solutions.
              </p>
              <p>
                <sup>2</sup> "Ship early, ship often" is a cliché for a reason. Perfect is the enemy of done.
              </p>
              <p>
                <sup>3</sup> The best feedback often comes from unexpected use cases. Embrace them.
              </p>
            </div>
          </section>

          {/* Thanks Section */}
          <section className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <p className="text-gray-600 dark:text-gray-400 italic">
              Thanks to <Link href="/about" className="text-blue-600 dark:text-blue-400 hover:underline">myself</Link> for reading drafts of this.
            </p>
          </section>

          {/* Read in Other Languages */}
          <section className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
            <p className="text-gray-600 dark:text-gray-400">
              Read in: <Link href="/essays/why-i-build/uz" className="text-blue-600 dark:text-blue-400 hover:underline">O'zbekcha</Link>, <Link href="/essays/why-i-build/ru" className="text-blue-600 dark:text-blue-400 hover:underline">Русский</Link>
            </p>
          </section>
        </div>
      </main>
    </>
  )
}
