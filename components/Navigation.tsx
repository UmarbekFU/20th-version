'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { Github, Mail, RotateCcw, Search } from 'lucide-react'
import { useEffect } from 'react'
import { useSearch } from './SearchProvider'

/**
 * Social media links configuration
 * Each link includes name, href, and icon component
 */
const socialLinks = [
  { name: 'GitHub', href: 'https://github.com/UmarbekFU', icon: Github },
  { name: 'X', href: 'https://x.com/umarHQ', icon: 'X' },
  { name: 'Email', href: 'mailto:u.umarov.pro@gmail.com', icon: Mail },
]

/**
 * Simple Navigation Component
 * 
 * Features:
 * - Social media links with hover animations
 * - Go back button (hidden on homepage)
 * - Clean, minimal design
 * 
 * @returns JSX.Element
 */
export default function Navigation() {
  const pathname = usePathname()
  const router = useRouter()
  const isHomePage = pathname === '/'
  const { openSearch } = useSearch()

  // Keyboard shortcut for search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault()
        openSearch()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [openSearch])

  const goBack = () => {
    if (typeof window !== 'undefined') {
      const referrer = document.referrer
      const isFromSameSite = referrer && referrer.includes(window.location.hostname)
      
      if (isFromSameSite || window.history.length > 1) {
        router.back()
      } else {
        router.push('/')
      }
    } else {
      router.push('/')
    }
  }

  return (
    <>
      {/* Go Back Navigation - Hidden on homepage */}
      {!isHomePage && (
        <div className="fixed top-4 left-4 sm:top-6 sm:left-6 z-30">
          <button 
            onClick={goBack}
            className="group flex items-center gap-2 px-2 py-2 sm:px-3 sm:py-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-full text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-300 dark:hover:border-blue-500 transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-md"
            title="Go back to previous page"
          >
            <RotateCcw className="w-3 h-3 sm:w-4 sm:h-4 group-hover:rotate-180 transition-transform duration-300" />
            <span className="hidden sm:inline">Go back</span>
          </button>
        </div>
      )}

      {/* Right Social Links - Clean icons with no card/box styling */}
      <div className="fixed right-4 top-4 sm:right-8 sm:top-8 z-30">
        <div className="flex flex-col gap-4 sm:gap-6">
          {socialLinks.map((link) => {
            if (link.icon === 'X') {
              return (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 sm:p-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:rotate-12 active:rotate-45 hover:scale-110 flex items-center justify-center"
                  title={link.name}
                >
                  <span className="text-lg sm:text-xl font-bold">𝕏</span>
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
                className="p-1.5 sm:p-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:rotate-12 active:rotate-45 hover:scale-110"
                title={link.name}
              >
                <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
            )
          })}

          {/* Search Button */}
          <button
            onClick={openSearch}
            className="p-1.5 sm:p-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:rotate-12 active:rotate-45 hover:scale-110"
            title="Search (⌘K)"
          >
            <Search className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>
      </div>
    </>
  )
}
