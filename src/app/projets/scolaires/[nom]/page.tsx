import { Metadata } from "next";
import content from "@/data/content.json";

type Props = {
  params: { nom: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const nom = params.nom;
  const contenu = content.projets.scolaires[nom as keyof typeof content.projets.scolaires];

  if (!contenu) {
    return {
      title: "Projet non trouvé",
    };
  }

  return {
    title: `Projet Scolaire - ${nom.toUpperCase()}`,
  };
}

export default function Page({ params }: Props) {
  const nom = params.nom;
  const contenu = content.projets.scolaires[nom as keyof typeof content.projets.scolaires];

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