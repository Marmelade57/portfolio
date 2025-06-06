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
              <a href="/langages">Langages et Frameworks</a>
              <div className="sousmenu">
                <div className="menu-item">
                  <a href="/langages/web">Web</a>
                  <div className="soussousmenu">
                    <a href="/langages/web/html5">HTML5</a>
                    <a href="/langages/web/css3">CSS3</a>
                    <a href="/langages/web/javascript">JavaScript</a>
                    <a href="/langages/web/php">PHP</a>
                    <a href="/langages/web/typescript">TypeScript</a>
                  </div>
                </div>
                <div className="menu-item">
                  <a href="/langages/programmation">Programmation</a>
                  <div className="soussousmenu">
                    <a href="/langages/programmation/python">Python</a>
                    <a href="/langages/programmation/java">Java</a>
                    <a href="/langages/programmation/c">C</a>
                    <a href="/langages/programmation/bash">Bash</a>
                    <a href="/langages/programmation/sql">SQL</a>
                    <a href="/langages/programmation/markdown">Markdown</a>
                  </div>
                </div>
                <div className="menu-item">
                  <a href="/langages/framework">Framework</a>
                  <div className="soussousmenu">
                    <a href="/langages/framework/nextjs">Next.js</a>
                    <a href="/langages/framework/tailwindcss">Tailwind CSS</a>
                    <a href="/langages/framework/flutter">Flutter</a>
                    <a href="/langages/framework/shadcnui">shadcn/ui</a>
                    <a href="/langages/framework/lucide">Lucide</a>
                  </div>
                </div>
                <div className="menu-item">
                  <a href="/langages/mobile">Mobile</a>
                  <div className="soussousmenu">
                    <a href="/langages/mobile/dart">Dart</a>
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
                    <a href="/logiciels/traitement-des-images/inkscape">Inkscape</a>
                    <a href="/logiciels/traitement-des-images/gimp">Gimp</a>
                    <a href="/logiciels/traitement-des-images/canva">Canva</a>
                  </div>
                </div>
                <div className="menu-item">
                  <a href="/logiciels/ide">IDE</a>
                  <div className="soussousmenu">
                    <a href="/logiciels/ide/vscode">VSCode</a>
                    <a href="/logiciels/ide/vercel">Vercel</a>
                  </div>
                </div>
                <div className="menu-item">
                  <a href="/logiciels/sgbd">SGBD</a>
                  <div className="soussousmenu">
                    <a href="/logiciels/sgbd/mysql">MySQL</a>
                    <a href="/logiciels/sgbd/mariadb">MariaDB</a>
                  </div>
                </div>
                <div className="menu-item">
                  <a href="/logiciels/autres">Autres</a>
                  <div className="soussousmenu">
                    <a href="/logiciels/autres/git">Git</a>
                    <a href="/logiciels/autres/github">GitHub</a>
                    <a href="/logiciels/autres/gitlab">GitLab</a>
                    <a href="/logiciels/autres/trello">Trello</a>
                    <a href="/logiciels/autres/phpmyadmin">phpMyAdmin</a>
                    <a href="/logiciels/autres/deno">Deno</a>
                    <a href="/logiciels/autres/arduino">Arduino</a>
                    <a href="/logiciels/autres/obsidian">Obsidian</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="menu-item">
              <a href="/projets">Projets</a>
              <div className="sousmenu">
                <div className="menu-item">
                  <a href="/projets/personnels">Projets personnels</a>
                  <div className="soussousmenu">
                    <a href="/projets/personnels/projet-1">Projet 1</a>
                    <a href="/projets/personnels/projet-2">Projet 2</a>
                  </div>
                </div>
                <div className="menu-item">
                  <a href="/projets/scolaires">Projets scolaires</a>
                  <div className="soussousmenu">
                    <a href="/projets/scolaires/projet-1">Projet 1</a>
                    <a href="/projets/scolaires/projet-2">Projet 2</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="menu-item">
              <a href="/formation">Formation</a>
              <div className="sousmenu">
                <div className="menu-item">
                  <a href="/formation/bac">Baccalauréat général</a>
                  <div className="soussousmenu">
                    <a href="/formation/bac/nsi">Spécialité NSI</a>
                    <a href="/formation/bac/llcer">Spécialité LLCER</a>
                    <a href="/formation/bac/mathematiques">Spécialité Mathématiques</a>
                  </div>
                </div>
                <div className="menu-item">
                  <a href="/formation/but">BUT Informatique</a>
                  <div className="soussousmenu">
                    <a href="/formation/but/annee-1">Première année</a>
                    <a href="/formation/but/annee-2">Deuxième année</a>
                    <a href="/formation/but/annee-3">Troisième année</a>
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
