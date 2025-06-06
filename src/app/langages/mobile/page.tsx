import { Metadata } from "next";
import content from "@/data/content.json";

export const metadata: Metadata = {
  title: "Langages - Mobile",
};

export default function Page() {
  const langages = content.langages.mobile;

  return (
    <main>
      <section>
        <article>
          <h1>Langages Mobile</h1>
          <p>Voici les langages mobiles que j'utilise :</p>
          <ul>
            {Object.entries(langages).map(([key, value]) => (
              <li key={key}>
                <a href={`/langages/mobile/${key}`}>{key.toUpperCase()}</a>
              </li>
            ))}
          </ul>
        </article>
      </section>
    </main>
  );
} 