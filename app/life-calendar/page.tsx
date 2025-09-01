import Navigation from '@/components/Navigation'
import PlumBackground from '@/components/PlumBackground'

export default function LifeCalendarPage() {
  // Life calendar calculations
  const birthDate = new Date('2006-03-18')
  const today = new Date()
  const totalWeeks = 65 * 52 // 65 years * 52 weeks
  const weeksLived = Math.floor((today.getTime() - birthDate.getTime()) / (1000 * 60 * 60 * 24 * 7))
  const weeksRemaining = totalWeeks - weeksLived
  const percentageLived = (weeksLived / totalWeeks) * 100
  const age = Math.floor((today.getTime() - birthDate.getTime()) / (1000 * 60 * 60 * 24 * 365.25))

  // Create grid of weeks
  const weeks = []
  for (let i = 0; i < totalWeeks; i++) {
    weeks.push({
      week: i + 1,
      isLived: i < weeksLived,
      isCurrent: i === weeksLived
    })
  }

  // Major life events/milestones
  const milestones = [
    { week: 1, label: 'Birth', description: 'March 18, 2006' },
    { week: 52, label: '1st Birthday', description: 'March 18, 2007' },
    { week: 260, label: '5th Birthday', description: 'March 18, 2011' },
    { week: 520, label: '10th Birthday', description: 'March 18, 2016' },
    { week: 780, label: '15th Birthday', description: 'March 18, 2021' },
    { week: 936, label: '18th Birthday', description: 'March 18, 2024' },
    { week: weeksLived, label: 'Today', description: `Week ${weeksLived} of ${totalWeeks}` },
    { week: 1300, label: '25th Birthday', description: 'March 18, 2031' },
    { week: 1820, label: '35th Birthday', description: 'March 18, 2041' },
    { week: 2340, label: '45th Birthday', description: 'March 18, 2051' },
    { week: 2860, label: '55th Birthday', description: 'March 18, 2061' },
    { week: 3380, label: '65th Birthday', description: 'March 18, 2071' }
  ]

  return (
    <>
      <PlumBackground />
      <Navigation />
      <main className="min-h-screen pt-32">
        <div className="max-w-6xl mx-auto px-8">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center">Life Calendar</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 text-center max-w-3xl mx-auto">
            A visual representation of my life, week by week. Each square represents one week.
          </p>

          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
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

          {/* Reflection Section */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">Reflection</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                Looking at this calendar, I'm reminded that time is our most precious resource. 
                Each square represents a week of my life - some filled with memories, others yet to be written.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                I've lived approximately <strong>{percentageLived.toFixed(1)}%</strong> of my expected 65 years. 
                That's <strong>{weeksLived.toLocaleString()} weeks</strong> of experiences, learning, and growth.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                I have roughly <strong>{weeksRemaining.toLocaleString()} weeks</strong> remaining to make an impact, 
                build meaningful relationships, and pursue what matters most to me.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                This visualization helps me stay mindful of time's passage and motivates me to make each week count.
              </p>
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
