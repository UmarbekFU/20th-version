// Optimized search system using build-time generated index
// Maintains exact same API as original search.ts for zero breaking changes

export interface SearchResult {
  path: string
  title: string
  description: string
  content: string
  score: number
  matches: string[]
  keywords?: string[]
}

interface SearchIndex {
  pages: SearchResult[]
  generatedAt: string
  totalPages: number
  version: string
}

// Cache for search index
let searchIndexCache: SearchResult[] | null = null
let cacheTimestamp = 0
const CACHE_DURATION = 5 * 60 * 1000 // 5 minutes

// Load search index from build-time generated file
async function loadSearchIndex(): Promise<SearchResult[]> {
  try {
    // In development, try to load from public directory
    if (process.env.NODE_ENV === 'development') {
      const fs = await import('fs')
      const path = await import('path')
      const indexPath = path.join(process.cwd(), 'public', 'search-index.json')
      
      if (fs.existsSync(indexPath)) {
        const indexData = fs.readFileSync(indexPath, 'utf-8')
        const searchIndex: SearchIndex = JSON.parse(indexData)
        
        // Validate search index structure
        if (!searchIndex.pages || !Array.isArray(searchIndex.pages)) {
          throw new Error('Invalid search index structure')
        }
        
        return searchIndex.pages
      }
    }
    
    // In production, fetch from public URL
    const response = await fetch('/search-index.json', {
      headers: {
        'Cache-Control': 'no-cache'
      }
    })
    
    if (!response.ok) {
      throw new Error(`Failed to fetch search index: ${response.status} ${response.statusText}`)
    }
    
    const searchIndex: SearchIndex = await response.json()
    
    // Validate search index structure
    if (!searchIndex.pages || !Array.isArray(searchIndex.pages)) {
      throw new Error('Invalid search index structure')
    }
    
    return searchIndex.pages
  } catch (error) {
    console.error('Search index loading failed:', error)
    // Return a minimal fallback instead of empty array
    return [{
      path: '/',
      title: 'Homepage',
      description: 'Umarbek\'s personal website',
      content: 'Welcome to Umarbek\'s website',
      score: 0,
      matches: []
    }]
  }
}

// Get search index with caching
export async function getSearchIndex(): Promise<SearchResult[]> {
  const now = Date.now()
  
  // Return cached version if available and not stale
  if (searchIndexCache && (now - cacheTimestamp) < CACHE_DURATION) {
    return searchIndexCache
  }
  
  // Load fresh index
  searchIndexCache = await loadSearchIndex()
  cacheTimestamp = now
  
  return searchIndexCache
}

// Function to clear cache and force regeneration
export function clearSearchCache(): void {
  searchIndexCache = null
  cacheTimestamp = 0
  console.log('Search cache cleared')
}

// Main search function with pagination support
export async function searchContent(
  query: string, 
  page: number = 1, 
  limit: number = 10
): Promise<{ results: SearchResult[], totalResults: number, totalPages: number, currentPage: number }> {
  const searchIndex = await getSearchIndex()
  
  if (!query || query.length < 2) {
    return { results: [], totalResults: 0, totalPages: 0, currentPage: 1 }
  }
  
  const queryWords = query.split(/\s+/).filter(word => word.length >= 2)
  
  if (queryWords.length === 0) {
    return { results: [], totalResults: 0, totalPages: 0, currentPage: 1 }
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
  
  const filteredResults = results.filter(result => result.score > 0)
  const sortedResults = filteredResults.sort((a, b) => b.score - a.score)
  
  const totalResults = sortedResults.length
  const totalPages = Math.ceil(totalResults / limit)
  const startIndex = (page - 1) * limit
  const endIndex = startIndex + limit
  const paginatedResults = sortedResults.slice(startIndex, endIndex)
  
  return {
    results: paginatedResults,
    totalResults,
    totalPages,
    currentPage: page
  }
}

// Removed deprecated searchContentSync function - use searchContent instead
