import { NextResponse } from 'next/server'
import { getHealthMetrics } from '@/lib/monitoring'
import cache from '@/lib/cache'

export async function GET() {
  try {
    const startTime = Date.now()
    
    // Get monitoring data
    const monitoringData = getHealthMetrics()
    
    // Test cache functionality
    const testKey = 'health_check_test'
    const testValue = 'test'
    cache.set(testKey, testValue, 1000)
    const cacheWorking = cache.get(testKey) === testValue
    cache.delete(testKey)
    
    // Calculate response time
    const responseTime = Date.now() - startTime
    
    const healthData = {
      status: 'healthy',
      timestamp: new Date().toISOString(),
      uptime: monitoringData.uptime,
      responseTime,
      cache: {
        type: 'memory',
        working: cacheWorking
      },
      monitoring: {
        errors: monitoringData.errors,
        performance: monitoringData.performance,
        memoryUsage: monitoringData.memoryUsage
      },
      version: process.env.npm_package_version || '1.0.0',
      environment: process.env.NODE_ENV || 'development'
    }

    // Determine if system is healthy
    const isHealthy = 
      monitoringData.errors.recent < 10 && // Less than 10 errors in last hour
      monitoringData.performance.avgResponseTime < 1000 && // Average response time under 1s
      monitoringData.memoryUsage ? monitoringData.memoryUsage.heapUsed < 100 * 1024 * 1024 : true // Less than 100MB heap

    return NextResponse.json(healthData, { 
      status: isHealthy ? 200 : 503,
      headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0'
      }
    })
  } catch (error) {
    console.error('Health check failed:', error)
    
    return NextResponse.json({
      status: 'unhealthy',
      error: 'Health check failed',
      timestamp: new Date().toISOString()
    }, { status: 500 })
  }
}

// Force dynamic rendering for this route
export const dynamic = 'force-dynamic'
