import { useTranslations } from 'next-intl'

import { unstable_setRequestLocale } from 'next-intl/server'

const About = ({ params }: { params: { locale: string } }) => {
  // Ensures static rendering at build time.
  unstable_setRequestLocale(params.locale)

  const t = useTranslations('About')

  return (
    <div className="pt-16">
      <div className="container py-24 mx-auto px-6">
        <h1 className="text-3xl font-bold">{t('msg')}</h1>
      </div>
    </div>
  )
}

export default About
