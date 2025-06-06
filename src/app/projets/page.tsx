import content from '@/data/content.json';

export default function ProjetsPage() {
  return (
    <>
      <div className="p-4 border rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Projets Personnels</h2>
        <ul className="space-y-2">
          {Object.keys(content.projets.personnels).map((projet) => (
            <li key={projet}>
              <a href={`/projets/personnels/${projet}`} className="text-blue-600 hover:underline">
                {projet.replace('-', ' ').toUpperCase()}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="p-4 border rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Projets Scolaires</h2>
        <ul className="space-y-2">
          {Object.keys(content.projets.scolaires).map((projet) => (
            <li key={projet}>
              <a href={`/projets/scolaires/${projet}`} className="text-blue-600 hover:underline">
                {projet.replace('-', ' ').toUpperCase()}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
} 