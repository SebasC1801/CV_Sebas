"use client";

import { useState } from "react";
import { useLanguage } from "./LanguageController";
import { t } from "../i18n/translations";

export default function GlowingCard() {
  const { lang } = useLanguage();
  const tr = t(lang);
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="glowing-card-wrapper">
      <div
        className={`flip-card ${flipped ? "flip-card--flipped" : ""}`}
        onClick={() => setFlipped((prev) => !prev)}
      >
        <img src="/FotoMia.png" alt="Sebastian Ceballos" className="flip-card__image" />
        <div className="flip-card__content">
          <p className="flip-card__title">{tr.glowingCard.title}</p>
          <p className="flip-card__description">
            {tr.glowingCard.description}
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
          width: 280px;
          height: 370px;
          background-color: var(--surface);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          perspective: 1000px;
          box-shadow: 0 0 0 5px rgba(0, 229, 255, 0.3);
          transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        @media screen and (min-width: 768px) {
          .flip-card {
            width: 300px;
            height: 400px;
          }
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

        @media (hover: hover) {
          .flip-card:hover .flip-card__content {
            transform: rotateX(0deg);
          }

          .flip-card:hover .flip-card__image {
            scale: 0;
          }
        }

        .flip-card--flipped .flip-card__content {
          transform: rotateX(0deg);
        }

        .flip-card--flipped .flip-card__image {
          scale: 0;
        }

        .flip-card--flipped {
          transform: scale(1.05);
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
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
