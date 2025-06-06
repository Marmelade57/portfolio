"use client"
import "@/styles/animations.css";
import { useEffect } from 'react';

export default function Blog() {
  useEffect(() => {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
      card.addEventListener('click', () => {
        card.classList.toggle('is-flipped');
      });
    });

    return () => {
      cards.forEach(card => {
        card.removeEventListener('click', () => {
          card.classList.toggle('is-flipped');
        });
      });
    };
  }, []);

  const handleCardClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    card.classList.toggle('is-flipped');
  };

  return (
    <>
      <main>
        <section>
          <h1>
            Cette page contient des informations tirées de sources diverses.
          </h1>
          <article>
            <h2>Des éléments sympas</h2>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <img
                  src="data:image/jpeg;base64,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"
                  alt="miniature d'une vidéo d'ici Amy Plant"
                />
                <p>
                  La chaine d'
                  <a href="https://www.youtube.com/@iciamyplant" target="blank">
                    ici Amy Plant
                  </a>
                </p>
              </div>
              <div>
                <p>Le dictionnaire allemand Leo</p>
              </div>
              <div>
                <p>L'esperanto</p>
              </div>
              <div>
                <div className="typewriter">
                  <div className="slide">
                    <i></i>
                  </div>
                  <div className="paper"></div>
                  <div className="keyboard"></div>
                </div>
              </div>
              <div className="checkbox-wrapper-5">
                <div className="check">
                  <input id="check-5" type="checkbox" />
                  <label htmlFor="check-5"></label>
                </div>
              </div>

              <div className="scene scene--card">
                <div className="card" onClick={handleCardClick}>
                  <div className="card__face card__face--front">
                    Cette carte se retourne ...
                  </div>
                  <div className="card__face card__face--back">
                    ... pour réveler sa vraie nature ?
                  </div>
                </div>
              </div>
            </div>
          </article>
        </section>
      </main>
    </>
  );
}
