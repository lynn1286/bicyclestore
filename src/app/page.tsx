import Image from 'next/image'
import Header from './components/header'
import Link from 'next/link'
import Footer from './components/footer'

export default function Home() {
  return (
    <>
      <div className="relative min-h-[59vw] 2xl:min-h-[95vh]">
        <Image
          src="/luis-gherasim-eLL2rH4FW2E-unsplash.jpg"
          alt=""
          fill
          priority
          className="object-cover object-top 2xl:object-contain 2xl:p-4"
        ></Image>
        <div className="relative">
          <Header></Header>
          <div className="w-full py-24 2xl:py-12">
            <div className="container space-y-10 mx-auto px-6">
              <div className="md:px-10">
                <div className="text-center">
                  <h1 className="mx-auto flex max-w-lg flex-wrap justify-center text-balance text-5xl font-bold tracking-tighter">
                    <span className="bg-white px-1 py-px md:bg-transparent md:py-0">Two</span>
                    <span className="bg-white px-1 py-px md:bg-transparent md:py-0">wheels,</span>
                    <span className="bg-white px-1 py-px md:bg-transparent md:py-0">endless</span>
                    <span className="bg-white px-1 py-px md:bg-transparent md:py-0">
                      possibilities.
                    </span>
                  </h1>
                  <p className="mt-4">
                    <span className="text-balance bg-white px-1 py-1 md:bg-transparent md:px-0 md:py-0">
                      Unleash your ride with our premier bicycle collection.
                    </span>
                  </p>
                  <Link
                    href={'/products'}
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-slate-900 text-slate-50 hover:bg-slate-900/90 h-10 px-4 py-2 mt-8 min-w-36"
                  >
                    Explore all bicycles
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
                      className="lucide lucide-arrow-right ml-1"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <main>
        <section className="container flex flex-col gap-10 py-12 mx-auto px-6">
          <h2 className="text-3xl font-bold tracking-tighter">Featured bicycles</h2>
          <div className="-mx-px grid w-[calc(100%+2px)] grid-cols-1 items-stretch justify-center gap-10 md:grid-cols-3">
            <Link href={'/products/roadster-classic'}>
              <div className="overflow-hidden rounded-md border border-slate-200 bg-white shadow-sm flex flex-col">
                <Image
                  src="/daniel-salcius-RRcYcdGY630-unsplash.jpg"
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
                      Roadster Classic
                    </h3>
                    <p>£899.00</p>
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
            <Link href={'/products/mountain-explorer'}>
              <div className="overflow-hidden rounded-md border border-slate-200 bg-white shadow-sm flex flex-col">
                <Image
                  src="/alessio-soggetti-HPpj2190tGs-unsplash.jpg"
                  alt=""
                  width={250}
                  height={250}
                  style={{ color: 'transparent' }}
                  className="aspect-[3/2] w-full overflow-hidden object-cover"
                ></Image>
                <div className="flex items-center justify-between p-4">
                  <div>
                    <h3 className="text-base font-semibold leading-none tracking-tight">
                      Mountain Explorer
                    </h3>
                    <p>£1,299.00</p>
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
            <Link href={'/products/roadster-sport'}>
              <div className="overflow-hidden rounded-md border border-slate-200 bg-white shadow-sm flex flex-col">
                <Image
                  src="/david-jones-IYU2eCw9iek-unsplash.jpg"
                  alt=""
                  width={250}
                  height={250}
                  style={{ color: 'transparent' }}
                  className="aspect-[3/2] w-full overflow-hidden object-cover"
                ></Image>
                <div className="flex items-center justify-between p-4">
                  <div>
                    <h3 className="text-base font-semibold leading-none tracking-tight">
                      Roadster Sport
                    </h3>
                    <p>£1,199.00</p>
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
          </div>
          <div>
            <Link
              href={'/products'}
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-slate-900 text-slate-50 hover:bg-slate-900/90 h-10 px-4 py-2"
            >
              Explore all bicycles
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
                className="lucide lucide-arrow-right ml-1"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </Link>
          </div>
        </section>
        <section className="w-full border-b border-t bg-slate-50 py-12">
          <div className="container mx-auto px-6">
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-bold tracking-tighter">What our customers say</h2>
              <div className="mt-10 flex flex-col gap-10 md:flex-row">
                <div>
                  <p className="text-balance -indent-2">
                    {`“The Roadster Classic is the best bicycle I've ever owned. It's smooth, fast,
                    and reliable. I couldn't ask for more.”`}
                  </p>
                  <h3 className="mt-3 text-sm font-semibold">John Smith</h3>
                </div>
                <div>
                  <p className="text-balance -indent-2">
                    {`“I love the Mountain Explorer. It's perfect for my weekend adventures. Highly
                    recommended!”`}
                  </p>
                  <h3 className="mt-3 text-sm font-semibold">Jane Brown</h3>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
