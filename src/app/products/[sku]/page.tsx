import Footer from '@/app/components/footer'
import Header from '@/app/components/header'
import Image from 'next/image'
import { getProductDetail } from './service/product'

const ProductDetail = async ({ params: { sku } }: { params: { sku: string } }) => {
  const { data: product } = await getProductDetail({ sku })

  return (
    <>
      <div>
        <Header></Header>
        <main className="mx-auto px-6 container">
          <div className="mt-24 flex flex-col md:flex-row">
            <div className="md:min-w-[450px]">
              <Image
                width={450}
                height={450}
                fetchPriority="high"
                alt=""
                src={product.imgUrl}
                className="aspect-square object-cover"
                color="transparent"
              ></Image>
            </div>
            <div>
              <h1 className="mt-10 bg-white text-6xl font-bold tracking-tighter md:-ml-16 md:p-2">
                {product.title}
              </h1>
              <div className="flex flex-col gap-6 pt-8 md:pl-14">
                <p className="text-2xl font-semibold">{product.price?.value}</p>
                <p className="text-slate-600">{product.describe}</p>
                <ul>
                  {product.specificities?.map((i, idx) => {
                    return (
                      <li className="flex items-center" key={idx}>
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
                          className="lucide lucide-check mr-2 text-orange-700"
                        >
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                        <span className="text-slate-600">{i}</span>
                      </li>
                    )
                  })}
                </ul>
                <p className="text-slate-600">Delivery by 21 March 2024</p>
                <div>
                  <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-slate-900 text-slate-50 hover:bg-slate-900/90 h-10 px-4 py-2 min-w-48">
                    Buy now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer></Footer>
    </>
  )
}

export default ProductDetail
