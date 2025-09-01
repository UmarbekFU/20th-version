import Navigation from '@/components/Navigation'
import PlumBackground from '@/components/PlumBackground'

export default function ScrapbookPage() {
  // Sample scrapbook items with varied content
  const scrapbookItems = [
    // Memes and funny images
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop",
      alt: "Funny meme about programming",
      type: "meme"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=250&h=300&fit=crop",
      alt: "Another meme",
      type: "meme"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=150&fit=crop",
      alt: "Programming joke",
      type: "meme"
    },
    // Code snippets
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=350&h=250&fit=crop",
      alt: "Code snippet",
      type: "code"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=200&h=400&fit=crop",
      alt: "Another code snippet",
      type: "code"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=300&h=300&fit=crop",
      alt: "Code example",
      type: "code"
    },
    // Strange photos
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=250&h=350&fit=crop",
      alt: "Strange object",
      type: "strange"
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=200&fit=crop",
      alt: "Weird pattern",
      type: "strange"
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=400&fit=crop",
      alt: "Odd scene",
      type: "strange"
    },
    {
      id: 10,
      src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=200&h=300&fit=crop",
      alt: "Random find",
      type: "strange"
    },
    // Screenshots
    {
      id: 11,
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=350&h=250&fit=crop",
      alt: "Interesting screenshot",
      type: "screenshot"
    },
    {
      id: 12,
      src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=300&h=300&fit=crop",
      alt: "Another screenshot",
      type: "screenshot"
    },
    {
      id: 13,
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=250&h=400&fit=crop",
      alt: "UI screenshot",
      type: "screenshot"
    },
    {
      id: 14,
      src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=200&fit=crop",
      alt: "Error message",
      type: "screenshot"
    },
    // More memes
    {
      id: 15,
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop",
      alt: "Tech meme",
      type: "meme"
    },
    {
      id: 16,
      src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=200&h=350&fit=crop",
      alt: "Programming humor",
      type: "meme"
    },
    {
      id: 17,
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=350&h=250&fit=crop",
      alt: "Developer joke",
      type: "meme"
    },
    // More strange things
    {
      id: 18,
      src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=300&h=400&fit=crop",
      alt: "Bizarre object",
      type: "strange"
    },
    {
      id: 19,
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=250&h=300&fit=crop",
      alt: "Odd pattern",
      type: "strange"
    },
    {
      id: 20,
      src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=200&fit=crop",
      alt: "Random find",
      type: "strange"
    },
    // More code
    {
      id: 21,
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop",
      alt: "Algorithm snippet",
      type: "code"
    },
    {
      id: 22,
      src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=200&h=400&fit=crop",
      alt: "Function example",
      type: "code"
    },
    {
      id: 23,
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=350&h=250&fit=crop",
      alt: "Code pattern",
      type: "code"
    },
    {
      id: 24,
      src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=300&h=300&fit=crop",
      alt: "Debug output",
      type: "code"
    },
    {
      id: 25,
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=250&h=350&fit=crop",
      alt: "API response",
      type: "code"
    },
    {
      id: 26,
      src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=200&fit=crop",
      alt: "Configuration file",
      type: "code"
    },
    {
      id: 27,
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop",
      alt: "Another meme",
      type: "meme"
    },
    {
      id: 28,
      src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=200&h=400&fit=crop",
      alt: "Strange meme",
      type: "meme"
    },
    {
      id: 29,
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=350&h=250&fit=crop",
      alt: "Weird screenshot",
      type: "screenshot"
    },
    {
      id: 30,
      src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=300&h=300&fit=crop",
      alt: "Random image",
      type: "strange"
    }
  ]

  // Randomize the order of items
  const shuffledItems = [...scrapbookItems].sort(() => Math.random() - 0.5)

  return (
    <>
      <PlumBackground />
      <Navigation />
      <main className="min-h-screen pt-32">
        <div className="max-w-7xl mx-auto px-8">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4 text-center">Scrapbook</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-16 text-center max-w-2xl mx-auto">
            A messy corner where unfinished thoughts live. Screenshots, code snippets, memes, and strange finds.
          </p>

          {/* Messy Scrapbook Grid */}
          <div className="columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-3 max-w-6xl mx-auto">
            {shuffledItems.map((item) => (
              <div 
                key={item.id}
                className="group cursor-pointer mb-3 break-inside-avoid"
              >
                <div className="relative overflow-hidden rounded-lg bg-gray-200 dark:bg-gray-700">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Footer Note */}
          <div className="mt-16 text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              It's messy on purpose. These are the digital scraps of my thinking process.
            </p>
          </div>
        </div>
      </main>
    </>
  )
}
