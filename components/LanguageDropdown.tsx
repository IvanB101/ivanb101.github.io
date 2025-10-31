"use client";

import { SupportedLanguages } from "@/dictionaries";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

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
          `
        relative size-7 items-center
        cursor-pointer
        mask-[url(/icons/language.svg)]
        hover:bg-purple-600
        active:bg-indigo-600
            ` + (open ? "bg-indigo-600" : "bg-white ")
        }
      ></button>
      {open && (
        <div
          className="
          absolute top-full right-1
          flex flex-col gap-2 p-4
        bg-black
          rounded-xl outline-indigo-600 outline-2
        "
        >
          <button onClick={() => navigate("en")} className="cursor-pointer ">
            English
          </button>
          <button onClick={() => navigate("es")} className="cursor-pointer">
            Español
          </button>
        </div>
      )}
    </div>
  );
}
