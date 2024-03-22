import { getFormatter, getTranslations } from 'next-intl/server'
import { getProducts } from '../service/products'
import { Link } from '@/navigation'
import Image from 'next/image'
import SortSelctComponents from './components'

const Products = async ({
  params,
  searchParams
}: {
  params: { locale: string }
  searchParams: { sort: string }
}) => {
  const t = await getTranslations('Product')
  const format = await getFormatter()
  const { data: products } = await getProducts(params.locale, searchParams.sort)

  return (
    <div className="pt-16">
      <div className="container py-24 mx-auto px-6">
        <div className="flex float-end mb-2 border border-gray-300 rounded-md px-2">
          <SortSelctComponents defaultValue={searchParams.sort || 'asc'}>
            <option value="asc">{t('asc')}</option>
            <option value="desc">{t('desc')}</option>
          </SortSelctComponents>
        </div>
        <div className="-mx-px grid w-[calc(100%+2px)] grid-cols-1 items-stretch justify-center gap-10 md:grid-cols-3">
          {products.map(i => {
            return (
              <Link
                href={{ pathname: '/products/[sku]', params: { sku: i.sku } }}
                scroll={false}
                key={i.id}
              >
                <div className="overflow-hidden rounded-md border border-slate-200 bg-white shadow-sm flex flex-col relative">
                  <div className="absolute right-2 w-6 h-6 rounded-full bg-[rgba(0,0,0.5)] text-center top-2 text-white">
                    {i.id}
                  </div>
                  <Image
                    src={i.imgUrl}
                    alt=""
                    width={250}
                    height={250}
                    priority
                    color="transparent"
                    className="aspect-[3/2] w-full overflow-hidden object-cover"
                  ></Image>
                  <div className="flex items-center justify-between p-4">
                    <div>
                      <h3 className="text-base font-semibold leading-none tracking-tight">
                        {i.title}
                      </h3>
                      <p>
                        {format.number(i.price.value, {
                          style: 'currency',
                          currency: i.price.currency
                        })}
                      </p>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-arrow-right mx-3 text-orange-700"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Products
