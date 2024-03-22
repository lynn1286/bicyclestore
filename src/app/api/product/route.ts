import { defaultLocale } from '@/config'
import { IProductListProps, productList, productListZh } from '@/db/products'
import { getTranslations } from 'next-intl/server'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const locale = request.nextUrl.searchParams.get('locale') || defaultLocale
  const sort = request.nextUrl.searchParams.get('sort') || 'asc'
  const t = await getTranslations({ locale, namespace: 'Home' })

  const data = locale === 'zh' ? productListZh : productList

  const ascData = [...data].sort((a: IProductListProps, b: IProductListProps) => a.id - b.id)
  const descData = [...data].sort((a: IProductListProps, b: IProductListProps) => b.id - a.id)

  return sort === 'asc'
    ? NextResponse.json({ data: ascData })
    : NextResponse.json({ data: descData })
}
