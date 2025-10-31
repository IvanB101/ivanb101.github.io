"use client";

import { Dictionary, SupportedLanguages } from "@/dictionaries";
import { ReactNode, useState } from "react";

import closeIcon from "@/public/icons/close.svg";
import menuIcon from "@/public/icons/menu.svg";
import LanguageDropdown from "./languageDropdown/Small";

export default function Small({
  lang,
  dictionary,
}: {
  lang: SupportedLanguages;
  dictionary: Dictionary;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="
        fixed w-full flex flex-col
        backdrop-opacity bg-black/50 backdrop-blur-md z-10
        justify-end sm:hidden"
    >
      <div className="flex justify-end">
        <button onClick={() => setOpen(!open)} className="py-2 px-5">
          <div
            className="size-10 fill-white"
            dangerouslySetInnerHTML={{ __html: open ? closeIcon : menuIcon }}
          ></div>
        </button>
      </div>
      <div className={open ? "flex flex-col" : "hidden"}>
        <a href="#" id="home-link-sm" className="hidden"></a>
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
      id={id + "-link-sm"}
      className="
        flex group
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
