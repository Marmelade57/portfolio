import content from '@/data/content.json';

export default function SGBDPage({ params }: { params: { nom: string } }) {
  const contentHtml = content.logiciels.sgbd[params.nom as keyof typeof content.logiciels.sgbd];
  
  return (
    <div className="container mx-auto p-4">
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </div>
  );
} 