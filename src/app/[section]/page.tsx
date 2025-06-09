import content from "@/data/content.json";
import { Metadata } from "next";
import { notFound } from "next/navigation";

type PageParams = Promise<{
  [key: string]: string | string[] | undefined;
}>;

type ContentSection = {
  [key: string]: {
    [key: string]: {
      nom: string;
      description?: string;
      niveau?: string;
      projets?: string[];
      utilisation?: string;
      competences?: string[];
      date?: string;
      domaines?: string[];
    };
  };
};

export async function generateMetadata({ params }: { params: PageParams }): Promise<Metadata> {
  const resolvedParams = await params;
  const section = resolvedParams.section as string;
  const sectionData = content[section as keyof typeof content] as ContentSection | undefined;

  if (!sectionData) {
    return {
      title: "Section non trouvée",
      description: "La section demandée n'existe pas",
    };
  }

  return {
    title: section.charAt(0).toUpperCase() + section.slice(1),
    description: `Section ${section} du portfolio`,
  };
}

export default async function SectionPage({ params }: { params: PageParams }) {
  const resolvedParams = await params;
  const section = resolvedParams.section as string;
  const sectionData = content[section as keyof typeof content] as ContentSection | undefined;

  if (!sectionData) {
    notFound();
  }

  return (
    <main>
      <section className="w-[50svw]">
        <div className="grid grid-cols-3 gap-4">
          {Object.keys(sectionData).map((category) => (
            <div key={category}>
              <h2 className="text-xl font-bold mb-4 capitalize">
                {category.replace(/-/g, " ")}
              </h2>
              <ul className="space-y-2">
                {Object.keys(sectionData[category]).map((key) => {
                  const item = sectionData[category][key];
                  return (
                    <li key={key}>
                      <a 
                        href={`/${section}/${category}/${key}`}
                        className="hover:text-blue-500 transition-colors"
                      >
                        {item.nom}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
} 