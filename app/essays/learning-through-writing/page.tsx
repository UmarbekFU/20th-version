import Navigation from '@/components/Navigation'
import PlumBackground from '@/components/PlumBackground'
import Link from 'next/link'

export default function LearningThroughWritingEssayPage() {
  return (
    <>
      <PlumBackground />
      <Navigation />
      <main className="min-h-screen pt-32">
        <div className="max-w-3xl mx-auto px-8">
          {/* Essay Header */}
          <header className="mb-12">
            <div className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              Dec 20
            </div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              Learning Through Writing
            </h1>
            <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
              <span>Essays</span>
            </div>
          </header>

          {/* Essay Content */}
          <article className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
              I've discovered that writing is not just a way to communicate ideas—it's a way to discover them. 
              When I sit down to write about something I think I understand, I often realize I don't understand it at all.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-6">
              The Gap Between Thought and Expression
            </h2>
            
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              There's a fascinating gap between what I think I know and what I can actually articulate. In my head, 
              ideas feel complete and coherent. But when I try to write them down, I discover holes, contradictions, 
              and fuzzy thinking that I didn't notice before.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              This gap is where learning happens. Writing forces me to slow down and examine my thoughts more carefully. 
              I can't skip over the unclear parts when I'm writing—I have to figure out what I actually mean.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-6">
              Writing as Thinking
            </h2>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              I used to think that writing was just recording thoughts that were already fully formed. Now I realize 
              that writing is the process of forming those thoughts. The act of putting words on paper (or screen) 
              is what creates clarity.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              When I'm writing, I'm not just expressing ideas—I'm discovering them. New connections emerge, 
              hidden assumptions become visible, and I start to see patterns I never noticed before. Writing 
              is thinking made visible.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-6">
              The Power of Revision
            </h2>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              First drafts are always terrible. They're full of half-formed thoughts, awkward phrasing, and 
              logical leaps that don't make sense. But that's okay—the first draft is just getting ideas out 
              of my head and onto the page.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Revision is where the real thinking happens. When I read what I've written, I can see where my 
              logic breaks down, where my examples don't work, and where I'm making claims I can't support. 
              Each revision makes the ideas clearer and more precise.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-6">
              Writing for an Audience
            </h2>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Even when I'm writing for myself, I imagine an audience. This forces me to be more rigorous 
              in my thinking. I can't rely on shortcuts or insider knowledge—I have to explain things clearly 
              enough that someone else could understand them.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              This imagined audience also helps me identify weak points in my arguments. If I can't explain 
              something clearly to someone else, it probably means I don't understand it well enough myself.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-6">
              The Unexpected Benefits
            </h2>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Writing has taught me things I never expected to learn. It's improved my reading—I now notice 
              how other writers structure their arguments and use evidence. It's made me a better listener—I 
              pay more attention to how people explain things.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Most importantly, writing has made me more curious. When I encounter something I don't understand, 
              I think: "This would be interesting to write about." Writing has become my way of exploring the world.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-6">
              Writing as a Habit
            </h2>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              The more I write, the better I get at it. But more importantly, the more I write, the better 
              I get at thinking. Writing regularly has become a form of mental exercise—it keeps my mind sharp 
              and helps me process information more effectively.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-8">
              I write to learn, and I learn to write. It's a virtuous cycle that makes me better at both. 
              Writing isn't just a skill—it's a way of being in the world, a way of engaging with ideas 
              more deeply and thoughtfully.
            </p>
          </article>

          {/* Footnotes */}
          <section className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Footnotes</h3>
            <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <p>
                <sup>1</sup> This is why I prefer writing to just thinking. Thoughts in my head feel complete, but they're often not.
              </p>
              <p>
                <sup>2</sup> The best writing advice I've ever received: "Write badly, then fix it."
              </p>
              <p>
                <sup>3</sup> Writing for an audience, even an imagined one, forces clarity that thinking alone doesn't.
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
              Read in: <Link href="/essays/learning-through-writing/uz" className="text-blue-600 dark:text-blue-400 hover:underline">O'zbekcha</Link>, <Link href="/essays/learning-through-writing/ru" className="text-blue-600 dark:text-blue-400 hover:underline">Русский</Link>
            </p>
          </section>
        </div>
      </main>
    </>
  )
}
