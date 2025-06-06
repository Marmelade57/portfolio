import { Metadata } from "next";
import content from "@/data/content.json";

export const metadata: Metadata = {
  title: "Logiciels - Traitement d'Images",
};

export default function Page() {
  const logiciels = content.logiciels["traitement-des-images"];

  return (
    <main>
      <section>
        <article>
          <h1>Logiciels de Traitement d'Images</h1>
          <p>Voici les logiciels de traitement d'images que j'utilise :</p>
          <ul>
            {Object.entries(logiciels).map(([key, value]) => (
              <li key={key}>
                <a href={`/logiciels/traitement-des-images/${key}`}>{key.charAt(0).toUpperCase() + key.slice(1)}</a>
              </li>
            ))}
          </ul>
        </article>
      </section>
    </main>
  );
} 