import { Metadata } from "next";
import content from "@/data/content.json";

type Props = {
  params: { nom: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const nom = params.nom;
  const contenu = content.langages.programmation[nom as keyof typeof content.langages.programmation];

  if (!contenu) {
    return {
      title: "Langage non trouvé",
    };
  }

  return {
    title: `Langage de Programmation - ${nom.toUpperCase()}`,
  };
}

export default function Page({ params }: Props) {
  const nom = params.nom;
  const contenu = content.langages.programmation[nom as keyof typeof content.langages.programmation];

  if (!contenu) {
    return (
      <main>
        <section>
          <article>
            <p>Ce langage n'existe pas.</p>
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