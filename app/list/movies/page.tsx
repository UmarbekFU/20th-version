import Navigation from '@/components/Navigation'
import PlumBackground from '@/components/PlumBackground'

export default function MoviesListPage() {
  // Sample movies with ratings and comments
  const movies = [
    {
      title: "The Social Network",
      year: 2010,
      rating: 9,
      comment: "A masterclass in dialogue and pacing. Shows how the best stories are often about people, not events."
    },
    {
      title: "Inception",
      year: 2010,
      rating: 8,
      comment: "Mind-bending concept executed perfectly. The practical effects still hold up."
    },
    {
      title: "The Dark Knight",
      year: 2008,
      rating: 9,
      comment: "Redefined what superhero movies could be. Ledger's Joker is still unmatched."
    },
    {
      title: "Interstellar",
      year: 2014,
      rating: 8,
      comment: "Ambitious and flawed, but the emotional core and visual spectacle make it unforgettable."
    },
    {
      title: "Whiplash",
      year: 2014,
      rating: 9,
      comment: "Intense and relentless. Shows the price of greatness better than any film I've seen."
    },
    {
      title: "Her",
      year: 2013,
      rating: 8,
      comment: "Beautiful meditation on love and connection in the digital age."
    },
    {
      title: "The Grand Budapest Hotel",
      year: 2014,
      rating: 8,
      comment: "Wes Anderson at his most Wes Anderson. Pure visual and comedic delight."
    },
    {
      title: "Mad Max: Fury Road",
      year: 2015,
      rating: 9,
      comment: "Action filmmaking at its absolute peak. Every frame is perfect."
    },
    {
      title: "Arrival",
      year: 2016,
      rating: 8,
      comment: "Sci-fi that focuses on communication and understanding rather than conflict."
    },
    {
      title: "La La Land",
      year: 2016,
      rating: 8,
      comment: "Captures the magic of old Hollywood while feeling completely modern."
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
