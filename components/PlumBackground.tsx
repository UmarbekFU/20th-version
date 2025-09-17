'use client'

import { useEffect, useRef } from 'react'

/**
 * Simplified Plum Background Component
 * 
 * Creates a subtle animated background pattern using CSS and minimal JavaScript.
 * Features:
 * - Lightweight CSS-based animation
 * - Responsive design
 * - Performance optimized
 * - Print-friendly (hidden in print mode)
 * 
 * @returns JSX.Element
 */
export default function PlumBackground() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Simple resize handler for responsive design
    const handleResize = () => {
      if (containerRef.current) {
        // Force re-render on resize if needed
        containerRef.current.style.transform = 'scale(1)'
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 -z-10 overflow-hidden print:hidden plum-background"
    >
      <div className="absolute inset-0 opacity-30 plum-pattern" />
    </div>
  )
}