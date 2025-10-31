import { getDictionary, SupportedLanguages } from "@/dictionaries";
import { ReactNode } from "react";
import LanguageDropdown from "./LanguageDropdown";

export default async function Navbar({ lang }: { lang: SupportedLanguages }) {
  const dictionary = await getDictionary(lang);
  // <Section id="about" label="About" />
  return (
    <div className="fixed w-full flex backdrop-opacity bg-black/50 justify-between md:justify-end backdrop-blur-md z-10">
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

type SectionProps = {
  lang: SupportedLanguages;
  id: string;
  children: ReactNode;
};

// TODO: highlight currect section
// TODO: make responsive
function Section({ lang, id, children }: SectionProps) {
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
