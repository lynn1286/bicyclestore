import { getProductDetail } from '@/app/[locale]/products/[sku]/service/product'
import Image from 'next/image'

export default async function ProductsModal({
  params
}: {
  params: { sku: string; locale: string }
}) {
  const product = await getProductDetail({ locale: params.locale, sku: params.sku })

  return (
    <div className="flex h-60 justify-center items-center fixed bottom-0 bg-[rgba(0,0,0,.5)] w-full">
      <Image
        width={200}
        height={200}
        fetchPriority="high"
        alt=""
        src={product.data.imgUrl}
        className="aspect-square object-cover"
        color="transparent"
      ></Image>
    </div>
  )
}
