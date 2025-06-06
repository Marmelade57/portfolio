import { Metadata } from "next";
import content from "@/data/content.json";

export const metadata: Metadata = {
  title: "Formation - BUT Informatique",
};

export default function Page() {
  const annees = content.formation.but;

  return (
    <main>
      <section>
        <article>
          <h1>BUT Informatique</h1>
          <p>Voici les différentes années de mon BUT Informatique :</p>
          <ul>
            {Object.entries(annees).map(([key, value]) => (
              <li key={key}>
                <a href={`/formation/but/${key}`}>{key.replace("annee-", "Année ")}</a>
              </li>
            ))}
          </ul>
        </article>
      </section>
    </main>
  );
} 