import Navbar from "@/components/navbar";
import { SupportedLanguages } from "@/dictionaries";
import { Metadata } from "next";

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "es" }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: SupportedLanguages }>;
}): Promise<Metadata> {
  const translations = {
    en: {
      title: "Ivan Brocas's Portfolio",
      description: "A portfolio with some of my projects and skills",
    },
    es: {
      title: "Porfolio de Ivan Brocas",
      description: "Porfolio con algunos de mis proyectos y habilidades",
    },
  };

  return translations[(await params).lang];
}

export default async function LangLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const lang = (await params).lang as SupportedLanguages;

  return (
    <div>
      <Navbar lang={lang} />
      {children}
    </div>
  );
}
