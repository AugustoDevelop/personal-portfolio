import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import ptJson from './translations/pt-BR.json';
import enJson from './translations/en-US.json';
import esJson from './translations/es-ES.json';


i18next.use(initReactI18next).init({
    fallbackLng: "enUS",
    lng: 'enUS',
    interpolation: {
        escapeValue: false
    },
    resources: {
        enUS: enJson,
        ptBR: ptJson,
        esES: esJson
    }
})

export default i18next;