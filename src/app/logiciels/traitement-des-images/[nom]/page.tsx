import content from '@/data/content.json';

export default function ImageSoftwarePage({ params }: { params: { nom: string } }) {
  const contentHtml = content.logiciels['traitement-des-images'][params.nom as keyof typeof content.logiciels['traitement-des-images']];
  
  return (
    <div className="container mx-auto p-4">
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </div>
  );
} 