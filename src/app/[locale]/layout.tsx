import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import cls from 'classnames'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Bicycle Store',
  icons: '/favicon.svg'
}

export default function RootLayout({
  children,
  header,
  footer,
  params: { locale }
}: Readonly<{
  children: React.ReactNode
  header: React.ReactNode
  footer: React.ReactNode
  params: { locale: string }
}>) {
  return (
    <html lang={locale}>
      <body className={cls(inter.className, 'relative flex min-h-screen flex-col text-slate-900')}>
        {header}
        {children}
        {footer}
      </body>
    </html>
  )
}
