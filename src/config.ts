// 文档地址： https://next-intl-docs.vercel.app/docs/routing/middleware
import type { Pathnames } from 'next-intl/navigation'

/**
 * @description: 支持的语种
 * @return {*}
 */
export const locales = ['en', 'zh'] as const

/**
 * @description: 默认语种
 * @return {*}
 */
export const defaultLocale = 'en'

/**
 * @description: 路径本地化
 * @return {*}
 */
export const pathnames = {
  '/': '/',
  '/products': {
    en: '/products',
    zh: '/products-zh' // 实际上中文不需要国际化路径，这里就是告诉下有这个功能
  },
  '/products/[sku]': {
    en: '/products/[sku]',
    zh: '/products-zh/[sku]'
  },
  '/about': {
    en: '/about',
    zh: '/about-zh'
  }
} satisfies Pathnames<typeof locales>

/**
 * @description: 默认语种是否显示前缀
 * @return {*}
 */
export const localePrefix = undefined

/**
 * @description: 是否开启区域检测
 * @return {*}
 */
export const localeDetection = undefined
