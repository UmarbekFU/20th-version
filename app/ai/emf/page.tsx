import AtomicPage, { AtomicParagraph } from '@/components/AtomicPage'
import { generateMetadata as genMeta } from '@/lib/metadata'

export const metadata = genMeta('/ai/emf')

export default function EverythingIsMyFaultPage() {
  return (
    <AtomicPage 
      title="Everything is my fault"
      date="Sep 2"
      twitterTitle="Everything is my fault"
      translations={[
        { language: "O'zbekcha", href: "/ai/emf/uz" },
        { language: "Русский", href: "/ai/emf/ru" }
      ]}
    >
      <AtomicParagraph size="xl">
        For years, I raged against the world.
      </AtomicParagraph>

      <AtomicParagraph>
        They lied.<br/>
        They took advantage.<br/>
        They didn't keep their word
      </AtomicParagraph>

      <AtomicParagraph>
        Do you hear the rhythm? <em>They. They. They.</em>
      </AtomicParagraph>

      <AtomicParagraph>
        Every sentence began with someone else's name, and I was always the victim.
      </AtomicParagraph>

      <AtomicParagraph>
        When someone upsets you, the instinct is to blame them. But I came to a conclusion
      </AtomicParagraph>

      <AtomicParagraph>
        If someone lied to me, perhaps I made truth too costly to speak.<br/>
        If someone took advantage, perhaps I left the door open and called it trust.<br/>
        If someone didn't keep their word, perhaps I built on promises instead of proof.
      </AtomicParagraph>

      <AtomicParagraph>
        Saying "it's my fault" means: <em>I'm in control.</em>
      </AtomicParagraph>

      <AtomicParagraph>
        Suddenly I wasn't wronged. They were just playing their part in the situation I helped create.
      </AtomicParagraph>

      <AtomicParagraph>
        I made it happen.<br/>
        I can learn from it.<br/>
        Nothing to complain about.
      </AtomicParagraph>

      <AtomicParagraph>
        It was strangely joyful to decide it was all my fault.
      </AtomicParagraph>

      <AtomicParagraph>
        Better than forgiveness. Forgiveness still keeps you as the victim, still assumes they were the aggressor.
      </AtomicParagraph>

      <AtomicParagraph>
        When someone let me down, my fault.<br/>
        I could have not depended on them.<br/>
        I could have picked someone more reliable.
      </AtomicParagraph>

      <AtomicParagraph>
        When my government sucks, my fault.<br/>
        I could vote, get involved, or move somewhere else.
      </AtomicParagraph>

      <AtomicParagraph>
        When boss is mean to me, my fault.<br/>
        I could get better at my job, find a new job, or start my own business.
      </AtomicParagraph>

      <AtomicParagraph>
        When you take responsibility, you keep the power to solve the problem.<br/>
        If you don't, you give that power away.
      </AtomicParagraph>

      <AtomicParagraph>
        Responsibility equals agency.
      </AtomicParagraph>

      <AtomicParagraph>
        Complaining = saying <em>I have no power.</em><br/>
        It's "I can't change this, so I'll just whine."
      </AtomicParagraph>

      <AtomicParagraph>
        "All the good opportunities are taken."<br/>
        "You can't succeed unless you're rich."<br/>
        "The system is rigged."
      </AtomicParagraph>

      <AtomicParagraph>
        Yes, life isn't fair.<br/>
        The world is tilted.<br/>
        But it's not all luck.
      </AtomicParagraph>

      <AtomicParagraph>
        Your actions change outcomes.
      </AtomicParagraph>

      <AtomicParagraph>
        Over decades, persistence beats luck.<br/>
        The trick is time.<br/>
        Success takes longer than you think.
      </AtomicParagraph>

      <AtomicParagraph>
        That's why vision matters. Alexander the Great dreamed of a "world empire", Napoleon of unified Europe under French influence, Walt Disney of Disneyland and Disney World, Bezos of "the everything store", Jobs of the iPad decades before it existed.
      </AtomicParagraph>

      <AtomicParagraph>
        A big vision keeps you going long enough to make it real.
      </AtomicParagraph>

      <AtomicParagraph>
        If you believe you can't change anything, you won't try. If you don't try, you prove yourself right. Cynicism becomes self-fulfilling.
      </AtomicParagraph>

      <AtomicParagraph>
        Even worse, we often ask for advice when we secretly want to fail. Then we can blame the advice-giver.<br/>
        We set ourselves up to be victims.
      </AtomicParagraph>

      <AtomicParagraph>
        When everything is your fault, you stop being a victim.
      </AtomicParagraph>

      <AtomicParagraph>
        You stop being someone things happen <strong>to</strong>.<br/>
        You become someone who <strong>makes things happen</strong>.
      </AtomicParagraph>

      <AtomicParagraph className="mb-8">
        Blame yourself • Take responsibility • Preserve your agency • Save yourself
      </AtomicParagraph>
    </AtomicPage>
  )
}