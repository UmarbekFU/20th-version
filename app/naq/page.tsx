import Navigation from '@/components/Navigation'
export default function NAQPage() {
  // Sample NAQs with answers - these would be your actual never asked questions
  const naqs = [
    {
      question: "What's your tech stack?",
      answer: "I use whatever gets the job done. Currently: Next.js, TypeScript, Tailwind CSS. But I'm not married to any technology—the best tool is the one that solves your problem."
    },
    {
      question: "How do you stay productive?",
      answer: "I don't. I focus on being effective instead. Sometimes that means doing nothing for hours, then working intensely for 30 minutes. Quality over quantity."
    },
    {
      question: "What's your writing process?",
      answer: "I think by writing. I start with a messy draft, then edit ruthlessly. Most of my best ideas come from the editing process, not the initial writing."
    },
    {
      question: "How do you learn new things?",
      answer: "By building something real. Reading and watching tutorials only get you so far. You have to get your hands dirty and make mistakes."
    },
    {
      question: "What's your approach to problem-solving?",
      answer: "Start simple. Most problems can be solved with basic solutions. Only add complexity when absolutely necessary."
    },
    {
      question: "How do you handle failure?",
      answer: "I try to fail fast and learn from it. Most of my best work came from projects that initially failed. Failure is just feedback."
    },
    {
      question: "What's your philosophy on tools and software?",
      answer: "Use the simplest tool that works. Don't over-engineer. The best tool is often the one you already know how to use."
    },
    {
      question: "How do you decide what to work on?",
      answer: "I work on things that scratch my own itch. If it solves a real problem I have, it's worth building. If it helps others too, that's a bonus."
    },
    {
      question: "What's your take on productivity apps?",
      answer: "Most are overcomplicated. I use a simple text file for tasks and a calendar for appointments. The simpler the system, the more likely I am to use it."
    },
    {
      question: "How do you stay motivated?",
      answer: "I don't rely on motivation. I focus on building habits and systems. Motivation is fleeting, but good systems last."
    },
    {
      question: "What's your reading strategy?",
      answer: "I read widely but not deeply. I skim most books, take notes on the good parts, and only re-read the ones that really matter to me."
    },
    {
      question: "How do you handle information overload?",
      answer: "I ignore most of it. I follow a few trusted sources and ignore the rest. Quality over quantity always."
    },
    {
      question: "What's your approach to learning programming?",
      answer: "Build things you want to use. Don't just follow tutorials—create something that solves a real problem for you."
    },
    {
      question: "How do you manage your time?",
      answer: "I don't. I manage my energy instead. I work when I'm focused and rest when I'm not. Time management is overrated."
    },
    {
      question: "What's your philosophy on social media?",
      answer: "Use it intentionally or not at all. I prefer long-form writing and deep conversations over quick hits of dopamine."
    },
    {
      question: "How do you handle criticism?",
      answer: "I try to separate the signal from the noise. Constructive criticism is gold. Trolls are background noise."
    },
    {
      question: "What's your approach to decision-making?",
      answer: "Make decisions quickly, change them slowly. Most decisions aren't as important as we think they are."
    },
    {
      question: "How do you stay creative?",
      answer: "By consuming less and creating more. The best way to stay creative is to keep making things, even if they're not perfect."
    },
    {
      question: "What's your philosophy on work-life balance?",
      answer: "I don't believe in balance. I believe in integration. My work and life are part of the same thing—I'm always learning and creating."
    },
    {
      question: "How do you handle stress?",
      answer: "I try to prevent it rather than manage it. That means saying no to things that don't matter and focusing on what does."
    }
  ]

  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-32">
        <div className="max-w-4xl mx-auto px-8">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4 text-center">NAQ</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-16 text-center max-w-2xl mx-auto">
            Never Asked Questions. Things I think about that no one ever asks me about.
          </p>

          {/* NAQ List with Answers */}
          <div className="space-y-8 max-w-3xl mx-auto">
            {naqs.map((naq, index) => (
              <div 
                key={index}
                className="group"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {naq.question}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {naq.answer}
                </p>
              </div>
            ))}
          </div>

          {/* Footer Note */}
          <div className="mt-16 text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              These are questions I think about but rarely get asked. If you have a question, feel free to ask.
            </p>
          </div>
        </div>
      </main>
    </>
  )
}
