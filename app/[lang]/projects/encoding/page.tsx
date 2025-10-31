import ProjectGallery from "@/components/ProjectGallery";
import { getDictionary, SupportedLanguages } from "@/dictionaries";

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "es" }];
}

export default async function Home({
  params,
}: Readonly<{
  params: Promise<{ lang: SupportedLanguages }>;
}>) {
  const dictionary = await getDictionary((await params).lang);

  return <ProjectGallery msg={dictionary.gallery} />;
}
