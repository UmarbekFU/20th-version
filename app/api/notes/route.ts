import { NextRequest, NextResponse } from 'next/server'
import { getNotesByCategory } from '@/lib/noteDiscovery'
import { RateLimiter } from '@/lib/robustness'

// Rate limiter for notes API
const notesLimiter = new RateLimiter(50, 60000); // 50 requests per minute

export async function GET(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const clientIP = request.ip || 
                    request.headers.get('x-forwarded-for') || 
                    request.headers.get('x-real-ip') || 
                    'unknown';

    // Check rate limit
    if (!notesLimiter.isAllowed(clientIP)) {
      return NextResponse.json({ 
        error: 'Rate limit exceeded. Please try again later.',
        notes: [],
        total: 0,
        hasMore: false,
        retryAfter: 60
      }, { status: 429 })
    }

    const { searchParams } = new URL(request.url)
    const category = searchParams.get('category') as 'book' | 'podcast' | 'course' | null
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '20')

    // Input validation
    if (!category || !['book', 'podcast', 'course'].includes(category)) {
      return NextResponse.json({ 
        error: 'Invalid category. Must be book, podcast, or course.',
        notes: [],
        total: 0,
        hasMore: false
      }, { status: 400 })
    }

    if (page < 1 || limit < 1 || limit > 100) {
      return NextResponse.json({ 
        error: 'Invalid pagination parameters. Page must be >= 1, limit must be 1-100.',
        notes: [],
        total: 0,
        hasMore: false
      }, { status: 400 })
    }

    // Get paginated notes
    const result = getNotesByCategory(category, page, limit)
    
    return NextResponse.json({
      notes: result.notes,
      total: result.total,
      hasMore: result.hasMore,
      page,
      limit,
      category,
      error: null
    })

  } catch (error) {
    console.error('Notes API error:', error)
    
    return NextResponse.json({
      notes: [],
      total: 0,
      hasMore: false,
      error: 'Failed to fetch notes. Please try again later.',
      page: 1,
      limit: 20,
      category: null
    }, { status: 500 })
  }
}
