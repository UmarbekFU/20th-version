/**
 * Random API Tests
 * 
 * Tests for the random page redirect API endpoint
 */

import { NextRequest } from 'next/server'
import { GET } from '@/app/api/random/route'

// Mock NextRequest
const createMockRequest = () => {
  const url = new URL('http://localhost:3000/api/random')
  return new NextRequest(url)
}

// Mock the console methods to avoid noise in tests
const originalConsoleWarn = console.warn
const originalConsoleError = console.error

beforeAll(() => {
  console.warn = jest.fn()
  console.error = jest.fn()
})

afterAll(() => {
  console.warn = originalConsoleWarn
  console.error = originalConsoleError
})

describe('/api/random', () => {
  it('should return a valid page', async () => {
    const request = createMockRequest()
    const response = await GET(request)
    const data = await response.json()

    expect(response.status).toBe(200)
    expect(data.page).toBeDefined()
    expect(data.success).toBe(true)
  })

  it('should return a page from the allowed list', async () => {
    const request = createMockRequest()
    const response = await GET(request)
    const data = await response.json()
    
    const allowedPages = [
      '/essays', '/projects', '/notes', '/ai', '/list', '/uses', '/scrapbook',
      '/photos', '/impossible', '/naq', '/tweets', '/questions', '/lc',
      '/yr', '/secret', '/disclaimer', '/contact', '/about', '/now', '/more'
    ]
    
    expect(allowedPages).toContain(data.page)
  })

  it('should handle multiple requests without errors', async () => {
    const request = createMockRequest()
    
    // Make multiple requests to ensure randomness doesn't cause errors
    const responses = await Promise.all([
      GET(request),
      GET(request),
      GET(request),
      GET(request),
      GET(request)
    ])

    responses.forEach(async response => {
      expect(response.status).toBe(200)
      const data = await response.json()
      expect(data.page).toBeDefined()
      expect(data.success).toBe(true)
    })
  })

  it('should have different pages on multiple calls', async () => {
    const request = createMockRequest()
    
    const responses = await Promise.all([
      GET(request),
      GET(request),
      GET(request),
      GET(request),
      GET(request)
    ])

    const pages = await Promise.all(responses.map(async response => {
      const data = await response.json()
      return data.page
    }))
    
    // At least one should be different (very high probability with 20+ pages)
    const uniquePages = new Set(pages)
    expect(uniquePages.size).toBeGreaterThan(1)
  })
})
