import { NextRequest, NextResponse } from 'next/server'
import { searchContent } from '@/lib/search-optimized'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const query = searchParams.get('q')?.toLowerCase().trim()

    // Input validation and sanitization
    if (!query || query.length < 2) {
      return NextResponse.json({ 
        results: [], 
        query: query || '', 
        error: null,
        totalResults: 0 
      })
    }

    // Sanitize query to prevent injection attacks
    const sanitizedQuery = query.replace(/[<>\"'&]/g, (match) => {
      const escapeMap: { [key: string]: string } = {
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#x27;',
        '&': '&amp;'
      }
      return escapeMap[match] || match
    })

    if (sanitizedQuery !== query) {
      return NextResponse.json({ 
        results: [], 
        query: '', 
        error: 'Invalid characters in search query',
        totalResults: 0 
      }, { status: 400 })
    }

    // Get pagination parameters
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '10')
    
    // Validate pagination parameters
    if (page < 1 || limit < 1 || limit > 50) {
      return NextResponse.json({ 
        results: [], 
        query: '', 
        error: 'Invalid pagination parameters',
        totalResults: 0 
      }, { status: 400 })
    }

    // Use optimized search with pagination
    const searchResult = await searchContent(query, page, limit)
    
    // Debug logging for Vercel
    console.log(`Search query: "${query}", Page: ${page}, Results count: ${searchResult.results.length}`)
    console.log('Results paths:', searchResult.results.map(r => r.path))

    return NextResponse.json({
      results: searchResult.results,
      query,
      totalResults: searchResult.totalResults,
      totalPages: searchResult.totalPages,
      currentPage: searchResult.currentPage,
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

// Force dynamic rendering for this route
export const dynamic = 'force-dynamic'
