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
  it('should redirect to a valid page', async () => {
    const request = createMockRequest()
    const response = await GET(request)

    expect(response.status).toBe(307) // Temporary redirect
    expect(response.headers.get('location')).toBeDefined()
  })

  it('should redirect to a page from the allowed list', async () => {
    const request = createMockRequest()
    const response = await GET(request)
    
    const location = response.headers.get('location')
    expect(location).toBeDefined()
    
    // Extract path from full URL
    const url = new URL(location!)
    const path = url.pathname
    
    const allowedPages = [
      '/essays', '/projects', '/notes', '/ai', '/list', '/uses', '/scrapbook',
      '/photos', '/impossible', '/naq', '/tweets', '/questions', '/lc',
      '/yr', '/secret', '/disclaimer', '/contact', '/about', '/now', '/more'
    ]
    
    expect(allowedPages).toContain(path)
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

    responses.forEach(response => {
      expect(response.status).toBe(307)
      expect(response.headers.get('location')).toBeDefined()
    })
  })

  it('should have different redirects on multiple calls', async () => {
    const request = createMockRequest()
    
    const responses = await Promise.all([
      GET(request),
      GET(request),
      GET(request),
      GET(request),
      GET(request)
    ])

    const locations = responses.map(response => response.headers.get('location'))
    
    // At least one should be different (very high probability with 20+ pages)
    const uniqueLocations = new Set(locations)
    expect(uniqueLocations.size).toBeGreaterThan(1)
  })
})
