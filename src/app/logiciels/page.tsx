import { Metadata } from "next";
import content from "@/data/content.json";

export const metadata: Metadata = {
  title: "Logiciels",
};

export default function Page() {
  const categories = {
    "traitement-des-images": "Traitement d'Images",
    "ide": "Environnements de Développement",
    "sgbd": "Systèmes de Gestion de Bases de Données",
    "autres": "Autres Logiciels"
  };

  return (
    <main>
      <section>
        <article>
          <h1>Logiciels</h1>
          <p>Voici les différentes catégories de logiciels que j'utilise :</p>
          <ul>
            {Object.entries(categories).map(([key, value]) => (
              <li key={key}>
                <a href={`/logiciels/${key}`}>{value}</a>
              </li>
            ))}
          </ul>
        </article>
      </section>
    </main>
  );
} 