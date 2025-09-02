import { NextRequest, NextResponse } from 'next/server'

const pages = [
  '/essays', '/projects', '/notes', '/ai', '/list', '/uses', '/scrapbook',
  '/photos', '/impossible', '/naq', '/tweets', '/questions', '/lc',
  '/yr', '/secret', '/disclaimer', '/contact', '/about', '/now', '/more'
]

export async function GET(request: NextRequest) {
  const randomPage = pages[Math.floor(Math.random() * pages.length)]
  return NextResponse.redirect(new URL(randomPage, request.url))
}
