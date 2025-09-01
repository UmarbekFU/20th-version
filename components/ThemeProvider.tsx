'use client'

import { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'light' | 'dark' | 'system'

interface ThemeContextType {
  theme: Theme
  setTheme: (theme: Theme) => void
  resolvedTheme: 'light' | 'dark'
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('system')
  const [resolvedTheme, setResolvedTheme] = useState<'light' | 'dark'>('light')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Get theme from localStorage or default to system
    const savedTheme = localStorage.getItem('theme') as Theme
    if (savedTheme && ['light', 'dark'].includes(savedTheme)) {
      setTheme(savedTheme)
    } else {
      // Default to system if no saved preference or invalid value
      setTheme('system')
    }
  }, [])

  useEffect(() => {
    if (!mounted) return

    const root = document.documentElement
    
    // Remove existing classes
    root.classList.remove('light', 'dark')
    
    if (theme === 'system') {
      // Check system preference
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
      root.classList.add(systemTheme)
      setResolvedTheme(systemTheme)
    } else {
      root.classList.add(theme)
      setResolvedTheme(theme)
    }
    
    // Save to localStorage
    try {
      localStorage.setItem('theme', theme)
    } catch (e) {
      // Handle localStorage errors (e.g., in private browsing)
      console.warn('Could not save theme preference to localStorage')
    }
  }, [theme, mounted])

  useEffect(() => {
    if (!mounted) return

    // Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    
    const handleChange = () => {
      if (theme === 'system') {
        const systemTheme = mediaQuery.matches ? 'dark' : 'light'
        setResolvedTheme(systemTheme)
        document.documentElement.classList.remove('light', 'dark')
        document.documentElement.classList.add(systemTheme)
      }
    }
    
    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [theme, mounted])

  // Prevent hydration mismatch
  if (!mounted) {
    return <div style={{ visibility: 'hidden' }}>{children}</div>
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme, resolvedTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
