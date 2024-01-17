// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import EN from "~/localizables/EN.json";
import ES from "~/localizables/ES.json";
// Configuración básica
const resources = {
  en: {
    translation: EN,
  },
  es: {
    translation: ES,
  },
};
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: "es", // idioma por defecto
    fallbackLng: "en", // idioma de respaldo si no se encuentra una traducción
    interpolation: {
      escapeValue: false, // no escapar HTML
    },
  });

export default i18n;
