export default function Home() {
  return (
    <main>
      <section>
        <h1 className="titreFunky text-center">Margaux HALLER</h1>
        <article>
          <div className="inline-flex w-full justify-around">
            <h2>Étudiante à l'IUT de Metz</h2>
            <img
              src="https://tse3.mm.bing.net/th?id=OIP.Si8LcRD8o16Mhm1YZ55Z-wHaBl&pid=Api"
              alt="logo iut"
            />
          </div>
          <div className="grid grid-cols-3 mt-[2svh]">
            <div>
              <h3>Première année</h3>
            </div>
            <div>
              <h3>Deuxième année</h3>
              <ul>
                <li>
                  Stage de fin d'année à{" "}
                  <a
                    href="https://mb-music-school-neab.vercel.app"
                    target="blank"
                  >
                    MB Music School
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3>Troisième année</h3>
              <p>Plus d'informations serons ajoutées à l'avenir</p>
            </div>
          </div>
        </article>
        <article>
          <h2>Passionnée de langues</h2>
          <a href="/formation/Certification/Cambridge">Certification Cambridge Anglais niveau B2</a>
          <p>Apprends l'<a href="https://esperanto-france.org/esperanto">esperanto</a> en autodidacte</p>
        </article>
        <article>
          <h2>Engagée dans ses études</h2>
          <p>
            Secrétaire puis trésorière du Bureau Des Étudiants du département
            Informatique d'avril 2024 à avril 2025
          </p>
        </article>
      </section>
      <section>
        <h1 className="titreFunky text-center">Point compétences</h1>
        <article className="competences">
          <h2>Compétences techniques</h2>
          <h3>Langages</h3>
          <div className="flex flex-wrap gap-2">
            <figure>
              <a href="/langages/programmation/c" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://img.shields.io/badge/C-%2300599C.svg?style=flat-square&logo=c&logoColor=%2300599C&color=rgb(245, 240, 240)"
                  alt="C"
                />
              </a>
            </figure>
            <figure>
              <a href="/langages/web/css3" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://img.shields.io/badge/CSS3-%231572B6.svg?style=flat-square&logo=css3&logoColor=%231572B6&color=rgb(245, 240, 240)"
                  alt="CSS3"
                />
              </a>
            </figure>
            <figure>
              <a href="/langages/web/html5" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://img.shields.io/badge/HTML5-%23E34F26.svg?style=flat-square&logo=html5&logoColor=%23E34F26&color=rgb(245, 240, 240)"
                  alt="HTML5"
                />
              </a>
            </figure>
            <figure>
              <a href="/langages/programmation/java" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://img.shields.io/badge/Java-%23ED8B00.svg?style=flat-square&logo=openjdk&logoColor=%23ED8B00&color=rgb(245, 240, 240)"
                  alt="Java"
                />
              </a>
            </figure>
            <figure>
              <a href="/langages/web/javascript" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://img.shields.io/badge/JavaScript-%23323330.svg?style=flat-square&logo=javascript&logoColor=%23F7DF1E&color=rgb(245, 240, 240)"
                  alt="JavaScript"
                />
              </a>
            </figure>
            <figure>
              <a href="/langages/programmation/markdown" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://img.shields.io/badge/Markdown-%23000000.svg?style=flat-square&logo=markdown&logoColor=%23000000&color=rgb(245, 240, 240)"
                  alt="Markdown"
                />
              </a>
            </figure>
            <figure>
              <a href="/langages/mobile/dart" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://img.shields.io/badge/Dart-%230175C2.svg?style=flat-square&logo=dart&logoColor=%230175C2&color=rgb(245, 240, 240)"
                  alt="Dart"
                />
              </a>
            </figure>
            <figure>
              <a href="/langages/web/php" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://img.shields.io/badge/PHP-%23777BB4.svg?style=flat-square&logo=php&logoColor=%23777BB4&color=rgb(245, 240, 240)"
                  alt="PHP"
                />
              </a>
            </figure>
            <figure>
              <a href="/langages/programmation/python" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://img.shields.io/badge/Python-3670A0?style=flat-square&logo=python&logoColor=ffdd54&color=rgb(245, 240, 240)"
                  alt="Python"
                />
              </a>
            </figure>
            <figure>
              <a href="/langages/programmation/bash" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://img.shields.io/badge/Bash_Script-%23121011.svg?style=flat-square&logo=gnu-bash&logoColor=%23121011&color=rgb(245, 240, 240)"
                  alt="Bash Script"
                />
              </a>
            </figure>
            <figure>
              <a href="/langages/programmation/sql" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://img.shields.io/badge/SQL-%23336991.svg?style=flat-square&logo=postgresql&logoColor=black&color=rgb(245, 240, 240)"
                  alt="SQL"
                />
              </a>
            </figure>
            <figure>
              <a href="/langages/web/typescript" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://img.shields.io/badge/Typescript-%23007ACC.svg?style=flat-square&logo=typescript&logoColor=%23007ACC&color=rgb(245, 240, 240)"
                  alt="TypeScript"
                />
              </a>
            </figure>
          </div>
          <h3>Frameworks</h3>
          <div className="flex flex-wrap gap-2">
            <figure>
              <a href="/langages/framework/flutter" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://img.shields.io/badge/Flutter-%2302569B.svg?style=flat-square&logo=Flutter&logoColor=%2302569B&color=rgb(245, 240, 240)"
                  alt="Flutter"
                />
              </a>
            </figure>
            <figure>
              <a href="/langages/framework/nextjs" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://img.shields.io/badge/NextJS-black?style=flat-square&logo=next.js&logoColor=black&color=rgb(245, 240, 240)"
                  alt="Next JS"
                />
              </a>
            </figure>
            <figure>
              <a href="/langages/framework/tailwindcss" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://img.shields.io/badge/TailwindCSS-%2338B2AC.svg?style=flat-square&logo=tailwind-css&logoColor=%2338B2AC&color=rgb(245, 240, 240)"
                  alt="TailwindCSS"
                />
              </a>
            </figure>
            <figure>
              <a href="/langages/framework/shadcnui" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://img.shields.io/badge/shadcn/ui-000000?style=flat-square&logo=shadcnui&logoColor=000000&color=rgb(245, 240, 240)"
                  alt="shadcn/ui"
                />
              </a>
            </figure>
            <figure>
              <a href="/langages/framework/lucide" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://img.shields.io/badge/Lucide-000000?style=flat-square&logo=lucide&logoColor=F56565&color=rgb(245, 240, 240)"
                  alt="Lucide"
                />
              </a>
            </figure>
          </div>
          <h3>Outils</h3>
          <div className="flex flex-wrap gap-2">
            <figure>
              <a href="/logiciels/ide/vercel" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://img.shields.io/badge/Vercel-%23000000.svg?style=flat-square&logo=vercel&logoColor=%23000000&color=rgb(245, 240, 240)"
                  alt="Vercel"
                />
              </a>
            </figure>
            <figure>
              <a href="/logiciels/traitement-des-images/inkscape" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://img.shields.io/badge/Inkscape-e0e0e0?style=flat-square&logo=inkscape&logoColor=e0e0e0&color=rgb(245, 240, 240)"
                  alt="Inkscape"
                />
              </a>
            </figure>
            <figure>
              <a href="/logiciels/traitement-des-images/canva" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://img.shields.io/badge/Canva-%2300C4CC.svg?style=flat-square&logo=Canva&logoColor=%2300C4CC&color=rgb(245, 240, 240)"
                  alt="Canva"
                />
              </a>
            </figure>
            <figure>
              <a href="/logiciels/traitement-des-images/gimp" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://img.shields.io/badge/Gimp-657D8B?style=flat-square&logo=gimp&logoColor=657D8B&color=rgb(245, 240, 240)"
                  alt="Gimp"
                />
              </a>
            </figure>
            <figure>
              <a href="/logiciels/autres/github" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://img.shields.io/badge/GitHub-%23121011.svg?style=flat-square&logo=github&logoColor=%23121011&color=rgb(245, 240, 240)"
                  alt="GitHub"
                />
              </a>
            </figure>
            <figure>
              <a href="/logiciels/autres/git" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://img.shields.io/badge/Git-%23F05033.svg?style=flat-square&logo=git&logoColor=%23F05033&color=rgb(245, 240, 240)"
                  alt="Git"
                />
              </a>
            </figure>
            <figure>
              <a href="/logiciels/autres/gitlab" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://img.shields.io/badge/GitLab-%23181717.svg?style=flat-square&logo=gitlab&logoColor=%23181717&color=rgb(245, 240, 240)"
                  alt="GitLab"
                />
              </a>
            </figure>
            <figure>
              <a href="/logiciels/autres/trello" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://img.shields.io/badge/Trello-%23026AA7.svg?style=flat-square&logo=Trello&logoColor=%23026AA7&color=rgb(245, 240, 240)"
                  alt="Trello"
                />
              </a>
            </figure>
          </div>
          <h3>Bases de données</h3>
          <div className="flex flex-wrap gap-2">
            <figure>
              <a href="/logiciels/sgbd/mariadb" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://img.shields.io/badge/MariaDB-003545?style=flat-square&logo=mariadb&logoColor=003545&color=rgb(245, 240, 240)"
                  alt="MariaDB"
                />
              </a>
            </figure>
            <figure>
              <a href="/logiciels/sgbd/mysql" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://img.shields.io/badge/MySQL-4479A1.svg?style=flat-square&logo=mysql&logoColor=4479A1&color=rgb(245, 240, 240)"
                  alt="MySQL"
                />
              </a>
            </figure>
          </div>
          <h3>Autres</h3>
          <div className="flex flex-wrap gap-2">
            <figure>
              <a href="/logiciels/autres/deno" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://img.shields.io/badge/Deno%20JS-000000?style=flat-square&logo=deno&logoColor=000000&color=rgb(245, 240, 240)"
                  alt="Deno JS"
                />
              </a>
            </figure>
            <figure>
              <a href="/logiciels/autres/arduino" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://img.shields.io/badge/-Arduino-00979D?style=flat-square&logo=Arduino&logoColor=00979D&color=rgb(245, 240, 240)"
                  alt="Arduino"
                />
              </a>
            </figure>
            <figure>
              <a href="/logiciels/autres/obsidian" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://img.shields.io/badge/Obsidian-7C3AED?style=flat-square&logo=obsidian&logoColor=7C3AED&color=rgb(245, 240, 240)"
                  alt="Obsidian"
                />
              </a>
            </figure>
            <figure>
              <a href="/logiciels/autres/phpmyadmin" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://img.shields.io/badge/phpMyAdmin-6C78AF?style=flat-square&logo=phpmyadmin&logoColor=6C78AF&color=rgb(245, 240, 240)"
                  alt="phpMyAdmin"
                />
              </a>
            </figure>
          </div>
        </article>
        <article className="competences">
          <h2>Compétences humaines</h2>
          <h3>Soft Skills</h3>
          <div></div>
          <div className="flex flex-wrap gap-2">
            <figure>
              <img
                src="https://img.shields.io/badge/Autonomie-f5f0f0?style=flat-square"
                alt="Autonomie"
              />
            </figure>
            <figure>
              <img
                src="https://img.shields.io/badge/Esprit%20d'équipe-f5f0f0?style=flat-square"
                alt="Esprit d'équipe"
              />
            </figure>
            <figure>
              <img
                src="https://img.shields.io/badge/Adaptabilité-f5f0f0?style=flat-square"
                alt="Adaptabilité"
              />
            </figure>
            <figure>
              <img
                src="https://img.shields.io/badge/Assiduité-f5f0f0?style=flat-square"
                alt="Assiduité"
              />
            </figure>
            <figure>
              <img
                src="https://img.shields.io/badge/Sens%20de%20l'organisation-f5f0f0?style=flat-square"
                alt="Sens de l'organisation"
              />
            </figure>
            <figure></figure>
          </div>
        </article>
      </section>
    </main>
  );
}
