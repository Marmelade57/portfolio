import { Metadata } from "next";

export async function generateMetadata({ params }: { params: { specialite: string } }): Promise<Metadata> {
  return {
    title: `Spécialité - ${params.specialite.toUpperCase()}`,
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