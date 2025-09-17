import type { Metadata, Viewport } from 'next'
import { Inter, Lora } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import StructuredData from '@/components/StructuredData'
import ProgressBar from '@/components/ProgressBar'
import SearchProvider from '@/components/SearchProvider'
import ErrorBoundary from '@/components/ErrorBoundary'
import BackgroundSwitcher from '@/components/BackgroundSwitcher'

const inter = Inter({ subsets: ['latin'] })
const lora = Lora({ subsets: ['latin'], display: 'swap' })

export const metadata: Metadata = {
  title: 'Umarbek',
  description: 'Hey! I\'m Umarbek. Samarkand native, I now live in Tashkent, Uzbekistan. I write essays, build stuff, and take notes.',
  keywords: ['developer', 'writer', 'blog', 'portfolio', 'personal website', 'Uzbekistan', 'Tashkent', 'Samarkand'],
  authors: [{ name: 'Umarbek' }],
  creator: 'Umarbek',
  openGraph: {
    title: 'Umarbek',
    description: 'Hey! I\'m Umarbek. Samarkand native, I now live in Tashkent, Uzbekistan.',
    type: 'website',
  },
  manifest: '/manifest.json',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://umarbek.dev',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#00e0a1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var theme = localStorage.getItem('theme') || 'system';
                var systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                var resolvedTheme = theme === 'system' ? systemTheme : theme;
                document.documentElement.classList.add(resolvedTheme);
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <ErrorBoundary>
          <BackgroundSwitcher />
          <ProgressBar />
          <ThemeProvider>
            <SearchProvider>
              {children}
            </SearchProvider>
          </ThemeProvider>
          <StructuredData />
        </ErrorBoundary>
      </body>
    </html>
  )
}
