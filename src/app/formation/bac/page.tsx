import { Metadata } from "next";
import content from "@/data/content.json";

export const metadata: Metadata = {
  title: "Formation - Baccalauréat",
};

export default function Page() {
  const specialites = content.formation.bac;

  return (
    <main>
      <section>
        <article>
          <h1>Baccalauréat</h1>
          <p>Voici les spécialités que j'ai suivies pendant mon baccalauréat :</p>
          <ul>
            {Object.entries(specialites).map(([key, value]) => (
              <li key={key}>
                <a href={`/formation/bac/${key}`}>{key.toUpperCase()}</a>
              </li>
            ))}
          </ul>
        </article>
      </section>
    </main>
  );
} 