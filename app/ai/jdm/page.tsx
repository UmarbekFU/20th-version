import AtomicPage, { AtomicParagraph, AtomicHeading, AtomicQuote, AtomicQuoteText } from '@/components/AtomicPage'
import { generateMetadata as genMeta } from '@/lib/metadata'

export const metadata = genMeta('/ai/jdm')

export default function JustDoMore() {
  return (
    <AtomicPage 
      title="Just do more"
      date="Sep 2"
      twitterTitle="Just do more"
      translations={[
        { language: "O'zbekcha", href: "/ai/jdm/uz" },
        { language: "Русский", href: "/ai/jdm/ru" }
      ]}
    >
      <AtomicParagraph size="xl">
        People think science leads to technology, and technology leads to business.
      </AtomicParagraph>

      <AtomicParagraph>
        It's exactly the opposite: business leads to technology, and technology leads to science.
      </AtomicParagraph>

      <AtomicParagraph>
        All through trial and error.
      </AtomicParagraph>

      <AtomicParagraph>
        Let me give you a thought experiment.
        We want to make the best manti (traditional meal).
      </AtomicParagraph>

      <AtomicParagraph>
        Two approaches:
      </AtomicParagraph>

      <AtomicParagraph className="mb-4">
        #1 group randomly adds small ingredients, tests if it's better, keeps trying.
      </AtomicParagraph>

      <AtomicParagraph>
        #2 group goes to university and studies chemical equations of what's in manti.
      </AtomicParagraph>

      <AtomicParagraph>
        Who improves faster? The first group, <strong>through trial and error.</strong>
      </AtomicParagraph>

      <AtomicParagraph>
        This represents how technology actually develops.
      </AtomicParagraph>

      <AtomicParagraph>
        Everything's done by engineers and risk-takers with more upside than downside. Trial and error isn't really trial and error—it's trial with small error and big potential upside.
      </AtomicParagraph>

      <AtomicParagraph>
        What academics hate to admit is business leads to technology, which leads to science — far, far, far more often than the reverse.
      </AtomicParagraph>

      <AtomicParagraph>
        The jet engine wasn't developed by physicists - it was developed by engineers who had no idea how it worked. We still don't know how a bicycle works today.
      </AtomicParagraph>

      <AtomicParagraph>
        The steam engine wasn't invented by thermodynamics professors; thermodynamics was developed to understand steam engines.
      </AtomicParagraph>

      <AtomicParagraph>
        The internet wasn't created by network theorists; network theory emerged to understand the internet.
      </AtomicParagraph>

      <AtomicParagraph>
        European cathedrals were built beautifully without Euclidean geometry because before Arabic numerals, nobody could do division in Europe. It was all trial and error, developing rules that worked.
      </AtomicParagraph>

      <AtomicParagraph>
        Tinkering.
      </AtomicParagraph>

      <AtomicParagraph>
        Overthinking is the biggest waste of human energy.
      </AtomicParagraph>

      <AtomicParagraph>
        Trust yourself, make a decision, and gain more experience.
        There is no such thing as perfect. You cannot think your way into perfection, <strong>just take action.</strong>
      </AtomicParagraph>

      <AtomicHeading level={2}>
        <strong>100x principle:</strong>
      </AtomicHeading>

      <AtomicParagraph className="mb-4">
        Write 100 essays.
      </AtomicParagraph>

      <AtomicParagraph className="mb-4">
        Cook 100 meals.
      </AtomicParagraph>

      <AtomicParagraph className="mb-4">
        Build 100 websites.
      </AtomicParagraph>

      <AtomicParagraph className="mb-8">
        Pitch 100 investors.
      </AtomicParagraph>

      <AtomicParagraph className="mb-4">
        Each one "good enough."
      </AtomicParagraph>

      <AtomicParagraph className="mb-12">
        Each one better.
      </AtomicParagraph>

      <AtomicQuote>
        <p>Jimmy Donaldson (MrBeast) made 100+ low-view videos for 8 years—filming in his mom's basement—before his breakout hit. He tested thumbnails, titles, and formats relentlessly. Now: 400M+ subscribers.</p>
        <AtomicQuoteText>
          "The first 100 videos are practice"
        </AtomicQuoteText>
      </AtomicQuote>

      <AtomicQuote>
        <p>Before fame, The Beatles played 8-hour nightly sets in Hamburg's grimy clubs for two years. They performed covers <strong>1,200 times.</strong></p>
        <AtomicQuoteText>
          Lennon later said, "We got better and more confident. That's where we really learned to play."
        </AtomicQuoteText>
      </AtomicQuote>

      <AtomicQuote>
        <p>Before creating Minecraft (a $2.5B franchise), Persson built dozens of <strong>small, flawed</strong> games. He released them publicly, and learned from feedback.</p>
        <AtomicQuoteText>
          "I didn't overthink—I just shipped."
        </AtomicQuoteText>
      </AtomicQuote>

      <AtomicQuote>
        <p>Steven King's first story was rejected 30 times. He kept writing, and pinned rejection slips to his wall. While working as a janitor, he wrote daily, later publishing Carrie (his fourth novel). He's since written 65+ novels.</p>
        <AtomicQuoteText>
          "Amateurs sit and wait for inspiration; the rest of us just get up and go to work."
        </AtomicQuoteText>
      </AtomicQuote>

      <AtomicQuote>
        <p>Dyson spent <strong>15 years creating 5,126 versions</strong> of a vacuum cleaner before his bagless design succeeded.</p>
      </AtomicQuote>

      <AtomicQuote>
        <p>Edison tested over <strong>6,000 materials</strong> for his light bulb filament, famously saying, "I have not failed. I've just found <strong>10,000 ways</strong> that won't work." <strong>His team worked 18-hour days for years</strong>. They prioritized speed of experimentation over flawless theories.</p>
      </AtomicQuote>

      <AtomicQuote>
        <p>Van Gogh painted daily, even when mocked as a "madman." He created over 900 paintings and 1,100 sketches, <strong>yet sold just one</strong>. In his letters he wrote: <strong>"If you hear a voice within you say, 'You cannot paint,' then by all means paint, and that voice will be silenced."</strong></p>
      </AtomicQuote>

      <AtomicQuote>
        <p>Seth Godin says: <strong>"The cost of being wrong is less than the cost of doing nothing."</strong></p>
      </AtomicQuote>

      <AtomicQuote>
        <p>Asimov, one of history's most prolific authors, wrote over 500 books across science fiction, history, and biochemistry. He followed a strict daily writing routine, often publishing 10+ books a year. "I write for the same reason I breathe—because if I didn't, I'd die," he said. (volume-first approach)</p>
      </AtomicQuote>

      <AtomicQuote>
        <p>At 65, Sanders pitched his fried chicken recipe door-to-door, facing 1,009 rejections before a Utah diner said yes. He cooked batches daily, tweaking spices and pressure-frying techniques. Today: 25,000+ KFC outlets worldwide.</p>
      </AtomicQuote>

      <AtomicQuote>
        <p>Abel Tesfaye (The Weeknd) uploaded moody, raw tracks to YouTube under a pseudonym for years. He ignored industry norms, releasing three free mixtapes in 2011. Drake discovered him, and House of Balloons became a cult classic.</p>
      </AtomicQuote>

      <AtomicQuote>
        <p>Agatha Christie, the "Queen of Mystery," wrote her first novel on a dare while working as a nurse. She published 66 novels, famously saying, <strong>"Write even when you think you can't."</strong></p>
      </AtomicQuote>

      <AtomicParagraph className="font-bold mt-16 mb-8">
        Just do more. "It isn't 10,000 hours. 10,000 iterations."
      </AtomicParagraph>
    </AtomicPage>
  )
}