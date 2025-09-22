import Navigation from '@/components/Navigation'
import Link from 'next/link'
import { generateMetadata as genMeta } from '@/lib/metadata'

export const metadata = genMeta('/projects/self-hosted-newspaper')

export default function SelfHostedNewspaperProjectPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-32">
        <div className="max-w-3xl mx-auto px-8">
          {/* Project Header */}
          <header className="mb-20 text-center slide-enter">
            <div className="inline-flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-4">
              <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
              <span>In Development</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              Self-Hosted Newspaper Platform
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              A one-time-purchase tool for creators to run newsletters from their own servers. 
              Email deliverability, setup UX. No subscriptions, no external services.
            </p>
          </header>
          
          <div className="space-y-20 slide-enter-content">
            
            {/* Project Overview */}
            <section>
              <h2 className="text-2xl font-medium text-gray-700 dark:text-gray-300 mb-8 text-center">The Problem</h2>
              <div className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p>
                  Newsletter platforms like Substack, ConvertKit, and Mailchimp lock creators into monthly subscriptions 
                  and external dependencies. They control your audience, your data, and your costs.
                </p>
                <p>
                  What if creators could own their entire newsletter infrastructure? What if they could run their 
                  newsletters from their own servers with complete control over deliverability, design, and data?
                </p>
                <p>
                  This project aims to solve that problem with a simple, one-time-purchase tool that handles 
                  email deliverability, subscriber management, and newsletter creation without any ongoing costs.
                </p>
              </div>
            </section>
            
            {/* Core Features */}
            <section>
              <h2 className="text-2xl font-medium text-gray-700 dark:text-gray-300 mb-8 text-center">Core Features</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">Email Infrastructure</h3>
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                        <span className="text-gray-700 dark:text-gray-300">SMTP Configuration</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                        <span className="text-gray-700 dark:text-gray-300">Deliverability Optimization</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                        <span className="text-gray-700 dark:text-gray-300">Bounce Handling</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                        <span className="text-gray-700 dark:text-gray-300">Unsubscribe Management</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">Subscriber Management</h3>
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                        <span className="text-gray-700 dark:text-gray-300">Import/Export Lists</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                        <span className="text-gray-700 dark:text-gray-300">Segmentation</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                        <span className="text-gray-700 dark:text-gray-300">Double Opt-in</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">Newsletter Creation</h3>
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                        <span className="text-gray-700 dark:text-gray-300">Rich Text Editor</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                        <span className="text-gray-700 dark:text-gray-300">Template System</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                        <span className="text-gray-700 dark:text-gray-300">Preview & Test</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                        <span className="text-gray-700 dark:text-gray-300">Scheduling</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">Analytics</h3>
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                        <span className="text-gray-700 dark:text-gray-300">Open Rates</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                        <span className="text-gray-700 dark:text-gray-300">Click Tracking</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                        <span className="text-gray-700 dark:text-gray-300">Subscriber Growth</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            
            {/* Technical Approach */}
            <section>
              <h2 className="text-2xl font-medium text-gray-700 dark:text-gray-300 mb-8 text-center">Technical Approach</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="p-6 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">Self-Hosted Architecture</h3>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                      Runs entirely on your server. No external API dependencies. Complete control over data, 
                      configuration, and customization.
                    </p>
                  </div>
                  
                  <div className="p-6 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">One-Time Purchase</h3>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                      No monthly subscriptions, no usage limits, no vendor lock-in. Pay once, own forever. 
                      Perfect for creators who want predictable costs.
                    </p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="p-6 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">Email Deliverability Focus</h3>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                      Built-in best practices for inbox placement. SPF, DKIM, DMARC configuration. 
                      Reputation monitoring and bounce handling.
                    </p>
                  </div>
                  
                  <div className="p-6 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">Simple Setup UX</h3>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                      Guided installation process. Clear documentation. One-click email server configuration. 
                      Designed for non-technical creators.
                    </p>
                  </div>
                </div>
              </div>
            </section>
            
            {/* Key Benefits */}
            <section>
              <h2 className="text-2xl font-medium text-gray-700 dark:text-gray-300 mb-8 text-center">Why This Matters</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-blue-600 dark:text-blue-400 text-sm font-semibold">1</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Complete Ownership</h3>
                      <p className="text-gray-700 dark:text-gray-300 text-sm">
                        Your audience data stays on your server. No platform can shut you down or change their terms. 
                        You control everything.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-green-600 dark:text-green-400 text-sm font-semibold">2</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Predictable Costs</h3>
                      <p className="text-gray-700 dark:text-gray-300 text-sm">
                        One-time purchase vs. monthly subscriptions. As your audience grows, your costs stay the same. 
                        No surprise bills.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-purple-600 dark:text-purple-400 text-sm font-semibold">3</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Better Deliverability</h3>
                      <p className="text-gray-700 dark:text-gray-300 text-sm">
                        Direct control over your sending reputation. No shared IPs with other senders. 
                        Optimized for your specific use case.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-orange-600 dark:text-orange-400 text-sm font-semibold">4</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Customization</h3>
                      <p className="text-gray-700 dark:text-gray-300 text-sm">
                        Modify templates, add features, integrate with your existing tools. 
                        No platform limitations or feature restrictions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            
            {/* Project Status */}
            <section>
              <h2 className="text-2xl font-medium text-gray-700 dark:text-gray-300 mb-8 text-center">Development Status</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                  <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-yellow-600 dark:text-yellow-400 text-lg">⚡</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Research Phase</h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Studying email deliverability best practices, SMTP configurations, and existing solutions.
                  </p>
                </div>
                
                <div className="text-center p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-blue-600 dark:text-blue-400 text-lg">→</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Next: Prototype</h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Building MVP with core email sending functionality and basic subscriber management.
                  </p>
                </div>
                
                <div className="text-center p-6 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                  <div className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-gray-600 dark:text-gray-400 text-lg">○</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Future: Polish</h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Advanced features, better UX, documentation, and one-click installation process.
                  </p>
                </div>
              </div>
            </section>
            
            {/* Technical Challenges */}
            <section>
              <h2 className="text-2xl font-medium text-gray-700 dark:text-gray-300 mb-8 text-center">Key Challenges</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="border-l-4 border-red-500 pl-6">
                    <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Email Deliverability</h3>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                      The hardest part of email marketing. Need to handle SPF, DKIM, DMARC, reputation management, 
                      and bounce handling properly.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-orange-500 pl-6">
                    <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Setup Complexity</h3>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                      Making self-hosting accessible to non-technical users. Need clear documentation, 
                      automated setup, and good error messages.
                    </p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="border-l-4 border-blue-500 pl-6">
                    <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Scalability</h3>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                      Handling large subscriber lists and high email volumes without performance issues. 
                      Need efficient queuing and sending systems.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-green-500 pl-6">
                    <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">User Experience</h3>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                      Creating an interface that's as easy to use as existing platforms while being more powerful 
                      and flexible.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-700 mt-20">
        <div className="max-w-3xl mx-auto px-8 py-8">
          <div className="text-center text-sm text-gray-500 dark:text-gray-400">
            Started: December 2024
          </div>
        </div>
      </footer>
    </>
  )
}
