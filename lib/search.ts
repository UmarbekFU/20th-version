import { getAllNotes } from './notes'
import fs from 'fs'
import path from 'path'

export interface SearchResult {
  path: string
  title: string
  description: string
  content: string
  score: number
  matches: string[]
  keywords?: string[]
}

// Static pages that don't need dynamic discovery
const staticPages = [
  {
    path: '/',
    title: 'Homepage',
    description: 'Hey! I\'m Umarbek. Samarkand native, I now live in Tashkent, Uzbekistan. I write essays, build stuff, and take notes.',
    content: 'Hey! I\'m Umarbek. Samarkand native, I now live in Tashkent, Uzbekistan. I write essays, build stuff, and take notes. I write essays when I try to explain something to myself. My atomic ideas are half-formed thoughts I\'m working through. I build stuff. I\'m solving my own problem. If it helps you too, even better. I take notes when I read. Not polished summaries, just the parts that made me stop and think. I list everything I consume—books, films, podcasts etc. If you care about tools I use, I keep that updated. You can find screenshots that made me think, code snippets I might need later, memes that contain truth on scrapbook. Read more about me.',
    keywords: ['umarbek', 'samarkand', 'tashkent', 'essays', 'projects', 'notes', 'list', 'uses', 'scrapbook']
  },
  {
    path: '/essays',
    title: 'Essays',
    description: 'I write essays when I try to explain something to myself. These are my attempts to understand ideas, concepts, and the world around me through writing.',
    content: 'I write essays when I try to explain something to myself. These are my attempts to understand ideas, concepts, and the world around me through writing. Essays coming soon. I\'m working on ideas about systems thinking, creativity, and the intersection of technology and human experience.',
    keywords: ['essays', 'writing', 'thinking', 'ideas', 'learning']
  },
  {
    path: '/projects',
    title: 'Projects',
    description: 'Things I\'ve built and broken. I build things to solve my own problems first. If they help others too, that\'s a bonus.',
    content: 'Things I\'ve built and broken. Current Projects: This Website - My personal website built with Next.js and Tailwind CSS. A place to share thoughts, projects, and ideas without the constraints of social media. Coming Soon: More projects are in development. I\'m working on tools and applications that solve real problems I encounter in my daily work and life. My Approach: I build things to solve my own problems first. If they help others too, that\'s a bonus. I prefer simple, focused solutions over complex, feature-rich applications. Most of my projects start as experiments or prototypes. I iterate quickly, learn from failures, and only polish what actually works. This approach has taught me more than any amount of planning ever could.',
    keywords: ['projects', 'building', 'solving', 'experiments', 'learning']
  },
  {
    path: '/notes',
    title: 'Notes',
    description: 'These aren\'t summaries—they\'re my thoughts, questions, and reactions to what I\'m reading and learning. I don\'t summarize books—I argue with them.',
    content: 'My notes from books, articles, and conversations. These aren\'t summaries—they\'re my thoughts, questions, and reactions to what I\'m reading and learning. I don\'t summarize books—I argue with them. I write down questions, challenge assumptions, and connect ideas to my own experiences. The goal is to understand, not just remember. I use a simple system: one note per book, organized by themes rather than chapters. This helps me see patterns and connections across different authors and ideas.',
    keywords: ['notes', 'books', 'reading', 'thinking', 'learning']
  },
  {
    path: '/uses',
    title: 'Uses',
    description: 'My computer setup, phone, and other physical tools. I prefer simple, reliable hardware that gets out of the way and lets me focus on what matters.',
    content: 'A complete list of my setup: hardware, software, apps, daily routines, and tools I use and recommend. My computer setup, phone, and other physical tools. I prefer simple, reliable hardware that gets out of the way and lets me focus on what matters. Applications, tools, and services that make my work and life easier. I\'m always experimenting with new tools, but I stick with what actually works. Habits, workflows, and processes that help me stay productive and creative. These are the routines that have stood the test of time.',
    keywords: ['uses', 'setup', 'hardware', 'software', 'tools']
  },
  {
    path: '/about',
    title: 'About Me',
    description: 'I\'m Samarkandi. I was born in 2006 in a village in the Past Darg\'om district of Samarkand. The last few years, I\'ve been living in Tashkent.',
    content: 'I\'m Samarkandi. I was born in 2006 in a village in the Past Darg\'om district of Samarkand. The last few years, I\'ve been living in Tashkent. I want to create things — tools, websites, essays, startups, apps, systems, and especially new ideas. I also want to learn — new ways of thinking, new ways of living. That\'s why I read books. I want to connect with people who feel the same: who stretch, strive, and grow. My favorite days are the ones where I work from morning to night, pausing only to move a little. I call it "work," but really it\'s play — writing, learning, improving, and creating. I don\'t like labels. In my mind, someone self-identified with something typically means that person is a fraud. I like to identify with the problem I\'m currently working on. I believe in skin in the game. This means: don\'t tell me what to do if you don\'t pay the price when you\'re wrong. Don\'t give advice you won\'t take yourself. Don\'t pretend to be a hero on other people\'s risks. I do not believe in perfect plans. Plans collapse on contact with reality. The world is too uncertain to be predicted with confidence. Instead of trying to know the future, I try to position myself so I don\'t need to know it. I do not chase rigid goals. Goals can blind me to opportunities. I prefer experiments. Experiments cost little, fail safely, and teach me something every time. Most of life\'s best outcomes come from tinkering, not planning. The world rewards those who try things, fail cheaply, and double down when something clicks. I have no respect whatsoever for authority. Someone\'s title, position, or reputation means absolutely nothing. Their words either make sense or they don\'t. Forget who said it and instead look what he starts with, where he ends up, and ask yourself, \'Is it reasonable?\'',
    keywords: ['about', 'personal', 'background', 'philosophy', 'values']
  },
  {
    path: '/now',
    title: 'Now',
    description: 'What I\'m reading: The Count of Monte Cristo. What I\'m writing: This website and essays about ideas outside of code. What I\'m building: This website.',
    content: 'What I am doing now and what I am not doing. Current activities, focus, and trends. What I\'m reading: The Count of Monte Cristo. What I\'m writing: This website and essays about ideas outside of code. Trying to explain things to myself. What I\'m building: This website. Trying to make it feel like a real place, not another portfolio. A new thing: Exploring how to write about ideas outside of programming. Wondering why more programmers don\'t do this. What I\'m not doing: Building for others first. Focusing on solving my own problems first. If it helps others, that\'s a bonus. Always looking for: People working on interesting problems. The kind where you can\'t Google the answer. If you\'re around Tashkent, let\'s have coffee or work together.',
    keywords: ['now', 'current', 'activities', 'focus', 'trends']
  },
  {
    path: '/contact',
    title: 'Contact',
    description: 'I love meeting new people, and I reply to every email. Say hello! I\'m always open to conversations, collaborations, and coffee meetings in Tashkent.',
    content: 'I love meeting new people, and I reply to every email. Say hello! I\'m always open to conversations, collaborations, and coffee meetings in Tashkent. Get in touch with me. I\'m always open to conversations, collaborations, and coffee meetings in Tashkent. Coming soon.',
    keywords: ['contact', 'email', 'coffee', 'work', 'tashkent']
  },
  {
    path: '/more',
    title: 'More',
    description: 'Atomic Ideas - Half-formed thoughts I\'m working through. Questions - Questions I\'m asking myself. Collections: List, Scrapbook, Photos, Tweets.',
    content: 'Additional pages and sections that might interest you. Current: Now - What I\'m doing and not doing right now. Ideas & Thoughts: Atomic Ideas - Half-formed thoughts I\'m working through. Questions - Questions I\'m asking myself. NAQ - Never Asked Questions. Collections: List - Things I consume, own, and do. Scrapbook - Screenshots, snippets, and unfinished thoughts. Photos - Visual moments that caught my attention. Tweets - My thoughts in 280 characters or less. Tools & Setup: Uses - My complete setup and tools. Life & Time: Life Calendar - My life visualized week by week. Year in Review - Annual reflection on what I\'ve learned. Fun & Misc: Impossible Page - Things that seem impossible but might not be. Secret - Hidden things for those who discover them. Click Me - Go to a random page on this website. Disclaimer - Important information about this website.',
    keywords: ['more', 'additional', 'pages', 'sections', 'collections', 'tools']
  }
]

