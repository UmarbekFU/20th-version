import Navigation from '@/components/Navigation'
import PlumBackground from '@/components/PlumBackground'

export default function TweetsPage() {
  // My actual tweets
  const tweets = [
    "As in all fields of endeavor, the number of truly skilled individuals is far fewer than the total number of participants.",
    "The set of conditions necessary to become successful is part of the set that's sufficient to become successful. But the sufficient set itself is much larger than the necessary set.",
    "\"Of the six people who started PayPal, four had built bombs in high school.\" ― Peter Thiel",
    "I am 100% happy to watch you get really rich doing something that I have no interest in doing. — @BrentBeshore",
    "Complex systems cannot be reduced to their mechanical parts. The brain isn't a 'biological computer' any more than a recipe is the meal. AI will reach superhuman performance in many domains. But this won't be the same as human intelligence.",
    "\"Follow the science\" is the most unscientific phrase ever uttered.",
    "Science is not a collection of facts; it's a method to question them. If someone tells you 'follow the science,' they're selling you a dogma.",
    "Science is speculation. Scientists are simply creating well-formed and well-educated conjectures about the world. But they are still conjectures that can be proved incorrect by one random event",
    "There are no ultimate authorities for knowledge. Everything remains a guess that we can improve.",
    "There can't be magic formula for good thinking. If there were, you could just check if an idea came from the \"right\" method and know if it's true. But there's no such method. You have to judge ideas by what they say, not where they come from.",
    "The opposite of a good idea can be another good idea.",
    "Non-fiction is the new fiction.",
    "Innovation is a pyramid scheme.",
    "Every forecast = today's number × tomorrow's story. Fact × story = something less than fact.",
    "Mental health awareness has become a new form of storytelling addiction. Sometimes you need less self-analysis, not more.",
    "Your romantic relationship \"origin story\" is mostly fictional. You're editing reality to match the rom-com in your head.",
    "If you have something to say, say it yourself, don't hide behind 'people say' or 'studies show'. Have some skin in the game.",
    "History isn't truth. It's a collection of popular stories that won.",
    "Motivational speakers are drug dealers selling narrative cocaine. The high feels good but leaves you more dependent on external validation.",
    "The most dangerous people are those who've convinced themselves they're the heroes of their own story. Villains always think they're saving the world.",
    "All evidence is circumstantial because humans are unreliable narrators of their own experience. Eyewitness testimony, scientific observation, statistical analysis—all filtered through fallible minds.",
    "Humans didn't invent stories before science—stories ARE science. Every narrative is a theory about causation.",
    "Every autobiography is fiction pretending to be truth. Memory is just storytelling with a good publicist.",
    "Scared crowds do dumb things together that they'd never do alone.",
    "To be present is to be without story.",
    "Dictators cherry-pick a few \"corrupt\" officials to punish—never for justice, but to deflect attention from their own crimes.",
    "The most delicious and healthy food is the one that you want to eat with your hands and after which you want to move, communicate, work, and not lie down and rest.",
    "The quicker you want something, the easier you are to manipulate.",
    "You are at your most productive when you stop trying to be productive.",
    "People who write cryptic one-liners don't want readers, they want memorizers.",
    "In startups, it is much better to be technical with no business experience than reverse.",
    "Scared voters will trade their rights for safety promises. But the politicians making those promises need you scared to stay in power.",
    "Few errors in judgment prove as costly as mistaking people for the reasonable beings we wish them to be.",
    "Power is at core believing you have it. If you walk into a room thinking you're powerless, you are. If you walk in thinking you can change things, you probably can.",
    "Practice does NOT make perfect. Practice makes permanent. If you practice wrong, you get very good at doing things wrong. Perfect practice makes perfect. Which is why you need feedback loops, not just repetition.",
    "Don't listen to people who don't pay for their mistakes.",
    "You can't learn from experiences you never had.",
    "If a politician starts wars but sends other people's children to die, they're a fraud.",
    "If a consultant gives you advice and walks away when it fails, their advice is worthless, and perhaps harmful.",
    "People who give advice for a living are selling you stories. They optimize for sounding smart, not for being right. When you reward perception over results, you get complicated nonsense instead of simple truth.",
    "If you want to know if someone's advice is worth anything, ask what they personally lose if they're wrong.",
    "Money should give you more options, not fewer. If wealth is pushing you into a bigger house away from people, fancy restaurants with bad food, and boring social events, you're doing it wrong.",
    "Rich people start hiring \"experts\" for everything - financial advisors, lifestyle coaches, breathing specialists. Most of these people are parasites selling you solutions to problems you don't have.",
    "The person who can walk away usually gets the better deal.",
    "The fastest way to lose a negotiation is to want something desperately.",
    "Never waste time negotiating with someone who has no authority. The person behind the counter following \"company policy\"",
    "Experience beats theory every time. Real world beats classroom every time. Consequences beat speculation every time.",
    "When you already have a job, getting another job is easy. When you're desperate and unemployed, every interview feels like begging.",
    "If you don't feel like writing something today, maybe it's not worth writing.",
    "Censorship usually backfires. Banned books become more popular.",
    "Humans hate contradicting themselves. Take a public position, you're trapped defending it.",
    "Modern secular intellectuals reject traditional wisdom because it sounds superstitious, then create equally arbitrary rules based on the latest academic fashion.",
    "Choose between daily misery over world problems or personal happiness despite them. If you postpone happiness until society improves, you'll wait forever.",
    "We live in a world that's becoming more connected and more extreme. Small problems become big problems faster. Big wins become bigger. The old strategy of \"be average and safe\" doesn't work anymore. You need to be either very safe or positioned to benefit from chaos. Success convinces smart people they can't lose. Failure convinces them they're terrible at everything. Both are wrong.",
    "Most people who think they're independent-minded are actually the most conformist of all—they just conform to contrarian groupthink instead of mainstream groupthink."
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
                <p className="text-lg text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-relaxed">
                  {tweet}
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
