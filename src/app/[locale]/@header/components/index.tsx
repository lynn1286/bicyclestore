import { getTranslations } from 'next-intl/server'
import Image from 'next/image'
import { Link } from '@/navigation'
import LocaleSwitcher from '../../components/LocaleSwitcher'
import { cookies } from 'next/headers'
import Logout from './logout'

const CommonHeader = async () => {
  const t = await getTranslations('Header')
  let user = cookies().get('user')?.value as string | { data: { name: string } }
  if (user) {
    user = JSON.parse(user as string) as { data: { name: string } }
    console.log('🚀 ~  : CommonHeader -> user', user)
  }

  return (
    <header className="flex justify-between px-6 py-4 md:px-12 absolute left-0 top-0 z-[1] w-full">
      <div className="flex items-center">
        <Link href={'/'}>
          <h1 className="text-2xl font-semibold text-slate-900">
            <Image
              alt="Bicycle Store"
              src="/logo.svg"
              height={0}
              width={0}
              priority
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
          {user ? (
            <>
              <div>{(user as { data: { name: string } }).data.name}</div>
              <Logout i18n={{ signout: t('signout') }} />
            </>
          ) : (
            <Link href="/login" className="inline-flex underline-offset-4 hover:underline">
              {t('login')}
            </Link>
          )}
        </nav>
        <div className="ml-4">
          <LocaleSwitcher />
        </div>
      </div>
    </header>
  )
}

export default CommonHeader
