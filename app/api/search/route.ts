import { NextRequest, NextResponse } from 'next/server'
import { searchContent, clearSearchCache } from '@/lib/search'
import { RateLimiter } from '@/lib/robustness'

// Rate limiter for search API
const searchLimiter = new RateLimiter(30, 60000); // 30 searches per minute

export async function GET(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const clientIP = request.ip || 
                    request.headers.get('x-forwarded-for') || 
                    request.headers.get('x-real-ip') || 
                    'unknown';

    // Check rate limit
    if (!searchLimiter.isAllowed(clientIP)) {
      return NextResponse.json({ 
        results: [], 
        query: '', 
        error: 'Rate limit exceeded. Please try again later.',
        totalResults: 0,
        retryAfter: 60
      }, { status: 429 })
    }

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

    // Prevent extremely long queries
    if (query.length > 100) {
      return NextResponse.json({ 
        results: [], 
        query: '', 
        error: 'Query too long. Maximum 100 characters.',
        totalResults: 0 
      }, { status: 400 })
    }

    // Clear cache if query is 'clear' (for development)
    if (query === 'clear') {
      clearSearchCache()
    }

    // Use dynamic search
    const results = searchContent(query)
    
    // Debug logging for Vercel
    console.log(`Search query: "${query}", Results count: ${results.length}`)
    console.log('Results paths:', results.map(r => r.path))

    return NextResponse.json({
      results,
      query,
      totalResults: results.length,
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
