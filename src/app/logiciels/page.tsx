import content from '@/data/content.json';

export default function LogicielsPage() {
  return (
    <>
      <div className="p-4 border rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Traitement des images</h2>
        <ul className="space-y-2">
          {Object.keys(content.logiciels['traitement-des-images']).map((software) => (
            <li key={software}>
              <a href={`/logiciels/traitement-des-images/${software}`} className="text-blue-600 hover:underline">
                {software}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="p-4 border rounded-lg">
        <h2 className="text-xl font-semibold mb-4">IDE</h2>
        <ul className="space-y-2">
          {Object.keys(content.logiciels.ide).map((software) => (
            <li key={software}>
              <a href={`/logiciels/ide/${software}`} className="text-blue-600 hover:underline">
                {software}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="p-4 border rounded-lg">
        <h2 className="text-xl font-semibold mb-4">SGBD</h2>
        <ul className="space-y-2">
          {Object.keys(content.logiciels.sgbd).map((software) => (
            <li key={software}>
              <a href={`/logiciels/sgbd/${software}`} className="text-blue-600 hover:underline">
                {software}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="p-4 border rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Autres</h2>
        <ul className="space-y-2">
          {Object.keys(content.logiciels.autres).map((software) => (
            <li key={software}>
              <a href={`/logiciels/autres/${software}`} className="text-blue-600 hover:underline">
                {software}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
} 