// Function to extract content from a page component
function extractPageContent(filePath: string): { title: string; content: string } | null {
  try {
    const fileContent = fs.readFileSync(filePath, 'utf-8')
    
    let title = 'Untitled'
    
    // First, try to extract title from AtomicPage component's title prop
    const atomicPageTitleMatch = fileContent.match(/title\s*=\s*["']([^"']+)["']/)
    if (atomicPageTitleMatch) {
      title = atomicPageTitleMatch[1].trim()
    } else {
      // Fallback: Extract title from h1 tag
      const titleMatch = fileContent.match(/<h1[^>]*>([^<]+)<\/h1>/)
      if (titleMatch) {
        title = titleMatch[1].trim()
      }
    }
    
    // Extract text content from JSX, focusing on actual content
    let textContent = ''
    
    // For AtomicPage components, extract content from AtomicParagraph components
    if (fileContent.includes('<AtomicPage')) {
      // Extract all AtomicParagraph content
      const atomicParagraphMatches = fileContent.match(/<AtomicParagraph[^>]*>([\s\S]*?)<\/AtomicParagraph>/g)
      if (atomicParagraphMatches) {
        textContent = atomicParagraphMatches
          .map(match => {
            // Extract text content from each AtomicParagraph
            const contentMatch = match.match(/<AtomicParagraph[^>]*>([\s\S]*?)<\/AtomicParagraph>/)
            if (contentMatch) {
              return contentMatch[1]
            }
            return ''
          })
          .join(' ')
      }
      
      // Also extract from AtomicHeading components
      const atomicHeadingMatches = fileContent.match(/<AtomicHeading[^>]*>([\s\S]*?)<\/AtomicHeading>/g)
      if (atomicHeadingMatches) {
        const headingContent = atomicHeadingMatches
          .map(match => {
            const contentMatch = match.match(/<AtomicHeading[^>]*>([\s\S]*?)<\/AtomicHeading>/)
            if (contentMatch) {
              return contentMatch[1]
            }
            return ''
          })
          .join(' ')
        textContent += ' ' + headingContent
      }
      
      // Also extract from AtomicQuote components
      const atomicQuoteMatches = fileContent.match(/<AtomicQuote[^>]*>([\s\S]*?)<\/AtomicQuote>/g)
      if (atomicQuoteMatches) {
        const quoteContent = atomicQuoteMatches
          .map(match => {
            const contentMatch = match.match(/<AtomicQuote[^>]*>([\s\S]*?)<\/AtomicQuote>/)
            if (contentMatch) {
              return contentMatch[1]
            }
            return ''
          })
          .join(' ')
        textContent += ' ' + quoteContent
      }
    } else {
      // Fallback: Extract text from JSX content (for non-AtomicPage components)
      const jsxContent = fileContent.match(/<main[^>]*>([\s\S]*?)<\/main>/)
      if (jsxContent) {
        textContent = jsxContent[1]
      } else {
        // Last resort: extract from return statement
        const returnContent = fileContent.match(/return\s*\(\s*([\s\S]*?)\s*\)\s*;?\s*}/)
        if (returnContent) {
          textContent = returnContent[1]
        }
      }
    }
    
    // Remove JSX/HTML tags but keep text content
    textContent = textContent
      .replace(/<[^>]*>/g, ' ') // Remove HTML/JSX tags
      .replace(/className\s*=\s*["'][^"']*["']/g, '') // Remove className attributes
      .replace(/href\s*=\s*["'][^"']*["']/g, '') // Remove href attributes
      .replace(/src\s*=\s*["'][^"']*["']/g, '') // Remove src attributes
      .replace(/alt\s*=\s*["'][^"']*["']/g, '') // Remove alt attributes
      .replace(/[{}();]/g, ' ') // Remove brackets and semicolons
      .replace(/\s+/g, ' ') // Normalize whitespace
      .trim()
    
    return {
      title,
      content: textContent.substring(0, 800) // Limit content length
    }
  } catch (error) {
    console.warn(`Could not extract content from ${filePath}:`, error)
    return null
  }
}

