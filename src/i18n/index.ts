import { en } from "./en";
import { ar } from "./ar";

export const translations = {
  en,
  ar
} as const;

export type Translations = typeof translations;
export type Languages = keyof Translations;
export type TranslationKeys = typeof en;

// Helper to determine if a language is RTL
export const rtlLanguages: Languages[] = ["ar"];
export const isRtl = (lang: Languages) => rtlLanguages.includes(lang);
