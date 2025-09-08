import Navigation from '@/components/Navigation'
import PlumBackground from '@/components/PlumBackground'
import { getNoteBySlug } from '@/lib/notes'
import { notFound } from 'next/navigation'
import { Lora } from 'next/font/google'

const lora = Lora({ subsets: ['latin'], display: 'swap' })

export default function CompleteFullstackBootcampAngularYuPage() {
  const note = getNoteBySlug('complete-fullstack-bootcamp-angular-yu')
  
  if (!note) {
    notFound()
  }

  return (
    <>
      <PlumBackground />
      <Navigation />
      <main className="min-h-screen pt-32">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <img
              src={note.coverImage}
              alt={note.title}
              className="w-32 h-40 md:w-40 md:h-52 object-cover rounded border border-gray-200 dark:border-gray-700 flex-shrink-0"
            />
            <div className="flex-1">
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                {note.title}
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">
                by {note.author}
              </p>
              <p className="text-gray-500 dark:text-gray-500 mb-6">
                Completed: {note.date} • Rating: {note.rating}/10 • Duration: {note.duration}
              </p>
            </div>
          </div>
          
          <div className="mt-8 prose prose-lg max-w-none">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Summary</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              {note.summary}
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">My Notes</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Last updated: {new Date().toLocaleDateString()} - Vercel Debug</p>
            <div className="space-y-6 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">What is the Internet?</h3>
                <div className="space-y-4">
                  <p>
                    The Internet is wires connecting computers worldwide. 
                    Some computers are clients. 
                    Some are servers. 
                    Clients ask. 
                    Servers serve.
                  </p>
                  
                  <p>
                    When you type google.com. 
                    Your computer asks your internet provider for help. 
                    Your provider asks a DNS server. 
                    DNS is like a phone book. 
                    It looks up google.com and returns an IP address. 
                    IP addresses are unique numbers.
                    Like postal codes for computers.
                  </p>
                  
                  <p>
                    With the IP address, your computer contacts Google's servers directly.
                  </p>
                  
                  <p>
                    Every computer on the Internet has an IP address. 
                    No IP address, no connection.
                  </p>
                  
                  <p>
                    Different continents connect through giant undersea cables. 
                    These cables carry laser signals at near light speed. 
                    Your click races across the world and back in milliseconds.
                  </p>
                  
                  <p className="font-semibold text-gray-900 dark:text-gray-100">
                    <strong>The Internet is computers talking through wires and light.</strong>
                  </p>
                  
                  <p>
                    This is a test to see if the notes are showing up on Vercel. 
                    If you can see this text, then the basic structure is working.
                  </p>
                  
                  <p>
                    Continents link through undersea fiber cables carrying light signals at near-light speed. 
                    Gigabytes race under oceans so clicks return in milliseconds.
                  </p>
                  
                  <p>
                    Your data gets chopped into packets. 
                    Packets don't follow each other. 
                    They take different roads and arrive out of order. 
                    Your computer reassembles them.
                  </p>
                  
                  <p>
                    Routers don't choose "the shortest path." 
                    They follow business deals and policies. 
                    That's BGP. 
                    Money and agreements often beat geography.
                  </p>
                  
                  <p>
                    DNS isn't a single phone book you call every time. 
                    It's cached everywhere. 
                    "DNS propagation" is mostly caches timing out. 
                    One name can map to many addresses. 
                    "google.com" may point to many servers.
                    Anycast lets one IP exist in many cities. 
                    So you hit the nearest.
                  </p>
                  
                  <p>
                    Typing an IP address often won't show the site. 
                    Many sites share one IP. 
                    The server needs the name you asked for (Host header, SNI) to pick the right site. 
                    With HTTPS, the name is needed before the page is even served.
                  </p>
                  
                  <p>
                    You rarely talk to the "origin" server. 
                    Most bytes come from a CDN near you. 
                    The origin sends one copy; the CDN fans it out to millions.
                  </p>
                  
                  <p>
                    Light has a speed limit. 
                    Even in fiber optic cables, light is slower than in empty space. 
                    Distance creates delay. 
                    More bandwidth doesn't fix distance.
                  </p>
                  
                  <p>
                    Connections have startup cost. 
                    TCP begins slow and ramps up. 
                    TLS handshakes add round trips. 
                    QUIC puts TLS into UDP and cuts the back-and-forth. 
                    Fewer handshakes, faster first page.
                  </p>
                  
                  <p>
                    HTTP/2 multiplexes many requests on one TCP stream.
                    But one lost packet stalls others. 
                    That's head-of-line blocking. 
                    QUIC multiplexes without that stall.
                  </p>
                  
                  <p>
                    Your home probably uses NAT. 
                    Your laptop's address is private. 
                    The public address is your router's. 
                    Many customers now share one public IPv4 (CGNAT). 
                    So "your IP" may identify a neighborhood, not you.
                  </p>
                  
                  <p>
                    Firewalls remember which connections you started. 
                    They only let replies back in. 
                    Random incoming traffic gets blocked.
                  </p>
                  
                  <p>
                    Undersea cables break often. 
                    Ship anchors drag across them. 
                    Earthquakes snap them. 
                    Traffic instantly reroutes to other cables. 
                    Repair ships pull up both ends, splice them together, and drop them back down.
                    Repeaters inside the cables boost the light signals every few dozen miles. 
                    They run for 25 years underwater, powered through the cable itself.
                  </p>
                  
                  <p>
                    Big packets aren't always allowed. 
                    Every path has a maximum size (MTU). 
                    The Internet tries to discover it. 
                    If someone blocks the "please shrink your packets" messages (ICMP), some sites partly load and then hang. 
                    Looks like magic. 
                    It's just broken PMTUD.
                  </p>
                  
                  <p>
                    When you see the lock icon for HTTPS, your content is encrypted. 
                    But everyone can still see which websites you visit and when. 
                    Newer technology hides more, but some information always leaks.
                  </p>
                  
                  <p>
                    Websites don't stay online because they're perfect. 
                    They stay online because they're designed to handle failures. 
                    Many imperfect parts working together, canceling out each other's failures.
                  </p>
                  
                  <p>
                    The Internet looks centralized on maps but runs on decentralization. 
                    Thousands of separate networks trade traffic with each other at exchange points.
                  </p>
                  
                  <p>
                    These networks have owners. 
                    Internet providers, universities, companies. 
                    Each has its own rules and prices. 
                    When your data moves, it crosses business and political borders, not just geographic ones.
                  </p>
                  
                  <p>
                    The system that connects all these networks isn't secure by default. 
                    It trusts everyone. 
                    One mistake or bad actor can redirect traffic for entire countries.
                    This happens more than you'd think.
                  </p>
                  
                  <p>
                    We're running out of IP addresses. 
                    Most of today's Internet runs on sharing tricks and patches. 
                    The replacement system should have been adopted years ago. 
                    But businesses move slowly.
                  </p>
                  
                  <p>
                    Invisible boxes sit between you and websites. 
                    Firewalls, traffic shapers, content filters. 
                    They modify your traffic. 
                    Many weird bugs aren't bugs in the Internet itself. 
                    They're these middleboxes interfering.
                  </p>
                  
                  <p>
                    Your video doesn't come from YouTube's main servers. 
                    It comes from a cache inside your internet provider's network. 
                    Google and Netflix literally ship racks of servers to internet providers. 
                    This keeps video traffic local and makes it start instantly.
                  </p>
                  
                  <p>
                    Your connection speed isn't just about bandwidth. 
                    Invisible algorithms decide how fast you can send data. 
                    They constantly probe, back off when they hit limits, then probe again. 
                    Choosing the right algorithm can double your speed without changing your connection.
                  </p>
                  
                  <p>
                    Web browsing speed is about how long each back-and-forth takes. That's why new protocols focus on cutting round trips, and why satellite internet uses low-orbit satellites instead of high ones.
                  </p>
                  
                  <p>
                    Internet routing isn't optimal. 
                    Some providers deliberately send your traffic on longer paths to use cheaper connections. 
                    You might load a local website that first bounces to another country and back.
                  </p>
                  
                  <p>
                    One fiber cable can carry many colors of light simultaneously. 
                    Each color carries its own data stream. 
                    A single cable can handle terabits per second this way.
                  </p>
                  
                  <p>
                    When you visit a secure website, your browser still leaks which site you're visiting in the initial handshake. 
                    Newer technology hides even this, but it's not widely adopted yet.
                  </p>
                  
                  <p>
                    Big outages usually hit single points of failure. 
                    A DNS service goes down, or a certificate authority makes a mistake, or a major content delivery network fails. 
                    The whole Internet feels it instantly.
                  </p>
                  
                  <p>
                    The Internet heals itself when cables break. 
                    Traffic automatically finds new paths. 
                    But this takes seconds or minutes. 
                    During that time, data packets get lost or take wrong turns.
                  </p>
                  
                  <p>
                    Governments can and do interfere. 
                    They inject fake responses, filter content, and redirect traffic. 
                    The Internet bends to local laws and surveillance.
                  </p>
                  
                  <p>
                    One IP address now serves hundreds or thousands of people. 
                    Finding who did something online requires timestamps and logs from internet providers, not just the IP address.
                  </p>
                  
                  <p>
                    Your request to a website and the website's response don't take the same path. One might go through London, the other through Amsterdam. 
                    Network diagnostic tools only show one side.
                  </p>
                  
                  <p>
                    The entire Internet depends on accurate time. 
                    If clocks drift too much, security breaks, logs become useless, and payments fail. 
                    Attacking time servers can break more than you'd expect.
                  </p>
                  
                  <p>
                    When you visit google.com, you're usually hitting a server in your own city. 
                    Two people in different countries visiting the "same" website are actually using completely different infrastructure.
                  </p>
                  
                  <p>
                    Sometimes internet providers have business disputes. 
                    While they argue, traffic between their customers takes long detours. 
                    You experience this as "the Internet is slow tonight." 
                    It's actually corporate politics.
                  </p>
                  
                  <p>
                    The Internet was designed for short text transfers. 
                    Video streaming is a hack layered on top. 
                    Videos get chopped into thousands of tiny requests. 
                    Without content delivery networks, streaming would collapse.
                  </p>
                  
                  <p>
                    Undersea cables are easier to attack than satellites. 
                    One anchor dragging across the seabed can cut connectivity for millions. 
                    The cable locations are public knowledge.
                  </p>
                  
                  <p>
                    The cloud is physical. 
                    It's warehouses full of servers consuming enormous amounts of electricity. 
                    "Instant scaling" means pre-built servers sitting idle until needed. 
                    Cloud computing is logistics.
                  </p>
                  
                  <p>
                    Wrong routing announcements regularly redirect global traffic. 
                    In 2008, Pakistan accidentally broke YouTube worldwide. 
                    This still happens, sometimes by accident, sometimes on purpose.
                  </p>
                  
                  <p>
                    The Internet appears resilient but is brittle in invisible ways. 
                    Certificates expire and break half the web. 
                    DNS servers misbehave and poison caches everywhere. 
                    Middleboxes rewrite data in non-standard ways. 
                    What you experience as reliability requires thousands of engineers fixing problems daily.
                  </p>
                  
                  <p>
                    Light in glass fiber moves at two-thirds the speed of light in empty space. 
                    New York to London has a minimum delay of 28 milliseconds each way, no matter how much you spend. 
                    Financial traders spend billions to save single milliseconds, even building microwave towers because radio waves through air are faster than light through glass.
                  </p>
                  
                  <p>
                    Loading one website makes your browser contact dozens of other servers.
                    Analytics, advertisements, fonts, security checks. 
                    One click creates network activity around the globe.
                  </p>
                  
                  <p>
                    The Internet has no center, but it has bottlenecks. 
                    Root DNS servers, major internet providers, submarine cables, certificate authorities. 
                    When these fail, large parts of the Internet go dark.
                  </p>
                  
                  <p>
                    Data never really disappears. 
                    Backups, caches, copies, and logs mean your "deleted" information lives on in dozens of places. 
                    The Internet is designed to be sticky. 
                    Copying everything everywhere creates resilience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}