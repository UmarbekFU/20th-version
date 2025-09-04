import { NextRequest, NextResponse } from 'next/server'

interface SearchResult {
  path: string
  title: string
  description: string
  content: string
  score: number
  matches: string[]
  keywords?: string[]
}

// Static search index - deployment-agnostic
const searchIndex: SearchResult[] = [
  {
    path: '/',
    title: 'Homepage',
    description: 'Umarbek - Personal website with essays, projects, notes, and more',
    content: 'Hey! I\'m Umarbek. Samarkand native, I now live in Tashkent, Uzbekistan. I write essays, build stuff, and take notes. I write essays when I try to explain something to myself. My atomic ideas are half-formed thoughts I\'m working through. I build stuff. I\'m solving my own problem. If it helps you too, even better. I take notes when I read. Not polished summaries, just the parts that made me stop and think. I list everything I consume—books, films, podcasts etc. If you care about tools I use, I keep that updated. You can find screenshots that made me think, code snippets I might need later, memes that contain truth on scrapbook. Read more about me.',
    keywords: ['umarbek', 'samarkand', 'tashkent', 'essays', 'projects', 'notes', 'list', 'uses', 'scrapbook'],
    score: 0,
    matches: []
  },
  {
    path: '/essays',
    title: 'Essays',
    description: 'Collection of essays and thoughts on various topics',
    content: 'I write essays when I try to explain something to myself. These are my attempts to understand ideas, concepts, and the world around me through writing. Essays coming soon. I\'m working on ideas about systems thinking, creativity, and the intersection of technology and human experience.',
    keywords: ['essays', 'writing', 'thinking', 'ideas', 'learning'],
    score: 0,
    matches: []
  },
  {
    path: '/ai/jdm',
    title: 'Just do more',
    description: 'Why business leads to technology, which leads to science. The 100x principle and the power of iteration over perfection.',
    content: 'People think science leads to technology, and technology leads to business. It\'s exactly the opposite: business leads to technology, and technology leads to science. All through trial and error. The jet engine wasn\'t developed by physicists - it was developed by engineers who had no idea how it worked. We still don\'t know how a bicycle works today. The steam engine wasn\'t invented by thermodynamics professors; thermodynamics was developed to understand steam engines. The internet wasn\'t created by network theorists; network theory emerged to understand the internet. European cathedrals were built beautifully without Euclidean geometry because before Arabic numerals, nobody could do division in Europe. It was all trial and error, developing rules that worked. Tinkering. Overthinking is the biggest waste of human energy. Trust yourself, make a decision, and gain more experience. There is no such thing as perfect. You cannot think your way into perfection, just take action. 100x principle: Write 100 essays. Cook 100 meals. Build 100 websites. Pitch 100 investors. Each one "good enough." Each one better.',
    keywords: ['trial', 'error', 'iteration', 'business', 'technology', 'science', '100x', 'principle', 'action', 'perfection'],
    score: 0,
    matches: []
  },
  {
    path: '/ai/emf',
    title: 'Everything is my fault',
    description: 'Taking responsibility and preserving agency',
    content: 'For years, I raged against the world. They lied. They took advantage. They didn\'t keep their word. Do you hear the rhythm? They. They. They. Every sentence began with someone else\'s name, and I was always the victim. When someone upsets you, the instinct is to blame them. But I came to a conclusion. If someone lied to me, perhaps I made truth too costly to speak. If someone took advantage, perhaps I left the door open and called it trust. If someone didn\'t keep their word, perhaps I built on promises instead of proof. Saying "it\'s my fault" means: I\'m in control. Suddenly I wasn\'t wronged. They were just playing their part in the situation I helped create. I made it happen. I can learn from it. Nothing to complain about. It was strangely joyful to decide it was all my fault. Better than forgiveness. Forgiveness still keeps you as the victim, still assumes they were the aggressor. When someone let me down, my fault. I could have not depended on them. I could have picked someone more reliable. When my government sucks, my fault. I could vote, get involved, or move somewhere else. When boss is mean to me, my fault. I could get better at my job, find a new job, or start my own business. When you take responsibility, you keep the power to solve the problem. If you don\'t, you give that power away. Responsibility equals agency. Complaining = saying I have no power. It\'s "I can\'t change this, so I\'ll just whine." All the good opportunities are taken. You can\'t succeed unless you\'re rich. The system is rigged. Yes, life isn\'t fair. The world is tilted. But it\'s not all luck. Your actions change outcomes. Over decades, persistence beats luck. The trick is time. Success takes longer than you think. That\'s why vision matters. A big vision keeps you going long enough to make it real. If you believe you can\'t change anything, you won\'t try. If you don\'t try, you prove yourself right. Cynicism becomes self-fulfilling. Even worse, we often ask for advice when we secretly want to fail. Then we can blame the advice-giver. We set ourselves up to be victims. When everything is your fault, you stop being a victim. You stop being someone things happen to. You become someone who makes things happen. Blame yourself • Take responsibility • Preserve your agency • Save yourself',
    keywords: ['responsibility', 'agency', 'fault', 'control', 'power'],
    score: 0,
    matches: []
  },
  {
    path: '/projects',
    title: 'Projects',
    description: 'Things I have built and broken',
    content: 'Things I\'ve built and broken. Current Projects: This Website - My personal website built with Next.js and Tailwind CSS. A place to share thoughts, projects, and ideas without the constraints of social media. Coming Soon: More projects are in development. I\'m working on tools and applications that solve real problems I encounter in my daily work and life. My Approach: I build things to solve my own problems first. If they help others too, that\'s a bonus. I prefer simple, focused solutions over complex, feature-rich applications. Most of my projects start as experiments or prototypes. I iterate quickly, learn from failures, and only polish what actually works. This approach has taught me more than any amount of planning ever could.',
    keywords: ['projects', 'building', 'solving', 'experiments', 'learning'],
    score: 0,
    matches: []
  },
  {
    path: '/projects/tw',
    title: 'This Website',
    description: 'My personal website built with Next.js and Tailwind CSS',
    content: 'My personal website built with Next.js and Tailwind CSS. A place to share thoughts, projects, and ideas without the constraints of social media.',
    keywords: ['website', 'nextjs', 'tailwind', 'personal', 'portfolio'],
    score: 0,
    matches: []
  },
  {
    path: '/notes',
    title: 'Notes',
    description: 'My notes from books, articles, and conversations',
    content: 'My notes from books, articles, and conversations. These aren\'t summaries—they\'re my thoughts, questions, and reactions to what I\'m reading and learning. I don\'t summarize books—I argue with them. I write down questions, challenge assumptions, and connect ideas to my own experiences. The goal is to understand, not just remember. I use a simple system: one note per book, organized by themes rather than chapters. This helps me see patterns and connections across different authors and ideas.',
    keywords: ['notes', 'books', 'reading', 'thinking', 'learning'],
    score: 0,
    matches: []
  },
  {
    path: '/list',
    title: 'List',
    description: 'Things I consume, own, and do',
    content: 'Things I consume and own. Lists reveal patterns you didn\'t know existed. Movies: Films that made me think, feel, or just entertained me. Each with a brief comment and rating out of 10. Podcasts: Shows that keep me company during walks, commutes, and quiet moments. Each with thoughts and recommendations. Things I Own: A curated list of possessions that actually matter to me. I try to own fewer things, but the things I own, I use and appreciate.',
    keywords: ['list', 'consumption', 'media', 'patterns', 'connections'],
    score: 0,
    matches: []
  },
  {
    path: '/list/movies',
    title: 'Movies',
    description: 'Films that made me think, feel, or just entertained me',
    content: 'Films that made me think, feel, or just entertained me. Each with a brief comment and rating out of 10.',
    keywords: ['movies', 'films', 'entertainment', 'cinema', 'stories'],
    score: 0,
    matches: []
  },
  {
    path: '/list/podcasts',
    title: 'Podcasts',
    description: 'Shows that keep me company during walks, commutes, and quiet moments',
    content: 'Shows that keep me company during walks, commutes, and quiet moments. Each with thoughts and recommendations.',
    keywords: ['podcasts', 'shows', 'audio', 'learning', 'entertainment'],
    score: 0,
    matches: []
  },
  {
    path: '/list/tio',
    title: 'Things I Own',
    description: 'A curated list of possessions that actually matter to me',
    content: 'A curated list of possessions that actually matter to me. I try to own fewer things, but the things I own, I use and appreciate.',
    keywords: ['things', 'possessions', 'minimalism', 'tech', 'tools'],
    score: 0,
    matches: []
  },
  {
    path: '/scrapbook',
    title: 'Scrapbook',
    description: 'A messy corner where unfinished thoughts live',
    content: 'A messy corner where unfinished thoughts live. Screenshots, code snippets, memes, and strange finds. It\'s messy on purpose. These are the digital scraps of my thinking process.',
    keywords: ['scrapbook', 'thoughts', 'screenshots', 'code', 'memes'],
    score: 0,
    matches: []
  },
  {
    path: '/photos',
    title: 'Photos',
    description: 'Photos I take when I look up from the screen',
    content: 'I take photos when I look up from the screen. Mostly things that catch my eye in unexpected ways. These photos capture moments that made me pause and look twice.',
    keywords: ['photos', 'urban', 'architecture', 'patterns', 'light'],
    score: 0,
    matches: []
  },
  {
    path: '/naq',
    title: 'NAQ',
    description: 'Never Asked Questions - things I think about that no one ever asks me about',
    content: 'Never Asked Questions. Things I think about that no one ever asks me about. These are questions I think about but rarely get asked. If you have a question, feel free to ask.',
    keywords: ['questions', 'insights', 'thoughts', 'perspectives', 'discoveries'],
    score: 0,
    matches: []
  },
  {
    path: '/tweets',
    title: 'Tweets',
    description: 'My thoughts in 280 characters or less',
    content: 'My thoughts in 280 characters or less. Short insights, observations, and ideas. These are my thoughts, one tweet at a time.',
    keywords: ['tweets', 'thoughts', 'brevity', 'insights', 'observations'],
    score: 0,
    matches: []
  },
  {
    path: '/questions',
    title: 'Questions',
    description: 'Questions I am asking myself',
    content: 'Questions I\'m asking myself. Some have answers, some don\'t. The important ones rarely do. These questions evolve over time. Some get answered, some get replaced, some stay with me forever.',
    keywords: ['questions', 'thinking', 'exploring', 'curiosity', 'understanding'],
    score: 0,
    matches: []
  },
  {
    path: '/lc',
    title: 'Life Calendar',
    description: 'A visual representation of my life, week by week',
    content: 'A visual representation of my life, week by week. Each square represents one week. Looking at this calendar, I\'m reminded that time is our most precious resource. Each square represents a week of my life - some filled with memories, others yet to be written. This visualization helps me stay mindful of time\'s passage and motivates me to make each week count.',
    keywords: ['life', 'calendar', 'time', 'priorities', 'finite'],
    score: 0,
    matches: []
  },
  {
    path: '/yr',
    title: 'Year in Review',
    description: 'Annual reflection on what I have learned, built, and experienced',
    content: 'Annual reflection on what I have learned, built, and experienced. A yearly look back at patterns, progress, and what matters most.',
    keywords: ['review', 'reflection', 'learning', 'progress', 'patterns'],
    score: 0,
    matches: []
  },
  {
    path: '/yr/2025',
    title: '2025',
    description: 'Year in Review - 2025',
    content: 'Year in Review - 2025. Annual reflection on what I have learned, built, and experienced in 2025.',
    keywords: ['2025', 'review', 'reflection', 'year'],
    score: 0,
    matches: []
  },
  {
    path: '/secret',
    title: 'Secret',
    description: 'A page for things that do not fit anywhere else',
    content: 'A page for things that don\'t fit anywhere else. Sometimes the best ideas are hidden in plain sight. This is where I put things that are too experimental, too personal, or too weird for the main sections of my website. Not everything needs to be public. Some ideas need time to develop, some thoughts are too raw to share, and some experiments are better kept quiet until they\'re ready.',
    keywords: ['secret', 'experimental', 'ideas', 'hidden', 'thoughts'],
    score: 0,
    matches: []
  },
  {
    path: '/disclaimer',
    title: 'Disclaimer',
    description: 'Important information about this website and how to use it responsibly',
    content: 'Important information about this website and how to use it responsibly. This is my personal website. Everything here represents my personal views, opinions, and experiences. It\'s not professional advice, and it\'s not meant to be taken as such. I\'m not a lawyer, doctor, financial advisor, or any other kind of professional. If you need professional advice, please consult with someone qualified in that field. I reserve the right to change my mind. What I write today might not be what I believe tomorrow. That\'s how learning and growth work. If you choose to act on anything I write here, you do so at your own risk. I\'m not responsible for the consequences of your decisions.',
    keywords: ['disclaimer', 'personal', 'views', 'advice', 'responsibility'],
    score: 0,
    matches: []
  },
  {
    path: '/ai',
    title: 'Atomic Ideas',
    description: 'Half-formed thoughts I am working through',
    content: 'Half-formed thoughts I\'m working through. Some will become something useful. Most won\'t. That\'s fine. More atomic ideas are brewing. These are just the ones I\'ve captured so far.',
    keywords: ['ideas', 'thoughts', 'collaboration', 'feedback', 'growth'],
    score: 0,
    matches: []
  },
  {
    path: '/uses',
    title: 'Uses',
    description: 'A complete list of my setup: hardware, software, apps, daily routines, and tools I use and recommend',
    content: 'A complete list of my setup: hardware, software, apps, daily routines, and tools I use and recommend. My computer setup, phone, and other physical tools. I prefer simple, reliable hardware that gets out of the way and lets me focus on what matters. Applications, tools, and services that make my work and life easier. I\'m always experimenting with new tools, but I stick with what actually works. Habits, workflows, and processes that help me stay productive and creative. These are the routines that have stood the test of time.',
    keywords: ['uses', 'setup', 'hardware', 'software', 'tools'],
    score: 0,
    matches: []
  },
  {
    path: '/about',
    title: 'About Me',
    description: 'Personal background and philosophy',
    content: 'I\'m Samarkandi. I was born in 2006 in a village in the Past Darg\'om district of Samarkand. The last few years, I\'ve been living in Tashkent. I want to create things — tools, websites, essays, startups, apps, systems, and especially new ideas. I also want to learn — new ways of thinking, new ways of living. That\'s why I read books. I want to connect with people who feel the same: who stretch, strive, and grow. My favorite days are the ones where I work from morning to night, pausing only to move a little. I call it "work," but really it\'s play — writing, learning, improving, and creating. I don\'t like labels. In my mind, someone self-identified with something typically means that person is a fraud. I like to identify with the problem I\'m currently working on. I believe in skin in the game. This means: don\'t tell me what to do if you don\'t pay the price when you\'re wrong. Don\'t give advice you won\'t take yourself. Don\'t pretend to be a hero on other people\'s risks. I do not believe in perfect plans. Plans collapse on contact with reality. The world is too uncertain to be predicted with confidence. Instead of trying to know the future, I try to position myself so I don\'t need to know it. I do not chase rigid goals. Goals can blind me to opportunities. I prefer experiments. Experiments cost little, fail safely, and teach me something every time. Most of life\'s best outcomes come from tinkering, not planning. The world rewards those who try things, fail cheaply, and double down when something clicks. I have no respect whatsoever for authority. Someone\'s title, position, or reputation means absolutely nothing. Their words either make sense or they don\'t. Forget who said it and instead look what he starts with, where he ends up, and ask yourself, \'Is it reasonable?\'',
    keywords: ['about', 'personal', 'background', 'philosophy', 'values'],
    score: 0,
    matches: []
  },
  {
    path: '/now',
    title: 'Now',
    description: 'What I am doing now and what I am not doing',
    content: 'What I am doing now and what I am not doing. Current activities, focus, and trends. What I\'m reading: The Count of Monte Cristo. What I\'m writing: This website and essays about ideas outside of code. Trying to explain things to myself. What I\'m building: This website. Trying to make it feel like a real place, not another portfolio. A new thing: Exploring how to write about ideas outside of programming. Wondering why more programmers don\'t do this. What I\'m not doing: Building for others first. Focusing on solving my own problems first. If it helps others, that\'s a bonus. Always looking for: People working on interesting problems. The kind where you can\'t Google the answer. If you\'re around Tashkent, let\'s have coffee or work together.',
    keywords: ['now', 'current', 'activities', 'focus', 'trends'],
    score: 0,
    matches: []
  },
  {
    path: '/contact',
    title: 'Contact',
    description: 'Get in touch with me',
    content: 'I love meeting new people, and I reply to every email. Say hello! I\'m always open to conversations, collaborations, and coffee meetings in Tashkent. Get in touch with me. I\'m always open to conversations, collaborations, and coffee meetings in Tashkent. Coming soon.',
    keywords: ['contact', 'email', 'coffee', 'work', 'tashkent'],
    score: 0,
    matches: []
  },
  {
    path: '/more',
    title: 'More',
    description: 'Additional pages and sections that might interest you',
    content: 'Additional pages and sections that might interest you. Current: Now - What I\'m doing and not doing right now. Ideas & Thoughts: Atomic Ideas - Half-formed thoughts I\'m working through. Questions - Questions I\'m asking myself. NAQ - Never Asked Questions. Collections: List - Things I consume, own, and do. Scrapbook - Screenshots, snippets, and unfinished thoughts. Photos - Visual moments that caught my attention. Tweets - My thoughts in 280 characters or less. Tools & Setup: Uses - My complete setup and tools. Life & Time: Life Calendar - My life visualized week by week. Year in Review - Annual reflection on what I\'ve learned. Fun & Misc: Impossible Page - Things that seem impossible but might not be. Secret - Hidden things for those who discover them. Click Me - Go to a random page on this website. Disclaimer - Important information about this website.',
    keywords: ['more', 'additional', 'pages', 'sections', 'collections', 'tools'],
    score: 0,
    matches: []
  }
]

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const query = searchParams.get('q')?.toLowerCase().trim()

    // Input validation
    if (!query || query.length < 2) {
      return NextResponse.json({ 
        results: [], 
        query: query || '', 
        error: null,
        totalResults: 0 
      })
    }

    const queryWords = query.split(/\s+/).filter(word => word.length >= 2)

    if (queryWords.length === 0) {
      return NextResponse.json({ 
        results: [], 
        query, 
        error: null,
        totalResults: 0 
      })
    }

    // Search through static index
    const results: SearchResult[] = searchIndex.map(page => {
      const pageContent = `${page.title} ${page.description} ${page.content}`.toLowerCase()
      const pageKeywords = (page.keywords || []).map(k => k.toLowerCase())

      let score = 0
      const matches: string[] = []

      queryWords.forEach(word => {
        try {
          const wordRegex = new RegExp(`\\b${word}\\b`, 'gi')
          const contentMatches = (pageContent.match(wordRegex) || []).length
          const titleMatches = (page.title.toLowerCase().match(wordRegex) || []).length
          const descMatches = (page.description.toLowerCase().match(wordRegex) || []).length
          const keywordMatches = pageKeywords.filter(k => k.includes(word) || word.includes(k)).length

          const wordScore = (contentMatches * 1) + (titleMatches * 3) + (descMatches * 2) + (keywordMatches * 4)
          score += wordScore

          if (wordScore > 0) {
            matches.push(word)
          }
        } catch (error) {
          // Skip problematic words but continue search
          console.warn(`Error processing search word "${word}":`, error)
        }
      })

      // Bonus for exact phrase matches
      try {
        if (pageContent.includes(query.toLowerCase())) {
          score += 5
        }

        if (page.title.toLowerCase().includes(query.toLowerCase()) ||
            page.description.toLowerCase().includes(query.toLowerCase())) {
          score += 3
        }
      } catch (error) {
        console.warn(`Error processing exact phrase match:`, error)
      }

      return {
        path: page.path,
        title: page.title,
        description: page.description,
        content: page.content.substring(0, 200) + (page.content.length > 200 ? '...' : ''),
        score,
        matches: Array.from(new Set(matches))
      }
    })

    const filteredResults = results
      .filter(result => result.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 10)

    return NextResponse.json({
      results: filteredResults,
      query,
      totalResults: filteredResults.length,
      searchTime: Date.now(),
      error: null
    })

  } catch (error) {
    console.error('Search API error:', error)
    
    return NextResponse.json({
      results: [],
      query: '',
      totalResults: 0,
      error: 'Search temporarily unavailable. Please try again later.',
      searchTime: Date.now()
    }, { status: 500 })
  }
}