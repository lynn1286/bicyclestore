import Footer from '@/app/components/footer'
import Header from '@/app/components/header'
import Image from 'next/image'

const ProductDetail = ({ params: { sku } }: { params: { sku: string } }) => {
  let img: Record<string, string> = {
    'roadster-classic': '/daniel-salcius-RRcYcdGY630-unsplash.jpg',
    'mountain-explorer': '/alessio-soggetti-HPpj2190tGs-unsplash.jpg',
    'roadster-sport': '/david-jones-IYU2eCw9iek-unsplash.jpg'
  }

  let text: Record<string, string> = {
    'roadster-classic': 'Roadster Classic',
    'mountain-explorer': 'Mountain Explorer',
    'roadster-sport': 'Roadster Sport'
  }

  let price: Record<string, string> = {
    'roadster-classic': '£899.00',
    'mountain-explorer': '£1,299.00',
    'roadster-sport': '£1,199.00'
  }

  let desc: Record<string, string> = {
    'roadster-classic': '£899.00',
    'mountain-explorer':
      "The Mountain Explorer is built for adventure seekers. Its rugged construction and powerful suspension allow you to conquer any terrain with ease. Whether you're tackling steep hills or navigating through rocky trails, this bike will be your reliable companion.",
    'roadster-sport': '£1,199.00'
  }

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
                src={img[sku]}
                className="aspect-square object-cover"
                style={{ color: 'transparent' }}
              ></Image>
            </div>
            <div>
              <h1 className="mt-10 bg-white text-6xl font-bold tracking-tighter md:-ml-16 md:p-2">
                {text[sku]}
              </h1>
              <div className="flex flex-col gap-6 pt-8 md:pl-14">
                <p className="text-2xl font-semibold">{price[sku]}</p>
                <p className="text-slate-600">{desc[sku]}</p>
                <ul>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-check mr-2 text-orange-700"
                    >
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    <span className="text-slate-600">Rugged construction</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-check mr-2 text-orange-700"
                    >
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    <span className="text-slate-600">Powerful suspension</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-check mr-2 text-orange-700"
                    >
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    <span className="text-slate-600">Versatile for any terrain</span>
                  </li>
                </ul>
                <p className="text-slate-600">Delivery by 21 Feb 2024</p>
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
