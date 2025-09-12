'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import VirtualizedBookshelf from './VirtualizedBookshelf';
import PaginatedList from './PaginatedList';

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

interface NotesTabsProps {
  books: NoteMetadata[];
  podcasts: NoteMetadata[];
  courses: NoteMetadata[];
}

// Data-driven tab configuration
const getTabConfig = (books: NoteMetadata[], podcasts: NoteMetadata[], courses: NoteMetadata[]) => [
  { 
    id: 'books', 
    label: 'Books', 
    count: books.length,
    data: books,
    renderContent: (data: NoteMetadata[]) => (
      <div className="space-y-8">
        {/* Virtualized Bookshelf */}
        <VirtualizedBookshelf 
          notes={data} 
          visibleCount={20}
          itemWidth={41.5}
          height={220}
        />
        
        {/* Divider */}
        <div className="border-t border-gray-200 dark:border-gray-700"></div>
        
        {/* Paginated Book List */}
        <PaginatedList
          items={data.slice().sort((a, b) => b.rating - a.rating)}
          itemsPerPage={10}
          renderItem={(book, index) => (
            <div key={book.slug} className="scroll-mt-20">
              {index > 0 && (
                <div className="border-t border-gray-200 dark:border-gray-700 mb-6 w-full"></div>
              )}
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <img
                  src={book.coverImage}
                  alt={book.title}
                  className="w-24 h-32 md:w-32 md:h-40 object-cover rounded border border-gray-200 dark:border-gray-700 flex-shrink-0"
                />
                <div className="flex-1">
                  <h3 className="notes-title text-xl mb-3">
                    <Link 
                      href={`/notes/${book.slug}`}
                      className="notes-text-primary hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      {book.title}
                    </Link>
                  </h3>
                  <p className="notes-meta notes-text-secondary mb-2">
                    {book.author}
                  </p>
                  <p className="notes-meta notes-text-muted mb-4">
                    Read: {book.date} • Rating: {book.rating}/10
                  </p>
                  <p className="notes-summary">
                    {book.summary}
                  </p>
                </div>
              </div>
            </div>
          )}
        />
      </div>
    )
  },
  { 
    id: 'podcasts', 
    label: 'Podcasts', 
    count: podcasts.length,
    data: podcasts,
    renderContent: (data: NoteMetadata[]) => (
      <PaginatedList
        items={data}
        itemsPerPage={15}
        renderItem={(podcast) => (
          <div key={podcast.slug} className="border-b border-gray-200 dark:border-gray-700 pb-8 last:border-b-0">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <img
                src={podcast.coverImage}
                alt={podcast.title}
                className="w-24 h-24 object-cover rounded-lg shadow-lg flex-shrink-0"
              />
              <div className="flex-1">
                <h3 className="notes-title text-xl mb-3">
                  <Link 
                    href={`/notes/${podcast.slug}`}
                    className="notes-text-primary hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {podcast.title}
                  </Link>
                </h3>
                <p className="notes-meta notes-text-secondary mb-2">
                  from {podcast.author}
                </p>
                <p className="notes-meta notes-text-muted mb-3">
                  {podcast.date} • Rating: {podcast.rating}/10
                  {podcast.duration && ` • ${podcast.duration}`}
                </p>
                <p className="notes-summary mb-3">
                  {podcast.summary}
                  {podcast.url && (
                    <span className="ml-2">
                      <a
                        href={podcast.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors font-medium"
                      >
                        Listen
                      </a>
                    </span>
                  )}
                </p>
              </div>
            </div>
          </div>
        )}
      />
    )
  },
  { 
    id: 'courses', 
    label: 'Courses', 
    count: courses.length,
    data: courses,
    renderContent: (data: NoteMetadata[]) => (
      <PaginatedList
        items={data}
        itemsPerPage={15}
        renderItem={(course) => (
          <div key={course.slug} className="border-b border-gray-200 dark:border-gray-700 pb-8 last:border-b-0">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <img
                src={course.coverImage}
                alt={course.title}
                className="w-24 h-24 object-cover rounded-lg shadow-lg flex-shrink-0"
              />
              <div className="flex-1">
                <h3 className="notes-title text-xl mb-3">
                  <Link 
                    href={`/notes/${course.slug}`}
                    className="notes-text-primary hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {course.title}
                  </Link>
                </h3>
                <p className="notes-meta notes-text-secondary mb-2">
                  by {course.author}
                </p>
                <p className="notes-meta notes-text-muted mb-3">
                  {course.date} • Rating: {course.rating}/10
                  {course.duration && ` • ${course.duration}`}
                </p>
                <p className="notes-summary mb-3">
                  {course.summary}
                  {course.url && (
                    <span className="ml-2">
                      <a
                        href={course.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors font-medium"
                      >
                        Take Course
                      </a>
                    </span>
                  )}
                </p>
              </div>
            </div>
          </div>
        )}
      />
    )
  },
] as const;

export function NotesTabs({ books, podcasts, courses }: NotesTabsProps) {
  const [activeTab, setActiveTab] = useState<'books' | 'podcasts' | 'courses'>('books');
  const tabSliderRef = useRef<HTMLDivElement>(null);


  // Get data-driven tab configuration
  const tabs = getTabConfig(books, podcasts, courses);
  const activeTabConfig = tabs.find(tab => tab.id === activeTab);

  // Update tab slider position
  useEffect(() => {
    if (tabSliderRef.current) {
      const activeIndex = tabs.findIndex(tab => tab.id === activeTab);
      const width = 100 / tabs.length;
      const left = (activeIndex * 100) / tabs.length;
      
      tabSliderRef.current.style.setProperty('--tab-width', `${width}%`);
      tabSliderRef.current.style.setProperty('--tab-left', `${left}%`);
    }
  }, [activeTab, tabs.length]);

  const renderContent = () => {
    if (!activeTabConfig) return null;
    return activeTabConfig.renderContent(activeTabConfig.data);
  };

  return (
    <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
      {/* Mobile Tab Navigation */}
      <div className="lg:hidden w-full mb-4">
        <div className="relative bg-gray-100 dark:bg-gray-800 rounded-lg p-1 flex">
          {/* Sliding Background */}
          <div
            ref={tabSliderRef}
            className="tab-slider"
          />
          
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`relative z-10 flex-1 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 notes-meta ${
                activeTab === tab.id
                  ? 'notes-text-primary'
                  : 'notes-text-muted hover:notes-text-secondary'
              }`}
            >
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Sidebar Navigation */}
      <div className="hidden lg:block w-32 flex-shrink-0">
        <div className="fixed left-8 top-1/2 transform -translate-y-1/2 z-10">
          <div className="space-y-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`w-full text-center px-3 py-2 rounded transition-all duration-200 notes-meta ${
                  activeTab === tab.id
                    ? 'bg-gray-100 dark:bg-gray-800 notes-text-primary'
                    : 'notes-text-muted hover:notes-text-secondary hover:bg-gray-50 dark:hover:bg-gray-800'
                }`}
              >
                <span className="text-sm font-medium">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div className="flex-1 min-w-0">
        {renderContent()}
      </div>
    </div>
  );
}
