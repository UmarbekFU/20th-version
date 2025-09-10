'use client';

import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Bookshelf } from './Bookshelf';
import { SimpleNote } from '@/lib/types';

interface NotesTabsProps {
  books: SimpleNote[];
  podcasts: SimpleNote[];
  courses: SimpleNote[];
}

export function NotesTabs({ books, podcasts, courses }: NotesTabsProps) {
  const [activeTab, setActiveTab] = useState<'books' | 'podcasts' | 'courses'>('books');
  const tabSliderRef = useRef<HTMLDivElement>(null);
  
  // Memoize sorted books to prevent unnecessary re-sorting
  const sortedBooks = useMemo(() => 
    books.slice().sort((a, b) => b.rating - a.rating),
    [books]
  );

  const tabs = [
    { id: 'books', label: 'Books' },
    { id: 'podcasts', label: 'Podcasts' },
    { id: 'courses', label: 'Courses' },
  ] as const;

  // Update tab slider position with useCallback for performance
  const updateTabSlider = useCallback(() => {
    if (tabSliderRef.current) {
      const activeIndex = tabs.findIndex(tab => tab.id === activeTab);
      const width = 100 / tabs.length;
      const left = (activeIndex * 100) / tabs.length;
      
      tabSliderRef.current.style.setProperty('--tab-width', `${width}%`);
      tabSliderRef.current.style.setProperty('--tab-left', `${left}%`);
    }
  }, [activeTab, tabs.length]);

  useEffect(() => {
    updateTabSlider();
  }, [updateTabSlider]);

  const renderContent = () => {
    switch (activeTab) {
      case 'books':
        return (
          <div className="space-y-8">
            {/* Bookshelf */}
            <Bookshelf notes={books} />
            
            {/* Divider */}
            <div className="border-t border-gray-200 dark:border-gray-700"></div>
            
            {/* Scrollable Book List */}
            <div className="space-y-8">
              {sortedBooks.map((book, index) => (
                  <div key={book.slug} className="scroll-mt-20">
                    {index > 0 && (
                      <div className="border-t border-gray-200 dark:border-gray-700 mb-6 w-full"></div>
                    )}
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <Image
                        src={book.coverImage}
                        alt={book.title}
                        width={128}
                        height={160}
                        className="w-24 h-32 md:w-32 md:h-40 object-cover rounded border border-gray-200 dark:border-gray-700 flex-shrink-0"
                        priority={index < 3} // Prioritize first 3 images
                        placeholder="blur"
                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                      />
                      <div className="flex-1">
                        <h3 className="notes-title text-xl mb-3 break-words overflow-visible">
                          <Link 
                            href={`/notes/${book.slug}`}
                            className="notes-text-primary hover:text-blue-600 dark:hover:text-blue-400 transition-colors block"
                            title={book.title}
                            style={{ 
                              wordBreak: 'break-word',
                              overflow: 'visible',
                              whiteSpace: 'normal',
                              lineHeight: '1.4'
                            }}
                          >
                            {book.title}
                          </Link>
                        </h3>
                        <p className="notes-meta notes-text-secondary mb-2">
                          {book.author}
                        </p>
                        <p className="notes-meta notes-text-muted mb-4">
                          Rating: {book.rating}/10
                        </p>
                        <p className="notes-summary">
                          {book.summary}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        );
      case 'podcasts':
        return (
          <div className="space-y-8">
            {podcasts.map((podcast) => (
              <div key={podcast.slug} className="border-b border-gray-200 dark:border-gray-700 pb-8 last:border-b-0">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <Image
                    src={podcast.coverImage}
                    alt={podcast.title}
                    width={96}
                    height={96}
                    className="w-24 h-24 object-cover rounded-lg shadow-lg flex-shrink-0"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                  />
                  <div className="flex-1">
                    <h3 className="notes-title text-xl mb-3 break-words overflow-visible">
                      <Link 
                        href={`/notes/${podcast.slug}`}
                        className="notes-text-primary hover:text-blue-600 dark:hover:text-blue-400 transition-colors block"
                        title={podcast.title}
                        style={{ 
                          wordBreak: 'break-word',
                          overflow: 'visible',
                          whiteSpace: 'normal',
                          lineHeight: '1.4'
                        }}
                      >
                        {podcast.title}
                      </Link>
                    </h3>
                    <p className="notes-meta notes-text-secondary mb-2">
                      from {podcast.author}
                    </p>
                    <p className="notes-meta notes-text-muted mb-3">
                      Rating: {podcast.rating}/10
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
            ))}
          </div>
        );
      case 'courses':
        return (
          <div className="space-y-8">
            {courses.map((course) => (
              <div key={course.slug} className="border-b border-gray-200 dark:border-gray-700 pb-8 last:border-b-0">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <Image
                    src={course.coverImage}
                    alt={course.title}
                    width={96}
                    height={96}
                    className="w-24 h-24 object-cover rounded-lg shadow-lg flex-shrink-0"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                  />
                  <div className="flex-1">
                    <h3 className="notes-title text-xl mb-3 break-words overflow-visible">
                      <Link 
                        href={`/notes/${course.slug}`}
                        className="notes-text-primary hover:text-blue-600 dark:hover:text-blue-400 transition-colors block"
                        title={course.title}
                        style={{ 
                          wordBreak: 'break-word',
                          overflow: 'visible',
                          whiteSpace: 'normal',
                          lineHeight: '1.4'
                        }}
                      >
                        {course.title}
                      </Link>
                    </h3>
                    <p className="notes-meta notes-text-secondary mb-2">
                      by {course.author}
                    </p>
                    <p className="notes-meta notes-text-muted mb-3">
                      Rating: {course.rating}/10
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
            ))}
          </div>
        );
      default:
        return null;
    }
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
