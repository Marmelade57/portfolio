import { Metadata } from "next";
import content from "@/data/content.json";
import { notFound } from "next/navigation";
import { ExternalLink } from 'lucide-react';

interface PageProps {
  params: {
    section: string;
    partie: string;
    id: string;
  };
}

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
      technologies?: string[];
      lien?: string;
    };
  };
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { section, partie, id } = params;
  const sectionData = content[section as keyof typeof content] as
    | ContentSection
    | undefined;
  const partieData = sectionData?.[partie];
  const itemData = partieData?.[id];

  if (!sectionData || !partieData || !itemData) {
    return {
      title: "Élément non trouvé",
      description: "L'élément demandé n'existe pas",
    };
  }

  return {
    title: `${section.charAt(0).toUpperCase() + section.slice(1)} ${partie.replace(/-/g, " ")} - ${itemData.nom}`,
    description: itemData.description || `Détails de ${itemData.nom}`,
  };
}

export default function DetailPage({ params }: PageProps) {
  const { section, partie, id } = params;
  const sectionData = content[section as keyof typeof content] as
    | ContentSection
    | undefined;
  const partieData = sectionData?.[partie];
  const itemData = partieData?.[id];

  if (!sectionData || !partieData || !itemData) {
    notFound();
  }

  return (
    <main className="grid grid-cols-1 gap-4 w-[50svw]"/* className="container mx-auto px-4 py-8" */>
      {/* <section>
        <article> */}
          <div>
            <h1>{itemData.nom}</h1>
            {itemData.description && <p>{itemData.description}</p>}
          </div>

          <div className="grid grid-cols-1 gap-4">
            {/* Informations principales */}
            <div className="space-y-4 grid grid-cols-2 gap-4 w-full">
              {itemData.niveau && itemData.niveau !== "" && (
                <div>
                  <h2>Niveau</h2>
                  <p>{itemData.niveau}</p>
                </div>
              )}

              {itemData.utilisation && (
                <div className="w-full">
                  <h2>Utilisation</h2>
                  <p>{itemData.utilisation}</p>
                </div>
              )}

              {itemData.date && (
                <div className="w-full">
                  <h2>Date</h2>
                  <p>{itemData.date}</p>
                </div>
              )}
            {/* </div>

            Listes et collections
            <div className="space-y-4 grid grid-cols-4 gap-4 w-full"> */}
              {itemData.competences && itemData.competences.length > 0 && (
                <div className="w-full">
                  <h2>Compétences</h2>
                  <ul /* className="list-disc pl-5 space-y-2" */>
                    {itemData.competences.map((competence, index) => (
                      <li key={index} /* className="text-lg" */>
                        {competence + ", "}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {itemData.projets && itemData.projets.length > 0 && (
                <div className="w-full">
                  <h2>Projets</h2>
                  <ul /* className="list-disc pl-5 space-y-2" */>
                    {itemData.projets.map((projet, index) => (
                      <li key={index} /* className="text-lg" */>
                        <a href={`/projets/${projet.toLowerCase().includes('sae') ? 'scolaires' : 'personnels'}/${projet.replace(/\s+/g, '')}`}>
                          {projet}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {itemData.technologies && itemData.technologies.length > 0 && (
                <div className="w-full">
                  <h2>Technologies</h2>
                  <div className="w-max">
                    {itemData.technologies.map((tech, index) => (
                      <span
                        key={index}
                        /* className="px-3 py-1 bg-gray-100 rounded-full text-sm" */
                      >
                        {tech+", "}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {itemData.domaines && itemData.domaines.length > 0 && (
                <div className="w-full">
                  <h2>Domaines</h2>
                  <ul /* className="list-disc pl-5 space-y-2" */>
                    {itemData.domaines.map((domaine, index) => (
                      <li key={index} /* className="text-lg" */>{domaine}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          

          {/* Navigation */}
          <div className="grid grid-cols-3 gap-4">
          
            <a href={`/${section}/${partie}`}>
              ← Retour à {partie.replace(/-/g, " ")}
            </a>

            {itemData.lien && (
              <a
                href={itemData.lien}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4"
              >
                <p className="w-max">Voir le projet</p>
                <ExternalLink />
              </a>
          )}

            <a href={`/${section}`}>
              Retour à {section.charAt(0).toUpperCase() + section.slice(1)} →
            </a>
          </div>
        {/* </article>
      </section> */}
    </main>
  );
}
