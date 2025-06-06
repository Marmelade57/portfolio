import { Metadata } from "next";
import content from "@/data/content.json";

export const metadata: Metadata = {
  title: "Langages - Web",
};

export default function Page() {
  const langages = content.langages.web;

  return (
    <main>
      <section>
        <article>
          <h1>Langages Web</h1>
          <p>Voici les langages web que j'utilise :</p>
          <ul>
            {Object.entries(langages).map(([key, value]) => (
              <li key={key}>
                <a href={`/langages/web/${key}`}>{key.toUpperCase()}</a>
              </li>
            ))}
          </ul>
        </article>
      </section>
    </main>
  );
} 