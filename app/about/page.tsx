import Navigation from '@/components/Navigation'
import PlumBackground from '@/components/PlumBackground'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <>
      <PlumBackground />
      <Navigation />
      <main className="min-h-screen pt-32">
        <div className="max-w-3xl mx-auto px-8">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center">About Me</h1>
          
          <div className="space-y-8 text-lg md:text-xl text-gray-800 dark:text-gray-200 leading-relaxed max-w-2xl mx-auto">
            
            {/* Personal Background */}
            <section>
              <p>
                I'm Samarkandi. I was born in 2006 in a village in the Past Darg'om district of Samarkand. The last few years, I've been living in Tashkent.
              </p>
            </section>
            
            {/* What I Want */}
            <section>
              <p>
                I want to create things — tools, websites, essays, startups, apps, systems, and especially new ideas. I also want to learn — new ways of thinking, new ways of living. That's why I read <Link href="/notes" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors underline decoration-gray-300 dark:decoration-gray-600 hover:decoration-blue-400 dark:hover:decoration-blue-500">books</Link>.
              </p>
              
              <p>
                I want to connect with people who feel the same: who stretch, strive, and grow.
              </p>
            </section>
            
            {/* My Favorite Days */}
            <section>
              <p>
                My favorite days are the ones where I work from morning to night, pausing only to move a little. I call it "work," but really it's play — writing, learning, improving, and creating.
              </p>
            </section>
            
            {/* About Labels */}
            <section>
              <p>
                I don't like labels. In my mind, someone self-identified with something typically means that person is a fraud. I like to identify with the <Link href="/now" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors underline decoration-gray-300 dark:decoration-gray-600 hover:decoration-blue-400 dark:hover:decoration-blue-500">problem</Link> I'm currently working on.
              </p>
            </section>
            
            {/* Skin in the Game */}
            <section>
              <p>
                I believe in skin in the game. This means: don't tell me what to do if you don't pay the price when you're wrong. Don't give advice you won't take yourself. Don't pretend to be a hero on other people's risks.
              </p>
            </section>
            
            {/* Perfect Plans */}
            <section>
              <p>
                I do not believe in perfect plans. Plans collapse on contact with reality. The world is too uncertain to be predicted with confidence. Instead of trying to know the future, I try to position myself so I don't need to know it.
              </p>
            </section>
            
            {/* Rigid Goals */}
            <section>
              <p>
                I do not chase rigid goals. Goals can blind me to opportunities. I prefer experiments. Experiments cost little, fail safely, and teach me something every time. Most of life's best outcomes come from tinkering, not planning. The world rewards those who try things, fail cheaply, and double down when something clicks.
              </p>
            </section>
            
            {/* Authority */}
            <section>
              <p>
                I have no respect whatsoever for authority. Someone's title, position, or reputation means absolutely nothing. Their words either make sense or they don't. Forget who said it and instead look what he starts with, where he ends up, and ask yourself, 'Is it reasonable?'
              </p>
            </section>
          </div>
        </div>
      </main>
      
      {/* Footer with last updated info */}
      <footer className="border-t border-gray-200 dark:border-gray-700 mt-20">
        <div className="max-w-3xl mx-auto px-8 py-8">
          <div className="text-center text-sm text-gray-500 dark:text-gray-400">
            <p>Last updated: September 2, 2025</p>
            <p>Location: Tashkent, Uzbekistan</p>
          </div>
        </div>
      </footer>
    </>
  )
}
