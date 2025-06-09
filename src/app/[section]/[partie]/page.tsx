import content from "@/data/content.json";
import { Metadata } from "next";
import { notFound } from "next/navigation";

type PageParams = {
  section: string;
  partie: string;
};

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
  const { section, partie } = params;
  const sectionData = content[section as keyof typeof content] as ContentSection | undefined;
  const partieData = sectionData?.[partie];

  if (!sectionData || !partieData) {
    return {
      title: "Section non trouvée",
      description: "La section ou la partie demandée n'existe pas",
    };
  }

  return {
    title: `${section.charAt(0).toUpperCase() + section.slice(1)} - ${partie.replace(/-/g, " ")}`,
    description: `Section ${section} - ${partie} du portfolio`,
  };
}

export default function PartiePage({ params }: { params: PageParams }) {
  const { section, partie } = params;
  const sectionData = content[section as keyof typeof content] as ContentSection | undefined;
  const partieData = sectionData?.[partie];

  if (!sectionData || !partieData) {
    notFound();
  }

  return (
    <main>
      <section className="w-[60svw]">
        <h1 className="capitalize">
          {partie.replace(/-/g, " ")}
        </h1>
        <div className="grid grid-cols-3 gap-4">
          {Object.keys(partieData).map((key) => {
            const item = partieData[key];
            return (
              <div key={key} className="p-4 border rounded-lg hover:shadow-lg">
                <div className="flex-grow">
                  <h2>{item.nom}</h2>
                  {/* {item.description && (
                    <p className="text-gray-600 mb-2">{item.description}</p>
                  )} */}
                  {item.niveau && (
                    <p className="text-sm text-gray-500">Niveau : {item.niveau}</p>
                  )}
                  {item.projets && item.projets.length > 0 && (
                    <div className="mt-2">
                      <h3>Projets :</h3>
                      <ul className="list-disc list-inside text-sm">
                        {item.projets.map((projet, index) => (
                          <li key={index}>{projet}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {item.competences && item.competences.length > 0 && (
                    <div className="mt-2">
                      <h3>Compétences :</h3>
                      <ul className="list-disc list-inside text-sm">
                        {item.competences.map((competence, index) => (
                          <li key={index}>{competence}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
                <div className="mt-4 text-right align-bottom">
                  <a 
                    href={`/${section}/${partie}/${key}`}
                    className="inline-block"
                  >
                    Voir les détails →
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
} 