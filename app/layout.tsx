import type { Metadata } from 'next'
import { Noto_Sans_Arabic } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const notoSansArabic = Noto_Sans_Arabic({ 
  subsets: ["arabic"],
  variable: '--font-arabic',
  weight: ['400', '500', '600', '700', '800']
});

export const metadata: Metadata = {
  title: 'سند تكنو | استشارات الذكاء الاصطناعي',
  description: 'شركة سند تكنولوجي - شريكك في دمج الذكاء الاصطناعي داخل أعمالك. استشارات وتطبيقات ذكاء اصطناعي متخصصة في السعودية.',
  generator: 'v0.app',
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${notoSansArabic.variable} font-arabic antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
