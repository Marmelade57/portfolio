import { Metadata } from "next";
import content from "@/data/content.json";

export const metadata: Metadata = {
  title: "Projets - Scolaires",
};

export default function Page() {
  const projets = content.projets.scolaires;

  return (
    <main>
      <section>
        <article>
          <h1>Projets Scolaires</h1>
          <p>Voici mes projets scolaires :</p>
          <ul>
            {Object.entries(projets).map(([key, value]) => (
              <li key={key}>
                <a href={`/projets/scolaires/${key}`}>Projet {key.split("-")[1]}</a>
              </li>
            ))}
          </ul>
        </article>
      </section>
    </main>
  );
} 