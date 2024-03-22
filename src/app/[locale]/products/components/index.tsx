'use client'

import { usePathname } from '@/navigation'
import { useParams, useRouter, useSearchParams } from 'next/navigation'
import { useCallback } from 'react'

const SortSelctComponents = (props: React.ComponentProps<'select'>) => {
  const router = useRouter()
  // 使用next-intl提供的方法可以获取到不带前缀的路径
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      params.set(name, value)

      return params.toString()
    },
    [searchParams]
  )

  function onChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const value = event.target.value
    router.push(pathname + '?' + createQueryString('sort', value))
  }

  return <select {...props} onChange={onChange} />
}

export default SortSelctComponents
