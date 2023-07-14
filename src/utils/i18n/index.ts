import i18next from "i18next";
import { initReactI18next } from "react-i18next";

i18next.use(initReactI18next).init({
    fallbackLng: "en",
    interpolation: {
        escapeValue: false
    },
    resources: {
        en:{
            transalation: {
                welcome: "To English"
            }
        },
        fr: {
            transalation: {
                welcome: "To Franch"
            }
        },
    }
})