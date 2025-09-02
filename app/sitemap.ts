import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://umarbek.dev'
  
  // Define all your pages
  const pages = [
    '',
    '/about',
    '/now',
    '/contact',
    '/essays',
    '/projects',
    '/projects/this-website',
    '/notes',
    '/list',
    '/list/movies',
    '/list/podcasts',
    '/list/things-i-own',
    '/scrapbook',
    '/photos',
    '/naq',
    '/tweets',
    '/questions',
    '/life-calendar',
    '/year-review',
    '/year-review/2025',
    '/secret',
    '/disclaimer',
    '/atomic-ideas',
    '/atomic-ideas/everything-is-my-fault',
    '/atomic-ideas/just-do-more',
    '/uses',
    '/more'
  ]

  return pages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: page === '' ? 'daily' : 'weekly',
    priority: page === '' ? 1 : page.startsWith('/atomic-ideas/') || page.startsWith('/essays/') ? 0.8 : 0.6,
  }))
}
