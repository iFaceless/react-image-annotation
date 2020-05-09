import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

const RESOURCES = {
    en: {
        trans: {
            editor: {
                placeholder: "Write description",
                submit: 'Submit'
            },
            overlayPoint: "Click to Annotate",
            overlayDefault: "Click and Drag to Annotate",
        }
    },
    zh: {
        trans: {
            editor: {
                placeholder: "填写标签",
                submit: '提交'
            },
            overlay: {
                point: "点击进行标注",
                default: "点击 & 拖拽进行标注"
            }
        }
    }
}

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        // we init with resources
        resources: RESOURCES,
        fallbackLng: "en",
        debug: false,

        // have a common namespace used around the full app
        ns: ["trans"],
        defaultNS: "trans",

        interpolation: {
            escapeValue: false
        },

        react: {
            wait: false,
            bindI18n: 'languageChanged loaded',
            bindStore: 'added removed',
            nsMode: 'default'
        },
    });

export default i18n;
