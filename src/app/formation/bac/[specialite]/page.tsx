import { Metadata } from "next";
import content from "@/data/content.json";

type Props = {
  params: { specialite: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const specialite = params.specialite;
  const contenu = content.formation.bac[specialite as keyof typeof content.formation.bac];

  if (!contenu) {
    return {
      title: "Spécialité non trouvée",
    };
  }

  return {
    title: `Spécialité - ${specialite.toUpperCase()}`,
  };
}

export default function Page({ params }: Props) {
  const specialite = params.specialite;
  const contenu = content.formation.bac[specialite as keyof typeof content.formation.bac];

  if (!contenu) {
    return (
      <main>
        <section>
          <article>
            <p>Cette spécialité n'existe pas.</p>
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