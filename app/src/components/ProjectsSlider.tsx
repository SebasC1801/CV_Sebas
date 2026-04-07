"use client";

import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Mousewheel } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/effect-cards";

const projects = [
  {
    name: "Sonovibe",
    subtitle: "Reproductor de Música",
    description: "Aplicación web de reproducción de música desarrollada con TypeScript, CSS y JavaScript. Diseñada con una interfaz fluida y atractiva, priorizando la experiencia del usuario.",
    tech: ["TypeScript", "JavaScript", "CSS"],
    image: "/Sonovibe.png",
    url: "https://reproductor-de-musica-six.vercel.app",
  },
  {
    name: "Animal Care",
    subtitle: "Clínica Veterinaria",
    description: "Aplicación fullstack para clínicas veterinarias construida con Java y JavaScript/HTML/CSS. Gestiona módulos de pacientes animales, doctores, citas médicas y más.",
    tech: ["Java", "JavaScript", "HTML", "CSS"],
    image: "/AnimalCare.png",
    url: "https://veterinaria-animal-care.onrender.com",
  },
  {
    name: "Multivar 3D",
    subtitle: "Calculadora Graficadora",
    description: "Calculadora graficadora multivariable fullstack en Python/Django y Three.js, con procesamiento simbólico vía WolframAlpha. Visualización 3D interactiva de superficies.",
    tech: ["Python", "Django", "Three.js"],
    image: "/Multivar3d.png",
    url: "https://multivar-3d.onrender.com",
  },
  {
    name: "Mentes Creativas",
    subtitle: "Proyecto Grupal 3D",
    description: "Proyecto grupal en React + Vite con componentes 3D usando Three.js y React Three Fiber. Pruebas unitarias, CI/CD con GitHub Actions y despliegue en Vercel.",
    tech: ["React", "TypeScript", "Three.js", "Vite"],
    image: "/MentesCreativas.png",
    url: "https://fpc-ten.vercel.app",
  },
];

export default function ProjectsSlider() {
  const [mounted, setMounted] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const p = projects[activeIndex];

  return (
    <div className="pj-cards-wrapper">
      <div className="pj-cards-info">
        <h3 className="pj-cards-name">{p.name}</h3>
        <span className="pj-cards-subtitle">{p.subtitle}</span>
        <p className="pj-cards-desc">{p.description}</p>
        <div className="pj-cards-tags">
          {p.tech.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
        <a
          href={p.url}
          target="_blank"
          rel="noopener noreferrer"
          className="pj-cards-btn"
        >
          Ver Proyecto
        </a>
      </div>

      <div className="pj-cards-swiper-wrap">
        <Swiper
          effect="cards"
          grabCursor={true}
          initialSlide={0}
          speed={500}
          loop={true}
          mousewheel={{
            invert: false,
          }}
          cardsEffect={{
            rotate: true,
            perSlideOffset: 8,
            perSlideRotate: 2,
          }}
          modules={[EffectCards, Mousewheel]}
          className="pj-cards-swiper"
          onSlideChange={(swiper: SwiperType) => {
            setActiveIndex(swiper.realIndex);
          }}
        >
          {projects.map((project, i) => (
            <SwiperSlide key={i} className="pj-cards-slide">
              <img src={project.image} alt={project.name} />
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
