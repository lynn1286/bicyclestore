import { defaultLocale } from '@/config'
import { productList, productListZh } from '@/db/products'
import { getTranslations } from 'next-intl/server'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const locale = request.nextUrl.searchParams.get('locale') || defaultLocale
  const t = await getTranslations({ locale, namespace: 'Home' })

  if (locale === 'zh') {
    return NextResponse.json({ data: productListZh })
  }

  return NextResponse.json({ data: productList })
}
