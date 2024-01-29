import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import translationRU from '../src/localization/translationRU.json'
import translationEn from '../src/localization/translationEN.json'

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'ru',
        debug: false,

        interpolation: {
        escapeValue: false,
        },
    resources: {
        en: {
            translation: translationRU
        },
        ru: {
            translation: translationEn
        }
    }
});


export default i18n;
