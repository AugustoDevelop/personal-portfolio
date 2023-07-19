import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import ptJson from './translations/ptBR.json';
import enJson from './translations/enUS.json';


i18next.use(initReactI18next).init({
    fallbackLng: "en",
    interpolation: {
        escapeValue: false
    },
    resources: {
        en: enJson,
        ptBR: ptJson
    }
})

export default i18next;