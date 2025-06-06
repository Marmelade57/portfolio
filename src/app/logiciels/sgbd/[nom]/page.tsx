import { Metadata } from "next";
import content from "@/data/content.json";

type Props = {
  params: { nom: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const nom = params.nom;
  const contenu = content.logiciels.sgbd[nom as keyof typeof content.logiciels.sgbd];

  if (!contenu) {
    return {
      title: "SGBD non trouvé",
    };
  }

  return {
    title: `SGBD - ${nom.toUpperCase()}`,
  };
}

export default function Page({ params }: Props) {
  const nom = params.nom;
  const contenu = content.logiciels.sgbd[nom as keyof typeof content.logiciels.sgbd];

  if (!contenu) {
    return (
      <main>
        <section>
          <article>
            <p>Ce SGBD n'existe pas.</p>
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