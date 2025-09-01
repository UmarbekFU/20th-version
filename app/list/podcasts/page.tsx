import Navigation from '@/components/Navigation'
import PlumBackground from '@/components/PlumBackground'

export default function PodcastsListPage() {
  // Sample podcasts with ratings and comments
  const podcasts = [
    {
      title: "The Tim Ferriss Show",
      host: "Tim Ferriss",
      rating: 9,
      comment: "The gold standard for long-form interviews. Ferriss has a unique ability to extract insights from high performers."
    },
    {
      title: "Lex Fridman Podcast",
      host: "Lex Fridman",
      rating: 8,
      comment: "Deep conversations about AI, science, and philosophy. Lex asks the questions I wish I could ask."
    },
    {
      title: "The Joe Rogan Experience",
      host: "Joe Rogan",
      rating: 7,
      comment: "Hit or miss depending on the guest, but when it's good, it's really good. Great for long drives."
    },
    {
      title: "How I Built This",
      host: "Guy Raz",
      rating: 8,
      comment: "Fascinating stories of how companies were built from nothing. Inspiring and educational."
    },
    {
      title: "The Knowledge Project",
      host: "Shane Parrish",
      rating: 9,
      comment: "Mental models and decision-making frameworks. Every episode makes me think differently."
    },
    {
      title: "Acquired",
      host: "Ben Gilbert & David Rosenthal",
      rating: 8,
      comment: "Deep dives into company histories. Makes business history actually interesting."
    },
    {
      title: "The All-In Podcast",
      host: "Chamath, Jason, David, Friedberg",
      rating: 7,
      comment: "Tech and business insights from people who actually know what they're talking about."
    },
    {
      title: "Naval",
      host: "Naval Ravikant",
      rating: 9,
      comment: "Short, profound insights about life, work, and happiness. Every episode is quotable."
    },
    {
      title: "The Ezra Klein Show",
      host: "Ezra Klein",
      rating: 8,
      comment: "Thoughtful conversations about politics, policy, and big ideas. Nuanced and intelligent."
    },
    {
      title: "Invest Like the Best",
      host: "Patrick O'Shaughnessy",
      rating: 8,
      comment: "Investment insights that go beyond just money. Great for understanding how the world works."
    }
  ]

  return (
    <>
      <PlumBackground />
      <Navigation />
      <main className="min-h-screen pt-32">
        <div className="max-w-4xl mx-auto px-8">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4 text-center">Podcasts I Listen To</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-16 text-center max-w-2xl mx-auto">
            Shows that keep me company during walks, commutes, and quiet moments. Each with thoughts and recommendations.
          </p>

          {/* Podcasts List */}
          <div className="space-y-6 max-w-3xl mx-auto">
            {podcasts.map((podcast, index) => (
              <div 
                key={index}
                className="group"
              >
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {podcast.title}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {podcast.host}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                      {podcast.rating}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400 ml-1">/10</span>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {podcast.comment}
                </p>
              </div>
            ))}
          </div>

          {/* Footer Note */}
          <div className="mt-16 text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              I listen to podcasts while walking, cooking, and doing chores. They're my favorite way to learn while doing other things.
            </p>
          </div>
        </div>
      </main>
    </>
  )
}
