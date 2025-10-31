import { getDictionary, SupportedLanguages } from "@/dictionaries";
import Section from "./Section";

export default async function Projects({ lang }: { lang: SupportedLanguages }) {
  const dictionary = getDictionary(lang);

  return (
    <Section id="projects" title={dictionary.sections.projects}>
      <div
        className="
            mx-10
            flex flex-col justify-center gap-4
            md:grid md:grid-cols-2 lg:grid-cols-3
            lg:max-w-[1100px] lg:columns-3
        "
      >
        <Project
          title="forge"
          entry={dictionary.projects.forge}
          tools={["C++", "Vulkan", "CMake"]}
          lang={lang}
        />
        <Project
          title="dospu"
          entry={dictionary.projects.dospu}
          tools={["Java", "Spring", "OpenL Tablets"]}
          lang={lang}
        />
        <Project
          title="slime"
          entry={dictionary.projects.slime}
          tools={["Typescript", "HTML", "Tailwind", "WebGPU"]}
          lang={lang}
        />
        <Project
          title="encoding"
          entry={dictionary.projects.encoding}
          tools={["Rust", "Slint"]}
          lang={lang}
        />
      </div>
    </Section>
  );
}

function Project({
  title,
  entry,
  tools,
  lang,
}: {
  title: string;
  entry: {
    title: string;
    paragraphs: string[];
  };
  tools: string[];
  lang: string;
}) {
  return (
    <a
      href={`/${lang}/projects/${title}`}
      key={title}
      className="
              flex flex-col
              gap-5 justify-between 
            bg-black/70 backdrop-opacity backdrop-blur-md
            outline-purple outline-2 rounded-2xl p-3
              transition-all duration-300 ease-out delay-0
              hover:scale-105 hover:bg-black hover:outline-4
            "
    >
      <div className="w-full p-4 text-xl text-center font-bold">
        {entry.title}
      </div>
      <div className="flex flex-col gap-1.5 text-[11pt]">
        {entry.paragraphs.map((paragraph, idx) => (
          <div key={paragraph + idx} className="text-justify">
            {paragraph}
          </div>
        ))}
      </div>
      <div className="flex flex-wrap gap-2 text-[11pt] justify-center">
        {tools.map((tool, idx) => (
          <div
            key={idx}
            className="px-2 py-1 rounded-2xl bg-indigo hover:bg-purple"
          >
            {tool}
          </div>
        ))}
      </div>
    </a>
  );
}