// Function to discover all pages dynamically
function discoverPages(): SearchResult[] {
  const pages: SearchResult[] = []
  const appDir = path.join(process.cwd(), 'app')
  
  // Add static pages
  pages.push(...staticPages.map(page => ({
    ...page,
    score: 0,
    matches: []
  })))
  
  // Add all notes
  const allNotes = getAllNotes()
  pages.push(...allNotes.map(note => ({
    path: `/notes/${note.slug}`,
    title: note.title,
    description: `by ${note.author} - ${note.summary}`,
    content: `${note.title} by ${note.author}. ${note.summary}. Category: ${note.category}. Rating: ${note.rating}/10. Read: ${note.date}.`,
    keywords: [
      note.title.toLowerCase(),
      note.author.toLowerCase(),
      note.category,
      'book', 'podcast', 'course', 'video', 'essay', 'documentary'
    ].filter(Boolean),
    score: 0,
    matches: []
  })))
  
  // Discover atomic ideas pages
  try {
    const aiDir = path.join(appDir, 'ai')
    if (fs.existsSync(aiDir)) {
      const aiSubdirs = fs.readdirSync(aiDir, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory())
        .map(dirent => dirent.name)
        .filter(name => name !== '_template') // Exclude template directory
      
      for (const subdir of aiSubdirs) {
        const pageFile = path.join(aiDir, subdir, 'page.tsx')
        if (fs.existsSync(pageFile)) {
          const extracted = extractPageContent(pageFile)
          if (extracted) {
            pages.push({
              path: `/ai/${subdir}`,
              title: extracted.title,
              description: `Atomic idea: ${extracted.title}`,
              content: extracted.content,
              keywords: [extracted.title.toLowerCase(), 'atomic', 'idea', 'thought'],
              score: 0,
              matches: []
            })
          }
        }
      }
    }
  } catch (error) {
    console.warn('Could not discover atomic ideas pages:', error)
  }
  
  // Discover other dynamic pages
  try {
    const otherDirs = ['list', 'projects']
    for (const dir of otherDirs) {
      const dirPath = path.join(appDir, dir)
      if (fs.existsSync(dirPath)) {
        const subdirs = fs.readdirSync(dirPath, { withFileTypes: true })
          .filter(dirent => dirent.isDirectory())
          .map(dirent => dirent.name)
        
        for (const subdir of subdirs) {
          const pageFile = path.join(dirPath, subdir, 'page.tsx')
          if (fs.existsSync(pageFile)) {
            const extracted = extractPageContent(pageFile)
            if (extracted) {
              pages.push({
                path: `/${dir}/${subdir}`,
                title: extracted.title,
                description: `${dir} page: ${extracted.title}`,
                content: extracted.content,
                keywords: [extracted.title.toLowerCase(), dir],
                score: 0,
                matches: []
              })
            }
          }
        }
      }
    }
  } catch (error) {
    console.warn('Could not discover other dynamic pages:', error)
  }
  
  return pages
}

