import { Metadata } from "next";
import content from "@/data/content.json";

export const metadata: Metadata = {
  title: "Langages - Frameworks",
};

export default function Page() {
  const frameworks = content.langages.framework;

  return (
    <main>
      <section>
        <article>
          <h1>Frameworks</h1>
          <p>Voici les frameworks que j'utilise :</p>
          <ul>
            {Object.entries(frameworks).map(([key, value]) => (
              <li key={key}>
                <a href={`/langages/framework/${key}`}>{key.toUpperCase()}</a>
              </li>
            ))}
          </ul>
        </article>
      </section>
    </main>
  );
} 