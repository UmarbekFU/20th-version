'use client'

import { createContext, useContext, useState, ReactNode } from 'react'
import Search from './Search'
import PageErrorBoundary from './PageErrorBoundary'

interface SearchContextType {
  isSearchOpen: boolean
  openSearch: () => void
  closeSearch: () => void
}

const SearchContext = createContext<SearchContextType | undefined>(undefined)

export function useSearch() {
  const context = useContext(SearchContext)
  if (context === undefined) {
    throw new Error('useSearch must be used within a SearchProvider')
  }
  return context
}

interface SearchProviderProps {
  children: ReactNode
}

export default function SearchProvider({ children }: SearchProviderProps) {
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  const openSearch = () => setIsSearchOpen(true)
  const closeSearch = () => setIsSearchOpen(false)

  return (
    <SearchContext.Provider value={{ isSearchOpen, openSearch, closeSearch }}>
      {children}
      <PageErrorBoundary pageName="Search">
        <Search isOpen={isSearchOpen} onClose={closeSearch} />
      </PageErrorBoundary>
    </SearchContext.Provider>
  )
}
