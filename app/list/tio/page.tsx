import Navigation from '@/components/Navigation'
export default function ThingsIOwnPage() {
  // My actual items
  const items = [
    {
      category: "Tech",
      items: [
        {
          name: "MacBook Air 13\"",
          comment: "My main work machine. Perfect balance of power and portability."
        },
        {
          name: "iPhone 11",
          comment: "Still works great. No need to upgrade just for the sake of it."
        }
      ]
    }
  ]

  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-32">
        <div className="max-w-4xl mx-auto px-8">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4 text-center">Things I Own</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-16 text-center max-w-2xl mx-auto">
            A curated list of possessions that actually matter to me. I try to own fewer things, but the things I own, I use and appreciate.
          </p>

          {/* Items by Category */}
          <div className="space-y-12 max-w-3xl mx-auto">
            {items.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  {category.category}
                </h2>
                <div className="space-y-4">
                  {category.items.map((item, itemIndex) => (
                    <div 
                      key={itemIndex}
                      className="group"
                    >
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {item.name}
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        {item.comment}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Footer Note */}
          <div className="mt-16 text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              I believe in owning fewer, better things. Everything here serves a purpose and brings me joy.
            </p>
          </div>
        </div>
      </main>
    </>
  )
}
