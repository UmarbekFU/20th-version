import Navigation from '@/components/Navigation'
import Link from 'next/link'

export default function ListPage() {
  const listCategories = [
    {
      title: "Movies",
      description: "Films that made me think, feel, or just entertained me. Each with a brief comment and rating out of 10.",
      href: "/list/movies",
      count: "50+ films"
    },
    {
      title: "Podcasts",
      description: "Shows that keep me company during walks, commutes, and quiet moments. Each with thoughts and recommendations.",
      href: "/list/podcasts", 
      count: "20+ shows"
    },
    {
      title: "Things I Own",
      description: "A curated list of possessions that actually matter to me. I try to own fewer things, but the things I own, I use and appreciate.",
      href: "/list/tio",
      count: "100+ items"
    }
  ]

  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-32">
        <div className="max-w-4xl mx-auto px-8">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4 text-center">List</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-16 text-center max-w-2xl mx-auto">
            Things I consume and own. Lists reveal patterns you didn't know existed.
          </p>

          {/* List Categories */}
          <div className="space-y-8 max-w-3xl mx-auto">
            {listCategories.map((category, index) => (
              <Link 
                key={index}
                href={category.href}
                className="group block"
              >
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {category.title}
                  </h2>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {category.count}
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Footer Note */}
          <div className="mt-16 text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              These lists are living documents. I update them as I discover new things and refine my thinking.
            </p>
          </div>
        </div>
      </main>
    </>
  )
}
