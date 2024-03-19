'use client'

import { usePathname, useRouter } from '@/navigation'
import { useParams } from 'next/navigation'

export default function LocaleSwitcherSelect(props: React.ComponentProps<'select'>) {
  const router = useRouter()
  const params = useParams()
  // 使用next-intl提供的方法可以获取到不带前缀的路径
  const pathname = usePathname()

  function onChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const locale = event.target.value
    router.push(
      {
        pathname,
        params: params as any
      },
      { locale }
    )
  }

  return <select {...props} onChange={onChange} />
}
