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

        {/* Floating WhatsApp Button */}
        <a
          href="https://wa.me/966552941685"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="تواصل معنا عبر واتساب"
          className="whatsapp-float-btn"
        >
          {/* Pulse ring */}
          <span className="whatsapp-pulse-ring" />
          {/* WhatsApp SVG Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            width="30"
            height="30"
            fill="currentColor"
            style={{ position: 'relative', zIndex: 1, color: 'var(--background)' }}
          >
            <path d="M16 0C7.163 0 0 7.163 0 16c0 2.822.736 5.476 2.027 7.789L0 32l8.447-2.01A15.938 15.938 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.27 13.27 0 0 1-6.769-1.851l-.485-.288-5.013 1.194 1.263-4.875-.317-.5A13.267 13.267 0 0 1 2.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.258-9.907c-.398-.199-2.353-1.161-2.718-1.294-.365-.133-.631-.199-.897.199-.266.398-1.031 1.294-1.264 1.56-.233.266-.465.299-.863.1-.398-.199-1.68-.619-3.2-1.975-1.183-1.055-1.981-2.358-2.214-2.756-.233-.398-.025-.613.175-.811.18-.178.398-.465.597-.698.199-.233.266-.398.398-.664.133-.266.066-.498-.033-.697-.1-.199-.897-2.162-1.229-2.96-.324-.778-.653-.672-.897-.684-.233-.012-.498-.015-.764-.015-.266 0-.697.1-1.063.498-.365.398-1.394 1.362-1.394 3.323s1.428 3.855 1.627 4.121c.199.266 2.81 4.29 6.808 6.018.951.411 1.694.656 2.272.839.954.303 1.822.26 2.508.158.765-.114 2.353-.962 2.685-1.892.332-.93.332-1.727.233-1.892-.1-.166-.365-.266-.764-.465z"/>
          </svg>
        </a>

        <style>{`
          .whatsapp-float-btn {
            position: fixed;
            bottom: 24px;
            right: 24px;
            z-index: 9999;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 60px;
            height: 60px;
            border-radius: 50%;
            background-color: var(--foreground);
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
            transition: transform 0.2s ease, box-shadow 0.2s ease;
            text-decoration: none;
          }
          .whatsapp-float-btn:hover {
            transform: scale(1.1);
            box-shadow: 0 6px 28px rgba(0, 0, 0, 0.3);
          }
          .whatsapp-pulse-ring {
            position: absolute;
            width: 100%;
            height: 100%;
            border-radius: 50%;
            background-color: var(--foreground);
            opacity: 0.15;
            animation: whatsapp-pulse 2s ease-out infinite;
          }
          @keyframes whatsapp-pulse {
            0% { transform: scale(1); opacity: 0.2; }
            70% { transform: scale(1.6); opacity: 0; }
            100% { transform: scale(1.6); opacity: 0; }
          }
        `}</style>
      </body>
    </html>
  )
}
