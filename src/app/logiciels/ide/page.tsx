import { Metadata } from "next";
import content from "@/data/content.json";

export const metadata: Metadata = {
  title: "Logiciels - IDE",
};

export default function Page() {
  const logiciels = content.logiciels.ide;

  return (
    <main>
      <section>
        <article>
          <h1>Environnements de Développement</h1>
          <p>Voici les IDE que j'utilise :</p>
          <ul>
            {Object.entries(logiciels).map(([key, value]) => (
              <li key={key}>
                <a href={`/logiciels/ide/${key}`}>{key.toUpperCase()}</a>
              </li>
            ))}
          </ul>
        </article>
      </section>
    </main>
  );
} 