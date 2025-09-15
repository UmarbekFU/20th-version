import Navigation from '@/components/Navigation'
import PlumBackground from '@/components/PlumBackground'
import Link from 'next/link'

export default function HomePage() {
  return (
    <>
      <PlumBackground />
      <Navigation />
      
      {/* Main Content */}
      <main className="min-h-screen pt-32">
        <div className="max-w-3xl mx-auto px-8">
          {/* Hero Section */}
          <section className="mb-20">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-gray-900 dark:text-gray-100 mb-8 leading-tight text-center">
              Umarbek
            </h1>
            
            <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto">
              <p className="text-center text-xl">
                Hey! I'm Umarbek. Samarkand native, I now live in Tashkent, Uzbekistan.
              </p>
              
              <p>
                I write <Link href="/essays" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors underline decoration-blue-300 dark:decoration-blue-600 hover:decoration-blue-500 dark:hover:decoration-blue-400">essays</Link> when I try to explain something to myself.
              </p>
              
              <p>
                My <Link href="/ai" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors underline decoration-blue-300 dark:decoration-blue-600 hover:decoration-blue-500 dark:hover:decoration-blue-400">atomic ideas</Link> are half-formed thoughts I'm working through.
              </p>
              
              <p>
                I <span className="group cursor-pointer">
                  <span className="group-hover:hidden">build</span>
                  <span className="hidden group-hover:inline text-blue-600 dark:text-blue-400">break</span>
                </span> stuff. I'm <span className="group cursor-pointer">
                  <span className="group-hover:hidden">solving</span>
                  <span className="hidden group-hover:inline text-blue-600 dark:text-blue-400">creating</span>
                </span> my own <Link href="/projects" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors underline decoration-blue-300 dark:decoration-blue-600 hover:decoration-blue-500 dark:hover:decoration-blue-400">problem</Link>. If it <span className="group cursor-pointer">
                  <span className="group-hover:hidden">helps</span>
                  <span className="hidden group-hover:inline text-blue-600 dark:text-blue-400">bothers</span>
                </span> you too, even better.
              </p>
              
              <p>
                I take <Link href="/notes" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors underline decoration-blue-300 dark:decoration-blue-600 hover:decoration-blue-500 dark:hover:decoration-blue-400">notes</Link> when I read. Not polished summaries, just the parts that made me stop and think.
              </p>
              
              <p>
                I <Link href="/list" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors underline decoration-blue-300 dark:decoration-blue-600 hover:decoration-blue-500 dark:hover:decoration-blue-400">list</Link> everything I consume—books, films, podcasts etc.
              </p>
              
              <p>
                If you care about tools I <Link href="/uses" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors underline decoration-blue-300 dark:decoration-blue-600 hover:decoration-blue-500 dark:hover:decoration-blue-400">use</Link>, I keep that updated.
              </p>
              
              <p>
                You can find screenshots that made me think, code snippets I might need later, memes that contain truth on <Link href="/scrapbook" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors underline decoration-blue-300 dark:decoration-blue-600 hover:decoration-blue-500 dark:hover:decoration-blue-400">scrapbook</Link>.
              </p>
              
              <p>
                Read more <Link href="/about" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors underline decoration-blue-300 dark:decoration-blue-600 hover:decoration-blue-500 dark:hover:decoration-blue-400">about me</Link>.
              </p>
            </div>
          </section>

          {/* Now Section */}
          <section className="mb-20">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center">
              <Link href="/now" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors">
                Now
              </Link>
            </h2>
            
            <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto">
              <p>
                I'm building this website.
              </p>
              
              <p>
                Always looking for people working on interesting problems. The kind where you can't Google the answer.
              </p>
              
              <p>
                I'm in Tashkent now, if you are around, please reach out and let's have some coffee or work together.
              </p>
              
              <p>
                I love meeting new people, and I reply to every email, so <Link href="/contact" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors underline decoration-blue-300 dark:decoration-blue-600 hover:decoration-blue-500 dark:hover:decoration-blue-400">say hello</Link>.
              </p>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-3xl mx-auto px-8 py-12">
          {/* Quick Links */}
          <div className="mb-12">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-center">
              <div><Link href="/projects" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">projects</Link></div>
              <div><Link href="/essays" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">essays</Link></div>
              <div><Link href="/naq" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">NAQs</Link></div>
              <div><Link href="/more" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">more</Link></div>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 dark:text-gray-400 pt-8 border-t border-gray-200 dark:border-gray-700">
            <div className="mb-4 md:mb-0">
              © 2024 Umarbek
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
