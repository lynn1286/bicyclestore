import { getTranslations } from 'next-intl/server'

const CommonFooter = async () => {
  const t = await getTranslations('Footer')

  return (
    <footer className="container mt-auto flex flex-col items-baseline justify-between gap-2 py-6 md:flex-row mx-auto px-6">
      <nav className="flex gap-4">
        <a
          className="text-sm underline-offset-4 opacity-90 hover:underline hover:opacity-100"
          href="/"
        >
          {t('home')}
        </a>
        <a
          className="text-sm underline-offset-4 opacity-90 hover:underline hover:opacity-100"
          href="/products"
        >
          {t('products')}
        </a>
        <a
          className="text-sm underline-offset-4 opacity-90 hover:underline hover:opacity-100"
          href="/about"
        >
          {t('about')}
        </a>
      </nav>
      <p className="text-sm text-gray-500">{t('store')}</p>
      <div className="mt-4 flex gap-4 md:mt-0">
        <a className="opacity-70 hover:opacity-100" aria-label="Instagram" href="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-instagram "
          >
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
          </svg>
        </a>
        <a className="opacity-70 hover:opacity-100" aria-label="Facebook" href="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-facebook "
          >
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
          </svg>
        </a>
        <a className="opacity-70 hover:opacity-100" aria-label="YouTube" href="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-youtube "
          >
            <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path>
            <path d="m10 15 5-3-5-3z"></path>
          </svg>
        </a>
      </div>
    </footer>
  )
}

export default CommonFooter
