import content from '@/data/content.json';

export default function SchoolProjectPage({ params }: { params: { nom: string } }) {
  const contentHtml = content.projets.scolaires[params.nom as keyof typeof content.projets.scolaires];
  
  return (
    <div className="container mx-auto p-4">
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </div>
  );
} 