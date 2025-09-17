import { NextResponse } from 'next/server'
import cache from '@/lib/cache'

export async function GET() {
  try {
    // Simple cache health check - just verify cache is accessible
    const testKey = 'health_check_test'
    const testValue = 'test'
    
    cache.set(testKey, testValue, 1000) // 1 second TTL
    const retrieved = cache.get(testKey)
    cache.delete(testKey)
    
    if (retrieved !== testValue) {
      throw new Error('Cache read/write test failed')
    }
    
    return NextResponse.json({
      status: 'healthy',
      cache: {
        type: 'memory',
        accessible: true
      },
      timestamp: new Date().toISOString()
    })
  } catch (error) {
    console.error('Cache health check failed:', error)
    
    return NextResponse.json({
      status: 'unhealthy',
      error: 'Cache health check failed',
      timestamp: new Date().toISOString()
    }, { status: 500 })
  }
}

// Force dynamic rendering for this route
export const dynamic = 'force-dynamic'
