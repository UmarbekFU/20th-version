import Navigation from '@/components/Navigation'
import PlumBackground from '@/components/PlumBackground'
import { generateMetadata } from '@/lib/metadata'

export const metadata = generateMetadata('/ai/tc')

export default function TelegramCulturePage() {
  return (
    <>
      <PlumBackground />
      <Navigation />
      <main className="min-h-screen pt-32">
        <div className="max-w-3xl mx-auto px-8">
          {/* Atomic Idea Header */}
          <header className="mb-12">
            <div className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              Dec 21
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              Telegram Culture: 10 Commandments
            </h1>
            <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
              <span>Atomic Ideas</span>
            </div>
          </header>

          {/* Atomic Idea Content */}
          <article className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
              In a world drowning in messages, it's surprisingly rare to meet someone who knows how to communicate simply, clearly, and respectfully on Telegram.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-8">
              To save humanity from further chaos, here are the Telegram Commandments:
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">1. No voice messages.</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  If you send a voice message, then, first of all, never do that. But let's say you had to for good reasons (while driving, a lot of details, you need to convey emotion, etc.), then at the beginning of the message, apologize and briefly explain the reason for such an unreasonable and traumatic event.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">2. No weaponization of line breaks.</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Sending every word as a new message is psychological warfare. Write your full thought, then send it once.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">3. No forwarding messages without context.</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Don't drop cryptic links with vague phrases like "Check this out!" Explain yourself clearly.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">4. No hiding behind mystery names.</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Names like "🌙Dark Angel🌙" or "." guarantee you'll be forgotten. Use a clear name and an identifiable profile picture. Avoid blurry sunsets. Seriously.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">5. Never type "Can I ask something?"</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  You already asked. Save everyone's time. Just ask your real question immediately.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">6. Avoid sticker spam.</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  One sticker is cute. Ten stickers in a row are violence.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">7. Never beg for followers in comments.</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  "Join my channel!" in someone else's space is rude. Just don't.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">8. No surprise calls.</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Voice or video calls without warning are emergencies only. Always text first to confirm it's convenient.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">9. Introduce yourself to strangers.</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Always introduce yourself clearly and explain exactly why you're messaging. No vague "Hi" or random "Assalomu Alaykum" left hanging in awkward silence.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">10. Don't ghost messages.</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  If you're busy, send a quick "I'll reply later." Leaving messages unread for days is disrespectful. Clear communication wins every time.
                </p>
              </div>
            </div>
          </article>
        </div>
      </main>
    </>
  )
}
