import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest, { params }: { params: { locale: string } }) {
  console.log('🚀 ~  : GET -> params', params.locale)
  console.log('🚀 ~  : GET -> request', request)
  return NextResponse.json({ data: 'test' })
}
