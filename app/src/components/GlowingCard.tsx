"use client";

export default function GlowingCard() {
  return (
    <div className="glowing-card-wrapper">
      <div className="flip-card">
        <img src="/FotoMia.png" alt="Sebastian Ceballos" className="flip-card__image" />
        <div className="flip-card__content">
          <p className="flip-card__title">Mis intereses</p>
          <p className="flip-card__description">
            Cuando no estoy frente al PC programando, me encontrarás disfrutando de las cosas que más me apasionan. Los videojuegos son parte esencial de mi vida, me gustan por la creatividad, los retos y las historias que cuentan. El fútbol es otro de mis grandes amores, un deporte que me llena de energía y emoción en cada partido. La música siempre está presente en mi día a día, acompañándome en cada momento. Y por supuesto, soy un gran fan del universo Marvel, esas películas siempre logran sorprenderme y emocionarme.
          </p>
        </div>
      </div>

      <style jsx>{`
        .glowing-card-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;
        }

        .flip-card {
          position: relative;
          width: 300px;
          height: 400px;
          background-color: var(--surface);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          perspective: 1000px;
          box-shadow: 0 0 0 5px rgba(255, 255, 255, 0.5);
          transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .flip-card__image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .flip-card:hover {
          transform: scale(1.05);
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
        }

        html[data-theme="light"] .flip-card:hover {
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
        }

        .flip-card__content {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          padding: 20px;
          box-sizing: border-box;
          background-color: var(--surface);
          transform: rotateX(-90deg);
          transform-origin: bottom;
          transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          cursor: pointer;
        }

        .flip-card:hover .flip-card__content {
          transform: rotateX(0deg);
        }

        .flip-card__content:hover {
          background-color: var(--background);
        }

        .flip-card__title {
          margin: 0;
          font-size: 24px;
          color: var(--foreground);
          font-weight: 700;
          font-family: var(--font-oswald), "Oswald", sans-serif;
        }

        .flip-card:hover .flip-card__image {
          scale: 0;
        }

        .flip-card__description {
          margin: 10px 0 0;
          font-size: 14px;
          color: var(--muted);
          line-height: 1.4;
          font-family: var(--font-neuton), "Neuton", sans-serif;
        }
      `}</style>
    </div>
  );
}
