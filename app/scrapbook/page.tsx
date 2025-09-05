import Navigation from '@/components/Navigation'
import PlumBackground from '@/components/PlumBackground'

export default function ScrapbookPage() {
  // Real scrapbook items from the user's Scrapbook folder
  const scrapbookItems = [
    // Memes and funny images
    {
      id: 1,
      src: "/scrapbook/meme.png",
      alt: "Programming meme",
      type: "meme"
    },
    {
      id: 2,
      src: "/scrapbook/courage.png",
      alt: "Courage meme",
      type: "meme"
    },
    {
      id: 3,
      src: "/scrapbook/mediocre.png",
      alt: "Mediocre meme",
      type: "meme"
    },
    {
      id: 4,
      src: "/scrapbook/whining.png",
      alt: "Whining meme",
      type: "meme"
    },
    {
      id: 5,
      src: "/scrapbook/You are silly.png",
      alt: "You are silly meme",
      type: "meme"
    },
    // Study and learning content
    {
      id: 6,
      src: "/scrapbook/study.png",
      alt: "Study content",
      type: "study"
    },
    {
      id: 7,
      src: "/scrapbook/Taleb on bro scientist.png",
      alt: "Taleb on bro scientist",
      type: "study"
    },
    // Professional content
    {
      id: 8,
      src: "/scrapbook/linkedin.png",
      alt: "LinkedIn content",
      type: "professional"
    },
    {
      id: 9,
      src: "/scrapbook/PG with JL.png",
      alt: "PG with JL",
      type: "professional"
    },
    // Photos from September 5, 2025
    {
      id: 10,
      src: "/scrapbook/photo_2025-09-05 05.24.49.jpeg",
      alt: "Photo from September 5, 2025",
      type: "photo"
    },
    {
      id: 11,
      src: "/scrapbook/photo_2025-09-05 05.24.59.jpeg",
      alt: "Photo from September 5, 2025",
      type: "photo"
    },
    {
      id: 12,
      src: "/scrapbook/photo_2025-09-05 05.25.16.jpeg",
      alt: "Photo from September 5, 2025",
      type: "photo"
    },
    {
      id: 13,
      src: "/scrapbook/photo_2025-09-05 05.25.20.jpeg",
      alt: "Photo from September 5, 2025",
      type: "photo"
    },
    {
      id: 14,
      src: "/scrapbook/photo_2025-09-05 05.25.29.jpeg",
      alt: "Photo from September 5, 2025",
      type: "photo"
    },
    {
      id: 15,
      src: "/scrapbook/photo_2025-09-05 05.25.37.jpeg",
      alt: "Photo from September 5, 2025",
      type: "photo"
    },
    {
      id: 16,
      src: "/scrapbook/photo_2025-09-05 05.25.42.jpeg",
      alt: "Photo from September 5, 2025",
      type: "photo"
    },
    {
      id: 17,
      src: "/scrapbook/photo_2025-09-05 05.25.47.jpeg",
      alt: "Photo from September 5, 2025",
      type: "photo"
    },
    {
      id: 18,
      src: "/scrapbook/photo_2025-09-05 05.25.55.jpeg",
      alt: "Photo from September 5, 2025",
      type: "photo"
    },
    {
      id: 19,
      src: "/scrapbook/photo_2025-09-05 05.25.58.jpeg",
      alt: "Photo from September 5, 2025",
      type: "photo"
    },
    {
      id: 20,
      src: "/scrapbook/photo_2025-09-05 05.26.01.jpeg",
      alt: "Photo from September 5, 2025",
      type: "photo"
    },
    {
      id: 21,
      src: "/scrapbook/photo_2025-09-05 05.26.03.jpeg",
      alt: "Photo from September 5, 2025",
      type: "photo"
    },
    {
      id: 22,
      src: "/scrapbook/photo_2025-09-05 05.26.08.jpeg",
      alt: "Photo from September 5, 2025",
      type: "photo"
    },
    {
      id: 23,
      src: "/scrapbook/photo_2025-09-05 05.26.23.jpeg",
      alt: "Photo from September 5, 2025",
      type: "photo"
    },
    {
      id: 24,
      src: "/scrapbook/photo_2025-09-05 05.26.28.jpeg",
      alt: "Photo from September 5, 2025",
      type: "photo"
    },
    {
      id: 25,
      src: "/scrapbook/photo_2025-09-05 05.26.41.jpeg",
      alt: "Photo from September 5, 2025",
      type: "photo"
    },
    {
      id: 26,
      src: "/scrapbook/photo_2025-09-05 05.26.54.jpeg",
      alt: "Photo from September 5, 2025",
      type: "photo"
    },
    {
      id: 27,
      src: "/scrapbook/photo_2025-09-05 05.27.23.jpeg",
      alt: "Photo from September 5, 2025",
      type: "photo"
    },
    {
      id: 28,
      src: "/scrapbook/photo_2025-09-05 05.27.35.jpeg",
      alt: "Photo from September 5, 2025",
      type: "photo"
    },
    {
      id: 29,
      src: "/scrapbook/photo_2025-09-05 05.28.00.jpeg",
      alt: "Photo from September 5, 2025",
      type: "photo"
    },
    {
      id: 30,
      src: "/scrapbook/photo_2025-09-05 05.28.22.jpeg",
      alt: "Photo from September 5, 2025",
      type: "photo"
    },
    {
      id: 31,
      src: "/scrapbook/photo_2025-09-05 05.28.27.jpeg",
      alt: "Photo from September 5, 2025",
      type: "photo"
    },
    {
      id: 32,
      src: "/scrapbook/photo_2025-09-05 05.28.32.jpeg",
      alt: "Photo from September 5, 2025",
      type: "photo"
    },
    {
      id: 33,
      src: "/scrapbook/photo_2025-09-05 05.28.36.jpeg",
      alt: "Photo from September 5, 2025",
      type: "photo"
    },
    {
      id: 34,
      src: "/scrapbook/photo_2025-09-05 05.28.58.jpeg",
      alt: "Photo from September 5, 2025",
      type: "photo"
    },
    {
      id: 35,
      src: "/scrapbook/photo_2025-09-05 05.29.09.jpeg",
      alt: "Photo from September 5, 2025",
      type: "photo"
    },
    {
      id: 36,
      src: "/scrapbook/photo_2025-09-05 05.29.22.jpeg",
      alt: "Photo from September 5, 2025",
      type: "photo"
    },
    {
      id: 37,
      src: "/scrapbook/photo_2025-09-05 05.29.30.jpeg",
      alt: "Photo from September 5, 2025",
      type: "photo"
    },
    {
      id: 38,
      src: "/scrapbook/photo_2025-09-05 05.30.18.jpeg",
      alt: "Photo from September 5, 2025",
      type: "photo"
    },
    {
      id: 39,
      src: "/scrapbook/photo_2025-09-05 05.30.52.jpeg",
      alt: "Photo from September 5, 2025",
      type: "photo"
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
