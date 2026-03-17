import type { Metadata } from 'next'
import { IBM_Plex_Sans_Arabic } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const ibmPlexArabic = IBM_Plex_Sans_Arabic({ 
  subsets: ["arabic"],
  variable: '--font-arabic',
  weight: ['400', '500', '600', '700']
});

export const metadata: Metadata = {
  title: 'سند تكنو | استشارات الذكاء الاصطناعي',
  description: 'شركة سند تكنولوجي - شريكك في دمج الذكاء الاصطناعي داخل أعمالك. استشارات وتطبيقات ذكاء اصطناعي متخصصة في السعودية.',
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="icon" href="/sanad-AI/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/sanad-AI/favicon.png" />
      </head>
      <body className={`${ibmPlexArabic.variable} font-arabic antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
