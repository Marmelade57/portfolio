export default function ProjetsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <section>
        <h1 className="titreFunky text-center">Projets</h1>
        <article>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {children}
          </div>
        </article>
      </section>
    </main>
  );
} 