import { Metadata } from "next";
import content from "@/data/content.json";

type Props = {
  params: { nom: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const nom = params.nom;
  const contenu = content.logiciels.ide[nom as keyof typeof content.logiciels.ide];

  if (!contenu) {
    return {
      title: "IDE non trouvé",
    };
  }

  return {
    title: `IDE - ${nom.toUpperCase()}`,
  };
}

export default function Page({ params }: Props) {
  const nom = params.nom;
  const contenu = content.logiciels.ide[nom as keyof typeof content.logiciels.ide];

  if (!contenu) {
    return (
      <main>
        <section>
          <article>
            <p>Cet IDE n'existe pas.</p>
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