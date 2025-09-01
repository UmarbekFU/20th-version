import Navigation from '@/components/Navigation'
import PlumBackground from '@/components/PlumBackground'

export default function DisclaimerPage() {
  return (
    <>
      <PlumBackground />
      <Navigation />
      <main className="min-h-screen pt-32">
        <div className="max-w-3xl mx-auto px-8">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center">Disclaimer</h1>
          
          <div className="space-y-8 text-lg md:text-xl text-gray-800 dark:text-gray-200 leading-relaxed max-w-2xl mx-auto">
            <p className="text-gray-700 dark:text-gray-300">
              Important information about this website and how to use it responsibly.
            </p>
          </div>

          {/* Disclaimer Content */}
          <div className="mt-16 space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">What This Is</h2>
              <div className="space-y-4">
                <p className="text-gray-700 dark:text-gray-300">
                  This is my personal website. Everything here represents my personal views, opinions, 
                  and experiences. It's not professional advice, and it's not meant to be taken as such.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">Not Professional Advice</h2>
              <div className="space-y-4">
                <p className="text-gray-700 dark:text-gray-300">
                  I'm not a lawyer, doctor, financial advisor, or any other kind of professional. 
                  If you need professional advice, please consult with someone qualified in that field.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">My Opinions Change</h2>
              <div className="space-y-4">
                <p className="text-gray-700 dark:text-gray-300">
                  I reserve the right to change my mind. What I write today might not be what I believe 
                  tomorrow. That's how learning and growth work.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">Use at Your Own Risk</h2>
              <div className="space-y-4">
                <p className="text-gray-700 dark:text-gray-300">
                  If you choose to act on anything I write here, you do so at your own risk. 
                  I'm not responsible for the consequences of your decisions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
