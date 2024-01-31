import { createI18n } from 'vue-i18n'
import text from '../text.json'

const i18n = createI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages: text,
  legacy: false,
  globalInjection: true,
})

export default i18n
