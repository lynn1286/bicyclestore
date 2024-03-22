'use server'

import { cookies } from 'next/headers'

export const isLogin = () => {
  return cookies().get('user')?.value
}
