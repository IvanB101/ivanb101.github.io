import { Dictionary, SupportedLanguages } from "@/dictionaries";
import { ReactNode } from "react";
import LanguageDropdown from "./languageDropdown/Medium";

export default async function Medium({
  lang,
  dictionary,
}: {
  lang: SupportedLanguages;
  dictionary: Dictionary;
}) {
  return (
    <div
      className="
        fixed w-full flex
        backdrop-opacity bg-black/50 backdrop-blur-md z-10
        justify-end not-sm:hidden"
    >
      <a href="#" id="home-link" className="hidden"></a>
      <Section lang={lang} id="projects">
        {dictionary.sections.projects}
      </Section>
      <Section lang={lang} id="skills">
        {dictionary.sections.skills}
      </Section>
      <Section lang={lang} id="contact">
        {dictionary.sections.contact}
      </Section>
      <LanguageDropdown lang={lang} />
    </div>
  );
}

function Section({
  lang,
  id,
  children,
}: {
  lang: SupportedLanguages;
  id: string;
  children: ReactNode;
}) {
  return (
    <a
      href={`/${lang}#${id}`}
      id={id + "-link"}
      className="
        flex group backdrop-opacity
        transition-all duration-100 items-center
        hover:text-purple-600
        active:text-indigo-600
        py-4 px-5 text-[14pt]
    "
    >
      {children}
    </a>
  );
}
