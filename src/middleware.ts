import createMiddleware from 'next-intl/middleware'
import { defaultLocale, localeDetection, localePrefix, locales, pathnames } from './config'

export default createMiddleware({
  locales,
  defaultLocale,
  localePrefix,
  localeDetection,
  pathnames
})

export const config = {
  matcher: ['/', '/(zh|en)/:path*', '/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)']
}
