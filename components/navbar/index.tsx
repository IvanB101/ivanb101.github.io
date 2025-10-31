import { getDictionary, SupportedLanguages } from "@/dictionaries";
import Medium from "./Medium";
import Small from "./Small";

export default async function Navbar({ lang }: { lang: SupportedLanguages }) {
  const dictionary = getDictionary(lang);

  return (
    <>
      <Medium lang={lang} dictionary={dictionary} />
      <Small lang={lang} dictionary={dictionary} />
    </>
  );
}
