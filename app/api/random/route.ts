import { NextRequest, NextResponse } from 'next/server'

// Simple in-memory rate limiting
const rateLimitMap = new Map<string, { count: number; resetTime: number }>()
const RATE_LIMIT_WINDOW = 60 * 1000 // 1 minute
const RATE_LIMIT_MAX_REQUESTS = 20 // 20 requests per minute

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const userLimit = rateLimitMap.get(ip)
  
  if (!userLimit || now > userLimit.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW })
    return true
  }
  
  if (userLimit.count >= RATE_LIMIT_MAX_REQUESTS) {
    return false
  }
  
  userLimit.count++
  return true
}

const pages = [
  '/essays', '/projects', '/notes', '/ai', '/list', '/uses', '/scrapbook',
  '/photos', '/impossible', '/naq', '/tweets', '/questions', '/lc',
  '/yr', '/secret', '/disclaimer', '/contact', '/about', '/now', '/more'
]

export async function GET(request: NextRequest) {
  try {
    // Rate limiting
    const ip = request.ip || request.headers.get('x-forwarded-for') || 'unknown'
    if (!checkRateLimit(ip)) {
      return NextResponse.json({ 
        error: 'Too many requests. Please try again later.' 
      }, { status: 429 })
    }
    // Validate that we have pages to choose from
    if (!Array.isArray(pages) || pages.length === 0) {
      console.error('Pages array is invalid or empty:', pages)
      return NextResponse.json(
        { error: 'No pages available for random selection' },
        { status: 500 }
      )
    }

    // Validate all pages are strings and non-empty
    const validPages = pages.filter(page => 
      typeof page === 'string' && 
      page.trim().length > 0 && 
      page.startsWith('/')
    )

    if (validPages.length === 0) {
      console.error('No valid pages found in pages array:', pages)
      return NextResponse.json(
        { error: 'No valid pages available for random selection' },
        { status: 500 }
      )
    }

    // Generate random page selection
    const randomIndex = Math.floor(Math.random() * validPages.length)
    const randomPage = validPages[randomIndex]

    // Validate the selected page
    if (!randomPage || typeof randomPage !== 'string') {
      console.error('Invalid page selected:', randomPage)
      return NextResponse.json(
        { error: 'Invalid page selected' },
        { status: 500 }
      )
    }

    // Return the page path instead of redirecting
    // This allows the client to handle the navigation
    return NextResponse.json({
      page: randomPage,
      success: true
    })
    
  } catch (error) {
    console.error('Random API error:', error)
    
    return NextResponse.json(
      { error: 'Unable to select random page' },
      { status: 500 }
    )
  }
}
