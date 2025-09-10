import { NextRequest, NextResponse } from 'next/server'
import { RateLimiter } from '@/lib/robustness'
import { MemoryMonitor } from '@/lib/robustness'

// Rate limiter for metrics endpoint
const metricsLimiter = new RateLimiter(10, 60000); // 10 requests per minute

export async function GET(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const clientIP = request.ip || 
                    request.headers.get('x-forwarded-for') || 
                    request.headers.get('x-real-ip') || 
                    'unknown';

    // Check rate limit
    if (!metricsLimiter.isAllowed(clientIP)) {
      return NextResponse.json({
        error: 'Rate limit exceeded',
        retryAfter: 60
      }, { status: 429 });
    }

    const memoryMonitor = MemoryMonitor.getInstance();
    const memoryUsage = memoryMonitor.getMemoryUsage();

    // Get additional metrics
    const metrics = {
      timestamp: Date.now(),
      memory: memoryUsage,
      uptime: process.uptime(),
      nodeVersion: process.version,
      platform: process.platform,
      arch: process.arch,
      pid: process.pid,
      environment: process.env.NODE_ENV,
      // Add more metrics as needed
      requests: {
        total: 0, // Would be tracked by a request counter
        errors: 0, // Would be tracked by an error counter
      },
      cache: {
        hitRate: 0, // Would be tracked by cache system
        size: 0, // Would be tracked by cache system
      }
    };

    return NextResponse.json(metrics);
  } catch (error) {
    console.error('Metrics collection failed:', error);
    
    return NextResponse.json({
      error: 'Failed to collect metrics',
      timestamp: Date.now()
    }, { status: 500 });
  }
}
