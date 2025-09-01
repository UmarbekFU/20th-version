import Navigation from '@/components/Navigation'
import PlumBackground from '@/components/PlumBackground'
import Link from 'next/link'

export default function TheValueOfExperimentsEssayPage() {
  return (
    <>
      <PlumBackground />
      <Navigation />
      <main className="min-h-screen pt-32">
        <div className="max-w-3xl mx-auto px-8">
          {/* Essay Header */}
          <header className="mb-12">
            <div className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              Nov 15
            </div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              The Value of Experiments
            </h1>
            <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
              <span>Essays</span>
            </div>
          </header>

          {/* Essay Content */}
          <article className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
              I've learned that the best way to learn isn't through planning—it's through experimenting. 
              When I try to plan everything perfectly, I end up doing nothing. When I embrace experiments, 
              I discover things I never could have planned for.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-6">
              Why Plans Fail
            </h2>
            
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              I used to think that success came from having the perfect plan. I would spend hours researching, 
              outlining, and preparing before I started anything. The problem was, I rarely started anything.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Plans fail because they're based on assumptions about a future that doesn't exist yet. The world 
              is too complex and unpredictable to plan with any real accuracy. When reality doesn't match your 
              plan, you either give up or waste time trying to force reality to conform to your plan.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-6">
              The Experiment Mindset
            </h2>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Experiments are different from plans because they're designed to fail safely. When you run an 
              experiment, you're not trying to succeed—you're trying to learn. Every outcome, whether it's 
              what you expected or not, teaches you something valuable.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              The key is to make experiments cheap and fast. If an experiment costs $100 and takes a week, 
              you can afford to run many of them. If it costs $10,000 and takes six months, you'll be too 
              afraid to try anything risky.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-6">
              Learning from Failure
            </h2>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Most of my experiments fail. But each failure teaches me something I couldn't have learned 
              any other way. I discover what doesn't work, which is often more valuable than discovering 
              what does work.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              When an experiment fails, I ask: "What did I learn?" instead of "What went wrong?" This 
              shift in perspective turns every failure into a success. I'm not trying to avoid failure—I'm 
              trying to fail in ways that teach me the most.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-6">
              The Power of Iteration
            </h2>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Experiments work best when you iterate quickly. Run a small experiment, learn from it, and 
              immediately run a slightly different version. Each iteration builds on what you learned from 
              the previous one.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              This is how I built this website. I started with a basic structure, then experimented with 
              different layouts, designs, and features. Each version taught me something about what worked 
              and what didn't. The final result is much better than anything I could have planned from the start.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-6">
              When Experiments Beat Planning
            </h2>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Experiments are better than planning when you're dealing with uncertainty. If you're building 
              something new, solving a problem you don't fully understand, or working in a rapidly changing 
              environment, experiments will get you further than plans.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Planning works well for routine tasks where you have a clear understanding of the process and 
              the outcome. But for creative work, innovation, or anything that involves learning, experiments 
              are the way to go.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-6">
              Balancing Experiments and Planning
            </h2>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              I'm not saying you should never plan. Planning is useful for organizing your thoughts, setting 
              direction, and managing resources. But plans should be flexible and updated based on what you 
              learn from experiments.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              The best approach is to plan the experiment, not the outcome. Plan how you'll test your hypothesis, 
              what you'll measure, and how you'll learn from the results. But don't plan what the results will be.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-6">
              Embracing Uncertainty
            </h2>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              The biggest benefit of experiments is that they help you embrace uncertainty. Instead of trying 
              to control everything, you learn to work with the unknown. You become comfortable with not knowing 
              the answer and confident in your ability to figure it out.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-8">
              Life is uncertain. The future is unpredictable. But that's okay. With the right mindset, 
              uncertainty becomes an opportunity for discovery rather than a source of anxiety. Experiments 
              are how you turn uncertainty into learning.
            </p>
          </article>

          {/* Footnotes */}
          <section className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Footnotes</h3>
            <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <p>
                <sup>1</sup> The best plans are those that can be easily changed when reality doesn't cooperate.
              </p>
              <p>
                <sup>2</sup> Small, fast experiments are better than big, slow ones. You can always scale up what works.
              </p>
              <p>
                <sup>3</sup> Failure is only failure if you don't learn from it. Otherwise, it's tuition.
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
              Read in: <Link href="/essays/the-value-of-experiments/uz" className="text-blue-600 dark:text-blue-400 hover:underline">O'zbekcha</Link>, <Link href="/essays/the-value-of-experiments/ru" className="text-blue-600 dark:text-blue-400 hover:underline">Русский</Link>
            </p>
          </section>
        </div>
      </main>
    </>
  )
}
