import content from '@/data/content.json';

export default function LangagesPage() {
  return (
    <>
      <div className="p-4 border rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Web</h2>
        <ul className="space-y-2">
          {Object.keys(content.langages.web).map((lang) => (
            <li key={lang}>
              <a href={`/langages/web/${lang}`} className="text-blue-600 hover:underline">
                {lang.toUpperCase()}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="p-4 border rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Programmation</h2>
        <ul className="space-y-2">
          {Object.keys(content.langages.programmation).map((lang) => (
            <li key={lang}>
              <a href={`/langages/programmation/${lang}`} className="text-blue-600 hover:underline">
                {lang.toUpperCase()}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="p-4 border rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Frameworks</h2>
        <ul className="space-y-2">
          {Object.keys(content.langages.framework).map((framework) => (
            <li key={framework}>
              <a href={`/langages/framework/${framework}`} className="text-blue-600 hover:underline">
                {framework.toUpperCase()}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="p-4 border rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Librairies</h2>
        <ul className="space-y-2">
          {Object.keys(content.langages.mobile).map((lib) => (
            <li key={lib}>
              <a href={`/langages/mobile/${lib}`} className="text-blue-600 hover:underline">
                {lib.toUpperCase()}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
} 