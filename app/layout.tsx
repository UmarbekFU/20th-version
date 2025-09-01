import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Umarbek - Writer, Developer, Thinker',
  description: 'Hey! I\'m Umarbek. Samarkand native, I now live in Tashkent, Uzbekistan. I write essays, build stuff, and take notes.',
  keywords: ['developer', 'writer', 'blog', 'portfolio', 'personal website', 'Uzbekistan', 'Tashkent', 'Samarkand'],
  authors: [{ name: 'Umarbek' }],
  creator: 'Umarbek',
  openGraph: {
    title: 'Umarbek - Writer, Developer, Thinker',
    description: 'Hey! I\'m Umarbek. Samarkand native, I now live in Tashkent, Uzbekistan.',
    type: 'website',
  },
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
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  var systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                  var resolvedTheme = theme === 'system' ? systemTheme : theme;
                  if (resolvedTheme) {
                    document.documentElement.classList.add(resolvedTheme);
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
