import Animate from "@/components/navbar/Animate";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { SupportedLanguages } from "@/dictionaries";

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "es" }];
}

export default async function Home({
  params,
}: Readonly<{
  params: Promise<{ lang: SupportedLanguages }>;
}>) {
  const lang = (await params).lang;

  return (
    <div className="overflow-hidden font-roboto">
      <Header lang={lang} />
      <Projects lang={lang} />
      <Skills lang={lang} />
      <Contact lang={lang} />
      <Animate />
      <div className="h-10"></div>
    </div>
  );
}
