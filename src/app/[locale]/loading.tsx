import { useTranslations } from 'next-intl'

const Loading = () => {
  const t = useTranslations('Loading')

  return (
    <div className="absolute left-0 top-0 w-screen h-screen flex items-center justify-center text-black z-50">
      <div className="animate-spin mr-3 h-10 w-10 border-t-2 border-blue-500 rounded-full"></div>
      <div className="ml-3">
        <h2 className="text-2xl font-semibold">{t('loading')}</h2>
        <p>{t('pleaseWait')}</p>
      </div>
    </div>
  )
}

export default Loading
