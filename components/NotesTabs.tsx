'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Bookshelf } from './Bookshelf';
import { getNotesByCategory } from '@/lib/notes';

interface NotesTabsProps {
  books: any[];
  podcasts: any[];
  courses: any[];
}

export function NotesTabs({ books, podcasts, courses }: NotesTabsProps) {
  const [activeTab, setActiveTab] = useState<'books' | 'podcasts' | 'courses'>('books');

  const tabs = [
    { id: 'books', label: 'Books' },
    { id: 'podcasts', label: 'Podcasts' },
    { id: 'courses', label: 'Courses' },
  ] as const;

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
              {books
                .slice()
                .sort((a, b) => b.rating - a.rating)
                .map((book, index) => (
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
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                          <Link 
                            href={`/notes/${book.slug}`}
                            className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                          >
                            {book.title}
                          </Link>
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-2">
                          {book.author}
                        </p>
                        <p className="text-gray-500 dark:text-gray-500 mb-4">
                          Read: {book.date} • Rating: {book.rating}/10
                        </p>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
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
                  <img
                    src={podcast.coverImage}
                    alt={podcast.title}
                    className="w-24 h-24 object-cover rounded-lg shadow-lg flex-shrink-0"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                      <Link 
                        href={`/notes/${podcast.slug}`}
                        className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        {podcast.title}
                      </Link>
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-2">
                      from {podcast.author}
                    </p>
                    <p className="text-gray-500 dark:text-gray-500 mb-3">
                      {podcast.date} • Rating: {podcast.rating}/10
                      {podcast.duration && ` • ${podcast.duration}`}
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                      {podcast.summary}
                      {podcast.url && (
                        <span className="ml-2">
                          <a
                            href={podcast.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
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
                  <img
                    src={course.coverImage}
                    alt={course.title}
                    className="w-24 h-24 object-cover rounded-lg shadow-lg flex-shrink-0"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                      <Link 
                        href={`/notes/${course.slug}`}
                        className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        {course.title}
                      </Link>
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-2">
                      by {course.author}
                    </p>
                    <p className="text-gray-500 dark:text-gray-500 mb-3">
                      {course.date} • Rating: {course.rating}/10
                      {course.duration && ` • ${course.duration}`}
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                      {course.summary}
                      {course.url && (
                        <span className="ml-2">
                          <a
                            href={course.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
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
            className="absolute top-1 bottom-1 bg-white dark:bg-gray-700 rounded-md shadow-sm transition-all duration-300 ease-in-out"
            style={{
              width: `${100 / tabs.length}%`,
              left: `${(tabs.findIndex(tab => tab.id === activeTab) * 100) / tabs.length}%`,
            }}
          />
          
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`relative z-10 flex-1 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                activeTab === tab.id
                  ? 'text-gray-900 dark:text-gray-100'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
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
                className={`w-full text-center px-3 py-2 rounded transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800'
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
