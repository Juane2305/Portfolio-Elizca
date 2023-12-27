import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from '../i18n/en/en.json'
import es from '../i18n/es/es.json'

i18n
  .use(initReactI18next)
  // init i18next
  .init({
    debug: true,
    lng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
        es:{
            translation: es
          
        },
        en: {
            translation: en
      },
    }
  });

export default i18n;