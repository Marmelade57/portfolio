import content from '@/data/content.json';

export default function FrameworkPage({ params }: { params: { nom: string } }) {
  const contentHtml = content.langages.framework[params.nom as keyof typeof content.langages.framework];
  
  return (
    <div className="container mx-auto p-4">
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </div>
  );
} 