'use client'

import { useRouter } from 'next/navigation'
import { isLogin } from './actions'

interface IBuyNowProps {
  i18n: {
    buyNow: string
  }
}

const BuyNow = ({ i18n }: IBuyNowProps) => {
  const router = useRouter()

  const handlerBuyNow = async () => {
    const login = await isLogin()

    if (login) {
      console.log('🚀 ~  : handlerBuyNow -> login', login)
      return
    }

    router.push('/login')
  }

  return (
    <button
      className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-slate-900 text-slate-50 hover:bg-slate-900/90 h-10 px-4 py-2 min-w-48"
      onClick={handlerBuyNow}
    >
      {i18n.buyNow}
    </button>
  )
}

export default BuyNow
