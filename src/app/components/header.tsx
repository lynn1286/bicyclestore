import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
  return (
    <header className="flex justify-between px-6 py-4 md:px-12">
      <div className="flex items-center">
        <Link href={'/'}>
          <h1 className="text-2xl font-semibold text-slate-900">
            <Image
              alt="Bicycle Store"
              src="/logo.svg"
              width={53}
              height={32}
              style={{ color: 'transparent' }}
            ></Image>
          </h1>
        </Link>
      </div>
      <div className="flex items-center">
        <nav className="flex items-center gap-4">
          <Link href="/products" className="inline-flex underline-offset-4 hover:underline">
            Products
          </Link>
          <Link href="/about" className="inline-flex underline-offset-4 hover:underline">
            About
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
