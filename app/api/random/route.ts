import { NextResponse } from 'next/server'

const pages = [
  '/essays', '/projects', '/notes', '/ai', '/list', '/uses', '/scrapbook',
  '/photos', '/impossible', '/naq', '/tweets', '/questions', '/lc',
  '/yr', '/secret', '/disclaimer', '/contact', '/about', '/now', '/more'
]

export async function GET() {
  try {
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
