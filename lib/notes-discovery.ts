// Note discovery system - finds individual note files
import { noteMetadata as reactPatterns } from '@/app/notes/react-patterns/page'
import { noteMetadata as knowledgeProject } from '@/app/notes/knowledge-project/page'
import { noteMetadata as thinkingFastSlow } from '@/app/notes/thinking-fast-slow/page'

export interface NoteMetadata {
  title: string
  author: string
  date: string
  rating: number
  category: 'book' | 'podcast' | 'course' | 'video' | 'essay' | 'documentary'
  summary: string
  spineColor: string
  textColor: string
  coverImage: string
  duration?: string
  url?: string
  slug: string
}

// All available notes - manually maintained for now
const allNotes: NoteMetadata[] = [
  {
    ...reactPatterns,
    slug: 'react-patterns'
  },
  {
    ...knowledgeProject,
    slug: 'knowledge-project'
  },
  {
    ...thinkingFastSlow,
    slug: 'thinking-fast-slow'
  }
]

export function getAllNotes(): NoteMetadata[] {
  return allNotes
}

export function getNoteBySlug(slug: string): NoteMetadata | undefined {
  return allNotes.find(note => note.slug === slug)
}

export function getNotesByCategory(category: NoteMetadata['category']): NoteMetadata[] {
  return allNotes.filter(note => note.category === category)
}

export function getCategoryIcon(category: NoteMetadata['category']): string {
  const icons: Record<NoteMetadata['category'], string> = {
    book: '📚',
    podcast: '🎧',
    course: '🎓',
    video: '🎥',
    essay: '📝',
    documentary: '🎬'
  }
  
  return icons[category] || '📄'
}
