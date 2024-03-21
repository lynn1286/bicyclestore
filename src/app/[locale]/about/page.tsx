import { useTranslations } from 'next-intl'
import Footer from '../components/footer'
import Header from '../components/header'
import { unstable_setRequestLocale } from 'next-intl/server'
import ClientComponents from './components/client'

const About = ({ params }: { params: { locale: string } }) => {
  // Ensures static rendering at build time.
  unstable_setRequestLocale(params.locale)

  const t = useTranslations('About')

  return (
    <>
      <Header></Header>
      <ClientComponents />
      <div className="container py-24 mx-auto px-6">
        <h1 className="text-3xl font-bold">{t('msg')}</h1>
      </div>
      <Footer></Footer>
    </>
  )
}

export default About
