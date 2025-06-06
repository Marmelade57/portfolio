import content from '@/data/content.json';

export default function FormationPage() {
  return (
    <>
      <div className="p-4 border rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Baccalauréat Général</h2>
        <ul className="space-y-2">
          {Object.keys(content.formation.bac).map((specialite) => (
            <li key={specialite}>
              <a href={`/formation/bac/${specialite}`} className="text-blue-600 hover:underline">
                {specialite.toUpperCase()}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="p-4 border rounded-lg">
        <h2 className="text-xl font-semibold mb-4">BUT Informatique</h2>
        <ul className="space-y-2">
          {Object.keys(content.formation.but).map((annee) => (
            <li key={annee}>
              <a href={`/formation/but/${annee}`} className="text-blue-600 hover:underline">
                {annee.replace('-', ' ').toUpperCase()}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
} 