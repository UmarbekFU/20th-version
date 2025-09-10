// Simple type definitions - no dependencies on centralized data
export interface SimpleNote {
  title: string;
  author: string;
  date: string;
  rating: number;
  coverImage: string;
  spineColor: string;
  textColor: string;
  slug: string;
  summary: string;
  content: string;
  category: 'book' | 'podcast' | 'course' | 'video' | 'essay' | 'documentary';
  duration?: string;
  url?: string;
  tags?: string[];
  lastRead?: string;
  lastListened?: string;
  courseTaken?: string;
}
