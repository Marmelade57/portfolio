import { Metadata } from "next";
import content from "@/data/content.json";

type Props = {
  params: { nom: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const nom = params.nom;
  const contenu = content.projets.personnels[nom as keyof typeof content.projets.personnels];

  if (!contenu) {
    return {
      title: "Projet non trouvé",
    };
  }

  return {
    title: `Projet Personnel - ${nom.split("-")[1]}`,
  };
}

export default function Page({ params }: Props) {
  const nom = params.nom;
  const contenu = content.projets.personnels[nom as keyof typeof content.projets.personnels];

  if (!contenu) {
    return (
      <main>
        <section>
          <article>
            <p>Ce projet n'existe pas.</p>
          </article>
        </section>
      </main>
    );
  }

  return (
    <main>
      <section>
        <article dangerouslySetInnerHTML={{ __html: contenu }} />
      </section>
    </main>
  );
} 