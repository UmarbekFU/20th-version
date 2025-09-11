'use client'

import Navigation from '@/components/Navigation'
import PlumBackground from '@/components/PlumBackground'
import { Lora } from 'next/font/google'
import Link from 'next/link'
import { useState } from 'react'

const lora = Lora({ subsets: ['latin'], display: 'swap' })

export default function NotesPage() {
  const [activeCategory, setActiveCategory] = useState<'books' | 'podcasts' | 'courses'>('books')

  const books = [
    {
      title: "Antifragile",
      author: "Nassim Nicholas Taleb",
      date: "2024",
      rating: 9,
      slug: "antifragile",
      summary: "Things that gain from disorder. Taleb's framework for systems that benefit from volatility and uncertainty.",
      spineColor: "#D35D2D",
      textColor: "#FFF"
    },
    {
      title: "Thinking, Fast and Slow",
      author: "Daniel Kahneman", 
      date: "2024",
      rating: 10,
      slug: "thinking-fast-slow",
      summary: "The definitive work on human decision-making. Kahneman's Nobel Prize-winning insights on cognitive biases.",
      spineColor: "#E74C3C",
      textColor: "#FFF"
    }
  ]

  const podcasts = [
    {
      title: "The Knowledge Project",
      author: "Shane Parrish",
      date: "2024",
      rating: 9,
      slug: "knowledge-project",
      summary: "Conversations with the world's most interesting people about the ideas that shape their lives."
    }
  ]

  const courses = [
    {
      title: "Advanced React Patterns",
      author: "Kent C. Dodds",
      date: "2024", 
      rating: 9,
      slug: "react-patterns",
      summary: "An in-depth course covering advanced React patterns, performance optimization, and modern development practices."
    }
  ]

  const renderBookshelf = () => (
    <div className="relative mb-12">
      <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide">
        {books.map((book, index) => (
          <div key={book.slug} className="flex-shrink-0 group">
            <Link href={`/notes/${book.slug}`}>
              <div className="relative">
                {/* Book Spine */}
                <div 
                  className="w-12 h-48 flex items-center justify-center cursor-pointer transition-all duration-300 group-hover:scale-105"
                  style={{ backgroundColor: book.spineColor }}
                >
                  <span 
                    className="text-white text-xs font-medium writing-mode-vertical rotate-180"
                  >
                    {book.title}
                  </span>
                </div>
                {/* Book Cover (appears on hover) */}
                <div className="absolute top-0 left-12 w-32 h-48 bg-gray-200 dark:bg-gray-700 rounded-r-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -rotate-12 origin-left">
                  <div className="p-3 h-full flex flex-col justify-center">
                    <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-2 line-clamp-2">
                      {book.title}
                    </h3>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">
                      by {book.author}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-500">
                      {book.rating}/10
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )

  const renderContent = () => {
    switch (activeCategory) {
      case 'books':
        return (
          <div className="space-y-8">
            {renderBookshelf()}
            <div className="space-y-6">
              {books.map((book) => (
                <div key={book.slug} className="border-b border-gray-200 dark:border-gray-700 pb-6 last:border-b-0">
                  <div className="flex flex-col md:flex-row gap-6 items-start">
                    <div className="w-24 h-32 bg-gradient-to-br from-orange-400 to-red-600 rounded-lg shadow-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-lg font-bold">{book.title.charAt(0)}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-xl font-medium text-gray-900 dark:text-gray-100 mb-2 ${lora.className}`}>
                        <Link 
                          href={`/notes/${book.slug}`}
                          className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        >
                          {book.title}
                        </Link>
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-2">by {book.author}</p>
                      <p className="text-gray-500 dark:text-gray-500 mb-3">
                        Read: {book.date} • Rating: {book.rating}/10
                      </p>
                      <p className="text-gray-700 dark:text-gray-300">
                        {book.summary}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )
      case 'podcasts':
        return (
          <div className="space-y-6">
            {podcasts.map((podcast) => (
              <div key={podcast.slug} className="border-b border-gray-200 dark:border-gray-700 pb-6 last:border-b-0">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg shadow-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-lg font-bold">{podcast.title.charAt(0)}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-xl font-medium text-gray-900 dark:text-gray-100 mb-2 ${lora.className}`}>
                      <Link 
                        href={`/notes/${podcast.slug}`}
                        className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        {podcast.title}
                      </Link>
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-2">by {podcast.author}</p>
                    <p className="text-gray-500 dark:text-gray-500 mb-3">
                      {podcast.date} • Rating: {podcast.rating}/10
                    </p>
                    <p className="text-gray-700 dark:text-gray-300">
                      {podcast.summary}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )
      case 'courses':
        return (
          <div className="space-y-6">
            {courses.map((course) => (
              <div key={course.slug} className="border-b border-gray-200 dark:border-gray-700 pb-6 last:border-b-0">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-green-600 rounded-lg shadow-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-lg font-bold">{course.title.charAt(0)}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-xl font-medium text-gray-900 dark:text-gray-100 mb-2 ${lora.className}`}>
                      <Link 
                        href={`/notes/${course.slug}`}
                        className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        {course.title}
                      </Link>
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-2">by {course.author}</p>
                    <p className="text-gray-500 dark:text-gray-500 mb-3">
                      {course.date} • Rating: {course.rating}/10
                    </p>
                    <p className="text-gray-700 dark:text-gray-300">
                      {course.summary}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )
      default:
        return null
    }
  }

  return (
    <>
      <PlumBackground />
      <Navigation />
      <main className="min-h-screen pt-32">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex gap-8">
            {/* Main Content */}
            <div className="flex-1 min-w-0">
              <h1 className={`text-5xl font-bold text-gray-900 dark:text-gray-100 mb-8 ${lora.className}`}>
                Notes
              </h1>
              <p className={`text-xl text-gray-600 dark:text-gray-400 mb-12 ${lora.className}`}>
                Short pieces made me pause.
              </p>
              
              {renderContent()}
            </div>

            {/* Right Sidebar */}
            <div className="w-64 flex-shrink-0">
              <div className="sticky top-40">
                <h3 className={`text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4 ${lora.className}`}>
                  Categories
                </h3>
                <div className="space-y-2">
                  <button
                    onClick={() => setActiveCategory('books')}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                      activeCategory === 'books'
                        ? 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200'
                        : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                    }`}
                  >
                    Books
                  </button>
                  <button
                    onClick={() => setActiveCategory('podcasts')}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                      activeCategory === 'podcasts'
                        ? 'bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200'
                        : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                    }`}
                  >
                    Podcasts
                  </button>
                  <button
                    onClick={() => setActiveCategory('courses')}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                      activeCategory === 'courses'
                        ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200'
                        : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                    }`}
                  >
                    Courses
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}