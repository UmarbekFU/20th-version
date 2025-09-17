import Navigation from '@/components/Navigation'
import { Mail, MessageCircle } from 'lucide-react'
import Link from 'next/link'

export default function ContactPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-32">
        <div className="max-w-3xl mx-auto px-8">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center">Contact</h1>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-12 text-center">
              I love meeting new people, and I reply to every message. Say hello! I'm always open to conversations, 
              collaborations, and coffee meetings in Tashkent.
            </p>
            
            {/* Contact Methods Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Email Section */}
              <div className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 dark:bg-blue-900/20 rounded-2xl mb-4 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 transition-colors">
                  <Mail className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">Email</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  For detailed discussions & collaborations
                </p>
                <Link 
                  href="mailto:u.umarov.pro@gmail.com" 
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors"
                >
                  u.umarov.pro@gmail.com
                </Link>
              </div>

              {/* Telegram Section */}
              <div className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-50 dark:bg-green-900/20 rounded-2xl mb-4 group-hover:bg-green-100 dark:group-hover:bg-green-900/30 transition-colors">
                  <MessageCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">Telegram</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  For urgent messages & quick chats
                </p>
                <Link 
                  href="https://t.me/UmarbekFazliddinovich" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 font-medium transition-colors"
                >
                  @UmarbekFazliddinovich
                </Link>
              </div>
            </div>

            {/* Additional Info */}
            <div className="text-center">
              <p className="text-gray-500 dark:text-gray-500 text-sm">
                I typically respond within 24 hours. For urgent matters, Telegram is your best bet!
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
