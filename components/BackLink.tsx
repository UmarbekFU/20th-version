'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function BackLink() {
  const pathname = usePathname()
  
  // Get the parent path by removing the last segment
  const pathSegments = pathname.split('/').filter(Boolean)
  const parentPath = pathSegments.length > 1 
    ? '/' + pathSegments.slice(0, -1).join('/') 
    : '/'

  return (
    <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
      <span className="font-mono text-gray-500 dark:text-gray-400">&gt; </span>
      <Link 
        href={parentPath}
        className="font-mono text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
      >
        cd ..
      </Link>
    </div>
  )
}
