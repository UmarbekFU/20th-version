'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface Book {
  title: string
  author: string
  date: string
  rating: number
  coverImage: string
  spineColor: string
  textColor: string
  slug: string
  summary: string
  category: 'book' | 'podcast' | 'course' | 'video' | 'essay' | 'documentary'
}

interface BookshelfProps {
  books: Book[]
}

export default function Bookshelf({ books }: BookshelfProps) {
  const [selectedBook, setSelectedBook] = useState<number | null>(null)
  const [scrollPosition, setScrollPosition] = useState(0)
  const [isScrolling, setIsScrolling] = useState(false)
  const bookshelfRef = useRef<HTMLDivElement>(null)
  const scrollIntervalRef = useRef<NodeJS.Timeout | null>(null)

  const bookWidth = 60
  const bookHeight = 280
  const spineWidth = bookWidth
  const coverWidth = bookWidth * 4

  const maxScroll = Math.max(0, (bookWidth + 12) * (books.length - 6) + (selectedBook !== null ? bookWidth * 4 : 0))

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollIntervalRef.current) return

    setIsScrolling(true)
    scrollIntervalRef.current = setInterval(() => {
      setScrollPosition(prev => {
        const newPos = direction === 'right' 
          ? Math.min(maxScroll, prev + 3)
          : Math.max(0, prev - 3)
        return newPos
      })
    }, 10)
  }

  const stopScroll = () => {
    if (scrollIntervalRef.current) {
      clearInterval(scrollIntervalRef.current)
      scrollIntervalRef.current = null
    }
    setIsScrolling(false)
  }

  const selectBook = (index: number) => {
    if (selectedBook === index) {
      setSelectedBook(null)
    } else {
      setSelectedBook(index)
      // Auto-scroll to center the selected book
      const centerPosition = (index - 2.5) * (bookWidth + 12)
      setScrollPosition(Math.max(0, Math.min(maxScroll, centerPosition)))
    }
  }

  useEffect(() => {
    return () => {
      if (scrollIntervalRef.current) {
        clearInterval(scrollIntervalRef.current)
      }
    }
  }, [])

  return (
    <div className="relative w-full py-8">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">My Bookshelf</h2>
        <p className="text-gray-600 dark:text-gray-400">Click on a book to see details</p>
      </div>
      {/* Paper texture filter */}
      <svg className="absolute inset-0 invisible" width="0" height="0">
        <defs>
          <filter id="paper" x="0%" y="0%" width="100%" height="100%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.9"
              numOctaves="8"
              result="noise"
            />
            <feDiffuseLighting
              in="noise"
              lightingColor="white"
              surfaceScale="1"
              result="diffLight"
            >
              <feDistantLight azimuth="45" elevation="35" />
            </feDiffuseLighting>
          </filter>
        </defs>
      </svg>

      {/* Left scroll button */}
      {scrollPosition > 0 && (
        <button
          className="absolute left-[-28px] md:left-[-36px] top-0 h-full w-7 md:w-9 flex items-center justify-center rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors z-10"
          onMouseDown={() => handleScroll('left')}
          onMouseUp={stopScroll}
          onMouseLeave={stopScroll}
          onTouchStart={() => handleScroll('left')}
          onTouchEnd={stopScroll}
          title="Scroll left"
          aria-label="Scroll left"
        >
          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </button>
      )}

      {/* Books container */}
      <div className="overflow-hidden bg-gray-50 dark:bg-gray-900 rounded-lg p-6 shadow-lg">
        <div 
          className="flex items-center gap-3 cursor-grab active:cursor-grabbing"
          style={{
            transform: `translateX(-${scrollPosition}px)`,
            transition: isScrolling ? 'transform 100ms linear' : 'transform 500ms ease'
          }}
        >
          {books.map((book, index) => (
            <div
              key={book.slug}
              className="flex items-center flex-shrink-0"
              style={{
                width: selectedBook === index ? `${bookWidth * 5}px` : `${spineWidth}px`,
                transition: 'all 500ms ease'
              }}
            >
              {/* Book spine */}
              <div
                className="flex items-center justify-center flex-shrink-0 relative"
                style={{
                  width: `${spineWidth}px`,
                  height: `${bookHeight}px`,
                  backgroundColor: book.spineColor,
                  color: book.textColor,
                  transform: `rotateY(${selectedBook === index ? '-60deg' : '0deg'})`,
                  transformStyle: 'preserve-3d',
                  filter: 'brightness(0.8) contrast(2)',
                  transition: 'all 500ms ease'
                }}
                onClick={() => selectBook(index)}
              >
                {/* Paper texture overlay */}
                <div
                  className="absolute inset-0 pointer-events-none opacity-40"
                  style={{ filter: 'url(#paper)' }}
                />
                
                {/* Book title */}
                <h3
                  className="text-xs font-medium px-2 text-center"
                  style={{
                    writingMode: 'vertical-rl',
                    textOrientation: 'mixed',
                    maxHeight: `${bookHeight - 24}px`,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap'
                  }}
                >
                  {book.title}
                </h3>
              </div>

              {/* Book cover */}
              {selectedBook === index && (
                <div
                  className="flex-shrink-0 relative overflow-hidden"
                  style={{
                    width: `${coverWidth}px`,
                    height: `${bookHeight}px`,
                    transform: `rotateY(30deg)`,
                    transformStyle: 'preserve-3d',
                    filter: 'brightness(0.8) contrast(2)',
                    transition: 'all 500ms ease'
                  }}
                >
                  {/* Paper texture overlay */}
                  <div
                    className="absolute inset-0 pointer-events-none opacity-40 z-10"
                    style={{ filter: 'url(#paper)' }}
                  />
                  
                  {/* Book binding effect */}
                  <div
                    className="absolute inset-0 pointer-events-none z-20"
                    style={{
                      background: `linear-gradient(to right, rgba(255, 255, 255, 0) 2px, rgba(255, 255, 255, 0.5) 3px, rgba(255, 255, 255, 0.25) 4px, rgba(255, 255, 255, 0.25) 6px, transparent 7px, transparent 9px, rgba(255, 255, 255, 0.25) 9px, transparent 12px)`
                    }}
                  />
                  
                  {/* Book cover image */}
                  <Image
                    src={book.coverImage}
                    alt={book.title}
                    width={coverWidth}
                    height={bookHeight}
                    className="object-cover"
                    style={{ transition: 'all 500ms ease' }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Right scroll button */}
      {scrollPosition < maxScroll && (
        <button
          className="absolute right-[-28px] md:right-[-36px] top-0 h-full w-7 md:w-9 flex items-center justify-center rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors z-10"
          onMouseDown={() => handleScroll('right')}
          onMouseUp={stopScroll}
          onMouseLeave={stopScroll}
          onTouchStart={() => handleScroll('right')}
          onTouchEnd={stopScroll}
          title="Scroll right"
          aria-label="Scroll right"
        >
          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
        </button>
      )}

      {/* Book details panel */}
      {selectedBook !== null && (
        <div className="mt-8 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
          <div className="flex gap-6">
            <div className="flex-shrink-0">
              <Image
                src={books[selectedBook].coverImage}
                alt={books[selectedBook].title}
                width={120}
                height={160}
                className="rounded-lg shadow-md"
              />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                {books[selectedBook].title}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-2">
                by {books[selectedBook].author}
              </p>
              <div className="flex items-center gap-4 mb-4">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                  {books[selectedBook].category}
                </span>
                <div className="flex items-center">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span
                      key={i}
                      className={`text-sm ${
                        i < books[selectedBook].rating / 2
                          ? 'text-yellow-400'
                          : 'text-gray-300 dark:text-gray-600'
                      }`}
                    >
                      ★
                    </span>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {books[selectedBook].summary}
              </p>
              <div className="mt-4">
                <Link
                  href={`/notes/${books[selectedBook].slug}`}
                  className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors"
                >
                  Read Notes
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}