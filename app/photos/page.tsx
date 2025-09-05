import Navigation from '@/components/Navigation'
import PlumBackground from '@/components/PlumBackground'

export default function PhotosPage() {
  // Real photos from the user's Pictures folder
  const photos = [
    {
      id: 1,
      src: "/photos/IMG_0965.jpg",
      alt: "Photo IMG_0965",
      caption: "Digital memory",
      date: "2024"
    },
    {
      id: 2,
      src: "/photos/me_cw.jpeg",
      alt: "Portrait photo",
      caption: "Self portrait",
      date: "2024"
    },
    {
      id: 3,
      src: "/photos/samarkand2024.jpg",
      alt: "Samarkand 2024",
      caption: "Samarkand memories",
      date: "2024-11-08"
    }
  ]

  // Create a more balanced distribution system
  const createBalancedLayout = (photos) => {
    // Shuffle photos
    const shuffled = [...photos].sort(() => Math.random() - 0.5)
    
    // Create balanced size distribution
    const sizeOptions = [
      'aspect-square',
      'aspect-[4/5]', 
      'aspect-[3/4]',
      'aspect-[5/4]',
      'aspect-[4/3]',
      'aspect-square',
      'aspect-[3/4]',
      'aspect-[4/3]'
    ]
    
    // Distribute sizes evenly across photos
    return shuffled.map((photo, index) => ({
      ...photo,
      size: sizeOptions[index % sizeOptions.length],
      margin: ['mb-2', 'mb-3', 'mb-4'][index % 3]
    }))
  }
  
  const balancedPhotos = createBalancedLayout(photos)

  return (
    <>
      <PlumBackground />
      <Navigation />
      <main className="min-h-screen pt-32">
        <div className="max-w-7xl mx-auto px-8">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4 text-center">Photos</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-16 text-center max-w-2xl mx-auto">
            I take photos when I look up from the screen. Mostly things that catch my eye in unexpected ways.
          </p>

          {/* Photo Gallery Masonry Grid */}
          <div className="columns-2 md:columns-3 lg:columns-4 gap-3 max-w-6xl mx-auto">
            {balancedPhotos.map((photo) => (
              <div 
                key={photo.id}
                className={`group cursor-pointer ${photo.margin} break-inside-avoid`}
              >
                <div className={`relative overflow-hidden rounded-lg bg-gray-200 dark:bg-gray-700 ${photo.size}`}>
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
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
              These photos capture moments that made me pause and look twice.
            </p>
          </div>
        </div>
      </main>
    </>
  )
}
