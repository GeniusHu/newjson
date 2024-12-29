import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// 导入翻译文件
import enTranslations from './locales/en.json';
import zhTranslations from './locales/zh.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslations
      },
      zh: {
        translation: zhTranslations
      }
    },
    lng: 'en', // 默认语言改为英文
    fallbackLng: 'en', // 回退语言
    interpolation: {
      escapeValue: false // React已经安全地转义
    }
  });

export default i18n; 