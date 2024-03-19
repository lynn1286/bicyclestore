import { getTranslations } from 'next-intl/server'
import Image from 'next/image'
import { Link } from '@/navigation'
import LocaleSwitcher from './LocaleSwitcher'

const Header = async () => {
  const t = await getTranslations('Header')

  return (
    <header className="flex justify-between px-6 py-4 md:px-12">
      <div className="flex items-center">
        <Link href={'/'}>
          <h1 className="text-2xl font-semibold text-slate-900">
            <Image
              alt="Bicycle Store"
              src="/logo.svg"
              height={0}
              width={0}
              style={{ width: '53px', height: '32px' }}
              color="transparent"
            ></Image>
          </h1>
        </Link>
      </div>
      <div className="flex items-center">
        <nav className="flex items-center gap-4">
          <Link href="/products" className="inline-flex underline-offset-4 hover:underline">
            {t('products')}
          </Link>
          <Link href="/about" className="inline-flex underline-offset-4 hover:underline">
            {t('about')}
          </Link>
        </nav>
        <div className="ml-4">
          <LocaleSwitcher />
        </div>
      </div>
    </header>
  )
}

export default Header
