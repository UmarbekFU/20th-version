'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SimpleNote } from '@/lib/types';

interface PaginatedNotesProps {
  initialNotes: SimpleNote[];
  category: 'book' | 'podcast' | 'course';
  initialTotal: number;
  initialHasMore: boolean;
}

interface NotesResponse {
  notes: SimpleNote[];
  total: number;
  hasMore: boolean;
  page: number;
  limit: number;
  error: string | null;
}

export function PaginatedNotes({ 
  initialNotes, 
  category, 
  initialTotal, 
  initialHasMore 
}: PaginatedNotesProps) {
  const [notes, setNotes] = useState<SimpleNote[]>(initialNotes);
  const [total, setTotal] = useState(initialTotal);
  const [hasMore, setHasMore] = useState(initialHasMore);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadMore = useCallback(async () => {
    if (isLoading || !hasMore) return;

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `/api/notes?category=${category}&page=${currentPage + 1}&limit=20`
      );
      
      if (!response.ok) {
        throw new Error(`Failed to load notes: ${response.status}`);
      }

      const data: NotesResponse = await response.json();
      
      if (data.error) {
        throw new Error(data.error);
      }

      setNotes(prev => [...prev, ...data.notes]);
      setTotal(data.total);
      setHasMore(data.hasMore);
      setCurrentPage(data.page);
    } catch (err) {
      console.error('Error loading more notes:', err);
      setError(err instanceof Error ? err.message : 'Failed to load more notes');
    } finally {
      setIsLoading(false);
    }
  }, [category, currentPage, hasMore, isLoading]);

  const renderNote = (note: SimpleNote, index: number) => {
    const isBook = category === 'book';
    const isPodcast = category === 'podcast';
    const isCourse = category === 'course';

    return (
      <div key={note.slug} className="border-b border-gray-200 dark:border-gray-700 pb-8 last:border-b-0">
        <div className="flex flex-col md:flex-row gap-6 items-start">
          <Image
            src={note.coverImage}
            alt={note.title}
            width={isBook ? 128 : 96}
            height={isBook ? 160 : 96}
            className={`${isBook ? 'w-24 h-32 md:w-32 md:h-40' : 'w-24 h-24'} object-cover rounded-lg shadow-lg flex-shrink-0`}
            priority={index < 3}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
          />
          <div className="flex-1">
            <h3 className="notes-title text-xl mb-3">
              <Link 
                href={`/notes/${note.slug}`}
                className="notes-text-primary hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {note.title}
              </Link>
            </h3>
            <p className="notes-meta notes-text-secondary mb-2">
              {isBook ? note.author : isPodcast ? `from ${note.author}` : `by ${note.author}`}
            </p>
            <p className="notes-meta notes-text-muted mb-3">
              Rating: {note.rating}/10
              {note.duration && ` • ${note.duration}`}
            </p>
            <p className="notes-summary mb-3">
              {note.summary}
              {note.url && (
                <span className="ml-2">
                  <a
                    href={note.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors font-medium"
                  >
                    {isBook ? 'Read' : isPodcast ? 'Listen' : 'Take Course'}
                  </a>
                </span>
              )}
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-8">
      {/* Notes List */}
      <div className="space-y-8">
        {notes.map(renderNote)}
      </div>

      {/* Load More Button */}
      {hasMore && (
        <div className="text-center pt-8">
          <button
            onClick={loadMore}
            disabled={isLoading}
            className="px-6 py-3 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Loading...' : `Load More (${total - notes.length} remaining)`}
          </button>
        </div>
      )}

      {/* Error Message */}
      {error && (
        <div className="text-center py-8">
          <p className="text-red-500 dark:text-red-400 mb-4">{error}</p>
          <button
            onClick={loadMore}
            className="px-4 py-2 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300 rounded hover:bg-red-200 dark:hover:bg-red-800 transition-colors"
          >
            Try Again
          </button>
        </div>
      )}

      {/* Results Count */}
      <div className="text-center text-sm text-gray-500 dark:text-gray-400 pt-4">
        Showing {notes.length} of {total} {category}s
      </div>
    </div>
  );
}
