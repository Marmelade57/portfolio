import content from '@/data/content.json';

export default function BacSpecialityPage({ params }: { params: { specialite: string } }) {
  const contentHtml = content.formation.bac[params.specialite as keyof typeof content.formation.bac];
  
  return (
    <div className="container mx-auto p-4">
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </div>
  );
} 