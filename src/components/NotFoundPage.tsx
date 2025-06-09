interface NotFoundPageProps {
  type: string;
}

export default function NotFoundPage({ type }: NotFoundPageProps) {
  return (
    <main className="container mx-auto px-4 py-8">
      <section>
        <article>
          <h1 className="text-2xl font-bold mb-4">{type} non trouvé</h1>
          <p>Le {type.toLowerCase()} demandé n'existe pas.</p>
        </article>
      </section>
    </main>
  );
} 