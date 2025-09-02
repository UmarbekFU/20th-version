'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { Github, Mail, Search, RotateCcw } from 'lucide-react'
import { useState, useEffect } from 'react'

const socialLinks = [
  { name: 'GitHub', href: 'https://github.com/UmarbekFU', icon: Github },
  { name: 'Email', href: 'mailto:u.umarov.pro@gmail.com', icon: Mail },
  { name: 'X', href: 'https://x.com/umarHQ', icon: 'X' },
]

interface SearchResult {
  path: string
  title: string
  description: string
  content: string
  score: number
  matches: string[]
}

export default function Navigation() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState<SearchResult[]>([])
  const [isSearching, setIsSearching] = useState(false)
  const pathname = usePathname()
  const router = useRouter()
  const isHomePage = pathname === '/'

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault()
        setIsSearchOpen(true)
      }
      if (e.key === 'Escape' && isSearchOpen) {
        setIsSearchOpen(false)
        setSearchQuery('')
        setSearchResults([])
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isSearchOpen])

  // Search function
  const performSearch = async (query: string) => {
    if (!query.trim() || query.length < 2) {
      setSearchResults([])
      return
    }

    setIsSearching(true)
    try {
      const response = await fetch(`/api/search?q=${encodeURIComponent(query)}`)
      const data = await response.json()
      setSearchResults(data.results || [])
    } catch (error) {
      console.error('Search error:', error)
      setSearchResults([])
    } finally {
      setIsSearching(false)
    }
  }

  // Debounced search
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (searchQuery) {
        performSearch(searchQuery)
      } else {
        setSearchResults([])
      }
    }, 300)

    return () => clearTimeout(timeoutId)
  }, [searchQuery])

  const handleSearchClose = () => {
    setIsSearchOpen(false)
    setSearchQuery('')
    setSearchResults([])
  }

  const handleResultClick = (path: string) => {
    handleSearchClose()
    // Navigate to the result
    window.location.href = path
  }

  const goBack = () => {
    // Use Next.js router for better navigation handling
    if (window.history.length > 1) {
      router.back()
    } else {
      // Fallback to home page if no previous page
      router.push('/')
    }
  }

  return (
    <>
      {/* Go Back Navigation - Hidden on homepage */}
      {!isHomePage && (
        <div className="fixed top-6 left-6 z-30">
          <button 
            onClick={goBack}
            className="group flex items-center gap-2 px-3 py-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-300 dark:hover:border-blue-500 transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-md"
            title="Go back to previous page"
          >
            <RotateCcw className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
            <span className="hidden sm:inline">Go back</span>
          </button>
        </div>
      )}

      {/* Right Social Links - Clean icons with no card/box styling */}
      <div className="fixed right-8 top-8 z-30">
        <div className="flex flex-col gap-6">
          {socialLinks.map((link) => {
            if (link.icon === 'X') {
              return (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:rotate-12 active:rotate-45 hover:scale-110 flex items-center justify-center"
                  title={link.name}
                >
                  <span className="text-xl font-bold">𝕏</span>
                </a>
              )
            }
            
            const Icon = link.icon
            return (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:rotate-12 active:rotate-45 hover:scale-110"
                title={link.name}
              >
                <Icon className="w-6 h-6" />
              </a>
            )
          })}
        </div>
      </div>

      {/* Search Button - Positioned closer to social icons, no card/box styling */}
      <div className="fixed right-8 top-56 z-30">
        <button
          onClick={() => setIsSearchOpen(true)}
          className="p-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:rotate-12 active:rotate-45 hover:scale-110"
          title="Search (⌘K)"
        >
          <Search className="w-6 h-6" />
        </button>
      </div>

      {/* Search Modal */}
      {isSearchOpen && (
        <div className="fixed inset-0 bg-black/20 dark:bg-black/50 backdrop-blur-sm z-50 flex items-start justify-center pt-20">
          <div className="w-full max-w-2xl mx-6">
            <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-lg p-4">
              {/* Search Input */}
              <div className="flex items-center gap-3 mb-4">
                <Search className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                <input
                  type="text"
                  placeholder="Search essays, projects, notes..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 bg-transparent text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 outline-none"
                  autoFocus
                />
                <button
                  onClick={handleSearchClose}
                  className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 px-2 py-1 rounded"
                  title="Close search (ESC)"
                >
                  ESC
                </button>
              </div>

              {/* Search Results */}
              <div className="max-h-96 overflow-y-auto">
                {isSearching && (
                  <div className="text-center py-8">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-2"></div>
                    <p className="text-gray-500 dark:text-gray-400">Searching...</p>
                  </div>
                )}

                {!isSearching && searchQuery && searchResults.length === 0 && (
                  <div className="text-center py-8">
                    <p className="text-gray-500 dark:text-gray-400">No results found for "{searchQuery}"</p>
                    <p className="text-sm text-gray-400 dark:text-gray-500 mt-1">Try different keywords</p>
                  </div>
                )}

                {!isSearching && searchResults.length > 0 && (
                  <div className="space-y-2">
                    <div className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                      Found {searchResults.length} result{searchResults.length !== 1 ? 's' : ''} for "{searchQuery}"
                    </div>
                    {searchResults.map((result, index) => (
                      <div
                        key={result.path}
                        onClick={() => handleResultClick(result.path)}
                        className="p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer transition-colors border border-transparent hover:border-gray-200 dark:hover:border-gray-600"
                      >
                        <div className="mb-2">
                          <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                            {result.title}
                          </h3>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                          {result.description}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
                          {result.content}
                        </p>
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-gray-400 dark:text-gray-500">
                            {result.path}
                          </span>
                          {result.matches.length > 0 && (
                            <div className="flex gap-1">
                              {result.matches.slice(0, 3).map((match, i) => (
                                <span
                                  key={i}
                                  className="text-xs bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded"
                                >
                                  {match}
                                </span>
                              ))}
                              {result.matches.length > 3 && (
                                <span className="text-xs text-gray-400 dark:text-gray-500">
                                  +{result.matches.length - 3} more
                                </span>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {!searchQuery && (
                  <div className="text-center py-8">
                    <Search className="w-12 h-12 text-gray-300 dark:text-gray-600 mx-auto mb-3" />
                    <p className="text-gray-500 dark:text-gray-400">Start typing to search</p>
                    <p className="text-sm text-gray-400 dark:text-gray-500 mt-1">Search through essays, projects, notes, and more</p>
                  </div>
                )}
              </div>

              {/* Search Tips */}
              <div className="text-xs text-gray-500 dark:text-gray-400 mt-4 pt-3 border-t border-gray-200 dark:border-gray-700">
                <p>Press ESC to close • Use ⌘K to open search</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
