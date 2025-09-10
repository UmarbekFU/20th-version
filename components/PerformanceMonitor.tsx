'use client';

import { useEffect } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage?: number;
}

export function PerformanceMonitor() {
  useEffect(() => {
    // Only run in development
    if (process.env.NODE_ENV !== 'development') return;

    const startTime = performance.now();
    
    // Monitor page load performance
    const handleLoad = () => {
      const loadTime = performance.now() - startTime;
      console.log(`🚀 Page loaded in ${loadTime.toFixed(2)}ms`);
      
      // Log memory usage if available
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        console.log(`💾 Memory usage: ${(memory.usedJSHeapSize / 1024 / 1024).toFixed(2)}MB`);
      }
    };

    // Monitor render performance
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'measure') {
          console.log(`⏱️ ${entry.name}: ${entry.duration.toFixed(2)}ms`);
        }
      }
    });

    observer.observe({ entryTypes: ['measure'] });

    // Monitor long tasks
    const longTaskObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        console.warn(`⚠️ Long task detected: ${entry.duration.toFixed(2)}ms`);
      }
    });

    longTaskObserver.observe({ entryTypes: ['longtask'] });

    // Cleanup
    return () => {
      observer.disconnect();
      longTaskObserver.disconnect();
    };
  }, []);

  return null;
}
