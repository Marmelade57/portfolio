import { Metadata } from "next";
import content from '@/data/content.json';

type Props = {
  params: { nom: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const nom = params.nom;
  const contenu = content.langages.framework[nom as keyof typeof content.langages.framework];

  if (!contenu) {
    return {
      title: "Framework non trouvé",
    };
  }

  return {
    title: `Framework - ${nom.toUpperCase()}`,
  };
}

export default function Page({ params }: Props) {
  const nom = params.nom;
  const contenu = content.langages.framework[nom as keyof typeof content.langages.framework];

  if (!contenu) {
    return (
      <main>
        <section>
          <article>
            <p>Ce framework n'existe pas.</p>
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