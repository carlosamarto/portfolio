// Next
import type { Metadata } from 'next'
import { Fira_Code, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'

// Styles
import '@/styles/globals.css'

// Context
import ThemeProvider from '@/context'

// Metadata
export const metadata: Metadata = {
  metadataBase: new URL('https://carlosmrtzo.com/'),
  generator: 'Next.js',
  referrer: 'origin-when-cross-origin',
  keywords: ['Next.js', 'React', 'JavaScript', 'TypeScript', 'WordPress', 'Portfolio', 'Front-End'],
  authors: [{ name: 'Carlos', url: 'https://carlosmrtzo.com/' }],
  creator: 'Carlos Martínez',
  manifest: '/manifest.webmanifest',
  category: 'portfolio',
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  title: 'Carlos Martínez',
  description: 'Front-End Developer passionate about creating web pages that stand out for their great style.',
  openGraph: {
    title: 'Carlos Martínez',
    description: 'Front-End Developer passionate about creating web pages that stand out for their great style.',
    images: '/images/opengraph-image.png',
    url: 'https://carlosmrtzo.com/',
    siteName: 'Carlos Martínez',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@devilsncry3',
    title: 'Carlos Martínez',
    description: 'Front-End Developer passionate about creating web pages that stand out for their great style.',
    images: '/images/twitter-image.png'
  },
  icons: {
    shortcut: { url: '/icons/favicon.ico', sizes: 'any', type: 'image/x-icon' },
    icon: [
      { url: '/icons/favicon-16.png', sizes: '16x16', type: 'image/png' },
      { url: '/icons/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icons/favicon-48.png', sizes: '48x48', type: 'image/png' },
      { url: '/icons/favicon-64.png', sizes: '64x64', type: 'image/png' },
      { url: '/icons/favicon-128.png', sizes: '128x128', type: 'image/png' },
      { url: '/icons/favicon-512.png', sizes: '512x512', type: 'image/png' },
      { url: '/icons/android-icon-16.png', sizes: '16x16', type: 'image/png' },
      { url: '/icons/android-icon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icons/android-icon-48.png', sizes: '48x48', type: 'image/png' },
      { url: '/icons/android-icon-64.png', sizes: '64x64', type: 'image/png' },
      { url: '/icons/android-icon-128.png', sizes: '128x128', type: 'image/png' }
    ],
    apple: [
      { url: '/icons/apple-touch-icon-16.png', sizes: '16x16', type: 'image/png' },
      { url: '/icons/apple-touch-icon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icons/apple-touch-icon-48.png', sizes: '48x48', type: 'image/png' },
      { url: '/icons/apple-touch-icon-64.png', sizes: '64x64', type: 'image/png' },
      { url: '/icons/apple-touch-icon-128.png', sizes: '128x128', type: 'image/png' },
      { url: '/icons/apple-touch-icon-512.png', sizes: '512x512', type: 'image/png' }
    ]
  }
}

// Fonts
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '700'],
  style: ['normal'],
  display: 'swap'
})

const firaCode = Fira_Code({
  subsets: ['latin'],
  variable: '--font-fira-code',
  weight: ['400', '500', '700'],
  style: ['normal'],
  display: 'swap'
})

// Layout
export default function RootLayout ({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <html lang="es" className={`page ${inter.variable} ${firaCode.variable}`}>
      <body className="body">
        <ThemeProvider>{children}</ThemeProvider>

        <Analytics />
      </body>
    </html>
  )
}
