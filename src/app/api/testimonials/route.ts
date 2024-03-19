import { NextRequest, NextResponse } from 'next/server'
import { getTranslations } from 'next-intl/server'
import { defaultLocale } from '@/config'

export interface ITestimonialsProps {
  id: number
  name: string
  testimonials: string
}

const testimonials = [
  {
    id: 1,
    name: 'John Smith',
    testimonials: `The Roadster Classic is the best bicycle I've ever owned. It's smooth, fast, and reliable. I couldn't ask for more.`
  },
  {
    id: 2,
    name: 'Jane Brown',
    testimonials: `I love the Mountain Explorer. It's perfect for my weekend adventures. Highly recommended!`
  }
]

const testimonialsZh = [
  {
    id: 1,
    name: '约翰·史密斯',
    testimonials: `Roadster Classic 是我拥有过的最好的自行车。它平稳、快速、可靠。我已经别无所求了。`
  },
  {
    id: 2,
    name: '简·布朗',
    testimonials: `我喜欢 Mountain Explorer。它非常适合我的周末探险。强烈推荐！`
  }
]

export async function GET(request: NextRequest) {
  const locale = request.nextUrl.searchParams.get('locale') || defaultLocale
  const t = await getTranslations({ locale, namespace: 'Home' })

  // 模拟国际化
  if (locale === 'zh') {
    return NextResponse.json({ data: testimonialsZh })
  }

  return NextResponse.json({ data: testimonials })
}
