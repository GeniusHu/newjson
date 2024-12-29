import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from '../locales/en.json';
import zhTranslation from '../locales/zh.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslation
      },
      zh: {
        translation: zhTranslation
      }
    },
    lng: 'en', // 修改默认语言为英文
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n; 