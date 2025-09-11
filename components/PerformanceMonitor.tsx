'use client'

import { useEffect } from 'react'
import { trackPageLoad, trackUserAction } from '@/lib/monitoring'

interface PerformanceMonitorProps {
  pageName: string
}

export default function PerformanceMonitor({ pageName }: PerformanceMonitorProps) {
  useEffect(() => {
    // Track page load performance
    const handleLoad = () => {
      const loadTime = performance.now()
      trackPageLoad(pageName, loadTime)
    }

    // Track when page is fully loaded
    if (document.readyState === 'complete') {
      handleLoad()
    } else {
      window.addEventListener('load', handleLoad)
    }

    // Track user interactions
    const trackInteraction = (event: Event) => {
      const target = event.target as HTMLElement
      if (target) {
        const action = target.getAttribute('data-track') || 
                     target.tagName.toLowerCase() || 
                     'unknown'
        trackUserAction(action, {
          page: pageName,
          element: target.tagName,
          className: target.className
        })
      }
    }

    // Add event listeners for common interactions
    document.addEventListener('click', trackInteraction)
    document.addEventListener('submit', trackInteraction)

    // Track scroll depth
    let maxScrollDepth = 0
    const trackScroll = () => {
      const scrollDepth = Math.round(
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      )
      if (scrollDepth > maxScrollDepth) {
        maxScrollDepth = scrollDepth
        if (maxScrollDepth % 25 === 0) { // Track at 25%, 50%, 75%, 100%
          trackUserAction('scroll_depth', {
            page: pageName,
            depth: maxScrollDepth
          })
        }
      }
    }

    window.addEventListener('scroll', trackScroll, { passive: true })

    // Cleanup
    return () => {
      window.removeEventListener('load', handleLoad)
      document.removeEventListener('click', trackInteraction)
      document.removeEventListener('submit', trackInteraction)
      window.removeEventListener('scroll', trackScroll)
    }
  }, [pageName])

  return null
}
