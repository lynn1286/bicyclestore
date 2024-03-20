import { useTranslations } from 'next-intl'

const Loading = () => {
  const t = useTranslations('Loading')

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-[rgba(0,0,0,0.45)] text-white z-50">
      <div className="animate-spin mr-3 h-10 w-10 border-t-2 border-blue-500 rounded-full"></div>
      <div className="ml-3">
        <h2 className="text-2xl font-semibold">{t('loading')}</h2>
        <p>{t('pleaseWait')}</p>
      </div>
    </div>
  )
}

export default Loading
