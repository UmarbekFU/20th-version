import { Metadata } from 'next'

interface PageMetadata {
  title: string
  description: string
  keywords?: string[]
  openGraph?: {
    title?: string
    description?: string
    type?: string
    url?: string
  }
}

export function generateMetadata(page: string, customData?: Partial<PageMetadata>): Metadata {
  const baseUrl = 'https://umarbek.dev'
  const currentUrl = `${baseUrl}${page}`
  
  // Default metadata
  const defaultData: PageMetadata = {
    title: 'Umarbek',
    description: 'Hey! I\'m Umarbek. Samarkand native, I now live in Tashkent, Uzbekistan. I write essays, build stuff, and take notes.',
    keywords: ['developer', 'writer', 'blog', 'portfolio', 'personal website', 'Uzbekistan', 'Tashkent', 'Samarkand'],
    openGraph: {
      title: 'Umarbek',
      description: 'Hey! I\'m Umarbek. Samarkand native, I now live in Tashkent, Uzbekistan.',
      type: 'website',
      url: currentUrl
    }
  }

  // Page-specific metadata
  const pageMetadata: Record<string, PageMetadata> = {
    '/': {
      title: 'Umarbek',
      description: 'Hey! I\'m Umarbek. Samarkand native, I now live in Tashkent, Uzbekistan. I write essays, build stuff, and take notes.',
      keywords: ['developer', 'writer', 'blog', 'portfolio', 'personal website', 'Uzbekistan', 'Tashkent', 'Samarkand'],
      openGraph: {
        title: 'Umarbek',
        description: 'Hey! I\'m Umarbek. Samarkand native, I now live in Tashkent, Uzbekistan.',
        type: 'website',
        url: currentUrl
      }
    },
    '/about': {
      title: 'About Me - Umarbek',
      description: 'Personal background and philosophy of Umarbek, a developer and writer from Uzbekistan.',
      keywords: ['about', 'personal', 'background', 'philosophy', 'values', 'developer', 'writer'],
      openGraph: {
        title: 'About Me - Umarbek',
        description: 'Personal background and philosophy of Umarbek, a developer and writer from Uzbekistan.',
        type: 'profile',
        url: currentUrl
      }
    },
    '/now': {
      title: 'Now - Umarbek',
      description: 'What I am doing now and what I am not doing. Current activities, focus, and trends.',
      keywords: ['now', 'current', 'activities', 'focus', 'trends', 'what I\'m doing'],
      openGraph: {
        title: 'Now - Umarbek',
        description: 'What I am doing now and what I am not doing. Current activities, focus, and trends.',
        type: 'article',
        url: currentUrl
      }
    },
    '/essays': {
      title: 'Essays - Umarbek',
      description: 'Collection of essays and thoughts on various topics. I write essays when I try to explain something to myself.',
      keywords: ['essays', 'writing', 'thinking', 'ideas', 'learning', 'articles'],
      openGraph: {
        title: 'Essays - Umarbek',
        description: 'Collection of essays and thoughts on various topics.',
        type: 'website',
        url: currentUrl
      }
    },
    '/ai': {
      title: 'Atomic Ideas - Umarbek',
      description: 'Half-formed thoughts I am working through. Smallest units of thought that stand alone.',
      keywords: ['atomic ideas', 'thoughts', 'collaboration', 'feedback', 'growth', 'ideas'],
      openGraph: {
        title: 'Atomic Ideas - Umarbek',
        description: 'Half-formed thoughts I am working through.',
        type: 'website',
        url: currentUrl
      }
    },
    '/ai/emf': {
      title: 'Everything is my fault - Atomic Idea',
      description: 'Taking responsibility and preserving agency. When everything is your fault, you stop being a victim.',
      keywords: ['responsibility', 'agency', 'fault', 'control', 'power', 'atomic idea'],
      openGraph: {
        title: 'Everything is my fault - Atomic Idea',
        description: 'Taking responsibility and preserving agency.',
        type: 'article',
        url: currentUrl
      }
    },
    '/ai/jdm': {
      title: 'Just do more - Atomic Idea',
      description: 'Why business leads to technology, which leads to science. The 100x principle and the power of iteration over perfection.',
      keywords: ['trial', 'error', 'iteration', 'business', 'technology', 'science', '100x', 'principle', 'action'],
      openGraph: {
        title: 'Just do more - Atomic Idea',
        description: 'Why business leads to technology, which leads to science. The 100x principle and the power of iteration.',
        type: 'article',
        url: currentUrl
      }
    },
    '/projects': {
      title: 'Projects - Umarbek',
      description: 'Things I have built and broken. Projects, experiments, and learning experiences.',
      keywords: ['projects', 'building', 'solving', 'experiments', 'learning', 'portfolio'],
      openGraph: {
        title: 'Projects - Umarbek',
        description: 'Things I have built and broken. Projects, experiments, and learning experiences.',
        type: 'website',
        url: currentUrl
      }
    },
    '/projects/this-website': {
      title: 'This Website - Project',
      description: 'My personal website built with Next.js and Tailwind CSS. A real place for my thoughts and projects.',
      keywords: ['website', 'nextjs', 'tailwind', 'personal', 'portfolio', 'project'],
      openGraph: {
        title: 'This Website - Project',
        description: 'My personal website built with Next.js and Tailwind CSS.',
        type: 'article',
        url: currentUrl
      }
    },
    '/questions': {
      title: 'Questions - Umarbek',
      description: 'Questions I am asking myself. A collection of thought-provoking questions about life, work, and the world.',
      keywords: ['questions', 'thinking', 'exploring', 'curiosity', 'understanding', 'philosophy'],
      openGraph: {
        title: 'Questions - Umarbek',
        description: 'Questions I am asking myself. A collection of thought-provoking questions.',
        type: 'website',
        url: currentUrl
      }
    },
    '/tweets': {
      title: 'Tweets - Umarbek',
      description: 'My thoughts in 280 characters or less. Short insights, observations, and ideas.',
      keywords: ['tweets', 'thoughts', 'brevity', 'insights', 'observations', 'twitter'],
      openGraph: {
        title: 'Tweets - Umarbek',
        description: 'My thoughts in 280 characters or less.',
        type: 'website',
        url: currentUrl
      }
    },
    '/contact': {
      title: 'Contact - Umarbek',
      description: 'Get in touch with me. Email, coffee, work together in Tashkent.',
      keywords: ['contact', 'email', 'coffee', 'work', 'tashkent', 'collaboration'],
      openGraph: {
        title: 'Contact - Umarbek',
        description: 'Get in touch with me. Email, coffee, work together in Tashkent.',
        type: 'website',
        url: currentUrl
      }
    }
  }

  const data = { ...defaultData, ...pageMetadata[page], ...customData }

  return {
    title: data.title,
    description: data.description,
    keywords: data.keywords?.join(', '),
    authors: [{ name: 'Umarbek' }],
    creator: 'Umarbek',
    openGraph: {
      title: data.openGraph?.title || data.title,
      description: data.openGraph?.description || data.description,
      type: (data.openGraph?.type as 'website' | 'article') || 'website',
      url: data.openGraph?.url || currentUrl,
      siteName: 'Umarbek',
      locale: 'en_US',
    },
    twitter: {
      card: 'summary',
      title: data.title,
      description: data.description,
      creator: '@umarHQ',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: currentUrl,
    },
  }
}
