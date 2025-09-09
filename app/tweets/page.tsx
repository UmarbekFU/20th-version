import Navigation from '@/components/Navigation'
import PlumBackground from '@/components/PlumBackground'

export default function TweetsPage() {
  // My actual tweets
  const tweets = [
    "You can reduce the annoyance of someone's stupid belief by increasing your understanding of why they believe it.",
    "If one of your principles is, \"win at all costs,\" then you have no other principles.",
    "When people around you do something that makes no sense or is self-defeating, it might not be because they're stupid. It's more likely that they don't believe what you believe, don't see what you see or don't want what you want. It might be different measures of time, of status or desire. If we hope to understand behavior, and ultimately to change it, we need to see the stories behind it. Because, in many ways, we're all irrational sometimes.",
    "If you're unreliable, it doesn't matter what your virtues are, you're going to crater immediately. So doing what you have faithfully engaged to do should be an automatic part of your conduct. You want to avoid sloth and unreliability.",
    "It takes a lot of intellect and confidence to accept that what makes sense doesn't really make sense.",
    "In Plato's Protagoras, Socrates contrasts philosophy as the collaborative search for truth with the sophist's use of rhetoric to gain the upper hand in argument for fame and money. Twenty-five centuries later, this is exactly the salaried researcher and the modern tenure-loving academic. Progress.",
    "The biggest economic misunderstanding of my childhood was that people got rich from high salaries.",
    "If you want to live in the future, live in the freest place around. Because eventually, all of the innovators and creators will show up there.",
    "It is a curse to have everything go right on your first attempt.",
    "If you need others to know that you are doing well, you're not doing well.",
    "If you're not scared of what you're giving away for free, you're not giving enough.",
    "Get 2x the payment by delivering a service 10x better than your competitors. Make it so good they can't ignore you.",
    "Productivity is often a distraction. Don't aim for better ways to get through your tasks as quickly as possible. Instead aim for better tasks that you never want to stop doing.",
    "What you do is far more important than how you do it, and doing something matters is far more important than doing 100x something doesn't matter.",
    "You have to be willing to give 100 percent with zero expectation of receiving anything in return. Only when you're willing to take 100 percent responsibility for making the relationship work will it work. Otherwise, a relationship left to chance will always be vulnerable to disaster.",
    "While our ancestors risked starving or freezing to death, the risks we face today are psychological, not physiological. In a world where survival is all-but-guaranteed, your greatest risk is that you spend your life not really doing a whole lot of anything.",
    "When a child asks an endless string of \"Why?\" questions, the smartest reply is \"I don't know, what do you think?\"",
    "Missing a train is only painful if you run after it! Likewise, not matching the idea of success others expect from you is only painful if that's what you seek. — Taleb",
    "The best way to verify that you are alive is by checking if you like variations. Remember that food would not have a taste if it weren't for hunger; results are meaningless without effort, joy without sadness, convictions without uncertainty, and an ethical life isn't so when stripped of personal risks. — Taleb",
    "There are only two industries that call their customers 'users' - illegal drugs and software.",
    "Our knowledge of any past event is always incomplete, probably inaccurate, beclouded by ambivalent evidence and biased historians, and perhaps distorted by our own patriotic or religious partisanship. Most history is guessing, and the rest is prejudice.",
    "Bravery is the capacity to perform properly even when scared half to death.",
    "If you see what is right and fail to act on it, you lack courage.",
    "As you start to walk on the way, the way appears.",
    "All is gift.",
    "Where all think alike, no one thinks very much.",
    "It isn't enough to think outside the box. Thinking is passive. Get used to acting outside the box.",
    "Stigler's law: No scientific discovery is named after its original discoverer. Coined by University of Chicago statistician Stephen Stigler who, for consistency, says he stole it from Robert Merton. Happens because the best story, not necessarily the right idea, gets people's attention.",
    "See that old person taking forever in line? That is the future you. Have patience.",
    "The natural state of all possessions is to need repair and maintenance. What you own will eventually own you. Choose selectively.",
    "Don't define yourself by your opinions because then you can't change your mind. Define yourself by your values.",
    "Your 20s are the perfect time to do a few things that are unusual, weird, bold, risky, unexplainable, crazy, unprofitable, and look nothing like \"success.\" For the rest of your life these experiences will serve as your muse.",
    "The goal of teaching should not be to help the students learn how to memorize and spit out information under academic pressure. The purpose of teaching is to inspire the desire for learning in them and make them able to think, understand, and question.",
    "To get better at speaking watch a recording of yourself speaking. It is shocking and painful but an effective way to improve.",
    "About 99% of the time the right time is right now.",
    "Children totally accept —and crave—family rules. \"In our family we have a rule for X\" is the only excuse a parent needs for setting a family policy. In fact, \"I have a rule for X\" is the only excuse you need for your own personal policies.",
    "If you meet a jerk, ignore them. If you meet jerks everywhere every day look deeper into yourself.",
    "Money is overrated. Truly new things rarely need an abundance of money. If that was so, billionaires would have a monopoly on inventing new things, and they don't. Instead, almost all breakthroughs are made by those who lack money. If breakthroughs could be bought, then the rich would buy them. Instead, passion, persistence, belief, and ingenuity are required to invent new things qualities the poor and young often have in abundance. Stay hungry.",
    "Prescription for popular success: do something strange. Make a habit of your weird.",
    "Resiliency is measured by the time it takes you to behave normally after something bad happens. With the most resilient person showing no change to begin with. Note: this doesn't mean you stop feeling bad. It just means you stop letting how you feel change how you act.",
    "A worthy goal for a year is to learn enough about a subject so that you can't believe how ignorant you were a year earlier.",
    "If you know neither the enemy nor yourself, you will succumb in every battle.",
    "No one deserves to be praised for kindness if he does not have the strength to be bad.",
    "The reward for good work is more work.",
    "The greatest rewards come from working on something that nobody has words for. If you possibly can work where there are no names for what you do.",
    "If you can't tell what you desperately need. it's probably sleep.",
    "What you fear is rarely what you think you fear—it is what you link to fear.",
    "You'll learn a lot more if you ask people \"how are you sleeping?\"instead of \"how are you doing?\"",
    "Nature and history do not agree with our conceptions of good and bad; they define good as that which survives, and bad as that which goes under.",
    "Doing nothing is better than being busy doing nothing.",
    "Life will have terrible blows, horrible blows, unfair blows, doesn't matter. And some people recover and others don't. And there I think the attitude of Epictetus is the best. He thought that every mischance in life was an opportunity to behave well, every mischance in life was an opportunity to learn something, and your duty was not to be submerged in self-pity but to utilize the terrible blow in a constructive fashion. That is a very good idea. — Charlie Munger",
    "It's such a simple idea. You want to deliver to the world what you would buy if you were on the other end. By and large the people who have this ethos win in life and they don't win just money, not just honors. They win the respect, the deserved trust of the people they deal with, and there is huge pleasure in life to be obtained from getting deserved trust. — Charlie Munger",
    "The truth knocks on the door and you say, 'Go away, I'm looking for the truth,' and so it goes away. Puzzling.",
    "What did you get done this week?",
    "If you worry about your reputation, you don't deserve to have one.",
    "People are not driven by past causes, but move toward goals that they themselves set. The Greek word for \"good\" (agathon) does not have a moral meaning. It just means \"beneficial.\" Conversely, the word for \"evil\" (kakon) means \"not beneficial.\" No one desires evil: something \"not beneficial.\"",
    "Some people are so poor that all they have is money.",
    "The opposite of peace is desire.",
    "And when nobody wakes you up in the morning, and when nobody waits for you at night, and when you can do whatever you want. What do you call it, freedom or loneliness?",
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4 text-center">Tweets</h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-12 sm:mb-16 text-center max-w-2xl mx-auto">
            My thoughts in 280 characters or less.
          </p>

          {/* Tweets List */}
          <div className="space-y-6 max-w-2xl mx-auto">
            {tweets.map((tweet, index) => {
              // Show today's date for the first 52 tweets (newest), then older dates
              const getTweetDate = (index: number) => {
                if (index < 52) {
                  return new Date().toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })
                }
                return "March 9, 2025"
              }
              
              return (
                <div 
                  key={index}
                  className="group"
                >
                  <p className="text-lg text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-relaxed">
                    {tweet}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                    {getTweetDate(index)}
                  </p>
                </div>
              )
            })}
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
