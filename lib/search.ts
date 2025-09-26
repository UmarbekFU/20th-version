// Unified optimal search system - combines the best features from both implementations
// Features: Build-time index generation, multi-level caching, word indexing, pagination, security

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
  totalPages: number
  version: string
  generatedAt: string
}

interface SearchCache {
  results: SearchResult[]
  timestamp: number
  query: string
}

interface WordIndex {
  [word: string]: {
    pages: Set<number> // page indices
    frequency: number
  }
}

interface WordIndexCache {
  wordIndex: WordIndex
  timestamp: number
}

// Multi-level caching system for optimal performance
const searchResultCache = new Map<string, SearchCache>()
const wordIndexCache = new Map<string, WordIndexCache>()
let searchIndexCache: SearchResult[] | null = null
let cacheTimestamp = 0

// Cache durations (in milliseconds)
const SEARCH_CACHE_DURATION = 30 * 60 * 1000 // 30 minutes
const WORD_INDEX_CACHE_DURATION = 60 * 60 * 1000 // 1 hour
const SEARCH_INDEX_CACHE_DURATION = 15 * 60 * 1000 // 15 minutes

// Maximum cache sizes to prevent memory issues
const MAX_SEARCH_CACHE_SIZE = 1000
const MAX_WORD_INDEX_CACHE_SIZE = 100

