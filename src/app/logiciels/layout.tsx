export default function LogicielsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <section>
        <h1 className="titreFunky text-center">Logiciels</h1>
        <article>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {children}
          </div>
        </article>
      </section>
    </main>
  );
} 