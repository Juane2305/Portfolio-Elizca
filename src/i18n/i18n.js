import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en.json'
import es from './es.json'

i18n
  .use(initReactI18next)
  // init i18next
  .init({
    debug: true,
    lng: 'es',
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