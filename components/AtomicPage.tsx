import Navigation from '@/components/Navigation'
import PlumBackground from '@/components/PlumBackground'
import TwitterComments from '@/components/TwitterComments'
import Link from 'next/link'
import { ReactNode } from 'react'

interface AtomicPageProps {
  title: string
  date: string
  children: ReactNode
  twitterTitle?: string
  translations?: Array<{
    language: string
    href: string
  }>
  showBackLink?: boolean
}

export default function AtomicPage({
  title,
  date,
  children,
  twitterTitle,
  translations = [],
  showBackLink = false
}: AtomicPageProps) {
  return (
    <>
      <PlumBackground />
      <Navigation />
      <main className="min-h-screen pt-32">
        <div className="max-w-3xl mx-auto px-8">
          {/* Atomic Idea Header */}
          <header className="mb-12">
            <div className="text-sm text-gray-500 dark:text-gray-400 mb-4 font-sans">
              {date}
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6 font-sans">
              {title}
            </h1>
            <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 font-sans">
              <span>Atomic Ideas</span>
            </div>
          </header>

          {/* Atomic Idea Content */}
          <article className="prose prose-lg dark:prose-invert max-w-none">
            {children}
          </article>

          {/* Twitter Comments */}
          {twitterTitle && (
            <TwitterComments title={twitterTitle} />
          )}

          {/* Translations or Back Link */}
          {(translations.length > 0 || showBackLink) && (
            <section className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
              <p className="text-gray-600 dark:text-gray-400 font-sans">
                {showBackLink && (
                  <Link href="/ai" className="text-blue-600 dark:text-blue-400 hover:underline">
                    ← Back to Atomic Ideas
                  </Link>
                )}
                {translations.length > 0 && (
                  <>
                    {showBackLink && <br />}
                    Read in: {translations.map((translation, index) => (
                      <span key={index}>
                        <Link 
                          href={translation.href} 
                          className="text-blue-600 dark:text-blue-400 hover:underline"
                        >
                          {translation.language}
                        </Link>
                        {index < translations.length - 1 && ', '}
                      </span>
                    ))}
                  </>
                )}
              </p>
            </section>
          )}
        </div>
      </main>
    </>
  )
}

// Reusable styled components for consistent atomic page content
export const AtomicParagraph = ({ 
  children, 
  className = "", 
  size = "base" 
}: { 
  children: ReactNode
  className?: string
  size?: "xl" | "base" | "sm"
}) => {
  const sizeClasses = {
    xl: "text-xl leading-relaxed mb-8",
    base: "mb-6",
    sm: "text-sm mb-4"
  }
  
  return (
    <p className={`text-gray-700 dark:text-gray-300 font-sans ${sizeClasses[size]} ${className}`}>
      {children}
    </p>
  )
}

export const AtomicHeading = ({ 
  children, 
  level = 2, 
  className = "" 
}: { 
  children: ReactNode
  level?: 2 | 3
  className?: string
}) => {
  const HeadingTag = level === 2 ? 'h2' : 'h3'
  const sizeClasses = level === 2 ? "text-2xl font-bold mt-12 mb-8" : "text-sm font-semibold mb-3"
  
  return (
    <HeadingTag className={`text-gray-900 dark:text-gray-100 font-sans ${sizeClasses} ${className}`}>
      {children}
    </HeadingTag>
  )
}

export const AtomicQuote = ({ 
  children, 
  className = "" 
}: { 
  children: ReactNode
  className?: string
}) => {
  return (
    <div className={`border-l-4 border-blue-500 pl-6 my-12 ${className}`}>
      <p className="text-gray-700 dark:text-gray-300 mb-4 font-sans">
        {children}
      </p>
    </div>
  )
}

export const AtomicQuoteText = ({ 
  children, 
  className = "" 
}: { 
  children: ReactNode
  className?: string
}) => {
  return (
    <p className={`text-gray-600 dark:text-gray-400 italic font-sans ${className}`}>
      {children}
    </p>
  )
}
