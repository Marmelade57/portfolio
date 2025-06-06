import { Metadata } from "next";
import content from "@/data/content.json";

type Props = {
  params: { annee: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const annee = params.annee;
  const contenu = content.formation.but[annee as keyof typeof content.formation.but];

  if (!contenu) {
    return {
      title: "Année non trouvée",
    };
  }

  return {
    title: `BUT - ${annee.replace("annee-", "Année ")}`,
  };
}

export default function Page({ params }: Props) {
  const annee = params.annee;
  const contenu = content.formation.but[annee as keyof typeof content.formation.but];

  if (!contenu) {
    return (
      <main>
        <section>
          <article>
            <p>Cette année n'existe pas.</p>
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