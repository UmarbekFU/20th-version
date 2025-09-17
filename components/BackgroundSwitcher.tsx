'use client'

import { useEffect, useLayoutEffect, useRef, useState } from 'react'

export type BackgroundType = 'plum' | 'dot' | 'particle'

interface BackgroundSwitcherProps {
  type?: BackgroundType
  onTypeChange?: (type: BackgroundType) => void
}

export default function BackgroundSwitcher({ type, onTypeChange }: BackgroundSwitcherProps) {
  const [selectedType, setSelectedType] = useState<BackgroundType>('plum')
  const [isClient, setIsClient] = useState(false)

  // Use useLayoutEffect to ensure random selection happens before first paint
  useLayoutEffect(() => {
    setIsClient(true)
    
    // Randomly select background type only on page refresh
    const availableTypes: BackgroundType[] = ['plum', 'dot', 'particle']
    const randomType = availableTypes[Math.floor(Math.random() * availableTypes.length)]
    setSelectedType(randomType)
  }, [])

  // Always render the same thing on server and initial client render
  if (!isClient) {
    return <ServerBackground />
  }

  // Use the randomly selected type, or fallback to plum
  const backgroundType = type || selectedType

  switch (backgroundType) {
    case 'plum':
      return <PlumBackground />
    case 'dot':
      return <DotBackground />
    case 'particle':
      return <ParticleBackground />
    default:
      return <PlumBackground />
  }
}

// Server-side background (same on server and initial client render)
function ServerBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden print:hidden">
      <div className="absolute inset-0 opacity-30 bg-gradient-to-br from-purple-100 to-pink-100" />
    </div>
  )
}

// Plum background - EXACT copy from astro theme
function PlumBackground() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current || typeof window === 'undefined') return

    // Define the custom element exactly as in astro theme
    class BgPlumElement extends HTMLElement {
      rafId: number | null = null

      connectedCallback() {
        const canvas = this.querySelector('canvas') as HTMLCanvasElement
        if (!canvas) return

        // Canvas initialization function - EXACT copy
        function initCanvas(
          canvas: HTMLCanvasElement,
          width = 400,
          height = 400,
          _dpi?: number
        ) {
          const ctx = canvas.getContext('2d')!
          const dpr = window.devicePixelRatio || 1

          // @ts-expect-error (vendor)
          const bsr = ctx.webkitBackingStorePixelRatio || ctx.mozBackingStorePixelRatio || ctx.msBackingStorePixelRatio || ctx.oBackingStorePixelRatio || ctx.backingStorePixelRatio || 1
          const dpi = _dpi || dpr / bsr

          canvas.style.width = `${width}px`
          canvas.style.height = `${height}px`
          canvas.width = dpi * width
          canvas.height = dpi * height
          ctx.scale(dpi, dpi)

          return { ctx, dpi }
        }

        function polar2cart(x = 0, y = 0, r = 0, theta = 0) {
          const dx = r * Math.cos(theta)
          const dy = r * Math.sin(theta)
          return [x + dx, y + dy]
        }

        // Canvas drawing logic (recursively draw each branch) - EXACT copy
        const step = (
          x: number,
          y: number,
          rad: number,
          counter: { value: number } = { value: 0 }
        ) => {
          // drawing a branch
          const length = random() * LEN
          const [nx, ny] = polar2cart(x, y, length, rad)
          ctx.beginPath()
          ctx.moveTo(x, y)
          ctx.lineTo(nx, ny)
          ctx.stroke()
          counter.value += 1

          // out of bounds then return
          if (nx < -100 || nx > width + 100 || ny < -100 || ny > height + 100)
            return

          // otherwise continue drawing
          const rad1 = rad + random() * R15
          const rad2 = rad - random() * R15
          const rate = counter.value <= THRESHOLD ? 0.8 : 0.5
          // left branch
          if (random() < rate)
            pendingSteps.push(() => step(nx, ny, rad1, counter))
          // right branch
          if (random() < rate)
            pendingSteps.push(() => step(nx, ny, rad2, counter))
        }

        // RAF callback functions - EXACT copy
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

        // Start animation loop - EXACT copy
        const startFrame = () => {
          this.rafId = requestAnimationFrame(() => {
            // if the condition is satisfied then continue, otherwise cancel the animation loop
            if (pendingSteps.length) {
              frame()
              startFrame()
            } else {
              if (this.rafId) {
                cancelAnimationFrame(this.rafId)
                this.rafId = null
              }
            }
          })
        }

        // Start drawing - EXACT copy
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

        // Constants - EXACT copy
        const R180 = Math.PI
        const R90 = Math.PI / 2
        const R15 = Math.PI / 12
        const COLOR = '#88888825'
        const THRESHOLD = 30
        const LEN = 6
        const INTERVAL = 1000 / 40

        const { random } = Math
        const randomMiddle = () => random() * 0.6 + 0.2

        let pendingSteps: (() => void)[] = []
        let lastTime = performance.now()

        const width = window.innerWidth
        const height = window.innerHeight
        const { ctx } = initCanvas(canvas, width, height)
        ctx.lineWidth = 1
        ctx.strokeStyle = COLOR

        start()
      }

      // after switching pages, stop the last drawing that was started but has not yet finished.
      disconnectedCallback() {
        if (this.rafId) {
          cancelAnimationFrame(this.rafId)
          this.rafId = null
        }
      }
    }

    // Register custom element
    if (!customElements.get('bg-plum')) {
      customElements.define('bg-plum', BgPlumElement)
    }

    // Create the element
    const plumElement = document.createElement('bg-plum')
    plumElement.className = 'z--1 fixed top-0 bottom-0 left-0 right-0 pointer-events-none print:hidden'
    plumElement.style.maskImage = 'radial-gradient(circle, transparent, black)'
    plumElement.style.webkitMaskImage = 'radial-gradient(circle, transparent, black)'
    
    const canvas = document.createElement('canvas')
    plumElement.appendChild(canvas)
    containerRef.current.appendChild(plumElement)

    return () => {
      if (plumElement.parentNode) {
        plumElement.parentNode.removeChild(plumElement)
      }
    }
  }, [])

  return (
    <div ref={containerRef} className="fixed inset-0 -z-10 overflow-hidden print:hidden" />
  )
}

