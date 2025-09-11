// Simple monitoring utilities for production robustness
// In production, integrate with services like Sentry, LogRocket, or DataDog

interface LogLevel {
  ERROR: 'error'
  WARN: 'warn'
  INFO: 'info'
  DEBUG: 'debug'
}

const LOG_LEVELS: LogLevel = {
  ERROR: 'error',
  WARN: 'warn',
  INFO: 'info',
  DEBUG: 'debug'
}

interface LogEntry {
  level: string
  message: string
  timestamp: string
  context?: Record<string, any>
  error?: Error
}

class Logger {
  private isDevelopment = process.env.NODE_ENV === 'development'
  private isProduction = process.env.NODE_ENV === 'production'

  private log(level: string, message: string, context?: Record<string, any>, error?: Error) {
    const logEntry: LogEntry = {
      level,
      message,
      timestamp: new Date().toISOString(),
      context,
      error
    }

    // In development, log to console
    if (this.isDevelopment) {
      const consoleMethod = level === 'error' ? 'error' : 
                           level === 'warn' ? 'warn' : 
                           level === 'info' ? 'info' : 'log'
      
      console[consoleMethod](`[${level.toUpperCase()}] ${message}`, context, error)
    }

    // In production, send to monitoring service
    if (this.isProduction) {
      this.sendToMonitoringService(logEntry)
    }
  }

  private sendToMonitoringService(logEntry: LogEntry) {
    // In a real application, you would send this to your monitoring service
    // Example integrations:
    
    // Sentry
    // if (logEntry.level === 'error' && logEntry.error) {
    //   Sentry.captureException(logEntry.error, { extra: logEntry.context })
    // }

    // Custom API endpoint
    // fetch('/api/logs', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(logEntry)
    // }).catch(() => {}) // Fail silently

    // For now, just store in localStorage for debugging
    if (typeof window !== 'undefined') {
      try {
        const logs = JSON.parse(localStorage.getItem('app_logs') || '[]')
        logs.push(logEntry)
        // Keep only last 100 logs
        if (logs.length > 100) {
          logs.splice(0, logs.length - 100)
        }
        localStorage.setItem('app_logs', JSON.stringify(logs))
      } catch (e) {
        // Fail silently
      }
    }
  }

  error(message: string, context?: Record<string, any>, error?: Error) {
    this.log(LOG_LEVELS.ERROR, message, context, error)
  }

  warn(message: string, context?: Record<string, any>) {
    this.log(LOG_LEVELS.WARN, message, context)
  }

  info(message: string, context?: Record<string, any>) {
    this.log(LOG_LEVELS.INFO, message, context)
  }

  debug(message: string, context?: Record<string, any>) {
    this.log(LOG_LEVELS.DEBUG, message, context)
  }
}

export const logger = new Logger()

// Performance monitoring
export function measurePerformance<T>(
  name: string,
  fn: () => T | Promise<T>
): T | Promise<T> {
  const start = performance.now()
  
  try {
    const result = fn()
    
    if (result instanceof Promise) {
      return result.then(
        (value) => {
          const duration = performance.now() - start
          logger.info(`Performance: ${name}`, { duration: `${duration.toFixed(2)}ms` })
          return value
        },
        (error) => {
          const duration = performance.now() - start
          logger.error(`Performance: ${name} failed`, { duration: `${duration.toFixed(2)}ms` }, error)
          throw error
        }
      )
    } else {
      const duration = performance.now() - start
      logger.info(`Performance: ${name}`, { duration: `${duration.toFixed(2)}ms` })
      return result
    }
  } catch (error) {
    const duration = performance.now() - start
    logger.error(`Performance: ${name} failed`, { duration: `${duration.toFixed(2)}ms` }, error as Error)
    throw error
  }
}

// Error boundary helper
export function captureError(error: Error, context?: Record<string, any>) {
  logger.error('Application error', context, error)
}

// User interaction tracking (privacy-friendly)
export function trackUserAction(action: string, context?: Record<string, any>) {
  logger.info(`User action: ${action}`, context)
}

// Page load monitoring
export function trackPageLoad(page: string, loadTime: number) {
  logger.info(`Page load: ${page}`, { loadTime: `${loadTime.toFixed(2)}ms` })
}

// API call monitoring
export function trackApiCall(endpoint: string, method: string, status: number, duration: number) {
  const level = status >= 400 ? 'error' : 'info'
  logger[level](`API call: ${method} ${endpoint}`, { 
    status, 
    duration: `${duration.toFixed(2)}ms` 
  })
}
