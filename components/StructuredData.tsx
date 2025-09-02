'use client'

import { usePathname } from 'next/navigation'

export default function StructuredData() {
  const pathname = usePathname()

  const generateStructuredData = () => {
    const baseUrl = 'https://umarbek.dev'
    const currentUrl = `${baseUrl}${pathname}`
    
    // Base organization data
    const organization = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Umarbek",
      "url": baseUrl,
      "description": "Writer, Developer, Thinker from Uzbekistan",
      "jobTitle": "Developer & Writer",
      "worksFor": {
        "@type": "Organization",
        "name": "Independent"
      },
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Tashkent",
        "addressCountry": "UZ"
      },
      "sameAs": [
        "https://github.com/UmarbekFU",
        "https://x.com/umarHQ"
      ]
    }

    // Page-specific structured data
    let pageData: any = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "url": currentUrl,
      "name": "Umarbek - Personal Website",
      "description": "Personal website of Umarbek, a developer and writer from Uzbekistan",
      "author": {
        "@type": "Person",
        "name": "Umarbek"
      },
      "publisher": {
        "@type": "Person",
        "name": "Umarbek"
      }
    }

    // Customize based on page type
    if (pathname === '/') {
      pageData = {
        ...pageData,
        "@type": "WebSite",
        "name": "Umarbek - Writer, Developer, Thinker",
        "description": "Hey! I'm Umarbek. Samarkand native, I now live in Tashkent, Uzbekistan. I write essays, build stuff, and take notes.",
        "potentialAction": {
          "@type": "SearchAction",
          "target": `${baseUrl}/api/search?q={search_term_string}`,
          "query-input": "required name=search_term_string"
        }
      }
    } else if (pathname.startsWith('/essays/')) {
      pageData = {
        ...pageData,
        "@type": "Article",
        "name": "Essay - " + pathname.split('/').pop(),
        "description": "An essay by Umarbek exploring ideas and concepts",
        "author": {
          "@type": "Person",
          "name": "Umarbek"
        },
        "publisher": {
          "@type": "Person",
          "name": "Umarbek"
        }
      }
    } else if (pathname.startsWith('/ai/')) {
      pageData = {
        ...pageData,
        "@type": "Article",
        "name": "Atomic Idea - " + pathname.split('/').pop(),
        "description": "An atomic idea by Umarbek - half-formed thoughts being worked through",
        "author": {
          "@type": "Person",
          "name": "Umarbek"
        },
        "publisher": {
          "@type": "Person",
          "name": "Umarbek"
        }
      }
    } else if (pathname.startsWith('/projects/')) {
      pageData = {
        ...pageData,
        "@type": "CreativeWork",
        "name": "Project - " + pathname.split('/').pop(),
        "description": "A project by Umarbek - things built and broken",
        "creator": {
          "@type": "Person",
          "name": "Umarbek"
        }
      }
    }

    return [organization, pageData]
  }

  const structuredData = generateStructuredData()

  return (
    <>
      {structuredData.map((data, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(data, null, 2)
          }}
        />
      ))}
    </>
  )
}
