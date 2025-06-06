import { Metadata } from "next";
import content from "@/data/content.json";

export const metadata: Metadata = {
  title: "Projets - Personnels",
};

export default function Page() {
  const projets = content.projets.personnels;

  return (
    <main>
      <section>
        <article>
          <h1>Projets Personnels</h1>
          <p>Voici mes projets personnels :</p>
          <ul>
            {Object.entries(projets).map(([key, value]) => (
              <li key={key}>
                <a href={`/projets/personnels/${key}`}>Projet {key.split("-")[1]}</a>
              </li>
            ))}
          </ul>
        </article>
      </section>
    </main>
  );
} 