// Cache for search index - using a more robust caching approach
let searchIndexCache: SearchResult[] | null = null
let cacheTimestamp = 0
const CACHE_DURATION = 2 * 60 * 1000 // 2 minutes (shorter for Vercel)

export function getSearchIndex(): SearchResult[] {
  const now = Date.now()
  
  // Always regenerate cache in development or if cache is stale
  if (process.env.NODE_ENV === 'development' || !searchIndexCache || (now - cacheTimestamp) > CACHE_DURATION) {
    console.log('Regenerating search index...')
    searchIndexCache = discoverPages()
    cacheTimestamp = now
  }
  
  return searchIndexCache
}

// Function to clear cache and force regeneration
export function clearSearchCache(): void {
  searchIndexCache = null
  cacheTimestamp = 0
  console.log('Search cache cleared')
}

export function searchContent(query: string): SearchResult[] {
  const searchIndex = getSearchIndex()
  
  if (!query || query.length < 2) {
    return []
  }
  
  const queryWords = query.split(/\s+/).filter(word => word.length >= 2)
  
  if (queryWords.length === 0) {
    return []
  }
  
  const results: SearchResult[] = searchIndex.map(page => {
    const pageContent = `${page.title} ${page.description} ${page.content}`.toLowerCase()
    const pageKeywords = (page.keywords || []).map(k => k.toLowerCase())
    
    let score = 0
    const matches: string[] = []
    
    queryWords.forEach(word => {
      try {
        // Escape special regex characters to prevent injection attacks
        const escapedWord = word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
        const wordRegex = new RegExp(`\\b${escapedWord}\\b`, 'gi')
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
  
  return results
    .filter(result => result.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 10)
}
