import Navigation from '@/components/Navigation'
import PlumBackground from '@/components/PlumBackground'

export default function PhotosPage() {
  // Sample photos with metadata
  const photos = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=600&fit=crop",
      alt: "Mountain landscape at sunset",
      caption: "Sunset over the mountains",
      date: "2024-01-15"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=400&fit=crop",
      alt: "Forest path in golden light",
      caption: "Golden hour in the forest",
      date: "2024-01-12"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=500&fit=crop",
      alt: "Urban architecture",
      caption: "City geometry",
      date: "2024-01-10"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=700&fit=crop",
      alt: "Street photography",
      caption: "Street scene",
      date: "2024-01-08"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=450&fit=crop",
      alt: "Abstract patterns",
      caption: "Patterns in nature",
      date: "2024-01-05"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=550&fit=crop",
      alt: "Portrait photography",
      caption: "Human connection",
      date: "2024-01-03"
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=600&fit=crop",
      alt: "Minimalist composition",
      caption: "Less is more",
      date: "2023-12-30"
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=400&fit=crop",
      alt: "Light and shadow",
      caption: "Playing with light",
      date: "2023-12-28"
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=500&fit=crop",
      alt: "Urban decay",
      caption: "Beauty in decay",
      date: "2023-12-25"
    },
    {
      id: 10,
      src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=650&fit=crop",
      alt: "Nature close-up",
      caption: "Details matter",
      date: "2023-12-22"
    },
    {
      id: 11,
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=450&fit=crop",
      alt: "Architectural lines",
      caption: "Clean lines",
      date: "2023-12-20"
    },
    {
      id: 12,
      src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=600&fit=crop",
      alt: "Street art",
      caption: "Art in the wild",
      date: "2023-12-18"
    },
    {
      id: 13,
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=500&fit=crop",
      alt: "Reflections",
      caption: "Mirror world",
      date: "2023-12-15"
    },
    {
      id: 14,
      src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=400&fit=crop",
      alt: "Texture study",
      caption: "Surface stories",
      date: "2023-12-12"
    },
    {
      id: 15,
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=550&fit=crop",
      alt: "Color theory",
      caption: "Color harmony",
      date: "2023-12-10"
    },
    {
      id: 16,
      src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=600&fit=crop",
      alt: "Movement blur",
      caption: "Motion captured",
      date: "2023-12-08"
    },
    {
      id: 17,
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=450&fit=crop",
      alt: "Symmetry",
      caption: "Perfect balance",
      date: "2023-12-05"
    },
    {
      id: 18,
      src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=500&fit=crop",
      alt: "Abstract shapes",
      caption: "Geometric dreams",
      date: "2023-12-03"
    },
    {
      id: 19,
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=650&fit=crop",
      alt: "Documentary style",
      caption: "Real moments",
      date: "2023-12-01"
    },
    {
      id: 20,
      src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=400&fit=crop",
      alt: "Minimalist scene",
      caption: "Empty space",
      date: "2023-11-28"
    },
    {
      id: 21,
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=550&fit=crop",
      alt: "Urban portrait",
      caption: "City faces",
      date: "2023-11-25"
    },
    {
      id: 22,
      src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=600&fit=crop",
      alt: "Natural patterns",
      caption: "Nature's design",
      date: "2023-11-22"
    },
    {
      id: 23,
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=450&fit=crop",
      alt: "Light study",
      caption: "Chasing light",
      date: "2023-11-20"
    },
    {
      id: 24,
      src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=500&fit=crop",
      alt: "Street geometry",
      caption: "Urban geometry",
      date: "2023-11-18"
    }
  ]

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

          {/* Photo Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 max-w-6xl mx-auto">
            {photos.map((photo) => (
              <div 
                key={photo.id}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-lg bg-gray-200 dark:bg-gray-700">
                  <img
                    src={photo.src}
                    alt={photo.alt}
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
              These photos capture moments that made me pause and look twice.
            </p>
          </div>
        </div>
      </main>
    </>
  )
}
