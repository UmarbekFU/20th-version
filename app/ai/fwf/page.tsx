import AtomicPage, { AtomicParagraph } from '@/components/AtomicPage'
import { generateMetadata as genMeta } from '@/lib/metadata'

export const metadata = genMeta('/ai/fwf')

export default function FreeWillFallacyPage() {
  return (
    <AtomicPage 
      title="Free will fallacy"
      date="Dec 20"
      twitterTitle="Free will fallacy"
      showBackLink={true}
    >
      <AtomicParagraph size="xl">
        Stephen Hawking says free will is illusion. We're atoms. Atoms follow rigid laws. Therefore we have no choice.
      </AtomicParagraph>

      <AtomicParagraph>
        This is reductionism. A mistake. It is also a mistake of scale.
      </AtomicParagraph>

      <AtomicParagraph>
        Laws of physics aren't a person making you do things.<br/>
        They're not some supernatural force pushing atoms around.
      </AtomicParagraph>

      <AtomicParagraph>
        Laws of physics are just descriptions.<br/>
        They describe what happens.<br/>
        They don't make it happen.
      </AtomicParagraph>

      <AtomicParagraph>
        It's like saying the rulebook controls the chess game.<br/>
        No. The rulebook just describes how chess works.
      </AtomicParagraph>

      <AtomicParagraph>
        Reality has levels: atomic, molecular, biological, human thought. Just because low-level descriptions exist doesn't eliminate high-level explanations.
      </AtomicParagraph>

      <AtomicParagraph>
        When you lose at chess to a computer, the silicon didn't beat you, the program did. The program is an abstraction over atoms, like human thought.
      </AtomicParagraph>

      <AtomicParagraph>
        When I decide, I decide. Not my atoms. Not physics laws.
      </AtomicParagraph>

      <AtomicParagraph>
        My decision-making is a high-level process that's as real as any physical process.
      </AtomicParagraph>

      <AtomicParagraph>
        We obsess over absolute foundations. No absolute foundation for knowledge exists.
      </AtomicParagraph>

      <AtomicParagraph>
        Every fundamental theory raises the question: why this way, not another? The questions never end.
      </AtomicParagraph>

      <AtomicParagraph className="mb-8">
        Well, the best way is to work at the level that explains what you need to explain.
      </AtomicParagraph>
    </AtomicPage>
  )
}