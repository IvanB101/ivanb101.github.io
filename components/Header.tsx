import { getDictionary, SupportedLanguages } from "@/dictionaries";

export default async function Header({ lang }: { lang: SupportedLanguages }) {
  const dictionary = await getDictionary(lang);

  return (
    <div id="home" className="w-full flex flex-col items-center">
      <div className="flex flex-col gap-4 md:gap-10 items-center h-screen justify-center">
        <div className="text-5xl md:text-7xl lg:text-8xl font-archivo text-center px-5">
          Ivan Brocas
        </div>
        <div className="text-xl md:text-2xl lg:text-3xl text-center px-5">
          {dictionary.title}
        </div>
      </div>
    </div>
  );
}
