'use server'

import { cookies } from 'next/headers'

export async function LogoutAction() {
  cookies().delete('user')
}
