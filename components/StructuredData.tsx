'use client'

import { usePathname } from 'next/navigation'

export default function StructuredData() {
  const pathname = usePathname()
  
  const baseUrl = 'https://umarbek.dev'
  const currentUrl = `${baseUrl}${pathname}`
  
  // Base organization data
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Umarbek",
    "url": baseUrl,
    "description": "Writer, Developer, Thinker from Samarkand, Uzbekistan",
    "jobTitle": "Developer & Writer",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Tashkent",
      "addressCountry": "UZ"
    },
    "sameAs": [
      "https://github.com/UmarbekFU",
      "https://x.com/umarHQ"
    ],
    "knowsAbout": [
      "Web Development",
      "Writing",
      "Technology",
      "Personal Development"
    ]
  }

  // Website data
  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Umarbek - Writer, Developer, Thinker",
    "url": baseUrl,
    "description": "Personal website of Umarbek - a developer and writer from Uzbekistan",
    "author": {
      "@type": "Person",
      "name": "Umarbek"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${baseUrl}/api/search?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  }

  // Article data for atomic ideas and essays
  const getArticleData = () => {
    if (pathname.includes('/atomic-ideas/') && pathname !== '/atomic-ideas') {
      const title = pathname.includes('everything-is-my-fault') 
        ? 'Everything is my fault' 
        : pathname.includes('just-do-more')
        ? 'Just do more'
        : 'Atomic Idea'
      
      return {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": title,
        "url": currentUrl,
        "author": {
          "@type": "Person",
          "name": "Umarbek"
        },
        "publisher": {
          "@type": "Person",
          "name": "Umarbek"
        },
        "datePublished": "2025-09-02",
        "dateModified": "2025-09-02",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": currentUrl
        }
      }
    }
    return null
  }

  const articleData = getArticleData()

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationData)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteData)
        }}
      />
      {articleData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(articleData)
          }}
        />
      )}
    </>
  )
}
