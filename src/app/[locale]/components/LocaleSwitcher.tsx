import { useLocale, useTranslations } from 'next-intl'
import LocaleSwitcherSelect from './LocaleSwitcherSelect'
import LocaleIcon from './LocaleIcon'

export default function LocaleSwitcher() {
  const t = useTranslations('LocaleSwitcher')
  const locale = useLocale()

  return (
    <label className="relative block">
      <p className="sr-only">{t('label')}</p>
      <LocaleIcon locale={locale} />
      <LocaleSwitcherSelect defaultValue={locale} className="absolute inset-0 opacity-0">
        <option value="en">{t('en')}</option>
        <option value="zh">{t('zh')}</option>
      </LocaleSwitcherSelect>
    </label>
  )
}
