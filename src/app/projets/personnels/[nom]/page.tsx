import content from '@/data/content.json';

export default function PersonalProjectPage({ params }: { params: { nom: string } }) {
  const contentHtml = content.projets.personnels[params.nom as keyof typeof content.projets.personnels];
  
  return (
    <div className="container mx-auto p-4">
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </div>
  );
} 