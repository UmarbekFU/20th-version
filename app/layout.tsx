import type { Metadata } from 'next'
import { Inter, Lora } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import StructuredData from '@/components/StructuredData'

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
        <StructuredData />
      </body>
    </html>
  )
}
