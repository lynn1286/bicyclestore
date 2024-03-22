import { getTranslations } from 'next-intl/server'

const Products = async () => {
  const t = await getTranslations('Product')

  // await new Promise(resolve => setTimeout(resolve, 50000))

  return (
    <div className="pt-16">
      <div className="container py-24 mx-auto px-6">
        <h1 className="text-3xl font-bold">{t('msg')}</h1>
      </div>
    </div>
  )
}

export default Products
