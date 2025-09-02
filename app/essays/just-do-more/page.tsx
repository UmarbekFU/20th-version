import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function JustDoMore() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Go Back Button */}
      <div className="fixed top-6 left-6 z-10">
        <button
          onClick={() => window.history.back()}
          className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Go back
        </button>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Essay Header */}
        <header className="mb-12">
          <div className="text-sm text-gray-500 dark:text-gray-400 mb-4">
            Sep 2, 2025
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 leading-tight">
            Just do more
          </h1>
        </header>

        {/* Essay Content */}
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-xl text-gray-800 dark:text-gray-200 leading-relaxed mb-8">
            People think science leads to technology, and technology leads to business.
          </p>

          <p className="text-xl text-gray-800 dark:text-gray-200 leading-relaxed mb-8">
            It's exactly the opposite: business leads to technology, and technology leads to science.
          </p>

          <p className="text-xl text-gray-800 dark:text-gray-200 leading-relaxed mb-8">
            All through trial and error.
          </p>

          <p className="text-xl text-gray-800 dark:text-gray-200 leading-relaxed mb-8">
            Let me give you a thought experiment.
            We want to make the best manti (traditional meal).
          </p>

          <p className="text-xl text-gray-800 dark:text-gray-200 leading-relaxed mb-8">
            Two approaches:
          </p>

          <p className="text-xl text-gray-800 dark:text-gray-200 leading-relaxed mb-4">
            #1 group randomly adds small ingredients, tests if it's better, keeps trying.
          </p>

          <p className="text-xl text-gray-800 dark:text-gray-200 leading-relaxed mb-8">
            #2 group goes to university and studies chemical equations of what's in manti.
          </p>

          <p className="text-xl text-gray-800 dark:text-gray-200 leading-relaxed mb-8">
            Who improves faster? The first group, <strong>through trial and error.</strong>
          </p>

          <p className="text-xl text-gray-800 dark:text-gray-200 leading-relaxed mb-8">
            This represents how technology actually develops.
          </p>

          <p className="text-xl text-gray-800 dark:text-gray-200 leading-relaxed mb-8">
            Everything's done by engineers and risk-takers with more upside than downside. Trial and error isn't really trial and error—it's trial with small error and big potential upside.
          </p>

          <p className="text-xl text-gray-800 dark:text-gray-200 leading-relaxed mb-8">
            What academics hate to admit is business leads to technology, which leads to science — far, far, far more often than the reverse.
          </p>

          <p className="text-xl text-gray-800 dark:text-gray-200 leading-relaxed mb-8">
            The jet engine wasn't developed by physicists - it was developed by engineers who had no idea how it worked. We still don't know how a bicycle works today.
          </p>

          <p className="text-xl text-gray-800 dark:text-gray-200 leading-relaxed mb-8">
            The steam engine wasn't invented by thermodynamics professors; thermodynamics was developed to understand steam engines.
          </p>

          <p className="text-xl text-gray-800 dark:text-gray-200 leading-relaxed mb-8">
            The internet wasn't created by network theorists; network theory emerged to understand the internet.
          </p>

          <p className="text-xl text-gray-800 dark:text-gray-200 leading-relaxed mb-8">
            European cathedrals were built beautifully without Euclidean geometry because before Arabic numerals, nobody could do division in Europe. It was all trial and error, developing rules that worked.
          </p>

          <p className="text-xl text-gray-800 dark:text-gray-200 leading-relaxed mb-8">
            Tinkering.
          </p>

          <p className="text-xl text-gray-800 dark:text-gray-200 leading-relaxed mb-8">
            Overthinking is the biggest waste of human energy.
          </p>

          <p className="text-xl text-gray-800 dark:text-gray-200 leading-relaxed mb-8">
            Trust yourself, make a decision, and gain more experience.
            There is no such thing as perfect. You cannot think your way into perfection, <strong>just take action.</strong>
          </p>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-8">
            <strong>100x principle:</strong>
          </h2>

          <p className="text-xl text-gray-800 dark:text-gray-200 leading-relaxed mb-4">
            Write 100 essays.
          </p>

          <p className="text-xl text-gray-800 dark:text-gray-200 leading-relaxed mb-4">
            Cook 100 meals.
          </p>

          <p className="text-xl text-gray-800 dark:text-gray-200 leading-relaxed mb-4">
            Build 100 websites.
          </p>

          <p className="text-xl text-gray-800 dark:text-gray-200 leading-relaxed mb-8">
            Pitch 100 investors.
          </p>

          <p className="text-xl text-gray-800 dark:text-gray-200 leading-relaxed mb-4">
            Each one "good enough."
          </p>

          <p className="text-xl text-gray-800 dark:text-gray-200 leading-relaxed mb-12">
            Each one better.
          </p>

          <div className="border-l-4 border-blue-500 pl-6 my-12">
            <p className="text-xl text-gray-800 dark:text-gray-200 leading-relaxed mb-4">
              Jimmy Donaldson (MrBeast) made 100+ low-view videos for 8 years—filming in his mom's basement—before his breakout hit. He tested thumbnails, titles, and formats relentlessly. Now: 400M+ subscribers.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 italic">
              "The first 100 videos are practice"
            </p>
          </div>

          <div className="border-l-4 border-blue-500 pl-6 my-12">
            <p className="text-xl text-gray-800 dark:text-gray-200 leading-relaxed mb-4">
              Before fame, The Beatles played 8-hour nightly sets in Hamburg's grimy clubs for two years. They performed covers <strong>1,200 times.</strong>
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 italic">
              Lennon later said, "We got better and more confident. That's where we really learned to play."
            </p>
          </div>

          <div className="border-l-4 border-blue-500 pl-6 my-12">
            <p className="text-xl text-gray-800 dark:text-gray-200 leading-relaxed mb-4">
              Before creating Minecraft (a $2.5B franchise), Persson built dozens of <strong>small, flawed</strong> games. He released them publicly, and learned from feedback.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 italic">
              "I didn't overthink—I just shipped."
            </p>
          </div>

          <div className="border-l-4 border-blue-500 pl-6 my-12">
            <p className="text-xl text-gray-800 dark:text-gray-200 leading-relaxed mb-4">
              Steven King's first story was rejected 30 times. He kept writing, and pinned rejection slips to his wall. While working as a janitor, he wrote daily, later publishing Carrie (his fourth novel). He's since written 65+ novels.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 italic">
              "Amateurs sit and wait for inspiration; the rest of us just get up and go to work."
            </p>
          </div>

          <div className="border-l-4 border-blue-500 pl-6 my-12">
            <p className="text-xl text-gray-800 dark:text-gray-200 leading-relaxed mb-4">
              Dyson spent <strong>15 years creating 5,126 versions</strong> of a vacuum cleaner before his bagless design succeeded.
            </p>
          </div>

          <div className="border-l-4 border-blue-500 pl-6 my-12">
            <p className="text-xl text-gray-800 dark:text-gray-200 leading-relaxed mb-4">
              Edison tested over <strong>6,000 materials</strong> for his light bulb filament, famously saying, "I have not failed. I've just found <strong>10,000 ways</strong> that won't work." <strong>His team worked 18-hour days for years</strong>. They prioritized speed of experimentation over flawless theories.
            </p>
          </div>

          <div className="border-l-4 border-blue-500 pl-6 my-12">
            <p className="text-xl text-gray-800 dark:text-gray-200 leading-relaxed mb-4">
              Van Gogh painted daily, even when mocked as a "madman." He created over 900 paintings and 1,100 sketches, <strong>yet sold just one</strong>. In his letters he wrote: <strong>"If you hear a voice within you say, 'You cannot paint,' then by all means paint, and that voice will be silenced."</strong>
            </p>
          </div>

          <div className="border-l-4 border-blue-500 pl-6 my-12">
            <p className="text-xl text-gray-800 dark:text-gray-200 leading-relaxed mb-4">
              Seth Godin says: <strong>"The cost of being wrong is less than the cost of doing nothing."</strong>
            </p>
          </div>

          <div className="border-l-4 border-blue-500 pl-6 my-12">
            <p className="text-xl text-gray-800 dark:text-gray-200 leading-relaxed mb-4">
              Asimov, one of history's most prolific authors, wrote over 500 books across science fiction, history, and biochemistry. He followed a strict daily writing routine, often publishing 10+ books a year. "I write for the same reason I breathe—because if I didn't, I'd die," he said. (volume-first approach)
            </p>
          </div>

          <div className="border-l-4 border-blue-500 pl-6 my-12">
            <p className="text-xl text-gray-800 dark:text-gray-200 leading-relaxed mb-4">
              At 65, Sanders pitched his fried chicken recipe door-to-door, facing 1,009 rejections before a Utah diner said yes. He cooked batches daily, tweaking spices and pressure-frying techniques. Today: 25,000+ KFC outlets worldwide.
            </p>
          </div>

          <div className="border-l-4 border-blue-500 pl-6 my-12">
            <p className="text-xl text-gray-800 dark:text-gray-200 leading-relaxed mb-4">
              Abel Tesfaye (The Weeknd) uploaded moody, raw tracks to YouTube under a pseudonym for years. He ignored industry norms, releasing three free mixtapes in 2011. Drake discovered him, and House of Balloons became a cult classic.
            </p>
          </div>

          <div className="border-l-4 border-blue-500 pl-6 my-12">
            <p className="text-xl text-gray-800 dark:text-gray-200 leading-relaxed mb-4">
              Agatha Christie, the "Queen of Mystery," wrote her first novel on a dare while working as a nurse. She published 66 novels, famously saying, <strong>"Write even when you think you can't."</strong>
            </p>
          </div>

          <p className="text-2xl text-gray-900 dark:text-gray-100 font-bold mt-16 mb-8">
            Just do more. "It isn't 10,000 hours. 10,000 iterations."
          </p>
        </div>
      </div>
    </div>
  )
}
