// Simple in-memory cache for development
// In production, consider using Redis or similar

interface CacheItem<T> {
  data: T
  timestamp: number
  ttl: number
}

class MemoryCache {
  private cache = new Map<string, CacheItem<any>>()

  set<T>(key: string, data: T, ttlMs: number = 5 * 60 * 1000): void {
    this.cache.set(key, {
      data,
      timestamp: Date.now(),
      ttl: ttlMs
    })
  }

  get<T>(key: string): T | null {
    const item = this.cache.get(key)
    
    if (!item) {
      return null
    }

    const now = Date.now()
    if (now - item.timestamp > item.ttl) {
      this.cache.delete(key)
      return null
    }

    return item.data
  }

  delete(key: string): boolean {
    return this.cache.delete(key)
  }

  clear(): void {
    this.cache.clear()
  }

  // Clean up expired items
  cleanup(): void {
    const now = Date.now()
    const keysToDelete: string[] = []
    
    this.cache.forEach((item, key) => {
      if (now - item.timestamp > item.ttl) {
        keysToDelete.push(key)
      }
    })
    
    keysToDelete.forEach(key => this.cache.delete(key))
  }
}

const cache = new MemoryCache()

// Clean up expired items every 5 minutes
if (typeof window === 'undefined') {
  setInterval(() => {
    cache.cleanup()
  }, 5 * 60 * 1000)
}

export default cache

// Cache keys
export const CACHE_KEYS = {
  ALL_NOTES: 'all_notes',
  NOTES_BY_CATEGORY: (category: string) => `notes_category_${category}`,
  NOTES_SEARCH: (query: string) => `notes_search_${query}`,
  NOTE_BY_SLUG: (slug: string) => `note_slug_${slug}`,
  PAGINATED_NOTES: (page: number, filters: string) => `notes_paginated_${page}_${filters}`,
} as const
