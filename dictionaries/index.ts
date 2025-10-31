import "server-only";

const dictionaries = {
  en: () => import("@/dictionaries/en").then((module) => module.default),
  es: () => import("@/dictionaries/es").then((module) => module.default),
};

export type SupportedLanguages = "en" | "es";

export const getDictionary = async (locale: SupportedLanguages) =>
  dictionaries[locale]();
