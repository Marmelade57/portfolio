import { Metadata } from "next";

export async function generateMetadata({ params }: { params: { nom: string } }): Promise<Metadata> {
  return {
    title: `Projet Scolaire - ${params.nom.toUpperCase()}`,
  };
}

export default function Page() {
  return (
    <main>
      <section>
        <article>
          <p>Cette page est en construction</p>
        </article>
      </section>
    </main>
  );
} 