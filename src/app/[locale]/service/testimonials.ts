import { ITestimonialsProps } from '@/app/api/testimonials/route'

/**
 * @description:
 * @param {object} param1
 * @return {*}
 */
export async function getTestimonials(locale: string) {
  const url = `http://localhost:3000/api/testimonials?locale=${locale}`

  try {
    const response = await fetch(url)
    if (response.ok) {
      const data = await response.json()
      return data as { data: ITestimonialsProps[] }
    } else {
      throw new Error('Failed to fetch data:' + response.statusText)
    }
  } catch (error) {
    throw new Error((error as Error).message)
  }
}
