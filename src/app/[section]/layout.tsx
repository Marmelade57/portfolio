export default function SectionLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { section: string };
}) {
  return (
    <main>
      <section>
        <h1 className="titreFunky text-center capitalize">
          {params.section.replace(/-/g, " ")}
        </h1>
        <article>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {children}
          </div>
        </article>
      </section>
    </main>
  );
} 