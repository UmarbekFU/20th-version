import { NextResponse } from 'next/server'

const pages = [
  '/essays', '/projects', '/notes', '/ai', '/list', '/uses', '/scrapbook',
  '/photos', '/impossible', '/naq', '/tweets', '/questions', '/lc',
  '/yr', '/secret', '/disclaimer', '/contact', '/about', '/now', '/more'
]

export async function GET() {
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
