import { NextRequest, NextResponse } from 'next/server'

const pages = [
  '/essays', '/projects', '/notes', '/ai', '/list', '/uses', '/scrapbook',
  '/photos', '/impossible', '/naq', '/tweets', '/questions', '/lc',
  '/yr', '/secret', '/disclaimer', '/contact', '/about', '/now', '/more'
]

export async function GET(request: NextRequest) {
  try {
    // Validate that we have pages to choose from
    if (!pages || pages.length === 0) {
      return NextResponse.json(
        { error: 'No pages available for random selection' },
        { status: 500 }
      )
    }

    // Generate random page selection
    const randomIndex = Math.floor(Math.random() * pages.length)
    const randomPage = pages[randomIndex]

    // Validate the selected page
    if (!randomPage) {
      return NextResponse.json(
        { error: 'Invalid page selected' },
        { status: 500 }
      )
    }

    // Create redirect URL
    const redirectUrl = new URL(randomPage, request.url)
    
    return NextResponse.redirect(redirectUrl)
    
  } catch (error) {
    console.error('Random API error:', error)
    
    // Fallback to home page if something goes wrong
    try {
      return NextResponse.redirect(new URL('/', request.url))
    } catch (fallbackError) {
      console.error('Fallback redirect failed:', fallbackError)
      return NextResponse.json(
        { error: 'Unable to redirect to random page' },
        { status: 500 }
      )
    }
  }
}
