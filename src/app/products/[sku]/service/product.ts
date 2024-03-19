import { IProductListProps } from '@/app/api/product/[sku]/route'

/**
 * @description:
 * @param {object} param1
 * @return {*}
 */
export async function getProductDetail({ sku }: { sku: string }) {
  const url = `http://localhost:3000/api/product/${sku}`

  try {
    const response = await fetch(url)
    if (response.ok) {
      const data = await response.json()
      return data as { data: IProductListProps }
    } else {
      throw new Error('Failed to fetch data:' + response.statusText)
    }
  } catch (error) {
    throw new Error((error as Error).message)
  }
}
