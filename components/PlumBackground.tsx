'use client'

import { useEffect, useRef } from 'react'

/**
 * Plum Background Component
 * 
 * Creates an animated organic tree-like pattern using HTML5 Canvas.
 * Features:
 * - Procedural generation of branching patterns
 * - Responsive to window resize events
 * - Performance optimized with requestAnimationFrame
 * - Subtle animation with randomized timing
 * - Print-friendly (hidden in print mode)
 * - Masked with radial gradient for subtle effect
 * 
 * The animation creates a fractal-like tree structure that grows organically
 * from the edges of the screen, providing a subtle background effect.
 * 
 * @returns JSX.Element
 */
export default function PlumBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Canvas setup
    const width = window.innerWidth
    const height = window.innerHeight
    canvas.width = width
    canvas.height = height
    canvas.style.width = `${width}px`
    canvas.style.height = `${height}px`

    // Constants
    const R180 = Math.PI
    const R90 = Math.PI / 2
    const R15 = Math.PI / 12
    const COLOR = '#88888825'
    const THRESHOLD = 30
    const LEN = 6
    const INTERVAL = 1000 / 40

    let pendingSteps: (() => void)[] = []
    let lastTime = performance.now()
    let rafId: number | null = null

    // Utility functions
    const random = () => Math.random()
    const randomMiddle = () => random() * 0.6 + 0.2

    function polar2cart(x: number, y: number, r: number, theta: number) {
      const dx = r * Math.cos(theta)
      const dy = r * Math.sin(theta)
      return [x + dx, y + dy]
    }

    // Drawing function
    const step = (
      x: number,
      y: number,
      rad: number,
      counter: { value: number } = { value: 0 }
    ) => {
      // Drawing a branch
      const length = random() * LEN
      const [nx, ny] = polar2cart(x, y, length, rad)
      
      ctx.beginPath()
      ctx.moveTo(x, y)
      ctx.lineTo(nx, ny)
      ctx.stroke()
      counter.value += 1

      // Out of bounds then return
      if (nx < -100 || nx > width + 100 || ny < -100 || ny > height + 100)
        return

      // Otherwise continue drawing
      const rad1 = rad + random() * R15
      const rad2 = rad - random() * R15
      const rate = counter.value <= THRESHOLD ? 0.8 : 0.5
      
      // Left branch
      if (random() < rate)
        pendingSteps.push(() => step(nx, ny, rad1, counter))
      // Right branch
      if (random() < rate)
        pendingSteps.push(() => step(nx, ny, rad2, counter))
    }

    // Animation frame
    const frame = () => {
      const now = performance.now()
      if (now - lastTime < INTERVAL) return
      lastTime = now

      const steps: (() => void)[] = []
      // 50% chance to keep the step for the next frame, to create a more organic look
      pendingSteps = pendingSteps.filter((i) => {
        if (Math.random() > 0.5) {
          steps.push(i)
          return false
        }
        return true
      })
      steps.forEach((fn) => fn())
    }

    // Start animation loop
    const startFrame = () => {
      rafId = requestAnimationFrame(() => {
        // If the condition is satisfied then continue, otherwise cancel the animation loop
        if (pendingSteps.length) {
          frame()
          startFrame()
        } else {
          if (rafId) {
            cancelAnimationFrame(rafId)
            rafId = null
          }
        }
      })
    }

    // Start drawing
    const start = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      pendingSteps = [
        () => step(randomMiddle() * width, -5, R90),
        () => step(randomMiddle() * width, height + 5, -R90),
        () => step(-5, randomMiddle() * height, 0),
        () => step(width + 5, randomMiddle() * height, R180),
      ]
      
      if (width < 640) pendingSteps = pendingSteps.slice(0, 2)

      startFrame()
    }

    // Setup canvas
    ctx.lineWidth = 1
    ctx.strokeStyle = COLOR

    // Start animation
    start()

    // Handle resize
    const handleResize = () => {
      const newWidth = window.innerWidth
      const newHeight = window.innerHeight
      
      canvas.width = newWidth
      canvas.height = newHeight
      canvas.style.width = `${newWidth}px`
      canvas.style.height = `${newHeight}px`
      
      // Restart animation with new dimensions
      if (rafId) {
        cancelAnimationFrame(rafId)
        rafId = null
      }
      start()
    }

    window.addEventListener('resize', handleResize)

    // Cleanup
    return () => {
      if (rafId) {
        cancelAnimationFrame(rafId)
      }
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div 
      className="fixed inset-0 z-[-1] pointer-events-none print:hidden"
      style={{
        maskImage: 'radial-gradient(circle, transparent, black)',
        WebkitMaskImage: 'radial-gradient(circle, transparent, black)'
      }}
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full"
      />
    </div>
  )
}
