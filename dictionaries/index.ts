import "server-only";

import en from "@/dictionaries/en";
import es from "@/dictionaries/es";

export type Dictionary = {
  sections: {
    projects: string;
    skills: string;
    contact: string;
  };
  title: string;
  projects: {
    [key: string]: {
      title: string;
      paragraphs: string[];
    };
  };
  contact: {
    copyMsg: string;
  };
  gallery: string;
};

type Dictionaries = { [key: string]: Dictionary };

const dictionaries: Dictionaries = { en, es } as unknown as Dictionaries;

export type SupportedLanguages = "en" | "es";
export const supportedLanguages = ["en", "es"];

export const getDictionary = (locale: SupportedLanguages) =>
  dictionaries[locale];
