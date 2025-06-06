import content from '@/data/content.json';

export default function WebLanguagePage({ params }: { params: { nom: string } }) {
  const contentHtml = content.langages.web[params.nom as keyof typeof content.langages.web];
  
  return (
    <div className="container mx-auto p-4">
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </div>
  );
} 