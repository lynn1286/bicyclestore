import { locales } from '@/config'
import { unstable_setRequestLocale } from 'next-intl/server'

export function generateStaticParams() {
  return locales.map(locale => ({ locale }))
}

export default function RootLayout({
  children,
  params: { locale }
}: Readonly<{
  children: React.ReactNode
  params: { locale: string }
}>) {
  // Ensures static rendering at build time.
  unstable_setRequestLocale(locale)

  return <div>{children}</div>
}
