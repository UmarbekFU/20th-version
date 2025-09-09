import Navigation from '@/components/Navigation'
import PlumBackground from '@/components/PlumBackground'

export default function MoviesListPage() {
  // My actual movies with ratings
  const movies = [
    {
      title: "Parasite",
      year: 2019,
      rating: 9,
      comment: "Bong Joon-ho's masterpiece. A perfect blend of thriller, comedy, and social commentary that keeps you guessing until the end."
    },
    {
      title: "The Godfather",
      year: 1972,
      rating: 9,
      comment: "The gold standard of cinema. Coppola's direction, Brando's performance, and the storytelling are all perfect."
    },
    {
      title: "The Shawshank Redemption",
      year: 1994,
      rating: 9,
      comment: "Hope is a good thing. Freeman and Robbins create magic in this story of friendship, hope, and redemption."
    },
    {
      title: "Before Sunrise",
      year: 1995,
      rating: 8,
      comment: "Pure conversation cinema. Two people walking and talking for 90 minutes, yet utterly captivating. The chemistry between Hawke and Delpy is magical."
    },
    {
      title: "Before Sunset",
      year: 2004,
      rating: 8,
      comment: "Nine years later, the same characters, the same magic. More mature, more bittersweet, but just as compelling. Real-time storytelling at its finest."
    },
    {
      title: "A Beautiful Mind",
      year: 2001,
      rating: 8,
      comment: "Russell Crowe's portrayal of John Nash is haunting. A powerful exploration of genius, madness, and the thin line between them."
    },
    {
      title: "Dead Poets Society",
      year: 1989,
      rating: 8,
      comment: "Carpe diem. Robin Williams' performance is unforgettable, and the message about seizing life resonates deeply."
    },
    {
      title: "Fight Club",
      year: 1999,
      rating: 8,
      comment: "A mind-bending critique of consumer culture and masculinity. Fincher's direction is masterful, and the twist still shocks."
    },
    {
      title: "Good Will Hunting",
      year: 1997,
      rating: 8,
      comment: "Matt Damon and Robin Williams shine in this story of genius, trauma, and finding your path. The therapy scenes are particularly powerful."
    },
    {
      title: "The Big Short",
      year: 2015,
      rating: 8,
      comment: "Makes complex financial concepts accessible and entertaining. A darkly comedic look at the 2008 financial crisis."
    },
    {
      title: "The Matrix",
      year: 1999,
      rating: 8,
      comment: "Revolutionary action and philosophy. The Wachowskis created a world that still influences sci-fi today."
    },
    {
      title: "The Social Network",
      year: 2010,
      rating: 7,
      comment: "A masterclass in dialogue and pacing. Shows how the best stories are often about people, not events."
    },
    {
      title: "Inception",
      year: 2010,
      rating: 7,
      comment: "Mind-bending concept executed perfectly. The practical effects still hold up."
    },
    {
      title: "The Dark Knight",
      year: 2008,
      rating: 7,
      comment: "Redefined what superhero movies could be. Ledger's Joker is still unmatched."
    },
    {
      title: "Whiplash",
      year: 2014,
      rating: 7,
      comment: "Intense and relentless. Shows the price of greatness better than any film I've seen."
    },
    {
      title: "Before Midnight",
      year: 2013,
      rating: 7,
      comment: "The trilogy's most challenging entry. Love isn't just romance—it's work, compromise, and choosing each other every day. Raw and honest."
    },
    {
      title: "The Man Who Knew Infinity",
      year: 2015,
      rating: 7,
      comment: "Beautiful portrayal of mathematical genius and the human cost of brilliance. Dev Patel delivers a moving performance."
    },
    {
      title: "Catch Me If You Can",
      year: 2002,
      rating: 7,
      comment: "Spielberg at his most playful. DiCaprio and Hanks have incredible chemistry in this cat-and-mouse game."
    },
    {
      title: "Forrest Gump",
      year: 1994,
      rating: 7,
      comment: "Life is like a box of chocolates. Hanks' performance is iconic, and the historical backdrop adds emotional weight."
    },
    {
      title: "Groundhog Day",
      year: 1993,
      rating: 7,
      comment: "A perfect comedy with surprising depth. Murray's transformation from cynic to enlightened soul is beautifully executed."
    },
    {
      title: "Shutter Island",
      year: 2010,
      rating: 7,
      comment: "Scorsese's psychological thriller is a masterclass in atmosphere and misdirection. DiCaprio's performance is haunting."
    },
    {
      title: "Steve Jobs",
      year: 2015,
      rating: 7,
      comment: "Sorkin's dialogue crackles with energy. Fassbender captures Jobs' intensity and the film's structure is brilliant."
    },
    {
      title: "The Founder",
      year: 2016,
      rating: 7,
      comment: "Keaton delivers a nuanced performance as Ray Kroc. A fascinating look at ambition, business, and the American dream."
    },
    {
      title: "The Imitation Game",
      year: 2014,
      rating: 7,
      comment: "Cumberbatch's portrayal of Turing is compelling. A tragic story of genius, war, and the cost of being different."
    },
    {
      title: "The Pursuit of Happyness",
      year: 2006,
      rating: 7,
      comment: "Will Smith's best dramatic performance. A moving story about perseverance and the power of never giving up."
    },
    {
      title: "The Wolf of Wall Street",
      year: 2013,
      rating: 7,
      comment: "Scorsese's wild ride through excess and corruption. DiCaprio's performance is electric, and the energy is infectious."
    },
    {
      title: "Too Big to Fail",
      year: 2011,
      rating: 7,
      comment: "A gripping look at the 2008 financial crisis from the inside. The ensemble cast brings the high-stakes drama to life."
    },
    {
      title: "Interstellar",
      year: 2014,
      rating: 6,
      comment: "Ambitious and flawed, but the emotional core and visual spectacle make it unforgettable."
    },
    {
      title: "Her",
      year: 2013,
      rating: 6,
      comment: "Beautiful meditation on love and connection in the digital age."
    },
    {
      title: "Arrival",
      year: 2016,
      rating: 6,
      comment: "Sci-fi that focuses on communication and understanding rather than conflict."
    },
    {
      title: "Ready Player One",
      year: 2018,
      rating: 6,
      comment: "A love letter to pop culture and gaming. Spielberg's visual mastery makes the virtual world feel real and exciting."
    }
  ]

  return (
    <>
      <PlumBackground />
      <Navigation />
      <main className="min-h-screen pt-32">
        <div className="max-w-4xl mx-auto px-8">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4 text-center">Movies I Loved</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-16 text-center max-w-2xl mx-auto">
            Films that made me think, feel, or just entertained me. Each with a brief comment and rating out of 10.
          </p>

          {/* Movies List */}
          <div className="space-y-6 max-w-3xl mx-auto">
            {movies.map((movie, index) => (
              <div 
                key={index}
                className="group"
              >
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {movie.title}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {movie.year}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                      {movie.rating}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400 ml-1">/10</span>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {movie.comment}
                </p>
              </div>
            ))}
          </div>

          {/* Footer Note */}
          <div className="mt-16 text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              This list is always growing. I watch a lot of films, but only the ones that really stick with me make it here.
            </p>
          </div>
        </div>
      </main>
    </>
  )
}
