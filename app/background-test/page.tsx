'use client'

import Navigation from '@/components/Navigation'
import BackgroundSwitcher, { BackgroundType } from '@/components/BackgroundSwitcher'
import { useState } from 'react'

const backgroundOptions: { type: BackgroundType; name: string; description: string }[] = [
  { type: 'plum', name: 'Plum', description: 'Animated tree-like pattern' },
  { type: 'dot', name: 'Dot', description: 'Animated dots with noise' },
  { type: 'particle', name: 'Particle', description: 'Connected particle network' },
]

export default function BackgroundTestPage() {
  const [currentBackground, setCurrentBackground] = useState<BackgroundType>('plum')

  return (
    <>
      <BackgroundSwitcher type={currentBackground} />
      <Navigation />
      
      <main className="min-h-screen pt-32">
        <div className="max-w-4xl mx-auto px-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center">
            Background Test Page
          </h1>
          
          <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
              Choose Background
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {backgroundOptions.map((option) => (
                <button
                  key={option.type}
                  onClick={() => setCurrentBackground(option.type)}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    currentBackground === option.type
                      ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                      : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                  }`}
                >
                  <div className="font-medium text-gray-900 dark:text-gray-100 mb-2">
                    {option.name}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {option.description}
                  </div>
                </button>
              ))}
            </div>
            
            <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div className="text-sm text-gray-600 dark:text-gray-400">
                <strong>Current:</strong> {backgroundOptions.find(opt => opt.type === currentBackground)?.name}
              </div>
            </div>
          </div>
          
          <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
              Test Content
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              This page allows you to test all the different background options from the astro-antfustyle-theme. 
              Each background has its own unique animation and visual style.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                  Features
                </h3>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li>• Responsive design</li>
                  <li>• Dark mode support</li>
                  <li>• Performance optimized</li>
                  <li>• Print-friendly (hidden in print)</li>
                  <li>• Smooth animations</li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                  Background Types
                </h3>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li>• <strong>Plum:</strong> Canvas tree animation</li>
                  <li>• <strong>Dot:</strong> Noise-based dots</li>
                  <li>• <strong>Particle:</strong> Connected network</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
