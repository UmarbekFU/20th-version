import { MetadataRoute } from 'next'
import { discoverNotes } from '@/lib/noteDiscovery'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://umarbek.dev'
  
  // Define static pages
  const staticPages = [
    '',
    '/about',
    '/now',
    '/contact',
    '/essays',
    '/projects',
    '/projects/tw',
    '/notes',
    '/list',
    '/list/movies',
    '/list/podcasts',
    '/list/tio',
    '/scrapbook',
    '/photos',
    '/naq',
    '/tweets',
    '/questions',
    '/lc',
    '/yr',
    '/yr/2025',
    '/secret',
    '/disclaimer',
    '/ai',
    '/ai/emf',
    '/ai/jdm',
    '/uses',
    '/more'
  ]

  // Get all notes dynamically
  let notes: any[] = []
  try {
    notes = discoverNotes()
  } catch (error) {
    console.warn('Failed to discover notes for sitemap:', error)
  }

  // Create note pages
  const notePages = notes.map(note => ({
    url: `${baseUrl}/notes/${note.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Combine all pages
  const allPages = [
    ...staticPages.map((page) => ({
      url: `${baseUrl}${page}`,
      lastModified: new Date(),
      changeFrequency: page === '' ? 'daily' as const : 'weekly' as const,
      priority: page === '' ? 1 : page.startsWith('/ai/') || page.startsWith('/essays/') ? 0.8 : 0.6,
    })),
    ...notePages
  ]

  return allPages
}
