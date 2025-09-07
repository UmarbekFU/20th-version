import AtomicPage, { AtomicParagraph, AtomicHeading } from '@/components/AtomicPage'
import { generateMetadata } from '@/lib/metadata'

export const metadata = generateMetadata('/ai/tc')

export default function TelegramCulturePage() {
  return (
    <AtomicPage 
      title="Telegram Culture: 10 Commandments"
      date="Dec 21"
      twitterTitle="Telegram Culture: 10 Commandments"
    >
      <AtomicParagraph size="xl">
        In a world drowning in messages, it's surprisingly rare to meet someone who knows how to communicate simply, clearly, and respectfully on Telegram.
      </AtomicParagraph>

      <AtomicParagraph>
        To save humanity from further chaos, here are the Telegram Commandments:
      </AtomicParagraph>

      <div className="space-y-8">
        <div>
          <AtomicHeading level={3}>1. No voice messages.</AtomicHeading>
          <AtomicParagraph>
            If you send a voice message, then, first of all, never do that. But let's say you had to for good reasons (while driving, a lot of details, you need to convey emotion, etc.), then at the beginning of the message, apologize and briefly explain the reason for such an unreasonable and traumatic event.
          </AtomicParagraph>
        </div>

        <div>
          <AtomicHeading level={3}>2. No weaponization of line breaks.</AtomicHeading>
          <AtomicParagraph>
            Sending<br/>
            every<br/>
            word<br/>
            as<br/>
            a<br/>
            new<br/>
            message<br/>
            is psychological warfare.<br/>
            Write your full thought, then send it once.
          </AtomicParagraph>
        </div>

        <div>
          <AtomicHeading level={3}>3. No forwarding messages without context.</AtomicHeading>
          <AtomicParagraph>
            Don't drop cryptic links with vague phrases like "Check this out!" Explain yourself clearly.
          </AtomicParagraph>
        </div>

        <div>
          <AtomicHeading level={3}>4. No hiding behind mystery names.</AtomicHeading>
          <AtomicParagraph>
            Names like "🌙Dark Angel🌙" or "." guarantee you'll be forgotten. Use a clear name and an identifiable profile picture. Avoid blurry sunsets. Seriously.
          </AtomicParagraph>
        </div>

        <div>
          <AtomicHeading level={3}>5. Never type "Can I ask something?"</AtomicHeading>
          <AtomicParagraph>
            You already asked. Save everyone's time. Just ask your real question immediately.
          </AtomicParagraph>
        </div>

        <div>
          <AtomicHeading level={3}>6. Avoid sticker spam.</AtomicHeading>
          <AtomicParagraph>
            One sticker is cute. Ten stickers in a row are violence.
          </AtomicParagraph>
        </div>

        <div>
          <AtomicHeading level={3}>7. Never beg for followers in comments.</AtomicHeading>
          <AtomicParagraph>
            "Join my channel!" in someone else's space is rude. Just don't.
          </AtomicParagraph>
        </div>

        <div>
          <AtomicHeading level={3}>8. No surprise calls.</AtomicHeading>
          <AtomicParagraph>
            Voice or video calls without warning are emergencies only. Always text first to confirm it's convenient.
          </AtomicParagraph>
        </div>

        <div>
          <AtomicHeading level={3}>9. Introduce yourself to strangers.</AtomicHeading>
          <AtomicParagraph>
            Always introduce yourself clearly and explain exactly why you're messaging. No vague "Hi" or random "Assalomu Alaykum" left hanging in awkward silence.
          </AtomicParagraph>
        </div>

        <div>
          <AtomicHeading level={3}>10. Don't ghost messages.</AtomicHeading>
          <AtomicParagraph>
            If you're busy, send a quick "I'll reply later." Leaving messages unread for days isn't mysterious—it's disrespectful. Clear communication wins every time.
          </AtomicParagraph>
        </div>
      </div>
    </AtomicPage>
  )
}