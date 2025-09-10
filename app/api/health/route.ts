import { NextResponse } from 'next/server'
import { createHealthStatus } from '@/lib/robustness'
import { discoverNotes } from '@/lib/noteDiscovery'
import { getSearchIndex } from '@/lib/search'

export async function GET() {
  try {
    const healthStatus = createHealthStatus();
    
    // Check notes system
    try {
      const notes = discoverNotes();
      healthStatus.metrics.notesCount = notes.length;
      healthStatus.checks.filesystem = notes.length > 0;
    } catch (error) {
      console.error('Notes system check failed:', error);
      healthStatus.checks.filesystem = false;
      healthStatus.status = 'degraded';
    }

    // Check search system
    try {
      const searchIndex = getSearchIndex();
      healthStatus.metrics.cacheSize = searchIndex.length;
      healthStatus.checks.search = searchIndex.length > 0;
    } catch (error) {
      console.error('Search system check failed:', error);
      healthStatus.checks.search = false;
      healthStatus.status = 'degraded';
    }

    // Determine overall status
    const allChecksPass = Object.values(healthStatus.checks).every(check => check);
    if (!allChecksPass) {
      healthStatus.status = healthStatus.checks.memory ? 'degraded' : 'unhealthy';
    }

    const statusCode = healthStatus.status === 'healthy' ? 200 : 
                      healthStatus.status === 'degraded' ? 200 : 503;

    return NextResponse.json(healthStatus, { status: statusCode });
  } catch (error) {
    console.error('Health check failed:', error);
    
    return NextResponse.json({
      status: 'unhealthy',
      timestamp: Date.now(),
      error: 'Health check failed',
      checks: {
        memory: false,
        cache: false,
        filesystem: false,
        search: false
      },
      metrics: {
        memoryUsage: 0,
        cacheSize: 0,
        notesCount: 0
      }
    }, { status: 503 });
  }
}
