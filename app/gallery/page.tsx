import Navigation from '@/components/Navigation'

export default function GalleryPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-32">
        <div className="max-w-3xl mx-auto px-8">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center">Gallery</h1>
          <div className="text-center max-w-2xl mx-auto space-y-6">
            <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
              Photos I take when I look up from the screen. Mostly things that catch my eye in unexpected ways.
            </p>
            
            <div className="glass-effect rounded-lg p-8">
              <p className="text-gray-900 dark:text-gray-100 text-lg">
                Photography gallery coming soon. This is where I'll share the moments that made me pause and look twice.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
