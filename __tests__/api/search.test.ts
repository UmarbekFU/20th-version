/**
 * Search API Tests
 * 
 * Tests for the search API endpoint functionality
 */

import { NextRequest } from 'next/server'
import { GET } from '@/app/api/search/route'

// Mock NextRequest
const createMockRequest = (query: string) => {
  const url = new URL('http://localhost:3000/api/search')
  url.searchParams.set('q', query)
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

describe('/api/search', () => {
  it('should return empty results for empty query', async () => {
    const request = createMockRequest('')
    const response = await GET(request)
    const data = await response.json()

    expect(response.status).toBe(200)
    expect(data.results).toEqual([])
    expect(data.totalResults).toBe(0)
    expect(data.error).toBeNull()
  })

  it('should return empty results for query too short', async () => {
    const request = createMockRequest('a')
    const response = await GET(request)
    const data = await response.json()

    expect(response.status).toBe(200)
    expect(data.results).toEqual([])
    expect(data.totalResults).toBe(0)
    expect(data.error).toBeNull()
  })

  it('should return results for valid query', async () => {
    const request = createMockRequest('essays')
    const response = await GET(request)
    const data = await response.json()

    expect(response.status).toBe(200)
    expect(data.results).toBeDefined()
    expect(Array.isArray(data.results)).toBe(true)
    expect(data.query).toBe('essays')
    expect(data.error).toBeNull()
  })

  it('should return results for multi-word query', async () => {
    const request = createMockRequest('atomic ideas')
    const response = await GET(request)
    const data = await response.json()

    expect(response.status).toBe(200)
    expect(data.results).toBeDefined()
    expect(Array.isArray(data.results)).toBe(true)
    expect(data.query).toBe('atomic ideas')
    expect(data.error).toBeNull()
  })

  it('should handle special characters in query', async () => {
    const request = createMockRequest('test@#$%')
    const response = await GET(request)
    const data = await response.json()

    expect(response.status).toBe(200)
    expect(data.results).toBeDefined()
    expect(Array.isArray(data.results)).toBe(true)
    expect(data.error).toBeNull()
  })

  it('should return results with correct structure', async () => {
    const request = createMockRequest('projects')
    const response = await GET(request)
    const data = await response.json()

    expect(response.status).toBe(200)
    expect(data.results).toBeDefined()
    expect(Array.isArray(data.results)).toBe(true)
    expect(data.totalResults).toBeDefined()
    expect(data.totalPages).toBeDefined()
    expect(data.currentPage).toBeDefined()
    
    // If there are results, check their structure
    if (data.results.length > 0) {
      const result = data.results[0]
      expect(result).toHaveProperty('path')
      expect(result).toHaveProperty('title')
      expect(result).toHaveProperty('description')
      expect(result).toHaveProperty('content')
      expect(result).toHaveProperty('score')
      expect(result).toHaveProperty('matches')
      expect(typeof result.score).toBe('number')
      expect(Array.isArray(result.matches)).toBe(true)
    }
  })

  it('should limit results to 10 items', async () => {
    const request = createMockRequest('a')
    const response = await GET(request)
    const data = await response.json()

    expect(response.status).toBe(200)
    expect(data.results.length).toBeLessThanOrEqual(10)
  })

  it('should sort results by score', async () => {
    const request = createMockRequest('umarbek')
    const response = await GET(request)
    const data = await response.json()

    expect(response.status).toBe(200)
    if (data.results.length > 1) {
      for (let i = 0; i < data.results.length - 1; i++) {
        expect(data.results[i].score).toBeGreaterThanOrEqual(data.results[i + 1].score)
      }
    }
  })

  it('should handle regex injection attempts safely', async () => {
    const maliciousQuery = 'test.*+?^${}()|[\\]'
    const request = createMockRequest(maliciousQuery)
    const response = await GET(request)
    const data = await response.json()

    expect(response.status).toBe(200)
    expect(data.results).toBeDefined()
    expect(Array.isArray(data.results)).toBe(true)
    expect(data.error).toBeNull()
    // Should not crash or return error due to regex injection
  })

  it('should handle empty query gracefully', async () => {
    const request = createMockRequest('')
    const response = await GET(request)
    const data = await response.json()

    expect(response.status).toBe(200)
    expect(data.results).toEqual([])
    expect(data.totalResults).toBe(0)
    expect(data.error).toBeNull()
  })

  it('should handle very long queries', async () => {
    const longQuery = 'a'.repeat(1000)
    const request = createMockRequest(longQuery)
    const response = await GET(request)
    const data = await response.json()

    expect(response.status).toBe(400)
    expect(data.results).toEqual([])
    expect(data.error).toBe('Search query too long')
  })
})
