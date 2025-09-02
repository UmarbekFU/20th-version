import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

interface SearchResult {
  path: string
  title: string
  description: string
  content: string
  score: number
  matches: string[]
  keywords?: string[]
}

// Dynamic search index that builds from actual page content
async function buildSearchIndex(): Promise<SearchResult[]> {
  const searchIndex: SearchResult[] = []
  
  // Define all pages and their metadata
  const pages = [
    {
      path: '/',
      title: 'Homepage',
      description: 'Umarbek - Personal website with essays, projects, notes, and more',
      keywords: ['umarbek', 'samarkand', 'tashkent', 'essays', 'projects', 'notes', 'list', 'uses', 'scrapbook']
    },
    {
      path: '/essays',
      title: 'Essays',
      description: 'Collection of essays and thoughts on various topics',
      keywords: ['essays', 'writing', 'thinking', 'ideas', 'learning']
    },
    {
      path: '/atomic-ideas/jdm',
      title: 'Just do more',
      description: 'Why business leads to technology, which leads to science. The 100x principle and the power of iteration over perfection.',
      keywords: ['trial', 'error', 'iteration', 'business', 'technology', 'science', '100x', 'principle', 'action', 'perfection']
    },
    {
      path: '/projects',
      title: 'Projects',
      description: 'Things I have built and broken',
      keywords: ['projects', 'building', 'solving', 'experiments', 'learning']
    },
    {
      path: '/projects/tw',
      title: 'This Website',
      description: 'My personal website built with Next.js and Tailwind CSS',
      keywords: ['website', 'nextjs', 'tailwind', 'personal', 'portfolio']
    },
    {
      path: '/notes',
      title: 'Notes',
      description: 'My notes from books, articles, and conversations',
      keywords: ['notes', 'books', 'reading', 'thinking', 'learning']
    },
    {
      path: '/list',
      title: 'List',
      description: 'Things I consume, own, and do',
      keywords: ['list', 'consumption', 'media', 'patterns', 'connections']
    },
    {
      path: '/list/movies',
      title: 'Movies',
      description: 'Films that made me think, feel, or just entertained me',
      keywords: ['movies', 'films', 'entertainment', 'cinema', 'stories']
    },
    {
      path: '/list/podcasts',
      title: 'Podcasts',
      description: 'Shows that keep me company during walks, commutes, and quiet moments',
      keywords: ['podcasts', 'shows', 'audio', 'learning', 'entertainment']
    },
    {
      path: '/list/tio',
      title: 'Things I Own',
      description: 'A curated list of possessions that actually matter to me',
      keywords: ['things', 'possessions', 'minimalism', 'tech', 'tools']
    },
    {
      path: '/scrapbook',
      title: 'Scrapbook',
      description: 'A messy corner where unfinished thoughts live',
      keywords: ['scrapbook', 'thoughts', 'screenshots', 'code', 'memes']
    },
    {
      path: '/photos',
      title: 'Photos',
      description: 'Photos I take when I look up from the screen',
      keywords: ['photos', 'urban', 'architecture', 'patterns', 'light']
    },
    {
      path: '/naq',
      title: 'NAQ',
      description: 'Never Asked Questions - things I think about that no one ever asks me about',
      keywords: ['questions', 'insights', 'thoughts', 'perspectives', 'discoveries']
    },
    {
      path: '/tweets',
      title: 'Tweets',
      description: 'My thoughts in 280 characters or less',
      keywords: ['tweets', 'thoughts', 'brevity', 'insights', 'observations']
    },
    {
      path: '/questions',
      title: 'Questions',
      description: 'Questions I am asking myself',
      keywords: ['questions', 'thinking', 'exploring', 'curiosity', 'understanding']
    },
    {
      path: '/lc',
      title: 'Life Calendar',
      description: 'A visual representation of my life, week by week',
      keywords: ['life', 'calendar', 'time', 'priorities', 'finite']
    },
    {
      path: '/yr',
      title: 'Year in Review',
      description: 'Annual reflection on what I have learned, built, and experienced',
      keywords: ['review', 'reflection', 'learning', 'progress', 'patterns']
    },
    {
      path: '/yr/2025',
      title: '2025',
      description: 'Year in Review - 2025',
      keywords: ['2025', 'review', 'reflection', 'year']
    },
    {
      path: '/secret',
      title: 'Secret',
      description: 'A page for things that do not fit anywhere else',
      keywords: ['secret', 'experimental', 'ideas', 'hidden', 'thoughts']
    },
    {
      path: '/disclaimer',
      title: 'Disclaimer',
      description: 'Important information about this website and how to use it responsibly',
      keywords: ['disclaimer', 'personal', 'views', 'advice', 'responsibility']
    },
    {
      path: '/atomic-ideas',
      title: 'Atomic Ideas',
      description: 'Half-formed thoughts I am working through',
      keywords: ['ideas', 'thoughts', 'collaboration', 'feedback', 'growth']
    },
    {
      path: '/atomic-ideas/emf',
      title: 'Everything is my fault',
      description: 'Taking responsibility and preserving agency',
      keywords: ['responsibility', 'agency', 'fault', 'control', 'power']
    },
    {
      path: '/uses',
      title: 'Uses',
      description: 'A complete list of my setup: hardware, software, apps, daily routines, and tools I use and recommend',
      keywords: ['uses', 'setup', 'hardware', 'software', 'tools']
    },
    {
      path: '/about',
      title: 'About Me',
      description: 'Personal background and philosophy',
      keywords: ['about', 'personal', 'background', 'philosophy', 'values']
    },
    {
      path: '/now',
      title: 'Now',
      description: 'What I am doing now and what I am not doing',
      keywords: ['now', 'current', 'activities', 'focus', 'trends']
    },
    {
      path: '/contact',
      title: 'Contact',
      description: 'Get in touch with me',
      keywords: ['contact', 'email', 'coffee', 'work', 'tashkent']
    },
    {
      path: '/more',
      title: 'More',
      description: 'Additional pages and sections that might interest you',
      keywords: ['more', 'additional', 'pages', 'sections', 'collections', 'tools']
    }
  ]

  // Build search index from pages
  for (const page of pages) {
    let content = ''
    
    try {
      // Try to read the actual page content
      const pagePath = path.join(process.cwd(), 'app', page.path === '/' ? 'page.tsx' : `${page.path}/page.tsx`)
      
      if (fs.existsSync(pagePath)) {
        const fileContent = fs.readFileSync(pagePath, 'utf-8')
        
        // Extract text content from JSX (basic extraction)
        const textMatches = fileContent.match(/"([^"]{20,})"/g) || []
        content = textMatches
          .map(match => match.slice(1, -1)) // Remove quotes
          .filter(text => text.length > 10) // Filter meaningful text
          .join(' ')
          .substring(0, 500) // Limit content length
      }
    } catch (error) {
      // Fallback to basic content if file reading fails
      content = `${page.title} ${page.description}`.toLowerCase()
    }

    searchIndex.push({
      path: page.path,
      title: page.title,
      description: page.description,
      content: content || `${page.title} ${page.description}`,
      score: 0,
      matches: [],
      keywords: page.keywords
    })
  }

  return searchIndex
}

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

  // Build dynamic search index
  const searchIndex = await buildSearchIndex()

  const results: SearchResult[] = searchIndex.map(page => {
    const pageContent = `${page.title} ${page.description} ${page.content}`.toLowerCase()
    const pageKeywords = (page.keywords || []).map(k => k.toLowerCase())

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

    // Bonus for exact phrase matches
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
    searchTime: Date.now()
  })
}
