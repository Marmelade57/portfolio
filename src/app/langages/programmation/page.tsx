import { Metadata } from "next";
import content from "@/data/content.json";

export const metadata: Metadata = {
  title: "Langages - Programmation",
};

export default function Page() {
  const langages = content.langages.programmation;

  return (
    <main>
      <section>
        <article>
          <h1>Langages de Programmation</h1>
          <p>Voici les langages de programmation que j'utilise :</p>
          <ul>
            {Object.entries(langages).map(([key, value]) => (
              <li key={key}>
                <a href={`/langages/programmation/${key}`}>{key.toUpperCase()}</a>
              </li>
            ))}
          </ul>
        </article>
      </section>
    </main>
  );
} 