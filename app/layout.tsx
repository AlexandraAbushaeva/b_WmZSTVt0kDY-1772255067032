import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin', 'cyrillic'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-serif',
})

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'Наталья Ульянова — Психолог | Семейная и личная терапия',
  description: 'Профессиональный психолог Наталья Ульянова. Индивидуальные и семейные консультации, работа с тревогой, отношениями, детско-родительскими конфликтами. Запись онлайн.',
  keywords: 'психолог, семейный психолог, детский психолог, консультация психолога, терапия, Наталья Ульянова',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <body className={`${inter.variable} ${cormorant.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
