'use server'

import { redirect } from '@/navigation'
import { cookies } from 'next/headers'

const sleep = (ms: number) => new Promise(r => setTimeout(r, ms))

const getUser = async () => {
  await sleep(500)
  const url = `http://localhost:3000/api/user`
  try {
    const response = await fetch(url)
    if (response.ok) {
      const data = await response.json()
      return {
        code: 0,
        data
      }
    } else {
      return {
        code: 1,
        message: 'Failed to fetch data:' + response.statusText
      }
    }
  } catch (error) {
    return {
      code: 2,
      message: 'Failed to fetch data:' + (error as Error).message
    }
  }
}

export const loginAction = async () => {
  const response = await getUser()

  if (!response.code) {
    cookies().set('user', JSON.stringify(response.data))
    redirect('/')
  }

  return response
}