// Dot background - EXACT copy from astro theme using p5.js
function DotBackground() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current || typeof window === 'undefined') return

    // Dynamically import p5
    import('p5').then((p5Module) => {
      const p5 = p5Module.default

      class BgDotElement extends HTMLElement {
        p5Instance: any = null

        connectedCallback() {
          const sketch = (p: any) => {
            const BACKGROUND = '#fff'
            const SCALE = 200
            const LENGTH = 10
            const SPACING = 15

            const width = window.innerWidth
            const height = window.innerHeight

            const existingPoints = new Set()
            const points: { x: number; y: number; opacity: number }[] = []

            function getForceOnPoint(x: number, y: number, z: number) {
              return (p.noise(x / SCALE, y / SCALE, z) - 0.5) * 2 * p.TWO_PI
            }

            function getLength(x: number, y: number, t: number) {
              return (p.noise(x / SCALE, y / SCALE, t * 2) + 0.5) * LENGTH
            }

            function addPoints() {
              for (let x = -SPACING / 2; x < width + SPACING; x += SPACING) {
                for (let y = -SPACING / 2; y < height + SPACING; y += SPACING) {
                  const id = `${x}-${y}`
                  if (existingPoints.has(id)) continue
                  existingPoints.add(id)
                  points.push({ x, y, opacity: Math.random() * 0.5 + 0.5 })
                }
              }
            }

            p.setup = () => {
              p.createCanvas(width, height)
              p.background(BACKGROUND)
              p.frameRate(30)
              addPoints()
            }

            p.draw = () => {
              p.background(BACKGROUND)

              const t = +new Date() / 10000
              for (const point of points) {
                const { x, y } = point
                const rad = getForceOnPoint(x, y, t)
                const length = getLength(x, y, t)
                const nx = x + p.cos(rad) * length
                const ny = y + p.sin(rad) * length
                p.stroke(
                  200,
                  200,
                  200,
                  (Math.abs(p.cos(rad)) * 0.8 + 0.2) * point.opacity * 255
                )
                p.strokeWeight(2)
                p.point(nx, ny)
              }
            }
          }

          this.p5Instance = new p5(sketch, this)
        }

        // after switching pages, stop the animation loop
        disconnectedCallback() {
          if (this.p5Instance) {
            this.p5Instance.remove()
            this.p5Instance = null
          }
        }
      }

      // Register custom element
      if (!customElements.get('bg-dot')) {
        customElements.define('bg-dot', BgDotElement)
      }

      // Create the element
      const dotElement = document.createElement('bg-dot')
      dotElement.className = 'z--1 fixed top-0 bottom-0 left-0 right-0 pointer-events-none print:hidden dark:invert'
      containerRef.current?.appendChild(dotElement)

      return () => {
        if (dotElement.parentNode) {
          dotElement.parentNode.removeChild(dotElement)
        }
      }
    })
  }, [])

  return (
    <div ref={containerRef} className="fixed inset-0 -z-10 overflow-hidden print:hidden" />
  )
}

