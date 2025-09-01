import { NextRequest, NextResponse } from 'next/server'

interface SearchResult {
  path: string
  title: string
  description: string
  content: string
  score: number
  matches: string[]
}

const searchIndex = [
  {
    path: '/',
    title: 'Homepage',
    description: 'Umarbek - Personal website with essays, projects, notes, and more',
    content: `Umarbek Samarkand native Tashkent Uzbekistan write essays atomic ideas build break stuff solving creating problem projects helps bothers notes read books list consume films podcasts tools uses scrapbook screenshots code snippets memes truth building website interesting problems coffee work together meeting people email hello`,
    keywords: ['umarbek', 'samarkand', 'tashkent', 'essays', 'projects', 'notes', 'list', 'uses', 'scrapbook']
  },
  {
    path: '/essays',
    title: 'Essays',
    description: 'Collection of essays and thoughts on various topics',
    content: `essays writing thinking ideas thoughts learning through writing why build value experiments atomic ideas half-formed thoughts working through`,
    keywords: ['essays', 'writing', 'thinking', 'ideas', 'learning']
  },
  {
    path: '/essays/why-i-build',
    title: 'Why I Build',
    description: 'Understanding my motivation for creating things and solving problems',
    content: `build stuff solving problems own itch software real problems personal frustration practical hero conversations dead people argue back`,
    keywords: ['building', 'motivation', 'problems', 'solving', 'creation']
  },
  {
    path: '/essays/learning-through-writing',
    title: 'Learning Through Writing',
    description: 'How writing helps me understand complex ideas and clarify my thinking',
    content: `writing thinking discover ideas gap thought expression complete coherent articulate holes contradictions fuzzy thinking slow down examine thoughts carefully`,
    keywords: ['writing', 'thinking', 'learning', 'ideas', 'clarity']
  },
  {
    path: '/essays/the-value-of-experiments',
    title: 'The Value of Experiments',
    description: 'Why I prefer experiments over perfect plans and how they lead to better outcomes',
    content: `experiments plans fail assumptions future complex unpredictable reality conform plan cheap fast learn something valuable failure teaches`,
    keywords: ['experiments', 'planning', 'learning', 'failure', 'growth']
  },
  {
    path: '/projects',
    title: 'Projects',
    description: 'Things I have built and broken',
    content: `projects build break stuff solve problems personal needs help others simple focused solutions experiments prototypes iterate quickly learn failures polish works`,
    keywords: ['projects', 'building', 'solving', 'experiments', 'learning']
  },
  {
    path: '/projects/this-website',
    title: 'This Website',
    description: 'My personal website built with Next.js and Tailwind CSS',
    content: `website Next.js Tailwind CSS personal space portfolio real place Plum background animation clean typography content focus`,
    keywords: ['website', 'nextjs', 'tailwind', 'personal', 'portfolio']
  },
  {
    path: '/notes',
    title: 'Notes',
    description: 'My notes from books, articles, and conversations',
    content: `notes books reading thinking questions challenge assumptions connect ideas experiences understand remember argue back conversations dead people`,
    keywords: ['notes', 'books', 'reading', 'thinking', 'learning']
  },
  {
    path: '/list',
    title: 'List',
    description: 'Things I consume, own, and do',
    content: `list consume own do media consumption books films podcasts tools weird thoughts patterns reveal unexpected connections`,
    keywords: ['list', 'consumption', 'media', 'patterns', 'connections']
  },
  {
    path: '/scrapbook',
    title: 'Scrapbook',
    description: 'A messy corner where unfinished thoughts live',
    content: `scrapbook screenshots code snippets memes truth messy purpose digital attic unfinished thoughts sketches links voice notes raw unpolished human`,
    keywords: ['scrapbook', 'thoughts', 'screenshots', 'code', 'memes']
  },
  {
    path: '/photos',
    title: 'Photos',
    description: 'Photos I take when I look up from the screen',
    content: `photos look up screen catch eye unexpected ways urban scenes architectural details natural patterns everyday life geometry contrast light surfaces`,
    keywords: ['photos', 'urban', 'architecture', 'patterns', 'light']
  },
  {
    path: '/naq',
    title: 'NAQ',
    description: 'Never Asked Questions - things I think about that no one ever asks me about',
    content: `never asked questions unexpected insights interesting thoughts observations ideas rarely conversation deeper understanding new perspectives discoveries`,
    keywords: ['questions', 'insights', 'thoughts', 'perspectives', 'discoveries']
  },
  {
    path: '/tweets',
    title: 'Tweets',
    description: 'My thoughts in 280 characters or less',
    content: `tweets thoughts characters twitter brevity precise concise quick insights observations technology creativity life media consumption strong opinions`,
    keywords: ['tweets', 'thoughts', 'brevity', 'insights', 'observations']
  },
  {
    path: '/questions',
    title: 'Questions',
    description: 'Questions I am asking myself',
    content: `questions think answers important rarely easy worth asking exploring technology creativity human behavior work practical philosophical curious`,
    keywords: ['questions', 'thinking', 'exploring', 'curiosity', 'understanding']
  },
  {
    path: '/life-calendar',
    title: 'Life Calendar',
    description: 'A visual representation of my life, week by week',
    content: `life calendar weeks grid Tim Urban Wait But Why finite time precious prioritize important avoid wasting time matters`,
    keywords: ['life', 'calendar', 'time', 'priorities', 'finite']
  },
  {
    path: '/year-review',
    title: 'Year in Review',
    description: 'Annual reflection on what I have learned, built, and experienced',
    content: `year review annual reflection learned built experienced patterns progress understand matters January December projects books lessons learned worked didnt change next year`,
    keywords: ['review', 'reflection', 'learning', 'progress', 'patterns']
  },
  {
    path: '/secret',
    title: 'Secret',
    description: 'A page for things that do not fit anywhere else',
    content: `secret experimental personal weird main sections hidden plain sight ideas develop thoughts raw share create solutions complain problems`,
    keywords: ['secret', 'experimental', 'ideas', 'hidden', 'thoughts']
  },
  {
    path: '/disclaimer',
    title: 'Disclaimer',
    description: 'Important information about this website and how to use it responsibly',
    content: `disclaimer personal website views opinions experiences professional advice lawyer doctor financial advisor qualified field change mind learning growth`,
    keywords: ['disclaimer', 'personal', 'views', 'advice', 'responsibility']
  },
  {
    path: '/atomic-ideas',
    title: 'Atomic Ideas',
    description: 'Half-formed thoughts I am working through',
    content: `atomic ideas smallest units thought stand alone fully developed essays complete arguments seeds grow bigger share collaboration feedback someone else sees idea missed connects never considered`,
    keywords: ['ideas', 'thoughts', 'collaboration', 'feedback', 'growth']
  },
  {
    path: '/uses',
    title: 'Uses',
    description: 'A complete list of my setup: hardware, software, apps, daily routines, and tools I use and recommend',
    content: `uses setup hardware software apps daily routines tools recommend computer phone physical tools simple reliable gets way focus matters applications services work life easier experimenting new tools stick actually works`,
    keywords: ['uses', 'setup', 'hardware', 'software', 'tools']
  },
  {
    path: '/about',
    title: 'About Me',
    description: 'Personal background and philosophy',
    content: `Samarkandi born 2006 village Past Dargom district Samarkand living Tashkent create tools websites essays startups apps systems new ideas learn new ways thinking living read books notes connect people stretch strive grow favorite days work morning night pause move little work play writing learning improving creating labels self-identified fraud identify problem currently working skin game pay price wrong advice take yourself pretend hero other people risks perfect plans collapse contact reality world uncertain predicted confidence position future need know rigid goals blind opportunities experiments cost little fail safely teach something every time lifes best outcomes tinkering planning world rewards try things fail cheaply double clicks respect authority title position reputation means absolutely nothing words make sense dont forget said look starts ends reasonable`,
    keywords: ['about', 'personal', 'background', 'philosophy', 'values']
  },
  {
    path: '/now',
    title: 'Now',
    description: 'What I am doing now and what I am not doing',
    content: `now doing reading systems thinking programmers write ideas outside code interesting problems Google answer not doing social media scrolling building others first following trends always looking people working interesting problems coffee work together meeting people`,
    keywords: ['now', 'current', 'activities', 'focus', 'trends']
  },
  {
    path: '/contact',
    title: 'Contact',
    description: 'Get in touch with me',
    content: `contact get touch email hello reach coffee work together Tashkent around`,
    keywords: ['contact', 'email', 'coffee', 'work', 'tashkent']
  },
  {
    path: '/more',
    title: 'More',
    description: 'Additional pages and sections that might interest you',
    content: `more additional pages sections interest current activities ideas thoughts collections tools setup life time fun miscellaneous atomic ideas questions NAQ list scrapbook photos tweets uses life calendar year review impossible secret click me disclaimer`,
    keywords: ['more', 'additional', 'pages', 'sections', 'collections', 'tools']
  }
]

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const query = searchParams.get('q')?.toLowerCase().trim()

  if (!query || query.length < 2) {
    return NextResponse.json({ results: [], query: query || '' })
  }

  const queryWords = query.split(/\s+/).filter(word => word.length >= 2)

  if (queryWords.length === 0) {
    return NextResponse.json({ results: [], query })
  }

  const results: SearchResult[] = searchIndex.map(page => {
    const pageContent = `${page.title} ${page.description} ${page.content}`.toLowerCase()
    const pageKeywords = page.keywords.map(k => k.toLowerCase())

    let score = 0
    const matches: string[] = []

    queryWords.forEach(word => {
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
    })

    if (pageContent.includes(query.toLowerCase())) {
      score += 5
    }

    if (page.title.toLowerCase().includes(query.toLowerCase()) ||
        page.description.toLowerCase().includes(query.toLowerCase())) {
      score += 3
    }

    return {
      path: page.path,
      title: page.title,
      description: page.description,
      content: page.content.substring(0, 200) + '...',
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
    searchTime: Date.now()
  })
}
