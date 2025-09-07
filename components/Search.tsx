'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Search as SearchIcon } from 'lucide-react'

/**
 * Search result interface for type safety
 */
interface SearchResult {
  path: string
  title: string
  description: string
  content: string
  score: number
  matches: string[]
}

/**
 * Standalone Search Component
 * 
 * Features:
 * - Keyboard shortcut (⌘K) to open
 * - Debounced search with abort controller
 * - Simple, focused design
 * - No external dependencies beyond Next.js
 * 
 * @param isOpen - Whether the search modal is open
 * @param onClose - Function to call when closing the search
 * @returns JSX.Element
 */
interface SearchProps {
  isOpen: boolean
  onClose: () => void
}

export default function Search({ isOpen, onClose }: SearchProps) {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchResult[]>([])
  const [isSearching, setIsSearching] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [abortController, setAbortController] = useState<AbortController | null>(null)
  const router = useRouter()

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        handleClose()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen])

  // Search function
  const performSearch = async (searchQuery: string) => {
    if (!searchQuery.trim() || searchQuery.length < 2) {
      setResults([])
      setError(null)
      return
    }

    // Cancel previous request
    if (abortController) {
      abortController.abort()
    }

    const controller = new AbortController()
    setAbortController(controller)

    setIsSearching(true)
    setError(null)
    
    try {
      const response = await fetch(`/api/search?q=${encodeURIComponent(searchQuery)}`, {
        signal: controller.signal
      })
      
      if (!response.ok) {
        throw new Error(`Search failed: ${response.status}`)
      }
      
      const data = await response.json()
      
      if (data.error) {
        throw new Error(data.error)
      }
      
      setResults(data.results || [])
    } catch (error) {
      if (error instanceof Error && error.name === 'AbortError') {
        return
      }
      console.error('Search error:', error)
      setResults([])
      setError('Search temporarily unavailable')
    } finally {
      setIsSearching(false)
      setAbortController(null)
    }
  }

  // Debounced search
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (query) {
        performSearch(query)
      } else {
        setResults([])
      }
    }, 300)

    return () => clearTimeout(timeoutId)
  }, [query])

  const handleClose = () => {
    if (abortController) {
      abortController.abort()
      setAbortController(null)
    }
    
    setQuery('')
    setResults([])
    setError(null)
    onClose()
  }

  const handleResultClick = (path: string) => {
    handleClose()
    router.push(path)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/20 dark:bg-black/50 backdrop-blur-sm z-50 flex items-start justify-center pt-16 sm:pt-20">
      <div className="w-full max-w-2xl mx-4 sm:mx-6">
        <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-lg p-4">
          {/* Search Input */}
          <div className="flex items-center gap-3 mb-4">
            <SearchIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
            <input
              type="text"
              placeholder="Search essays, projects, notes..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="flex-1 bg-transparent text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 outline-none"
              autoFocus
            />
            <button
              onClick={handleClose}
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

            {!isSearching && error && (
              <div className="text-center py-8">
                <p className="text-red-500 dark:text-red-400">{error}</p>
              </div>
            )}

            {!isSearching && !error && query && results.length === 0 && (
              <div className="text-center py-8">
                <p className="text-gray-500 dark:text-gray-400">No results found for "{query}"</p>
              </div>
            )}

            {!isSearching && results.length > 0 && (
              <div className="space-y-2">
                <div className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                  Found {results.length} result{results.length !== 1 ? 's' : ''}
                </div>
                {results.map((result) => (
                  <div
                    key={result.path}
                    onClick={() => handleResultClick(result.path)}
                    className="p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer transition-colors"
                  >
                    <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">
                      {result.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                      {result.description}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {result.path}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {!query && (
              <div className="text-center py-8">
                <SearchIcon className="w-12 h-12 text-gray-300 dark:text-gray-600 mx-auto mb-3" />
                <p className="text-gray-500 dark:text-gray-400">Start typing to search</p>
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
  )
}
