/* eslint-disable react/jsx-no-literals */

const LocaleIcon = ({ locale }: { locale: string }) => {
  if (locale === 'zh') {
    return <div>🇨🇳</div>
  }

  return <div>🇺🇸</div>
}

export default LocaleIcon
