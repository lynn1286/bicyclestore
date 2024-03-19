import { NextRequest, NextResponse } from 'next/server'
import { productList, productListZh } from '../route'
import { getTranslations } from 'next-intl/server'
import { defaultLocale } from '@/config'

export async function GET(request: NextRequest, { params }: { params: { sku: string } }) {
  const locale = request.nextUrl.searchParams.get('locale') || defaultLocale
  const t = await getTranslations({ locale, namespace: 'Home' })

  if (locale === 'zh') {
    const productZh = productListZh.find(i => i.sku === params.sku)
    return NextResponse.json({ data: productZh })
  }

  const product = productList.find(i => i.sku === params.sku)
  return NextResponse.json({ data: product })
}
