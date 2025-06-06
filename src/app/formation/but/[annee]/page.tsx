import { Metadata } from "next";

export async function generateMetadata({ params }: { params: { annee: string } }): Promise<Metadata> {
  return {
    title: `BUT - ${params.annee.toUpperCase()}`,
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