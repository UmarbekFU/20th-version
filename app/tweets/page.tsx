import Navigation from '@/components/Navigation'
import PlumBackground from '@/components/PlumBackground'

export default function TweetsPage() {
  // Sample tweets with dates
  const tweets = [
    {
      text: "The best code is the code you never write.",
      date: "2024-01-15"
    },
    {
      text: "Reading is thinking with someone else's brain.",
      date: "2024-01-12"
    },
    {
      text: "Most problems are actually communication problems.",
      date: "2024-01-10"
    },
    {
      text: "The internet made us all neighbors but strangers.",
      date: "2024-01-08"
    },
    {
      text: "Simplicity is not the absence of complexity, but the mastery of it.",
      date: "2024-01-05"
    },
    {
      text: "The best learning happens when you're building something real.",
      date: "2024-01-03"
    },
    {
      text: "Time is the only truly finite resource.",
      date: "2023-12-30"
    },
    {
      text: "Most people optimize for the wrong things.",
      date: "2023-12-28"
    },
    {
      text: "The best ideas often come from combining existing ones.",
      date: "2023-12-25"
    },
    {
      text: "Failure is just feedback in disguise.",
      date: "2023-12-22"
    },
    {
      text: "The more you know, the more you realize you don't know.",
      date: "2023-12-20"
    },
    {
      text: "Consistency beats perfection every time.",
      date: "2023-12-18"
    },
    {
      text: "The best solutions are often the simplest ones.",
      date: "2023-12-15"
    },
    {
      text: "Your environment shapes your thinking more than you think.",
      date: "2023-12-12"
    },
    {
      text: "The best tools are the ones you forget you're using.",
      date: "2023-12-10"
    },
    {
      text: "Complexity is the enemy of understanding.",
      date: "2023-12-08"
    },
    {
      text: "Most people optimize for speed when they should optimize for meaning.",
      date: "2023-12-05"
    },
    {
      text: "The best way to learn is to unlearn first.",
      date: "2023-12-03"
    },
    {
      text: "How much of what I think is original is actually borrowed?",
      date: "2023-12-01"
    },
    {
      text: "The most valuable skill is knowing what to ignore.",
      date: "2023-11-28"
    },
    {
      text: "The best way to solve a problem is to walk away.",
      date: "2023-11-25"
    },
    {
      text: "Why do we measure the wrong things?",
      date: "2023-11-22"
    },
    {
      text: "The most important thing is not what I do but how I do it.",
      date: "2023-11-20"
    },
    {
      text: "The best way to be creative is to be bored.",
      date: "2023-11-18"
    },
    {
      text: "Most people optimize for efficiency when inefficiency is more fun.",
      date: "2023-11-15"
    },
    {
      text: "The best way to learn is to fail spectacularly.",
      date: "2023-11-12"
    },
    {
      text: "Why do we call it 'innovation' when it's just copying with minor changes?",
      date: "2023-11-10"
    },
    {
      text: "The most valuable resource is not time but attention.",
      date: "2023-11-08"
    },
    {
      text: "Why do we build things that solve problems we created?",
      date: "2023-11-05"
    },
    {
      text: "The best way to be productive is to procrastinate.",
      date: "2023-11-03"
    },
    {
      text: "Why do we call it 'technology' when it's mostly just buttons?",
      date: "2023-11-01"
    },
    {
      text: "The most important question is 'Why not?'",
      date: "2023-10-30"
    },
    {
      text: "How do I know if I'm making progress or just moving?",
      date: "2023-10-28"
    },
    {
      text: "What would I do if I couldn't use the internet?",
      date: "2023-10-25"
    },
    {
      text: "Why do we focus on symptoms instead of root causes?",
      date: "2023-10-22"
    },
    {
      text: "The best way to solve a problem is to make it worse first.",
      date: "2023-10-20"
    },
    {
      text: "Why do we call it 'digital transformation' when it's just digital confusion?",
      date: "2023-10-18"
    },
    {
      text: "The most valuable thing I can do is nothing at all.",
      date: "2023-10-15"
    },
    {
      text: "Why do we build things that nobody asked for?",
      date: "2023-10-12"
    },
    {
      text: "The best way to be smart is to be stupid sometimes.",
      date: "2023-10-10"
    },
    {
      text: "Why do we call it 'user experience' when it's really 'user suffering'?",
      date: "2023-10-08"
    },
    {
      text: "The most important skill is knowing when to quit.",
      date: "2023-10-05"
    },
    {
      text: "Why do we optimize for perfection when imperfection is more interesting?",
      date: "2023-10-03"
    },
    {
      text: "The best way to learn is to unlearn everything first.",
      date: "2023-10-01"
    },
    {
      text: "Why do we call it 'disruption' when it's just breaking things?",
      date: "2023-09-28"
    },
    {
      text: "The most valuable thing I can do is make mistakes.",
      date: "2023-09-25"
    },
    {
      text: "Why do we build things that make us more dependent?",
      date: "2023-09-22"
    },
    {
      text: "The best way to be successful is to fail more.",
      date: "2023-09-20"
    },
    {
      text: "Why do we call it 'innovation' when it's just reinventing the wheel?",
      date: "2023-09-18"
    },
    {
      text: "The most important question is 'So what?'",
      date: "2023-09-15"
    },
    {
      text: "Why do we optimize for speed when slow is more beautiful?",
      date: "2023-09-12"
    },
    {
      text: "The best way to solve a problem is to create a bigger one.",
      date: "2023-09-10"
    }
  ]

  return (
    <>
      <PlumBackground />
      <Navigation />
      <main className="min-h-screen pt-32">
        <div className="max-w-4xl mx-auto px-8">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4 text-center">Tweets</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-16 text-center max-w-2xl mx-auto">
            My thoughts in 280 characters or less.
          </p>

          {/* Tweets List */}
          <div className="space-y-6 max-w-2xl mx-auto">
            {tweets.map((tweet, index) => (
              <div 
                key={index}
                className="group"
              >
                <p className="text-lg text-gray-900 dark:text-gray-100 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-relaxed">
                  {tweet.text}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {new Date(tweet.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </p>
              </div>
            ))}
          </div>

          {/* Footer Note */}
          <div className="mt-16 text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              These are my thoughts, one tweet at a time.
            </p>
          </div>
        </div>
      </main>
    </>
  )
}
