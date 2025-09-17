'use client'

import { useState } from 'react'
import BackgroundSwitcher, { BackgroundType } from './BackgroundSwitcher'

const backgroundOptions: { type: BackgroundType; name: string; description: string }[] = [
  { type: 'plum', name: 'Plum', description: 'Animated tree-like pattern' },
  { type: 'dot', name: 'Dot', description: 'Animated dots with noise' },
  { type: 'particle', name: 'Particle', description: 'Connected particle network' },
]

export default function BackgroundControl() {
  const [currentBackground, setCurrentBackground] = useState<BackgroundType>('plum')
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <BackgroundSwitcher type={currentBackground} />
      
      {/* Background Control Panel */}
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-lg px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
        >
          🎨 Background
        </button>
        
        {isOpen && (
          <div className="absolute top-12 right-0 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-lg shadow-lg p-4 min-w-64">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-3">
              Choose Background
            </h3>
            
            <div className="space-y-2">
              {backgroundOptions.map((option) => (
                <button
                  key={option.type}
                  onClick={() => {
                    setCurrentBackground(option.type)
                    setIsOpen(false)
                  }}
                  className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                    currentBackground === option.type
                      ? 'bg-blue-100 dark:bg-blue-900 text-blue-900 dark:text-blue-100'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  <div className="font-medium">{option.name}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    {option.description}
                  </div>
                </button>
              ))}
            </div>
            
            <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-700">
              <div className="text-xs text-gray-500 dark:text-gray-400">
                Current: <span className="font-medium">{backgroundOptions.find(opt => opt.type === currentBackground)?.name}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
