"use client";

import { SupportedLanguages } from "@/dictionaries";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

import languageIcon from "@/public/icons/language.svg";

export default function LanguageDropdown({ lang }: { lang: string }) {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const path = usePathname();
  function navigate(newLang: SupportedLanguages) {
    if (newLang === lang) {
      return;
    }

    router.push(path.replace(/^\/.*/, `/${newLang}`));
  }

  return (
    <div className="flex">
      <button
        onClick={() => setOpen(!open)}
        className={
          "flex items-start cursor-pointer hover:text-purple-600 active:text-indigo-600 px-5 py-4" +
          (open ? " text-indigo-600" : "")
        }
      >
        <div
          className="size-7"
          dangerouslySetInnerHTML={{ __html: languageIcon }}
        />
      </button>
      {open && (
        <div className="flex flex-col w-full gap-2 px-5 py-4">
          <button
            onClick={() => navigate("en")}
            className="cursor-pointer text-left hover:text-purple-600 active:text-indigo-600"
          >
            English
          </button>
          <button
            onClick={() => navigate("es")}
            className="cursor-pointer text-left hover:text-purple-600 active:text-indigo-600"
          >
            Español
          </button>
        </div>
      )}
    </div>
  );
}
