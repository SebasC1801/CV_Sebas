"use client";

import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Mousewheel } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { useLanguage } from "./LanguageController";
import { t } from "../i18n/translations";

import "swiper/css";
import "swiper/css/effect-cards";

const projectsMeta = [
  { tech: ["TypeScript", "JavaScript", "CSS"], image: "/Sonovibe.png", url: "https://reproductor-de-musica-six.vercel.app" },
  { tech: ["Java", "JavaScript", "HTML", "CSS"], image: "/AnimalCare.png", url: "https://veterinaria-animal-care.onrender.com" },
  { tech: ["Python", "Django", "Three.js"], image: "/Multivar3d.png", url: "https://multivar-3d.onrender.com" },
  { tech: ["React", "TypeScript", "Three.js", "Vite"], image: "/MentesCreativas.png", url: "https://fpc-ten.vercel.app" },
];

export default function ProjectsSlider() {
  const [mounted, setMounted] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const { lang } = useLanguage();
  const tr = t(lang);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const pTr = tr.projects.items[activeIndex];
  const pMeta = projectsMeta[activeIndex];

  return (
    <div className="pj-cards-wrapper">
      <div className="pj-cards-info">
        <h3 className="pj-cards-name">{pTr.name}</h3>
        <span className="pj-cards-subtitle">{pTr.subtitle}</span>
        <p className="pj-cards-desc">{pTr.description}</p>
        <div className="pj-cards-tags">
          {pMeta.tech.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <a
          href={pMeta.url}
          target="_blank"
          rel="noopener noreferrer"
          className="pj-cards-btn"
        >
          {lang === "es" ? "Ver Proyecto" : "View Project"}
        </a>
      </div>

      <div className="pj-cards-swiper-wrap">
        <Swiper
          effect="cards"
          grabCursor={true}
          initialSlide={0}
          speed={500}
          loop={true}
          mousewheel={{ invert: false }}
          cardsEffect={{ rotate: true, perSlideOffset: 8, perSlideRotate: 2 }}
          modules={[EffectCards, Mousewheel]}
          className="pj-cards-swiper"
          onSlideChange={(swiper: SwiperType) => {
            setActiveIndex(swiper.realIndex);
          }}
        >
          {tr.projects.items.map((project, i) => (
            <SwiperSlide key={i} className="pj-cards-slide">
              <img src={projectsMeta[i].image} alt={project.name} />
              <div className="pj-cards-overlay">
                <h2>{project.name}</h2>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
