import content from '@/data/content.json';

export default function MobileLibraryPage({ params }: { params: { nom: string } }) {
  const contentHtml = content.langages.mobile[params.nom as keyof typeof content.langages.mobile];
  
  return (
    <div className="container mx-auto p-4">
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </div>
  );
} 