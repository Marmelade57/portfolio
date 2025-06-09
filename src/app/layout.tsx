import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Accueil",
  description: "Portfolio de Margaux HALLER",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning={true} data-lt-installed="true">
      <Head>
        <title>Accueil</title>
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header>
          <img src="/logo.png" alt="logo" className="carre w-[8svw] m-auto" />
          <div className="inline-flex">
            <div>
              <a href="/">Accueil</a>
            </div>
            <div className="menu-item">
              <a href="/projets">Projets</a>
              <div className="sousmenu">
                <div className="menu-item">
                  <a href="/projets/personnels">Projets personnels</a>
                  <div className="soussousmenu">
                    <a href="/projets/personnels/Portfolio">Portfolio</a>
                  </div>
                </div>
                <div className="menu-item">
                  <a href="/projets/scolaires">Projets scolaires</a>
                  <div className="soussousmenu">
                    <a href="/projets/scolaires/SAE101">SAE 1.01</a>
                    <a href="/projets/scolaires/SAE102">SAE 1.02</a>
                    <a href="/projets/scolaires/SAE103">SAE 1.03</a>
                    <a href="/projets/scolaires/SAE104">SAE 1.04</a>
                    <a href="/projets/scolaires/SAE105-106">SAE 1.05 - 1.06</a>
                    <a href="/projets/scolaires/SAE201">SAE 2.01</a>
                    <a href="/projets/scolaires/SAE202">SAE 2.02</a>
                    <a href="/projets/scolaires/SAE203">SAE 2.03</a>
                    <a href="/projets/scolaires/SAE204">SAE 2.04</a>
                    <a href="/projets/scolaires/SAE205-206">SAE 2.05 - 2.06</a>
                    <a href="/projets/scolaires/SAE301">SAE 3.01</a>
                    <a href="/projets/scolaires/SAE401">SAE 4.01</a>
                    <a href="/projets/scolaires/Stage2A">Stage de deuxième année</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="menu-item">
              <a href="/langages">Langages et Frameworks</a>
              <div className="sousmenu">
                <div className="menu-item">
                  <a href="/langages/web">Web</a>
                  <div className="soussousmenu">
                    <a href="/langages/web/HTML5">HTML5</a>
                    <a href="/langages/web/CSS3">CSS3</a>
                    <a href="/langages/web/JavaScript">JavaScript</a>
                    <a href="/langages/web/PHP">PHP</a>
                    <a href="/langages/web/TypeScript">TypeScript</a>
                  </div>
                </div>
                <div className="menu-item">
                  <a href="/langages/programmation">Programmation</a>
                  <div className="soussousmenu">
                    <a href="/langages/programmation/Python">Python</a>
                    <a href="/langages/programmation/Java">Java</a>
                    <a href="/langages/programmation/C">C</a>
                    <a href="/langages/programmation/Bash">Bash</a>
                    <a href="/langages/programmation/SQL">SQL</a>
                    <a href="/langages/programmation/Markdown">Markdown</a>
                  </div>
                </div>
                <div className="menu-item">
                  <a href="/langages/framework">Framework</a>
                  <div className="soussousmenu">
                    <a href="/langages/framework/Next.js">Next.js</a>
                    <a href="/langages/framework/TailwindCSS">Tailwind CSS</a>
                    <a href="/langages/framework/Flutter">Flutter</a>
                    <a href="/langages/framework/ShadcnUi">shadcn/ui</a>
                    <a href="/langages/framework/Lucide">Lucide</a>
                  </div>
                </div>
                <div className="menu-item">
                  <a href="/langages/mobile">Mobile</a>
                  <div className="soussousmenu">
                    <a href="/langages/mobile/Dart">Dart</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="menu-item">
              <a href="/logiciels">Logiciels</a>
              <div className="sousmenu">
                <div className="menu-item">
                  <a href="/logiciels/traitement-des-images">Traitement des images</a>
                  <div className="soussousmenu">
                    <a href="/logiciels/traitement-des-images/Inkscape">Inkscape</a>
                    <a href="/logiciels/traitement-des-images/Gimp">Gimp</a>
                    <a href="/logiciels/traitement-des-images/Canva">Canva</a>
                  </div>
                </div>
                <div className="menu-item">
                  <a href="/logiciels/IDE">IDE</a>
                  <div className="soussousmenu">
                    <a href="/logiciels/IDE/VSCode">Visual Studio Code</a>
                    <a href="/logiciels/IDE/Vercel">Vercel</a>
                  </div>
                </div>
                <div className="menu-item">
                  <a href="/logiciels/SGBD">SGBD</a>
                  <div className="soussousmenu">
                    <a href="/logiciels/SGBD/MySQL">MySQL</a>
                    <a href="/logiciels/SGBD/MariaDB">MariaDB</a>
                  </div>
                </div>
                <div className="menu-item">
                  <a href="/logiciels/autres">Autres</a>
                  <div className="soussousmenu">
                    <a href="/logiciels/autres/Git">Git</a>
                    <a href="/logiciels/autres/GitHub">GitHub</a>
                    <a href="/logiciels/autres/GitLab">GitLab</a>
                    <a href="/logiciels/autres/Trello">Trello</a>
                    <a href="/logiciels/autres/phpMyAdmin">phpMyAdmin</a>
                    <a href="/logiciels/autres/Deno">Deno</a>
                    <a href="/logiciels/autres/Arduino">Arduino</a>
                    <a href="/logiciels/autres/Obsidian">Obsidian</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="menu-item">
              <a href="/formation">Formation</a>
              <div className="sousmenu">
                <div className="menu-item">
                  <a href="/formation/Bac">Baccalauréat général</a>
                  <div className="soussousmenu">
                    <a href="/formation/Bac/NSI">Numérique et Sciences Informatiques</a>
                    <a href="/formation/Bac/LLCER">Langues, Littératures et Cultures Étrangères</a>
                    <a href="/formation/Bac/Mathématiques">Mathématiques</a>
                  </div>
                </div>
                <div className="menu-item">
                  <a href="/formation/BUT">BUT Informatique</a>
                  <div className="soussousmenu">
                    <a href="/formation/BUT/annee-1">Première année</a>
                    <a href="/formation/BUT/annee-2">Deuxième année</a>
                    <a href="/formation/BUT/annee-3">Troisième année</a>
                  </div>
                </div>
                <div className="menu-item">
                  <a href="/formation/Certification">Certifications</a>
                  <div className="soussousmenu">
                    <a href="/formation/Certification/PIX">PIX</a>
                    <a href="/formation/Certification/Cambridge">Cambridge English</a>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <a href="/blog">Blog</a>
            </div>
          </div>
        </header>
        {children}
        <footer></footer>
      </body>
    </html>
  );
}
