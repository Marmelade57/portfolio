import { Metadata } from "next";
import content from "@/data/content.json";

export const metadata: Metadata = {
  title: "Logiciels - SGBD",
};

export default function Page() {
  const logiciels = content.logiciels.sgbd;

  return (
    <main>
      <section>
        <article>
          <h1>Systèmes de Gestion de Bases de Données</h1>
          <p>Voici les SGBD que j'utilise :</p>
          <ul>
            {Object.entries(logiciels).map(([key, value]) => (
              <li key={key}>
                <a href={`/logiciels/sgbd/${key}`}>{key.toUpperCase()}</a>
              </li>
            ))}
          </ul>
        </article>
      </section>
    </main>
  );
} 