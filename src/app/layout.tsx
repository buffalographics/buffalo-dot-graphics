import { Analytics } from '@vercel/analytics/react'
import { RootLayout } from '@/components/RootLayout'

import '@/styles/tailwind.css'
import { Metadata } from 'next'
import Head from 'next/head'
import { ThemeProvider } from 'next-themes'

export const metadata: Metadata = {
  metadataBase: new URL(`https://${process.env.VERCEL_URL}`),
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
      'max-snippet': -1,
    },
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full bg-neutral-950 text-base antialiased">
      <body className="flex min-h-full flex-col">
        <RootLayout>
          <ThemeProvider>{children}</ThemeProvider>
          <Analytics />
        </RootLayout>
      </body>
    </html>
  )
}
