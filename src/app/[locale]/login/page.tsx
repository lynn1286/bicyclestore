import { useTranslations } from 'next-intl'
import LoginComponents from './components'

const Login = () => {
  const t = useTranslations('Login')

  return (
    <div className="pt-16 flex items-center justify-center">
      <LoginComponents i18n={{ submit: t('submit'), submiting: t('submiting') }}></LoginComponents>
    </div>
  )
}

export default Login
