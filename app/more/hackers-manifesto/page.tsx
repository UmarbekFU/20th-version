import Navigation from '@/components/Navigation'
import PlumBackground from '@/components/PlumBackground'

export default function HackersManifestoPage() {
  return (
    <>
      <PlumBackground />
      <Navigation />
      <main className="min-h-screen pt-32">
        <div className="max-w-3xl mx-auto px-8">
          {/* Header */}
          <header className="mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6 font-sans">
              The Hacker's Manifesto
            </h1>
          </header>

          {/* Content */}
          <article className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-xl leading-relaxed mb-8 text-gray-700 dark:text-gray-300 font-sans">
              A cultural artifact from the early days of computer hacking, written by "The Mentor" in 1986.
            </p>

            <div className="border-l-4 border-blue-500 pl-6 my-12">
              <p className="text-gray-700 dark:text-gray-300 mb-6 font-sans">
                Another one got caught today, it's all over the papers. "Teenager
                arrested in computer crime scandal", "Hacker arrested after bank
                tampering"...
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 mb-6 font-sans">
                Damn Kids. They're all alike.
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 mb-6 font-sans">
                But did you, in your three-piece psychology and 1950's technobrain ever
                take a look behind the eyes of a hacker? Did you ever wonder what made
                him tick, what forces shaped him, what may have molded him?
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 mb-6 font-sans font-semibold">
                I am a hacker, enter my world...
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 mb-6 font-sans">
                Mine is a world that begins with school. I've listened to the teacher
                explain for the fifteenth time how to reduce a fraction. I understand
                it. "No, Mrs. Smith, I didn't show my work. I did it in my head..."
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 mb-6 font-sans">
                Damn kid. Probably copied it. They're all alike.
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 mb-6 font-sans">
                I made a discovery today. I found a computer. Wait a second, this is
                cool. It does what I want it to do. If it makes a mistake, it's because
                I screwed up. Not because it doesn't like me...
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 mb-6 font-sans">
                or feels threatened by me...
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 mb-6 font-sans">
                or thinks I'm a smart ass...
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 mb-6 font-sans">
                or doesn't like teaching and shouldn't be here...
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 mb-6 font-sans">
                Damn kid. All he does is play games. They're all alike.
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 mb-6 font-sans">
                And then it happened... A door opened to a world... Rushing through the
                phone line like heroin through an addict's veins, an electronic pulse is
                sent out, a refuge from the day to day incompetencies is sought... A
                board is found.
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 mb-6 font-sans font-semibold">
                "This is it... This is where I belong..."
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 mb-6 font-sans">
                I know everyone here... Even if I've never met them, never talked to
                them, may never hear from them again... I know you all...
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 mb-6 font-sans">
                Damn kid. Tying up the phone line again. They're all alike...
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 mb-6 font-sans font-semibold">
                You bet your ass we're all alike... We've been spoon fed baby food at
                school when we hungered for steak... The bits of meat that you did let
                slip through were pre-chewed and tasteless. We've been dominated by
                sadists, or ignored by the apathetic. The few that had something to
                teach found us willing pupils, but those few are like drops of water in
                the desert.
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 mb-6 font-sans">
                This is our world now... The world of the electron and the switch, the
                beauty of the baud. We make use of a service already existing without
                paying for what could be dirt cheap if it wasn't run by profiteering 
                gluttons, and you call us criminals. We explore... And you call us 
                criminals. We exist without skin color, without nationality, without 
                religious bias... And you call us criminals. You build atomic bombs, 
                you wage wars, you murder, you cheat, and lie to us and try to make us 
                believe it's for our own good, yet we're the criminals.
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 mb-6 font-sans">
                Yes, I am a criminal. My crime is that of curiosity. My crime is that
                of judging people by what they say and think, not what they look like.
                My crime is that of outsmarting you, something that you will never
                forgive me for.
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 mb-6 font-sans font-semibold">
                I am a hacker, and this is my manifesto. You may stop this individual,
                but you can't stop us all...
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 mb-6 font-sans">
                After all, We're all alike.
              </p>
              
              <p className="text-right mt-8 text-sm text-gray-600 dark:text-gray-400 font-sans">
                ---The Mentor---
              </p>
            </div>
          </article>
        </div>
      </main>
    </>
  )
}
