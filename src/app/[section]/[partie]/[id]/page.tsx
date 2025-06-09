import { Metadata } from "next";
import content from "@/data/content.json";
import { notFound } from "next/navigation";
import { ExternalLink } from 'lucide-react';

type ContentItem = {
  nom: string;
  description: string;
  niveau?: string;
  projets?: string[];
  utilisation?: string;
  competences?: string[];
  date?: string;
  domaines?: string[];
  technologies?: string[];
  lien?: string;
};

type ContentPart = {
  [key: string]: ContentItem;
};

type ContentSection = {
  [key: string]: ContentPart;
};

type Props = {
  params: {
    section: string;
    partie: string;
    id: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { section, partie, id } = params;

  const sectionData = content[section as keyof typeof content] as ContentSection | undefined;
  const partieData = sectionData?.[partie];
  const itemData = partieData?.[id] as ContentItem | undefined;

  if (!itemData) {
    return {
      title: "Page non trouvée",
      description: "La page que vous recherchez n'existe pas.",
    };
  }

  return {
    title: `${itemData.nom} - ${partie}`,
    description: itemData.description,
  };
}

export default function DetailPage({ params }: Props) {
  const { section, partie, id } = params;

  const sectionData = content[section as keyof typeof content] as ContentSection | undefined;
  const partieData = sectionData?.[partie];
  const itemData = partieData?.[id] as ContentItem | undefined;

  if (!itemData) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="titreFunky text-center mb-8">{itemData.nom}</h1>
      <p className="text-lg mb-8">{itemData.description}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          {itemData.niveau && (
            <div>
              <h2>Niveau</h2>
              <p>{itemData.niveau}</p>
            </div>
          )}

          {itemData.utilisation && (
            <div>
              <h2>Utilisation</h2>
              <p>{itemData.utilisation}</p>
            </div>
          )}

          {itemData.date && (
            <div>
              <h2>Date</h2>
              <p>{itemData.date}</p>
            </div>
          )}

          {itemData.competences && itemData.competences.length > 0 && (
            <div>
              <h2>Compétences</h2>
              <ul>
                {itemData.competences.map((competence, index) => (
                  <li key={index}>{competence}</li>
                ))}
              </ul>
            </div>
          )}

          {itemData.projets && itemData.projets.length > 0 && (
            <div className="w-full">
              <h2>Projets</h2>
              <ul>
                {itemData.projets.map((projet, index) => (
                  <li key={index}>
                    <a href={`/projets/${projet.toLowerCase().includes('sae') ? 'scolaires' : 'personnels'}/${projet.replace(/\s+/g, '')}`}>
                      {projet}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="space-y-6">
          {itemData.technologies && itemData.technologies.length > 0 && (
            <div>
              <h2>Technologies</h2>
              <ul>
                {itemData.technologies.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
            </div>
          )}

          {itemData.domaines && itemData.domaines.length > 0 && (
            <div>
              <h2>Domaines</h2>
              <ul>
                {itemData.domaines.map((domaine, index) => (
                  <li key={index}>{domaine}</li>
                ))}
              </ul>
            </div>
          )}

          {itemData.lien && (
            <div className="mt-8">
              <a
                href={itemData.lien}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-lg"
              >
                <p className="w-max">Voir le projet</p>
                <ExternalLink />
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
