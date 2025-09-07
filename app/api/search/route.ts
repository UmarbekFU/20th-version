import { NextRequest, NextResponse } from 'next/server'
import { searchContent } from '@/lib/search'

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

    // Use dynamic search
    const results = searchContent(query)

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
