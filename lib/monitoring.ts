// Simple monitoring and error tracking system
// In production, integrate with services like Sentry, DataDog, or New Relic

interface ErrorReport {
  message: string
  stack?: string
  timestamp: string
  url?: string
  userAgent?: string
  userId?: string
  context?: Record<string, any>
}

interface PerformanceMetric {
  name: string
  value: number
  timestamp: string
  tags?: Record<string, string>
}

interface ApiMetric {
  endpoint: string
  method: string
  statusCode: number
  responseTime: number
  timestamp: string
  userAgent?: string
}

class MonitoringService {
  private errors: ErrorReport[] = []
  private metrics: PerformanceMetric[] = []
  private apiMetrics: ApiMetric[] = []
  private maxEntries = 1000 // Prevent memory explosion

  // Error tracking
  reportError(error: Error, context?: Record<string, any>): void {
    const errorReport: ErrorReport = {
      message: error.message,
      stack: error.stack,
      timestamp: new Date().toISOString(),
      url: typeof window !== 'undefined' ? window.location.href : undefined,
      userAgent: typeof window !== 'undefined' ? window.navigator.userAgent : undefined,
      context
    }

    this.errors.push(errorReport)
    
    // Keep only recent errors
    if (this.errors.length > this.maxEntries) {
      this.errors = this.errors.slice(-this.maxEntries)
    }

    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error reported:', errorReport)
    }

    // In production, send to external service
    if (process.env.NODE_ENV === 'production') {
      this.sendErrorToService(errorReport)
    }
  }

  // Performance metrics
  recordMetric(name: string, value: number, tags?: Record<string, string>): void {
    const metric: PerformanceMetric = {
      name,
      value,
      timestamp: new Date().toISOString(),
      tags
    }

    this.metrics.push(metric)
    
    // Keep only recent metrics
    if (this.metrics.length > this.maxEntries) {
      this.metrics = this.metrics.slice(-this.maxEntries)
    }
  }

  // API metrics
  recordApiCall(endpoint: string, method: string, statusCode: number, responseTime: number): void {
    const apiMetric: ApiMetric = {
      endpoint,
      method,
      statusCode,
      responseTime,
      timestamp: new Date().toISOString(),
      userAgent: typeof window !== 'undefined' ? window.navigator.userAgent : undefined
    }

    this.apiMetrics.push(apiMetric)
    
    // Keep only recent API metrics
    if (this.apiMetrics.length > this.maxEntries) {
      this.apiMetrics = this.apiMetrics.slice(-this.maxEntries)
    }
  }

  // Get error statistics
  getErrorStats(): { total: number; recent: number; byType: Record<string, number> } {
    const now = new Date()
    const oneHourAgo = new Date(now.getTime() - 60 * 60 * 1000)
    
    const recent = this.errors.filter(error => 
      new Date(error.timestamp) > oneHourAgo
    ).length

    const byType: Record<string, number> = {}
    this.errors.forEach(error => {
      const type = error.message.split(':')[0] || 'Unknown'
      byType[type] = (byType[type] || 0) + 1
    })

    return {
      total: this.errors.length,
      recent,
      byType
    }
  }

  // Get performance statistics
  getPerformanceStats(): { avgResponseTime: number; slowestEndpoints: Array<{ endpoint: string; avgTime: number }> } {
    if (this.apiMetrics.length === 0) {
      return { avgResponseTime: 0, slowestEndpoints: [] }
    }

    const avgResponseTime = this.apiMetrics.reduce((sum, metric) => sum + metric.responseTime, 0) / this.apiMetrics.length

    // Group by endpoint and calculate averages
    const endpointTimes: Record<string, number[]> = {}
    this.apiMetrics.forEach(metric => {
      if (!endpointTimes[metric.endpoint]) {
        endpointTimes[metric.endpoint] = []
      }
      endpointTimes[metric.endpoint].push(metric.responseTime)
    })

    const slowestEndpoints = Object.entries(endpointTimes)
      .map(([endpoint, times]) => ({
        endpoint,
        avgTime: times.reduce((sum, time) => sum + time, 0) / times.length
      }))
      .sort((a, b) => b.avgTime - a.avgTime)
      .slice(0, 5)

    return { avgResponseTime, slowestEndpoints }
  }

  // Get all metrics for health check
  getHealthMetrics(): {
    errors: { total: number; recent: number; byType: Record<string, number> }
    performance: { avgResponseTime: number; slowestEndpoints: Array<{ endpoint: string; avgTime: number }> }
    uptime: number
    memoryUsage?: NodeJS.MemoryUsage
  } {
    return {
      errors: this.getErrorStats(),
      performance: this.getPerformanceStats(),
      uptime: process.uptime(),
      memoryUsage: process.memoryUsage ? process.memoryUsage() : undefined
    }
  }

  // Clear old data
  clearOldData(): void {
    const oneDayAgo = new Date(Date.now() - 24 * 60 * 60 * 1000)
    
    this.errors = this.errors.filter(error => 
      new Date(error.timestamp) > oneDayAgo
    )
    
    this.metrics = this.metrics.filter(metric => 
      new Date(metric.timestamp) > oneDayAgo
    )
    
    this.apiMetrics = this.apiMetrics.filter(metric => 
      new Date(metric.timestamp) > oneDayAgo
    )
  }

  // Send error to external service (placeholder)
  private sendErrorToService(errorReport: ErrorReport): void {
    // In production, integrate with your preferred error tracking service
    // Example: Sentry.captureException(error, { extra: errorReport })
    console.log('Would send error to external service:', errorReport.message)
  }
}

// Create singleton instance
const monitoring = new MonitoringService()

// Clean up old data every hour
if (typeof window === 'undefined') {
  setInterval(() => {
    monitoring.clearOldData()
  }, 60 * 60 * 1000) // 1 hour
}

export default monitoring

// Utility functions for easy use
export const reportError = (error: Error, context?: Record<string, any>) => {
  monitoring.reportError(error, context)
}

export const recordMetric = (name: string, value: number, tags?: Record<string, string>) => {
  monitoring.recordMetric(name, value, tags)
}

export const recordApiCall = (endpoint: string, method: string, statusCode: number, responseTime: number) => {
  monitoring.recordApiCall(endpoint, method, statusCode, responseTime)
}

export const getHealthMetrics = () => {
  return monitoring.getHealthMetrics()
}

