import { Metadata } from "next";
import content from "@/data/content.json";

type Props = {
  params: { nom: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const nom = params.nom;
  const contenu = content.logiciels.autres[nom as keyof typeof content.logiciels.autres];

  if (!contenu) {
    return {
      title: "Logiciel non trouvé",
    };
  }

  return {
    title: `Logiciel - ${nom.toUpperCase()}`,
  };
}

export default function Page({ params }: Props) {
  const nom = params.nom;
  const contenu = content.logiciels.autres[nom as keyof typeof content.logiciels.autres];

  if (!contenu) {
    return (
      <main>
        <section>
          <article>
            <p>Ce logiciel n'existe pas.</p>
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