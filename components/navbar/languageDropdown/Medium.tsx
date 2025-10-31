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
    <div
      className={"flex relative px-5 items-center " + (open && "bg-black/50")}
    >
      <button
        onClick={() => setOpen(!open)}
        className={
          "relative items-center cursor-pointer hover:text-purple-600 active:text-indigo-600" +
          (open ? " text-indigo-600" : "")
        }
      >
        <div
          className="size-7"
          dangerouslySetInnerHTML={{ __html: languageIcon }}
        />
      </button>
      {open && (
        <div
          className="
          absolute top-full right-1
          flex flex-col gap-2 p-4
        bg-black
          rounded-xl outline-indigo-600 outline-2
        "
        >
          <button
            onClick={() => navigate("en")}
            className="cursor-pointer hover:text-purple-600 active:text-indigo-600"
          >
            English
          </button>
          <button
            onClick={() => navigate("es")}
            className="cursor-pointer hover:text-purple-600 active:text-indigo-600"
          >
            Español
          </button>
        </div>
      )}
    </div>
  );
}
