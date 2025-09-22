import Navigation from '@/components/Navigation'
import Link from 'next/link'
import { generateMetadata as genMeta } from '@/lib/metadata'

export const metadata = genMeta('/projects/self-hosted-newsletter')

export default function SelfHostedNewsletterTutorialPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-32">
        <div className="max-w-4xl mx-auto px-8">
          {/* Project Header */}
          <header className="mb-20 text-center slide-enter">
            <div className="inline-flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-4">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <span>Complete Tutorial</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              Self-Hosted Newsletter Platform
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              Complete step-by-step guide to set up your own newsletter platform. 
              Own your audience, control your costs, master email deliverability.
            </p>
          </header>
          
          <div className="space-y-20 slide-enter-content">
            
            {/* What is this? */}
            <section>
              <h2 className="text-2xl font-medium text-gray-700 dark:text-gray-300 mb-8 text-center">What is this?</h2>
              <div className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p>
                  A complete self-hosted newsletter platform that runs entirely on your server. No monthly subscriptions, 
                  no external dependencies, no vendor lock-in. You own your audience data and control every aspect of your newsletter.
                </p>
                <p>
                  Built with Go backend, SvelteKit frontend, and Docker deployment. Includes email deliverability optimization, 
                  subscriber management, campaign creation, and analytics - everything you need to run a professional newsletter.
                </p>
                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
                  <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Why Self-Hosted?</h3>
                  <ul className="space-y-2 text-blue-800 dark:text-blue-200 text-sm">
                    <li>• Complete ownership of your subscriber data</li>
                    <li>• No monthly fees or usage limits</li>
                    <li>• Full control over email deliverability</li>
                    <li>• Customizable to your exact needs</li>
                    <li>• No platform can shut you down</li>
                  </ul>
                </div>
              </div>
            </section>
            
            {/* Prerequisites */}
            <section>
              <h2 className="text-2xl font-medium text-gray-700 dark:text-gray-300 mb-8 text-center">Prerequisites</h2>
              <div className="space-y-6">
                <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">What you need:</h3>
                  <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start gap-3">
                      <span className="w-6 h-6 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-green-600 dark:text-green-400 text-sm">✓</span>
                      </span>
                      <div>
                        <strong>VPS or Server:</strong> Any Linux server with Docker support (Ubuntu 20.04+ recommended)
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-6 h-6 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-green-600 dark:text-green-400 text-sm">✓</span>
                      </span>
                      <div>
                        <strong>Domain:</strong> A domain name for your newsletter (e.g., newsletter.yourdomain.com)
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-6 h-6 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-green-600 dark:text-green-400 text-sm">✓</span>
                      </span>
                      <div>
                        <strong>Basic Terminal Knowledge:</strong> Comfortable with copy-pasting commands
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-6 h-6 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-green-600 dark:text-green-400 text-sm">✓</span>
                      </span>
                      <div>
                        <strong>30 minutes:</strong> Setup time for the complete platform
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Quick Start */}
            <section>
              <h2 className="text-2xl font-medium text-gray-700 dark:text-gray-300 mb-8 text-center">Quick Start (5 minutes)</h2>
              <div className="space-y-6">
                <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-green-900 dark:text-green-100 mb-4">One-Command Installation</h3>
                  <div className="bg-gray-900 dark:bg-gray-800 rounded-lg p-4 mb-4">
                    <code className="text-green-400 text-sm">
                      curl -sSL https://raw.githubusercontent.com/your-repo/install.sh | bash
                    </code>
                  </div>
                  <p className="text-green-800 dark:text-green-200 text-sm">
                    This script will install Docker, clone the repository, and start all services automatically.
                  </p>
                </div>
              </div>
            </section>
            
            {/* Detailed Installation */}
            <section>
              <h2 className="text-2xl font-medium text-gray-700 dark:text-gray-300 mb-8 text-center">Detailed Installation</h2>
              <div className="space-y-8">
                
                {/* Step 1 */}
                <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 dark:text-blue-400 font-semibold">1</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Prepare Your Server</h3>
                  </div>
                  <div className="space-y-4">
                    <p className="text-gray-700 dark:text-gray-300">
                      Connect to your server via SSH and update the system:
                    </p>
                    <div className="bg-gray-900 dark:bg-gray-800 rounded-lg p-4">
                      <code className="text-green-400 text-sm">
                        sudo apt update && sudo apt upgrade -y<br/>
                        sudo apt install -y curl git
                      </code>
                    </div>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 dark:text-blue-400 font-semibold">2</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Install Docker</h3>
                  </div>
                  <div className="space-y-4">
                    <p className="text-gray-700 dark:text-gray-300">
                      Install Docker and Docker Compose:
                    </p>
                    <div className="bg-gray-900 dark:bg-gray-800 rounded-lg p-4">
                      <code className="text-green-400 text-sm">
                        curl -fsSL https://get.docker.com -o get-docker.sh<br/>
                        sudo sh get-docker.sh<br/>
                        sudo usermod -aG docker $USER<br/>
                        sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose<br/>
                        sudo chmod +x /usr/local/bin/docker-compose
                      </code>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Log out and back in for Docker group changes to take effect.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 dark:text-blue-400 font-semibold">3</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Clone and Configure</h3>
                  </div>
                  <div className="space-y-4">
                    <p className="text-gray-700 dark:text-gray-300">
                      Clone the repository and set up environment variables:
                    </p>
                    <div className="bg-gray-900 dark:bg-gray-800 rounded-lg p-4">
                      <code className="text-green-400 text-sm">
                        git clone https://github.com/UmarbekFU/self-host.git<br/>
                        cd self-host<br/>
                        cp .env.example .env
                      </code>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">
                      Edit the <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm">.env</code> file with your domain and license key:
                    </p>
                    <div className="bg-gray-900 dark:bg-gray-800 rounded-lg p-4">
                      <code className="text-green-400 text-sm">
                        SENDING_DOMAIN=newsletter.yourdomain.com<br/>
                        LICENSE_KEY=your-license-key-here
                      </code>
                    </div>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 dark:text-blue-400 font-semibold">4</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Start the Platform</h3>
                  </div>
                  <div className="space-y-4">
                    <p className="text-gray-700 dark:text-gray-300">
                      Launch all services with Docker Compose:
                    </p>
                    <div className="bg-gray-900 dark:bg-gray-800 rounded-lg p-4">
                      <code className="text-green-400 text-sm">
                        docker-compose up -d
                      </code>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">
                      The platform will be available at <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm">http://your-server-ip</code>
                    </p>
                  </div>
                </div>
              </div>
            </section>
            
            {/* Email Configuration */}
            <section>
              <h2 className="text-2xl font-medium text-gray-700 dark:text-gray-300 mb-8 text-center">Email Configuration</h2>
              <div className="space-y-8">
                
                {/* DNS Setup */}
                <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">DNS Records Setup</h3>
                  <div className="space-y-4">
                    <p className="text-gray-700 dark:text-gray-300">
                      After starting the platform, you'll need to configure DNS records for email deliverability:
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <h4 className="font-medium text-gray-900 dark:text-gray-100">SPF Record</h4>
                        <div className="bg-gray-900 dark:bg-gray-800 rounded-lg p-3">
                          <code className="text-green-400 text-sm">
                            v=spf1 a mx ip4:YOUR_SERVER_IP ~all
                          </code>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Add this TXT record to your domain's DNS
                        </p>
                      </div>
                      
                      <div className="space-y-3">
                        <h4 className="font-medium text-gray-900 dark:text-gray-100">DKIM Record</h4>
                        <div className="bg-gray-900 dark:bg-gray-800 rounded-lg p-3">
                          <code className="text-green-400 text-sm">
                            newsletter._domainkey.yourdomain.com
                          </code>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          The platform will generate your DKIM key automatically
                        </p>
                      </div>
                    </div>
                    
                    <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
                      <p className="text-yellow-800 dark:text-yellow-200 text-sm">
                        <strong>Important:</strong> These DNS records are crucial for email deliverability. 
                        Without them, your emails will likely go to spam folders.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Domain Verification */}
                <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Domain Verification</h3>
                  <div className="space-y-4">
                    <p className="text-gray-700 dark:text-gray-300">
                      The platform includes built-in tools to verify your DNS configuration:
                    </p>
                    <ol className="space-y-2 text-gray-700 dark:text-gray-300">
                      <li>1. Go to the Domains section in your admin panel</li>
                      <li>2. Add your domain (e.g., newsletter.yourdomain.com)</li>
                      <li>3. The platform will generate DKIM keys and DNS records</li>
                      <li>4. Copy the provided DNS records to your domain registrar</li>
                      <li>5. Use the built-in verification tool to check your setup</li>
                    </ol>
                  </div>
                </div>
              </div>
            </section>

            {/* Usage Guide */}
            <section>
              <h2 className="text-2xl font-medium text-gray-700 dark:text-gray-300 mb-8 text-center">How to Use</h2>
              <div className="space-y-8">
                
                {/* Creating Lists */}
                <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">1. Create Subscriber Lists</h3>
                  <div className="space-y-4">
                    <p className="text-gray-700 dark:text-gray-300">
                      Start by creating subscriber lists to organize your audience:
                    </p>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      <li>• Go to "Lists" in the admin panel</li>
                      <li>• Click "Create New List"</li>
                      <li>• Give it a name (e.g., "Weekly Newsletter")</li>
                      <li>• Add a description for your reference</li>
                    </ul>
                  </div>
                </div>

                {/* Importing Subscribers */}
                <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">2. Import Subscribers</h3>
                  <div className="space-y-4">
                    <p className="text-gray-700 dark:text-gray-300">
                      Import your existing subscriber list or add subscribers manually:
                    </p>
                    <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-4">
                      <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-2">CSV Format:</h4>
                      <div className="bg-gray-900 dark:bg-gray-800 rounded-lg p-3">
                        <code className="text-green-400 text-sm">
                          email,name,source<br/>
                          john@example.com,John Doe,website<br/>
                          jane@example.com,Jane Smith,referral
                        </code>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Creating Campaigns */}
                <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">3. Create Your First Campaign</h3>
                  <div className="space-y-4">
                    <p className="text-gray-700 dark:text-gray-300">
                      Design and send your newsletter:
                    </p>
                    <ol className="space-y-2 text-gray-700 dark:text-gray-300">
                      <li>1. Go to "Campaigns" and click "Create Campaign"</li>
                      <li>2. Select your subscriber list</li>
                      <li>3. Write your subject line and content</li>
                      <li>4. Use the built-in editor or paste HTML</li>
                      <li>5. Preview and test with a few email addresses</li>
                      <li>6. Schedule or send immediately</li>
                    </ol>
                  </div>
                </div>

                {/* Analytics */}
                <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">4. Track Performance</h3>
                  <div className="space-y-4">
                    <p className="text-gray-700 dark:text-gray-300">
                      Monitor your newsletter performance with built-in analytics:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <h4 className="font-medium text-gray-900 dark:text-gray-100">Key Metrics:</h4>
                        <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                          <li>• Open rates</li>
                          <li>• Click-through rates</li>
                          <li>• Bounce rates</li>
                          <li>• Unsubscribe rates</li>
                        </ul>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-medium text-gray-900 dark:text-gray-100">Subscriber Growth:</h4>
                        <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                          <li>• New signups</li>
                          <li>• List growth over time</li>
                          <li>• Geographic distribution</li>
                          <li>• Engagement patterns</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            
            {/* Troubleshooting */}
            <section>
              <h2 className="text-2xl font-medium text-gray-700 dark:text-gray-300 mb-8 text-center">Troubleshooting</h2>
              <div className="space-y-6">
                
                {/* Common Issues */}
                <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Common Issues & Solutions</h3>
                  <div className="space-y-4">
                    
                    <div className="border-l-4 border-red-500 pl-4">
                      <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-2">Emails going to spam</h4>
                      <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">
                        This usually means DNS records aren't configured properly.
                      </p>
                      <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                        <li>• Check SPF record is added to your domain</li>
                        <li>• Verify DKIM record is properly configured</li>
                        <li>• Ensure DMARC policy is set up</li>
                        <li>• Use the platform's verification tool</li>
                      </ul>
                    </div>
                    
                    <div className="border-l-4 border-orange-500 pl-4">
                      <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-2">Docker containers won't start</h4>
                      <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">
                        Usually a port conflict or permission issue.
                      </p>
                      <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                        <li>• Check if ports 80, 443, 25, 587 are available</li>
                        <li>• Ensure Docker is running: <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">sudo systemctl start docker</code></li>
                        <li>• Check logs: <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">docker-compose logs</code></li>
                      </ul>
                    </div>
                    
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-2">Can't access admin panel</h4>
                      <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">
                        Check firewall and port configuration.
                      </p>
                      <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                        <li>• Ensure port 80 is open in your firewall</li>
                        <li>• Check if containers are running: <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">docker ps</code></li>
                        <li>• Try accessing via server IP instead of domain</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Getting Help */}
                <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Getting Help</h3>
                  <div className="space-y-3 text-gray-700 dark:text-gray-300">
                    <p>If you run into issues:</p>
                    <ul className="space-y-2 text-sm">
                      <li>• Check the logs: <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">docker-compose logs -f</code></li>
                      <li>• Verify your DNS records with online tools</li>
                      <li>• Test email sending with a small list first</li>
                      <li>• Check server resources (RAM, disk space)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Best Practices */}
            <section>
              <h2 className="text-2xl font-medium text-gray-700 dark:text-gray-300 mb-8 text-center">Best Practices</h2>
              <div className="grid md:grid-cols-2 gap-8">
                
                <div className="space-y-6">
                  <div className="p-6 bg-green-50 dark:bg-green-900/20 rounded-lg">
                    <h3 className="text-lg font-semibold text-green-900 dark:text-green-100 mb-3">Email Deliverability</h3>
                    <ul className="space-y-2 text-green-800 dark:text-green-200 text-sm">
                      <li>• Always use double opt-in for new subscribers</li>
                      <li>• Keep your sending volume consistent</li>
                      <li>• Monitor bounce rates and remove bad emails</li>
                      <li>• Use a dedicated IP address for sending</li>
                      <li>• Warm up your IP gradually with small sends</li>
                    </ul>
                  </div>
                  
                  <div className="p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-3">Content Strategy</h3>
                    <ul className="space-y-2 text-blue-800 dark:text-blue-200 text-sm">
                      <li>• Write compelling subject lines</li>
                      <li>• Keep content valuable and relevant</li>
                      <li>• Use clear call-to-actions</li>
                      <li>• Test different send times</li>
                      <li>• Segment your audience for better engagement</li>
                    </ul>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="p-6 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                    <h3 className="text-lg font-semibold text-purple-900 dark:text-purple-100 mb-3">Technical Maintenance</h3>
                    <ul className="space-y-2 text-purple-800 dark:text-purple-200 text-sm">
                      <li>• Regular backups of your database</li>
                      <li>• Monitor server resources and performance</li>
                      <li>• Keep Docker images updated</li>
                      <li>• Set up monitoring and alerts</li>
                      <li>• Test your setup regularly</li>
                    </ul>
                  </div>
                  
                  <div className="p-6 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                    <h3 className="text-lg font-semibold text-orange-900 dark:text-orange-100 mb-3">Legal Compliance</h3>
                    <ul className="space-y-2 text-orange-800 dark:text-orange-200 text-sm">
                      <li>• Include unsubscribe links in every email</li>
                      <li>• Honor unsubscribe requests immediately</li>
                      <li>• Follow GDPR and CAN-SPAM regulations</li>
                      <li>• Keep clear records of consent</li>
                      <li>• Provide clear privacy policy</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Project Status */}
            <section>
              <h2 className="text-2xl font-medium text-gray-700 dark:text-gray-300 mb-8 text-center">Project Status</h2>
              <div className="text-center">
                <div className="inline-flex items-center gap-2 text-sm text-green-600 dark:text-green-400 mb-6">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span>Production Ready</span>
                </div>
                <div className="space-y-4 text-gray-700 dark:text-gray-300">
                  <p>
                    This self-hosted newsletter platform is fully functional and ready for production use. 
                    All core features are implemented and tested.
                  </p>
                  <div className="grid md:grid-cols-3 gap-6 mt-8">
                    <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                      <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-green-600 dark:text-green-400 text-lg">✓</span>
                      </div>
                      <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Core Features</h3>
                      <p className="text-gray-700 dark:text-gray-300 text-sm">
                        Email sending, subscriber management, campaign creation, analytics
                      </p>
                    </div>
                    
                    <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                      <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-blue-600 dark:text-blue-400 text-lg">✓</span>
                      </div>
                      <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Email Deliverability</h3>
                      <p className="text-gray-700 dark:text-gray-300 text-sm">
                        DKIM, SPF, DMARC configuration, bounce handling
                      </p>
                    </div>
                    
                    <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                      <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-purple-600 dark:text-purple-400 text-lg">✓</span>
                      </div>
                      <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Easy Setup</h3>
                      <p className="text-gray-700 dark:text-gray-300 text-sm">
                        One-command installation, Docker deployment, clear documentation
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            
            {/* Next Steps */}
            <section>
              <h2 className="text-2xl font-medium text-gray-700 dark:text-gray-300 mb-8 text-center">Next Steps</h2>
              <div className="text-center space-y-6">
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  Ready to get started? Follow the installation guide above and you'll have your own 
                  newsletter platform running in under 30 minutes.
                </p>
                
                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 max-w-2xl mx-auto">
                  <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-3">Get the Code</h3>
                  <p className="text-blue-800 dark:text-blue-200 text-sm mb-4">
                    The complete self-hosted newsletter platform is available on GitHub with full documentation.
                  </p>
                  <div className="bg-gray-900 dark:bg-gray-800 rounded-lg p-3 mb-4">
                    <code className="text-green-400 text-sm">
                      git clone https://github.com/UmarbekFU/self-host.git
                    </code>
                  </div>
                  <div className="text-center">
                    <a 
                      href="https://github.com/UmarbekFU/self-host" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 transition-colors text-sm font-medium"
                    >
                      View on GitHub →
                    </a>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                  <div className="text-center p-4">
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">One-Time Setup</h4>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                      Install once, use forever. No monthly fees or usage limits.
                    </p>
                  </div>
                  <div className="text-center p-4">
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Full Control</h4>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                      Own your data, customize everything, scale as needed.
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
        <div className="max-w-4xl mx-auto px-8 py-8">
          <div className="text-center text-sm text-gray-500 dark:text-gray-400">
            Complete tutorial for self-hosted newsletter platform • Production ready
          </div>
        </div>
      </footer>
    </>
  )
}
