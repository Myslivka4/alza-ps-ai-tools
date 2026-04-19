import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'PS AI Tools',
  description: 'Tvůj průvodce AI nástroji v prodejní síti',
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'AI Tools',
  },
  icons: {
    apple: '/icon-192.svg',
  },
}

export const viewport: Viewport = {
  themeColor: '#222464',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="cs">
      <body className="min-h-screen" style={{ backgroundColor: '#1a1b50' }}>{children}</body>
    </html>
  )
}
