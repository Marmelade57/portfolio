import content from '@/data/content.json';

export default function ProgrammingLanguagePage({ params }: { params: { nom: string } }) {
  const contentHtml = content.langages.programmation[params.nom as keyof typeof content.langages.programmation];
  
  return (
    <div className="container mx-auto p-4">
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </div>
  );
} 