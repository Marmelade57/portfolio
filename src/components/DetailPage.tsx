import { ReactNode } from "react";

interface DetailPageProps {
  title: string;
  description: string;
  niveau?: string;
  date?: string;
  competences?: string[];
  projets?: string[];
  domaines?: string[];
  children?: ReactNode;
}

export default function DetailPage({
  title,
  description,
  niveau,
  date,
  competences,
  projets,
  domaines,
  children
}: DetailPageProps) {
  return (
    <main className="container mx-auto px-4 py-8">
      <section>
        <article className="prose lg:prose-xl">
          <h1 className="text-3xl font-bold mb-6">{title}</h1>
          <div className="space-y-4">
            <p className="text-lg">{description}</p>
            
            {(niveau || date) && (
              <div className="grid grid-cols-2 gap-4">
                {niveau && (
                  <div>
                    <h2 className="text-xl font-semibold mb-2">Niveau</h2>
                    <p>{niveau}</p>
                  </div>
                )}
                {date && (
                  <div>
                    <h2 className="text-xl font-semibold mb-2">Date</h2>
                    <p>{date}</p>
                  </div>
                )}
              </div>
            )}

            {competences && competences.length > 0 && (
              <div>
                <h2 className="text-xl font-semibold mb-2">Compétences</h2>
                <ul className="list-disc pl-5">
                  {competences.map((competence, index) => (
                    <li key={index}>{competence}</li>
                  ))}
                </ul>
              </div>
            )}

            {projets && projets.length > 0 && (
              <div>
                <h2 className="text-xl font-semibold mb-2">Projets</h2>
                <ul className="list-disc pl-5">
                  {projets.map((projet, index) => (
                    <li key={index}>{projet}</li>
                  ))}
                </ul>
              </div>
            )}

            {domaines && domaines.length > 0 && (
              <div>
                <h2 className="text-xl font-semibold mb-2">Domaines</h2>
                <ul className="list-disc pl-5">
                  {domaines.map((domaine, index) => (
                    <li key={index}>{domaine}</li>
                  ))}
                </ul>
              </div>
            )}

            {children}
          </div>
        </article>
      </section>
    </main>
  );
} 