import Navigation from '@/components/Navigation'
import PlumBackground from '@/components/PlumBackground'
import { Mail, MessageCircle, Github, Linkedin, Twitter, ExternalLink } from 'lucide-react'
import Link from 'next/link'

export default function StartPage() {
  return (
    <>
      <PlumBackground />
      <Navigation />
      <main className="min-h-screen pt-32">
        <div className="max-w-2xl mx-auto px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="w-24 h-24 rounded-full mx-auto mb-6 overflow-hidden ring-4 ring-gray-200 dark:ring-gray-700">
              <img
                src="/profile.jpg"
                alt="Umarbek Fazliddinovich"
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-2">Umarbek</h1>
          </div>

          {/* Welcome Message */}
          <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Greetings, friend!</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Welcome to my website, my home on the interwebs. I'm Umarbek. I <Link href="/projects" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium">build tools</Link> and <Link href="/essays" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium">write essays</Link>. And I love meeting new people. <Link href="/contact" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium">Say hello!</Link>
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Since this website has been growing over time, I created this page as a helpful place for new visitors to discover some of the most interesting content. It's easier than wandering through all the pages!
            </p>
          </div>

          {/* Quick Links */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
              Explore
            </h2>
            
            <div className="space-y-6 text-lg">
              <p>
                <Link href="/about" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium">About me</Link> — Learn more about my story and background
              </p>
              <p>
                <Link href="/projects" className="text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 font-medium">Projects</Link> — See what I'm building and creating
              </p>
              <p>
                <Link href="/essays" className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-medium">Essays</Link> — My thoughts, ideas, and reflections
              </p>
              <p>
                <Link href="/questions" className="text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300 font-medium">Questions</Link> — Thought-provoking questions to ponder
              </p>
            </div>
          </div>

          {/* Atomic Ideas */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
              Atomic Ideas
            </h2>
            
            <div className="space-y-6 text-lg">
              <p>
                <Link href="/ai/emf" className="text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 font-medium">Everything is my fault</Link> — Taking radical responsibility for outcomes
              </p>
              <p>
                <Link href="/ai/jdm" className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-medium">Just do more</Link> — The power of consistent action and effort
              </p>
            </div>
          </div>

          {/* Contact Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
              Get in Touch
            </h2>
            
            <div className="space-y-6 text-lg">
              <p>
                <a 
                  href="mailto:u.umarov.pro@gmail.com"
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
                >
                  Email
                </a> — u.umarov.pro@gmail.com
              </p>
              <p>
                <a 
                  href="https://t.me/UmarbekFazliddinovich"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 font-medium"
                >
                  Telegram
                </a> — @UmarbekFazliddinovich
              </p>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center text-gray-500 dark:text-gray-500 text-sm">
            <p>Welcome to my digital space. Let's connect and create something amazing together.</p>
          </div>
        </div>
      </main>
    </>
  )
}
