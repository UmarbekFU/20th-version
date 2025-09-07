'use client';

import React, { useState, useRef, useEffect, useMemo } from 'react';
import { Note } from '@/lib/notes';
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
import { useRouter } from 'next/navigation';

interface BookshelfProps {
  notes: Note[];
}

export function Bookshelf({ notes }: BookshelfProps) {
  const router = useRouter();
  const [selectedNote, setSelectedNote] = useState(-1);
  const [hoveredNote, setHoveredNote] = useState(-1);
  const [scroll, setScroll] = useState(-200);
  const [isScrolling, setIsScrolling] = useState(false);
  const [notesInViewport, setNotesInViewport] = useState(0);

  const bookshelfRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const scrollRightRef = useRef<HTMLDivElement>(null);
  const scrollLeftRef = useRef<HTMLDivElement>(null);

  // Dimensions
  const width = 41.5;
  const height = 220;
  const spineWidth = `${width}px`;
  const coverWidth = `${width * 4}px`;
  const bookWidth = `${width * 5}px`;
  const bookHeight = `${height}px`;

  const minScroll = 0;
  const maxScroll = useMemo(() => {
    const activeNote = selectedNote > -1 ? selectedNote : hoveredNote;
    return (
      (width + 12) * (notes.length - notesInViewport) +
      (activeNote > -1 ? width * 4 : 0) +
      5
    );
  }, [selectedNote, hoveredNote, notes.length, notesInViewport]);

  const boundedScroll = (scrollX: number) => {
    setScroll(Math.max(minScroll, Math.min(maxScroll, scrollX)));
  };

  const boundedRelativeScroll = React.useCallback(
    (incrementX: number) => {
      setScroll((_scroll) =>
        Math.max(minScroll, Math.min(maxScroll, _scroll + incrementX))
      );
    },
    [maxScroll]
  );

  // Calculate viewport dimensions
  useEffect(() => {
    if (viewportRef.current) {
      const viewportWidth = viewportRef.current.offsetWidth;
      const numberOfNotes = viewportWidth / (width + 11);
      setNotesInViewport(numberOfNotes);
    }
  }, []);

  // Auto-scroll to selected or hovered note
  useEffect(() => {
    const activeNote = selectedNote > -1 ? selectedNote : hoveredNote;
    if (activeNote === -1) {
      boundedRelativeScroll(0);
    } else {
      boundedScroll((activeNote - (notesInViewport - 4.5) / 2) * (width + 11));
    }
  }, [selectedNote, hoveredNote, boundedRelativeScroll, notesInViewport]);

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
      >
        {/* Left scroll button */}
        <div
          className={`absolute h-full -left-7 md:-left-9 ${
            scroll > minScroll ? "block" : "hidden"
          }`}
        >
          <div
            ref={scrollLeftRef}
            className="flex items-center justify-center h-full w-7 md:w-9 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer transition-colors"
            style={{
              borderTopRightRadius: 0, // Mobile: no right border radius
              borderBottomRightRadius: 0,
            }}
          >
            <ChevronLeft className="w-3 h-3" />
          </div>
        </div>

        {/* Bookshelf viewport */}
        <div
          ref={viewportRef}
          className="flex items-center gap-1 overflow-x-hidden cursor-grab"
        >
          {notes.map((note, index) => {
            const isActive = selectedNote === index || hoveredNote === index;
            return (
              <button
                key={note.title}
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
                className="flex flex-row items-center justify-start outline-none flex-shrink-0 gap-0"
                style={{
                  transform: `translateX(-${scroll}px)`,
                  width: isActive ? bookWidth : spineWidth,
                  perspective: "1000px",
                  WebkitPerspective: "1000px",
                  transition: isScrolling
                    ? `transform 100ms linear`
                    : `all 500ms ease`,
                  willChange: "auto",
                }}
              >
              {/* Book spine */}
              <div
                className="flex items-start justify-center flex-shrink-0"
                style={{
                  width: spineWidth,
                  height: bookHeight,
                  backgroundColor: note.spineColor,
                  color: note.textColor,
                  transform: `translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(${
                    isActive ? "-60deg" : "0deg"
                  }) rotateZ(0deg) skew(0deg, 0deg)`,
                  transition: "all 500ms ease",
                  willChange: "auto",
                  filter: "brightness(0.8) contrast(2)",
                  transformStyle: "preserve-3d",
                  transformOrigin: "right",
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
                  transform: `translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(${
                    isActive ? "30deg" : "88.8deg"
                  }) rotateZ(0deg) skew(0deg, 0deg)`,
                  transition: "all 500ms ease",
                  willChange: "auto",
                  filter: "brightness(0.8) contrast(2)",
                  transformStyle: "preserve-3d",
                  transformOrigin: "left",
                }}
              >
                {/* Paper texture overlay */}
                <span
                  className="pointer-events-none fixed top-0 right-0 z-50 opacity-40"
                  style={{
                    height: bookHeight,
                    width: coverWidth,
                    filter: "url(#paper)",
                  }}
                />
                {/* Book binding effect */}
                <span
                  className="pointer-events-none absolute top-0 left-0 z-50"
                  style={{
                    height: bookHeight,
                    width: coverWidth,
                    background: `linear-gradient(to right, rgba(255, 255, 255, 0) 2px, rgba(255, 255, 255, 0.5) 3px, rgba(255, 255, 255, 0.25) 4px, rgba(255, 255, 255, 0.25) 6px, transparent 7px, transparent 9px, rgba(255, 255, 255, 0.25) 9px, transparent 12px)`,
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

        {/* Right scroll button */}
        <div
          className={`absolute h-full top-0 -right-7 md:-right-9 pl-2.5 ${
            scroll < maxScroll ? "block" : "hidden"
          }`}
        >
          <div
            ref={scrollRightRef}
            className="flex items-center justify-center h-full w-7 md:w-9 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer transition-colors"
            style={{
              borderTopLeftRadius: 0, // Mobile: no left border radius
              borderBottomLeftRadius: 0,
            }}
          >
            <ChevronRight className="w-3 h-3" />
          </div>
        </div>
      </div>
    </>
  );
}