// Particle background - EXACT copy from astro theme using p5.js
function ParticleBackground() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current || typeof window === 'undefined') return

    // Dynamically import p5
    import('p5').then((p5Module) => {
      const p5 = p5Module.default

      interface Particle {
        x: number
        y: number
        velocity: {
          x: number
          y: number
        }
      }

      class BgParticleElement extends HTMLElement {
        p5Instance: any = null

        connectedCallback() {
          const sketch = (p: any) => {
            const BACKGROUND = '#fff'
            const COLOR = '#88888825'
            const VELOCITY = 0.8
            const DENSITY = 6000
            const DISTANCE = 120
            const INTERACTIVE = false

            const width = window.innerWidth
            const height = window.innerHeight
            const particles: Particle[] = []

            function createParticle() {
              const x = p.random(width)
              const y = p.random(height)
              const velocity = {
                x: (p.random() - 0.5) * VELOCITY,
                y: (p.random() - 0.5) * VELOCITY,
              }

              return { x, y, velocity }
            }

            function drawParticle(particle: Particle) {
              p.noStroke()
              p.fill(COLOR)
              p.circle(particle.x, particle.y, 3)
            }

            function updateParticle(particle: Particle) {
              // change dir if outside map
              if (particle.x > width + 20 || particle.x < -20) {
                particle.velocity.x = -particle.velocity.x
              }
              if (particle.y > height + 20 || particle.y < -20) {
                particle.velocity.y = -particle.velocity.y
              }

              particle.x += particle.velocity.x
              particle.y += particle.velocity.y
            }

            p.setup = () => {
              p.createCanvas(width, height)
              p.background(BACKGROUND)

              // initialize particles
              const particleCount = (width * height) / DENSITY
              for (let i = 0; i < particleCount; i++) {
                particles.push(createParticle())
              }

              if (INTERACTIVE) {
                let mouseParticle = createParticle()
                mouseParticle.velocity = { x: 0, y: 0 }
                particles.push(mouseParticle)

                p.mouseMoved = function () {
                  mouseParticle.x = p.mouseX
                  mouseParticle.y = p.mouseY
                }

                p.mouseReleased = function () {
                  mouseParticle.velocity = p.createVector(
                    (p.random() - 0.5) * 2,
                    (p.random() - 0.5) * 2
                  )
                  mouseParticle = createParticle()
                  mouseParticle.velocity = p.createVector(0, 0)
                  particles.push(mouseParticle)
                }
              }
            }

            p.draw = () => {
              p.background(BACKGROUND)

              // update and draw particles
              particles.forEach((particle) => {
                updateParticle(particle)
                drawParticle(particle)

                // draw connections
                particles.forEach((other) => {
                  const d = p.dist(particle.x, particle.y, other.x, other.y)
                  if (d < DISTANCE) {
                    p.stroke(COLOR)
                    p.strokeWeight(0.5)
                    p.line(particle.x, particle.y, other.x, other.y)
                  }
                })
              })
            }
          }

          this.p5Instance = new p5(sketch, this)
        }

        // after switching pages, stop the animation loop
        disconnectedCallback() {
          if (this.p5Instance) {
            this.p5Instance.remove()
            this.p5Instance = null
          }
        }
      }

      // Register custom element
      if (!customElements.get('bg-particle')) {
        customElements.define('bg-particle', BgParticleElement)
      }

      // Create the element
      const particleElement = document.createElement('bg-particle')
      particleElement.className = 'z--1 fixed top-0 bottom-0 left-0 right-0 pointer-events-none print:hidden dark:invert'
      containerRef.current?.appendChild(particleElement)

      return () => {
        if (particleElement.parentNode) {
          particleElement.parentNode.removeChild(particleElement)
        }
      }
    })
  }, [])

  return (
    <div ref={containerRef} className="fixed inset-0 -z-10 overflow-hidden print:hidden" />
  )
}
