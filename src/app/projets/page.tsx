import { Metadata } from "next";
import content from "@/data/content.json";

export const metadata: Metadata = {
  title: "Projets",
};

export default function Page() {
  const categories = {
    personnels: "Projets Personnels",
    scolaires: "Projets Scolaires"
  };

  return (
    <main>
      <section>
        <article>
          <h1>Projets</h1>
          <p>Voici les différentes catégories de projets :</p>
          <ul>
            {Object.entries(categories).map(([key, value]) => (
              <li key={key}>
                <a href={`/projets/${key}`}>{value}</a>
              </li>
            ))}
          </ul>
        </article>
      </section>
    </main>
  );
} 