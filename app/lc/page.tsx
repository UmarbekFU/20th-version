'use client'

import Navigation from '@/components/Navigation'
import { useState, useEffect } from 'react'

export default function LifeCalendarPage() {
  const [currentTime, setCurrentTime] = useState(new Date())
  
  // Update time every minute for real-time updates
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 60000) // Update every minute
    
    return () => clearInterval(timer)
  }, [])

  // Life calendar calculations - all dynamic
  const birthDate = new Date('2006-03-18')
  const today = currentTime
  const totalWeeks = 65 * 52 // 65 years * 52 weeks
  
  // More accurate week calculation
  const weeksLived = Math.floor((today.getTime() - birthDate.getTime()) / (1000 * 60 * 60 * 24 * 7))
  const weeksRemaining = Math.max(0, totalWeeks - weeksLived)
  const percentageLived = Math.min(100, (weeksLived / totalWeeks) * 100)
  
  // More accurate age calculation accounting for leap years
  const ageInMilliseconds = today.getTime() - birthDate.getTime()
  const age = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25))
  
  // Calculate days lived for more precision
  const daysLived = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24))
  const daysRemaining = Math.max(0, (65 * 365.25) - daysLived)

  // Create grid of weeks
  const weeks = []
  for (let i = 0; i < totalWeeks; i++) {
    weeks.push({
      week: i + 1,
      isLived: i < weeksLived,
      isCurrent: i === weeksLived
    })
  }

  // Calculate milestone dates dynamically
  const getMilestoneDate = (years: number) => {
    const milestoneDate = new Date(birthDate)
    milestoneDate.setFullYear(birthDate.getFullYear() + years)
    return milestoneDate.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })
  }

  const getMilestoneWeek = (years: number) => {
    const milestoneDate = new Date(birthDate)
    milestoneDate.setFullYear(birthDate.getFullYear() + years)
    return Math.floor((milestoneDate.getTime() - birthDate.getTime()) / (1000 * 60 * 60 * 24 * 7)) + 1
  }

  // Major life events/milestones - all calculated dynamically
  const milestones = [
    { week: 1, label: 'Birth', description: getMilestoneDate(0) },
    { week: getMilestoneWeek(1), label: '1st Birthday', description: getMilestoneDate(1) },
    { week: getMilestoneWeek(5), label: '5th Birthday', description: getMilestoneDate(5) },
    { week: getMilestoneWeek(10), label: '10th Birthday', description: getMilestoneDate(10) },
    { week: getMilestoneWeek(15), label: '15th Birthday', description: getMilestoneDate(15) },
    { week: getMilestoneWeek(18), label: '18th Birthday', description: getMilestoneDate(18) },
    { week: weeksLived, label: 'Today', description: `Week ${weeksLived} of ${totalWeeks}` },
    { week: getMilestoneWeek(25), label: '25th Birthday', description: getMilestoneDate(25) },
    { week: getMilestoneWeek(35), label: '35th Birthday', description: getMilestoneDate(35) },
    { week: getMilestoneWeek(45), label: '45th Birthday', description: getMilestoneDate(45) },
    { week: getMilestoneWeek(55), label: '55th Birthday', description: getMilestoneDate(55) },
    { week: getMilestoneWeek(65), label: '65th Birthday', description: getMilestoneDate(65) }
  ]

  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-32">
        <div className="max-w-6xl mx-auto px-8">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center">Life Calendar</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 text-center max-w-3xl mx-auto">
            A visual representation of my life, week by week. Each square represents one week.
          </p>

          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">{age}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Years Old</div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400">{weeksLived.toLocaleString()}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Weeks Lived</div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
              <div className="text-3xl font-bold text-orange-600 dark:text-orange-400">{weeksRemaining.toLocaleString()}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Weeks Remaining</div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">{percentageLived.toFixed(1)}%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Life Completed</div>
            </div>
          </div>

          {/* Additional Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
              <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">{daysLived.toLocaleString()}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Days Lived</div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
              <div className="text-2xl font-bold text-pink-600 dark:text-pink-400">{daysRemaining.toLocaleString()}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Days Remaining</div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
              <div className="text-2xl font-bold text-teal-600 dark:text-teal-400">
                {today.toLocaleDateString('en-US', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Current Date</div>
            </div>
          </div>

          {/* Life Calendar Grid */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">Your Life in Weeks</h2>
            <div className="flex flex-wrap gap-1 max-w-full overflow-x-auto pb-4">
              {weeks.map((week, index) => (
                <div
                  key={index}
                  className={`
                    w-2 h-2 rounded-sm transition-colors flex-shrink-0
                    ${week.isLived 
                      ? 'bg-blue-500 dark:bg-blue-400' 
                      : week.isCurrent 
                        ? 'bg-green-500 dark:bg-green-400 animate-pulse' 
                        : 'bg-gray-200 dark:bg-gray-700'
                    }
                    ${week.isCurrent ? 'ring-2 ring-green-300 dark:ring-green-600' : ''}
                  `}
                  title={`Week ${week.week}${week.isLived ? ' (Lived)' : week.isCurrent ? ' (Current)' : ' (Future)'}`}
                />
              ))}
            </div>
            <div className="flex items-center justify-center mt-6 space-x-6 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-sm"></div>
                <span className="text-gray-600 dark:text-gray-400">Lived</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 dark:bg-green-400 rounded-sm animate-pulse"></div>
                <span className="text-gray-600 dark:text-gray-400">Current Week</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-gray-200 dark:bg-gray-700 rounded-sm"></div>
                <span className="text-gray-600 dark:text-gray-400">Future</span>
              </div>
            </div>
          </div>

          {/* Milestones */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">Key Milestones</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {milestones.map((milestone, index) => (
                <div 
                  key={index}
                  className={`
                    p-4 rounded-lg border-2 transition-all
                    ${milestone.week <= weeksLived 
                      ? 'border-blue-200 dark:border-blue-700 bg-blue-50 dark:bg-blue-900/20' 
                      : milestone.week === weeksLived 
                        ? 'border-green-200 dark:border-green-700 bg-green-50 dark:bg-green-900/20' 
                        : 'border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/20'
                    }
                  `}
                >
                  <div className="font-semibold text-gray-900 dark:text-gray-100">{milestone.label}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{milestone.description}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                    Week {milestone.week} of {totalWeeks}
                  </div>
                </div>
              ))}
            </div>
          </div>


          {/* Footer */}
          <div className="text-center mt-16 text-gray-500 dark:text-gray-400">
            <p>Inspired by Tim Urban's "Your Life in Weeks" from Wait But Why</p>
            <p className="text-sm mt-2">Based on a 65-year lifespan • Each square = 1 week</p>
          </div>
        </div>
      </main>
    </>
  )
}
