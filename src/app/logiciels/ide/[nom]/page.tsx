import content from '@/data/content.json';

export default function IDEPage({ params }: { params: { nom: string } }) {
  const contentHtml = content.logiciels.ide[params.nom as keyof typeof content.logiciels.ide];
  
  return (
    <div className="container mx-auto p-4">
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </div>
  );
} 