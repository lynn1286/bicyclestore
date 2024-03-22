import { IProductListProps } from '@/db/products'

/**
 * @description:
 * @param {object} param1
 * @return {*}
 */
export async function getProducts(locale: string, sort: string = 'asc') {
  const search = new URLSearchParams(Object.entries({ locale, sort }))
  const url = `http://localhost:3000/api/product?${search}`

  try {
    const response = await fetch(url)
    if (response.ok) {
      const data = await response.json()
      return data as { data: IProductListProps[] }
    } else {
      throw new Error('Failed to fetch data:' + response.statusText)
    }
  } catch (error) {
    throw new Error((error as Error).message)
  }
}
