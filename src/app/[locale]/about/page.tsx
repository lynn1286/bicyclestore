import { useTranslations } from 'next-intl'
import Footer from '../components/footer'
import Header from '../components/header'

const About = () => {
  const t = useTranslations('About')

  return (
    <>
      <Header></Header>
      <div className="container py-24 mx-auto px-6">
        <h1 className="text-3xl font-bold">{t('msg')}</h1>
      </div>
      <Footer></Footer>
    </>
  )
}

export default About
