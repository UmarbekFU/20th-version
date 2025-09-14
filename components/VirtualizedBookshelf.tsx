'use client';

import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import './bookshelf.css';

interface NoteMetadata {
  title: string
  author: string
  date: string
  rating: number
  category: 'book' | 'podcast' | 'course' | 'video' | 'essay' | 'documentary'
  summary: string
  spineColor: string
  textColor: string
  coverImage: string
  duration?: string
  url?: string
  slug: string
}

interface VirtualizedBookshelfProps {
  notes: NoteMetadata[];
  itemWidth?: number;
  visibleCount?: number;
  height?: number;
}

// Simple SVG chevron icons instead of lucide-react
const ChevronLeft = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 19l-7-7 7-7"
    />
  </svg>
);

const ChevronRight = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 5l7 7-7 7"
    />
  </svg>
);

export default function VirtualizedBookshelf({ 
  notes, 
  itemWidth = 41.5, 
  visibleCount = 20,
  height = 220 
}: VirtualizedBookshelfProps) {
  const router = useRouter();
  
  const [selectedNote, setSelectedNote] = useState(-1);
  const [hoveredNote, setHoveredNote] = useState(-1);
  const [scroll, setScroll] = useState(-200);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [viewportWidth, setViewportWidth] = useState(0);

  const bookshelfRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const scrollRightRef = useRef<HTMLDivElement>(null);
  const scrollLeftRef = useRef<HTMLDivElement>(null);

  // Calculate visible range
  const visibleRange = useMemo(() => {
    const startIndex = Math.max(0, Math.floor(scroll / (itemWidth + 11)) - 2);
    const endIndex = Math.min(notes.length, startIndex + visibleCount + 4);
    return { startIndex, endIndex };
  }, [scroll, itemWidth, visibleCount, notes.length]);

  // Handle case when there are no notes
  if (notes.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500 dark:text-gray-400">No books to display</p>
      </div>
    );
  }

  // For small collections (5 or fewer), render without virtual scrolling
  if (notes.length <= 5) {
    return (
      <>
        {/* SVG filter for paper texture */}
        <svg
          style={{
            position: "absolute",
            inset: 0,
            visibility: "hidden",
          }}
        >
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

        <div className="flex items-center gap-1 overflow-x-hidden">
          {notes.map((note, index) => {
            const isActive = selectedNote === index || hoveredNote === index;
            const isHovered = hoveredNote === index;
            
            return (
              <button
                key={note.slug}
                onClick={() => {
                  if (index === selectedNote) {
                    setSelectedNote(-1);
                    router.push(`/notes`);
                  } else {
                    setSelectedNote(index);
                    router.push(`/notes/${note.slug}`);
                  }
                }}
                onMouseEnter={() => setHoveredNote(index)}
                onMouseLeave={() => setHoveredNote(-1)}
                className={`flex flex-row items-center justify-start outline-none flex-shrink-0 gap-0 group ${
                  isHovered ? 'z-10' : ''
                }`}
                style={{
                  transform: `translateZ(${isHovered ? '10px' : '0px'})`,
                  width: isActive ? `${itemWidth * 5}px` : `${itemWidth}px`,
                  perspective: "1000px",
                  WebkitPerspective: "1000px",
                  transition: `all 500ms cubic-bezier(0.4, 0, 0.2, 1)`,
                  willChange: "auto",
                  filter: isHovered ? 'drop-shadow(0 8px 16px rgba(0, 0, 0, 0.15))' : 'none',
                }}
              >
                {/* Book spine */}
                <div
                  className="flex items-start justify-center flex-shrink-0 relative"
                  style={{
                    width: `${itemWidth}px`,
                    height: `${height}px`,
                    backgroundColor: note.spineColor,
                    color: note.textColor,
                    transform: `translate3d(0px, 0px, 0px) scale3d(${isHovered ? '1.02' : '1'}, 1, 1) rotateX(0deg) rotateY(${
                      isActive ? "-60deg" : isHovered ? "-15deg" : "0deg"
                    }) rotateZ(0deg) skew(0deg, 0deg)`,
                    transition: "all 500ms cubic-bezier(0.4, 0, 0.2, 1)",
                    willChange: "auto",
                    filter: `brightness(${isHovered ? '0.9' : '0.8'}) contrast(${isHovered ? '2.2' : '2'})`,
                    transformStyle: "preserve-3d",
                    transformOrigin: "right",
                    boxShadow: isHovered ? 'inset -2px 0 4px rgba(0, 0, 0, 0.1)' : 'none',
                  }}
                >
                  {/* Paper texture overlay */}
                  <span 
                    className="pointer-events-none fixed top-0 left-0 z-50 opacity-40"
                    style={{
                      height: `${height}px`,
                      width: `${itemWidth}px`,
                      filter: "url(#paper)",
                    }}
                  />
                  <h2
                    className="mt-3 text-xs font-sans select-none text-ellipsis whitespace-nowrap overflow-hidden"
                    style={{ 
                      writingMode: "vertical-rl",
                      maxHeight: `${height - 24}px`,
                    }}
                  >
                    {note.title}
                  </h2>
                </div>
                
                {/* Book cover */}
                <div
                  className="relative flex-shrink-0 overflow-hidden"
                  style={{
                    transform: `translate3d(0px, 0px, 0px) scale3d(${isHovered ? '1.02' : '1'}, 1, 1) rotateX(0deg) rotateY(${
                      isActive ? "30deg" : isHovered ? "75deg" : "88.8deg"
                    }) rotateZ(0deg) skew(0deg, 0deg)`,
                    transition: "all 500ms cubic-bezier(0.4, 0, 0.2, 1)",
                    willChange: "auto",
                    filter: `brightness(${isHovered ? '0.9' : '0.8'}) contrast(${isHovered ? '2.2' : '2'})`,
                    transformStyle: "preserve-3d",
                    transformOrigin: "left",
                    boxShadow: isHovered ? 'inset 2px 0 4px rgba(0, 0, 0, 0.1)' : 'none',
                  }}
                >
                  {/* Paper texture overlay */}
                  <span
                    className="pointer-events-none fixed top-0 right-0 z-50"
                    style={{
                      height: `${height}px`,
                      width: `${itemWidth * 4}px`,
                      filter: "url(#paper)",
                      opacity: isHovered ? 0.5 : 0.4,
                      transition: "opacity 300ms ease",
                    }}
                  />
                  {/* Book binding effect */}
                  <span
                    className="pointer-events-none absolute top-0 left-0 z-50"
                    style={{
                      height: `${height}px`,
                      width: `${itemWidth * 4}px`,
                      background: `linear-gradient(to right, 
                        rgba(255, 255, 255, 0) 2px, 
                        rgba(255, 255, 255, ${isHovered ? '0.6' : '0.5'}) 3px, 
                        rgba(255, 255, 255, ${isHovered ? '0.35' : '0.25'}) 4px, 
                        rgba(255, 255, 255, ${isHovered ? '0.35' : '0.25'}) 6px, 
                        transparent 7px, 
                        transparent 9px, 
                        rgba(255, 255, 255, ${isHovered ? '0.35' : '0.25'}) 9px, 
                        transparent 12px)`,
                      transition: "all 300ms ease",
                    }}
                  />
                  {/* Additional depth effect */}
                  <span
                    className="pointer-events-none absolute top-0 left-0 z-40"
                    style={{
                      height: `${height}px`,
                      width: `${itemWidth * 4}px`,
                      background: `linear-gradient(135deg, 
                        rgba(0, 0, 0, 0.1) 0%, 
                        transparent 20%, 
                        transparent 80%, 
                        rgba(0, 0, 0, 0.1) 100%)`,
                      opacity: isHovered ? 0.8 : 0.5,
                      transition: "opacity 300ms ease",
                    }}
                  />
                  <img
                    src={note.coverImage}
                    alt={note.title}
                    className="transition-all duration-500 ease-in-out"
                    style={{
                      width: `${itemWidth * 4}px`,
                      height: `${height}px`,
                      willChange: "auto",
                    }}
                  />
                </div>
              </button>
            );
          })}
        </div>
      </>
    );
  }

  // Get visible notes
  const visibleNotes = useMemo(() => {
    // For small collections, show all notes
    if (notes.length <= 5) {
      return notes.map((note, index) => ({
        ...note,
        originalIndex: index
      }));
    }
    
    return notes.slice(visibleRange.startIndex, visibleRange.endIndex).map((note, index) => ({
      ...note,
      originalIndex: visibleRange.startIndex + index
    }));
  }, [notes, visibleRange]);

  // Dimensions
  const spineWidth = `${itemWidth}px`;
  const coverWidth = `${itemWidth * 4}px`;
  const bookWidth = `${itemWidth * 5}px`;
  const bookHeight = `${height}px`;

  const minScroll = 0;
  const maxScroll = useMemo(() => {
    const activeNote = selectedNote > -1 ? selectedNote : hoveredNote;
    const totalWidth = (itemWidth + 11) * notes.length;
    const viewportWidth = viewportRef.current?.offsetWidth || 800;
    return Math.max(0, totalWidth - viewportWidth + (activeNote > -1 ? itemWidth * 4 : 0) + 5);
  }, [selectedNote, hoveredNote, notes.length, itemWidth, viewportWidth]);

  const boundedScroll = useCallback((scrollX: number) => {
    setScroll(Math.max(minScroll, Math.min(maxScroll, scrollX)));
  }, [minScroll, maxScroll]);

  const boundedRelativeScroll = useCallback(
    (incrementX: number) => {
      setScroll((_scroll) =>
        Math.max(minScroll, Math.min(maxScroll, _scroll + incrementX))
      );
    },
    [minScroll, maxScroll]
  );

  // Calculate viewport dimensions
  useEffect(() => {
    if (viewportRef.current) {
      setViewportWidth(viewportRef.current.offsetWidth);
    }
  }, []);

  // Auto-scroll to selected or hovered note
  useEffect(() => {
    const activeNote = selectedNote > -1 ? selectedNote : hoveredNote;
    if (activeNote === -1) {
      boundedRelativeScroll(0);
    } else {
      const targetScroll = (activeNote - (visibleCount - 4.5) / 2) * (itemWidth + 11);
      boundedScroll(targetScroll);
    }
  }, [selectedNote, hoveredNote, boundedScroll, visibleCount, itemWidth]);

  // Mobile/Desktop responsive scroll events
  useEffect(() => {
    const currentScrollRightRef = scrollRightRef.current;
    const currentScrollLeftRef = scrollLeftRef.current;

    if (!currentScrollRightRef || !currentScrollLeftRef) return;

    let scrollInterval: NodeJS.Timeout | null = null;

    const setScrollRightInterval = () => {
      setIsScrolling(true);
      scrollInterval = setInterval(() => {
        boundedRelativeScroll(3);
      }, 10);
    };

    const setScrollLeftInterval = () => {
      setIsScrolling(true);
      scrollInterval = setInterval(() => {
        boundedRelativeScroll(-3);
      }, 10);
    };

    const clearScrollInterval = () => {
      setIsScrolling(false);
      if (scrollInterval) {
        clearInterval(scrollInterval);
      }
    };

    // Function to determine scroll events based on screen size
    const getScrollEvents = () => {
      const isMobile = window.innerWidth < 640; // sm breakpoint
      return isMobile 
        ? { start: "touchstart", stop: "touchend" }
        : { start: "mouseenter", stop: "mouseleave" };
    };

    // Create a copy of the scroll events to save for clean-up
    const currentScrollEvents = getScrollEvents();

    const addEventListeners = () => {
      currentScrollRightRef.addEventListener(
        currentScrollEvents.start,
        setScrollRightInterval
      );
      currentScrollRightRef.addEventListener(
        currentScrollEvents.stop,
        clearScrollInterval
      );

      currentScrollLeftRef.addEventListener(
        currentScrollEvents.start,
        setScrollLeftInterval
      );
      currentScrollLeftRef.addEventListener(
        currentScrollEvents.stop,
        clearScrollInterval
      );
    };

    const removeEventListeners = () => {
      currentScrollRightRef.removeEventListener(
        currentScrollEvents.start,
        setScrollRightInterval
      );
      currentScrollRightRef.removeEventListener(
        currentScrollEvents.stop,
        clearScrollInterval
      );
      currentScrollLeftRef.removeEventListener(
        currentScrollEvents.start,
        setScrollLeftInterval
      );
      currentScrollLeftRef.removeEventListener(
        currentScrollEvents.stop,
        clearScrollInterval
      );
    };

    addEventListeners();

    // Handle window resize to switch between mobile/desktop events
    const handleResize = () => {
      removeEventListeners();
      const newScrollEvents = getScrollEvents();
      Object.assign(currentScrollEvents, newScrollEvents);
      addEventListeners();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearScrollInterval();
      removeEventListeners();
      window.removeEventListener('resize', handleResize);
    };
  }, [boundedRelativeScroll]);

  // Handle mouse leave on the entire bookshelf to clear hover
  const handleBookshelfMouseLeave = () => {
    setHoveredNote(-1);
    setIsHovering(false);
  };

  const handleBookshelfMouseEnter = () => {
    setIsHovering(true);
  };

  return (
    <>
      {/* SVG filter for paper texture */}
      <svg
        style={{
          position: "absolute",
          inset: 0,
          visibility: "hidden",
        }}
      >
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

      <div 
        className="relative" 
        ref={bookshelfRef}
        onMouseLeave={handleBookshelfMouseLeave}
        onMouseEnter={handleBookshelfMouseEnter}
      >
        {/* Left scroll button */}
        <div
          className={`absolute h-full -left-7 md:-left-9 ${
            scroll > minScroll ? "block" : "hidden"
          }`}
        >
          <div
            ref={scrollLeftRef}
            className="flex items-center justify-center h-full w-7 md:w-9 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer transition-all duration-200 hover:scale-105 active:scale-95"
            style={{
              borderTopRightRadius: 0, // Mobile: no right border radius
              borderBottomRightRadius: 0,
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            }}
          >
            <ChevronLeft className="w-3 h-3" />
          </div>
        </div>

        {/* Bookshelf viewport */}
        <div
          ref={viewportRef}
          className={`flex items-center gap-1 overflow-x-hidden cursor-grab transition-all duration-300 ${
            isHovering ? 'bg-gray-50/30 dark:bg-gray-800/30 rounded-lg' : ''
          }`}
          style={{
            padding: isHovering ? '8px' : '0px',
            margin: isHovering ? '-8px' : '0px',
          }}
        >
          {/* Virtual scrolling container */}
          <div
            style={{
              width: `${(itemWidth + 11) * notes.length}px`,
              transform: `translateX(-${scroll}px)`,
              position: 'relative',
            }}
          >
            {visibleNotes.map((note, index) => {
              const isActive = selectedNote === note.originalIndex || hoveredNote === note.originalIndex;
              const isHovered = hoveredNote === note.originalIndex;
              const leftOffset = notes.length <= 5 ? note.originalIndex * (itemWidth + 11) : note.originalIndex * (itemWidth + 11);
              
              return (
                <button
                  key={`${note.slug}-${note.originalIndex}`}
                  onClick={() => {
                    if (note.originalIndex === selectedNote) {
                      setSelectedNote(-1);
                      router.push(`/notes`);
                    } else {
                      setSelectedNote(note.originalIndex);
                      router.push(`/notes/${note.slug}`);
                    }
                  }}
                  onMouseEnter={() => setHoveredNote(note.originalIndex)}
                  onMouseLeave={() => setHoveredNote(-1)}
                  className={`flex flex-row items-center justify-start outline-none flex-shrink-0 gap-0 group ${
                    isHovered ? 'z-10' : ''
                  }`}
                  style={{
                    position: 'absolute',
                    left: `${leftOffset}px`,
                    top: 0,
                    transform: `translateZ(${isHovered ? '10px' : '0px'})`,
                    width: isActive ? bookWidth : spineWidth,
                    perspective: "1000px",
                    WebkitPerspective: "1000px",
                    transition: isScrolling
                      ? `transform 100ms linear`
                      : `all 500ms cubic-bezier(0.4, 0, 0.2, 1)`,
                    willChange: "auto",
                    filter: isHovered ? 'drop-shadow(0 8px 16px rgba(0, 0, 0, 0.15))' : 'none',
                  }}
                >
                  {/* Book spine */}
                  <div
                    className="flex items-start justify-center flex-shrink-0 relative"
                    style={{
                      width: spineWidth,
                      height: bookHeight,
                      backgroundColor: note.spineColor,
                      color: note.textColor,
                      transform: `translate3d(0px, 0px, 0px) scale3d(${isHovered ? '1.02' : '1'}, 1, 1) rotateX(0deg) rotateY(${
                        isActive ? "-60deg" : isHovered ? "-15deg" : "0deg"
                      }) rotateZ(0deg) skew(0deg, 0deg)`,
                      transition: "all 500ms cubic-bezier(0.4, 0, 0.2, 1)",
                      willChange: "auto",
                      filter: `brightness(${isHovered ? '0.9' : '0.8'}) contrast(${isHovered ? '2.2' : '2'})`,
                      transformStyle: "preserve-3d",
                      transformOrigin: "right",
                      boxShadow: isHovered ? 'inset -2px 0 4px rgba(0, 0, 0, 0.1)' : 'none',
                    }}
                  >
                    {/* Paper texture overlay */}
                    <span 
                      className="pointer-events-none fixed top-0 left-0 z-50 opacity-40"
                      style={{
                        height: bookHeight,
                        width: spineWidth,
                        filter: "url(#paper)",
                      }}
                    />
                    <h2
                      className="mt-3 text-xs font-sans select-none text-ellipsis whitespace-nowrap overflow-hidden"
                      style={{ 
                        writingMode: "vertical-rl",
                        maxHeight: `${height - 24}px`,
                      }}
                    >
                      {note.title}
                    </h2>
                  </div>
                  
                  {/* Book cover */}
                  <div
                    className="relative flex-shrink-0 overflow-hidden"
                    style={{
                      transform: `translate3d(0px, 0px, 0px) scale3d(${isHovered ? '1.02' : '1'}, 1, 1) rotateX(0deg) rotateY(${
                        isActive ? "30deg" : isHovered ? "75deg" : "88.8deg"
                      }) rotateZ(0deg) skew(0deg, 0deg)`,
                      transition: "all 500ms cubic-bezier(0.4, 0, 0.2, 1)",
                      willChange: "auto",
                      filter: `brightness(${isHovered ? '0.9' : '0.8'}) contrast(${isHovered ? '2.2' : '2'})`,
                      transformStyle: "preserve-3d",
                      transformOrigin: "left",
                      boxShadow: isHovered ? 'inset 2px 0 4px rgba(0, 0, 0, 0.1)' : 'none',
                    }}
                  >
                    {/* Paper texture overlay */}
                    <span
                      className="pointer-events-none fixed top-0 right-0 z-50"
                      style={{
                        height: bookHeight,
                        width: coverWidth,
                        filter: "url(#paper)",
                        opacity: isHovered ? 0.5 : 0.4,
                        transition: "opacity 300ms ease",
                      }}
                    />
                    {/* Book binding effect */}
                    <span
                      className="pointer-events-none absolute top-0 left-0 z-50"
                      style={{
                        height: bookHeight,
                        width: coverWidth,
                        background: `linear-gradient(to right, 
                          rgba(255, 255, 255, 0) 2px, 
                          rgba(255, 255, 255, ${isHovered ? '0.6' : '0.5'}) 3px, 
                          rgba(255, 255, 255, ${isHovered ? '0.35' : '0.25'}) 4px, 
                          rgba(255, 255, 255, ${isHovered ? '0.35' : '0.25'}) 6px, 
                          transparent 7px, 
                          transparent 9px, 
                          rgba(255, 255, 255, ${isHovered ? '0.35' : '0.25'}) 9px, 
                          transparent 12px)`,
                        transition: "all 300ms ease",
                      }}
                    />
                    {/* Additional depth effect */}
                    <span
                      className="pointer-events-none absolute top-0 left-0 z-40"
                      style={{
                        height: bookHeight,
                        width: coverWidth,
                        background: `linear-gradient(135deg, 
                          rgba(0, 0, 0, 0.1) 0%, 
                          transparent 20%, 
                          transparent 80%, 
                          rgba(0, 0, 0, 0.1) 100%)`,
                        opacity: isHovered ? 0.8 : 0.5,
                        transition: "opacity 300ms ease",
                      }}
                    />
                    <img
                      src={note.coverImage}
                      alt={note.title}
                      className="transition-all duration-500 ease-in-out"
                      style={{
                        width: coverWidth,
                        height: bookHeight,
                        willChange: "auto",
                      }}
                    />
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right scroll button */}
        <div
          className={`absolute h-full top-0 -right-7 md:-right-9 pl-2.5 ${
            scroll < maxScroll ? "block" : "hidden"
          }`}
        >
          <div
            ref={scrollRightRef}
            className="flex items-center justify-center h-full w-7 md:w-9 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer transition-all duration-200 hover:scale-105 active:scale-95"
            style={{
              borderTopLeftRadius: 0, // Mobile: no left border radius
              borderBottomLeftRadius: 0,
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            }}
          >
            <ChevronRight className="w-3 h-3" />
          </div>
        </div>
      </div>
    </>
  );
}