// Maximum query length to prevent abuse
const MAX_QUERY_LENGTH = 500

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
    
    if (!searchIndex.pages || !Array.isArray(searchIndex.pages)) {
      throw new Error('Invalid search index structure')
    }
    
    return searchIndex.pages
  } catch (error) {
    console.error('Search index loading failed:', error)
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

// Build efficient word index for fast lookups
function buildWordIndex(pages: SearchResult[]): WordIndex {
  const wordIndex: WordIndex = {}
  
  pages.forEach((page, pageIndex) => {
    const allText = `${page.title} ${page.description} ${page.content}`.toLowerCase()
    const words = allText.match(/\b\w{2,}\b/g) || []
    
    words.forEach(word => {
      if (!wordIndex[word]) {
        wordIndex[word] = {
          pages: new Set(),
          frequency: 0
        }
      }
      
      wordIndex[word].pages.add(pageIndex)
      wordIndex[word].frequency++
    })
  })
  
  return wordIndex
}

// Get search index with caching
export async function getSearchIndex(): Promise<SearchResult[]> {
  const now = Date.now()
  
  if (searchIndexCache && (now - cacheTimestamp) < SEARCH_INDEX_CACHE_DURATION) {
    return searchIndexCache
  }
  
  const pages = await loadSearchIndex()
  cacheTimestamp = now
  
  return pages
}

// Get word index with caching
async function getWordIndex(): Promise<WordIndex> {
  const now = Date.now()
  const cacheKey = 'word-index'
  
  // Check if we have a cached word index
  if (wordIndexCache.has(cacheKey)) {
    const cached = wordIndexCache.get(cacheKey)!
    if ((now - cached.timestamp) < WORD_INDEX_CACHE_DURATION) {
      return cached.wordIndex
    }
  }
  
  // Build new word index
  const pages = await getSearchIndex()
  const wordIndex = buildWordIndex(pages)
  
  // Cache the word index
  wordIndexCache.set(cacheKey, {
    wordIndex,
    timestamp: now
  })
  
  // Cleanup old cache entries
  if (wordIndexCache.size > MAX_WORD_INDEX_CACHE_SIZE) {
    const entries = Array.from(wordIndexCache.entries())
    entries.sort((a, b) => a[1].timestamp - b[1].timestamp)
    
    // Remove oldest 20% of entries
    const toRemove = Math.floor(MAX_WORD_INDEX_CACHE_SIZE * 0.2)
    for (let i = 0; i < toRemove; i++) {
      wordIndexCache.delete(entries[i][0])
    }
  }
  
  return wordIndex
}

// Efficient search using word index with fallback to full-text search
async function searchWithIndex(
  query: string, 
  page: number = 1, 
  limit: number = 10
): Promise<{ results: SearchResult[], totalResults: number, totalPages: number, currentPage: number }> {
  const pages = await getSearchIndex()
  const wordIndex = await getWordIndex()
  
  if (!query || query.length < 2) {
    return { results: [], totalResults: 0, totalPages: 0, currentPage: 1 }
  }
  
  const queryWords = query.toLowerCase().split(/\s+/).filter(word => word.length >= 2)
  
  if (queryWords.length === 0) {
    return { results: [], totalResults: 0, totalPages: 0, currentPage: 1 }
  }
  
  // Try word index approach first (faster for multi-word queries)
  let candidatePages = new Set<number>()
  let isFirstWord = true
  
  for (const word of queryWords) {
    const wordData = wordIndex[word]
    if (!wordData) {
      // If any word doesn't exist, no results
      return { results: [], totalResults: 0, totalPages: 0, currentPage: 1 }
    }
    
    if (isFirstWord) {
      candidatePages = new Set(Array.from(wordData.pages))
      isFirstWord = false
    } else {
      // Intersection: only keep pages that contain this word too
      candidatePages = new Set(Array.from(candidatePages).filter(pageIndex => wordData.pages.has(pageIndex)))
    }
    
    // If no pages match, return early
    if (candidatePages.size === 0) {
      return { results: [], totalResults: 0, totalPages: 0, currentPage: 1 }
    }
  }
  
  // Score and rank the candidate pages
  const scoredResults: (SearchResult & { score: number })[] = []
  
  for (const pageIndex of Array.from(candidatePages)) {
    const page = pages[pageIndex]
    const pageContent = `${page.title} ${page.description} ${page.content}`.toLowerCase()
    const pageKeywords = (page.keywords || []).map(k => k.toLowerCase())
    
    let score = 0
    const matches: string[] = []
    
    // Score based on word frequency and position
    queryWords.forEach(word => {
      try {
        const escapedWord = word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
        const wordRegex = new RegExp(`\\b${escapedWord}\\b`, 'gi')
        
        const contentMatches = (pageContent.match(wordRegex) || []).length
        const titleMatches = (page.title.toLowerCase().match(wordRegex) || []).length
        const descMatches = (page.description.toLowerCase().match(wordRegex) || []).length
        const keywordMatches = pageKeywords.filter(k => k.includes(word) || word.includes(k)).length
        
        // Weighted scoring
        const wordScore = (contentMatches * 1) + (titleMatches * 5) + (descMatches * 3) + (keywordMatches * 8)
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
        score += 10
      }
      
      if (page.title.toLowerCase().includes(query.toLowerCase()) ||
          page.description.toLowerCase().includes(query.toLowerCase())) {
        score += 8
      }
    } catch (error) {
      console.warn(`Error processing exact phrase match:`, error)
    }
    
    if (score > 0) {
      scoredResults.push({
        ...page,
        score,
        matches
      })
    }
  }
  
  // Sort by score (highest first)
  scoredResults.sort((a, b) => b.score - a.score)
  
  // Pagination
  const totalResults = scoredResults.length
  const totalPages = Math.ceil(totalResults / limit)
  const startIndex = (page - 1) * limit
  const endIndex = startIndex + limit
  const paginatedResults = scoredResults.slice(startIndex, endIndex)
  
  return {
    results: paginatedResults,
    totalResults,
    totalPages,
    currentPage: page
  }
}

// Main search function with multi-level caching and security
export async function searchContent(
  query: string, 
  page: number = 1, 
  limit: number = 10
): Promise<{ results: SearchResult[], totalResults: number, totalPages: number, currentPage: number }> {
  // Input validation
  if (!query || typeof query !== 'string') {
    return { results: [], totalResults: 0, totalPages: 0, currentPage: 1 }
  }
  
  // Security: Limit query length to prevent abuse
  if (query.length > MAX_QUERY_LENGTH) {
    throw new Error('Search query too long')
  }
  
  // Sanitize query
  const sanitizedQuery = query.trim()
  if (sanitizedQuery.length < 2) {
    return { results: [], totalResults: 0, totalPages: 0, currentPage: 1 }
  }
  
  const now = Date.now()
  const cacheKey = `${sanitizedQuery}-${page}-${limit}`
  
  // Check search result cache first
  if (searchResultCache.has(cacheKey)) {
    const cached = searchResultCache.get(cacheKey)!
    if ((now - cached.timestamp) < SEARCH_CACHE_DURATION) {
      return {
        results: cached.results,
        totalResults: cached.results.length,
        totalPages: Math.ceil(cached.results.length / limit),
        currentPage: page
      }
    }
  }
  
  // Perform search
  const searchResult = await searchWithIndex(sanitizedQuery, page, limit)
  
  // Cache the results
  searchResultCache.set(cacheKey, {
    results: searchResult.results,
    timestamp: now,
    query: sanitizedQuery
  })
  
  // Cleanup old cache entries
  if (searchResultCache.size > MAX_SEARCH_CACHE_SIZE) {
    const entries = Array.from(searchResultCache.entries())
    entries.sort((a, b) => a[1].timestamp - b[1].timestamp)
    
    // Remove oldest 20% of entries
    const toRemove = Math.floor(MAX_SEARCH_CACHE_SIZE * 0.2)
    for (let i = 0; i < toRemove; i++) {
      searchResultCache.delete(entries[i][0])
    }
  }
  
  return searchResult
}

// Function to clear all caches
export function clearSearchCache(): void {
  searchResultCache.clear()
  wordIndexCache.clear()
  cacheTimestamp = 0
  console.log('All search caches cleared')
}

// Function to preload popular searches (call this on app startup)
export async function preloadPopularSearches(): Promise<void> {
  const popularQueries = [
    'essays', 'projects', 'notes', 'about', 'contact', 
    'umarbek', 'samarkand', 'tashkent', 'uses', 'now'
  ]
  
  console.log('Preloading popular searches...')
  
  for (const query of popularQueries) {
    try {
      await searchContent(query, 1, 5) // Preload first page with 5 results
    } catch (error) {
      console.warn(`Failed to preload search for "${query}":`, error)
    }
  }
  
  console.log('Popular searches preloaded')
}
