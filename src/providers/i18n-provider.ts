import { I18nProvider } from "@refinedev/core";
import { translations, Languages } from "../i18n";

let currentLocale: Languages = "en";

type TranslationParams = Record<string, string | number>;

const i18nProvider: I18nProvider = {
    translate: (key: string, params?: TranslationParams) => {
        // Get the nested keys from the translations
        const getCurrentTranslation = () => {
            const translation = key.split(".").reduce((acc: any, curr: string) => {
                if (acc) return acc[curr];
                return undefined;
            }, translations[currentLocale]);

            return translation;
        };

        // Get translation
        let translation = getCurrentTranslation();
        
        // Return key if translation not found
        if (!translation) {
            return key;
        }

        // Replace any params in translation
        if (params && typeof params === "object") {
            for (const key in params) {
                translation = translation.replace(
                    `{{${key}}}`,
                    String(params[key])
                );
            }
        }

        return translation;
    },
    changeLocale: (lang: string) => {
        if (lang in translations) {
            currentLocale = lang as Languages;
            // Set html lang attribute
            document.documentElement.lang = currentLocale;
            return Promise.resolve();
        }
        return Promise.reject(`Language ${lang} is not supported`);
    },
    getLocale: () => currentLocale
};

export default i18nProvider;
