import content from '@/data/content.json';

export default function BUTYearPage({ params }: { params: { annee: string } }) {
  const contentHtml = content.formation.but[params.annee as keyof typeof content.formation.but];
  
  return (
    <div className="container mx-auto p-4">
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </div>
  );
} 