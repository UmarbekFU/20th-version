'use client'

import { Sun, Moon } from 'lucide-react'
import { useTheme } from './ThemeProvider'

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme()

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }

  const getIcon = () => {
    if (resolvedTheme === 'light') {
      return <Moon className="w-5 h-5" />
    } else {
      return <Sun className="w-5 h-5" />
    }
  }

  const getTitle = () => {
    if (resolvedTheme === 'light') {
      return 'Switch to dark mode'
    } else {
      return 'Switch to light mode'
    }
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:rotate-12 active:rotate-45 hover:scale-110"
      title={getTitle()}
    >
      {getIcon()}
    </button>
  )
}
