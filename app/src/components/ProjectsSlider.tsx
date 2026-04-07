"use client";

import { useEffect, useRef, useState, useCallback } from "react";

const projects = [
  {
    name: "Sonovibe",
    description: "Aplicación web de reproducción de música desarrollada con TypeScript, CSS y JavaScript. Diseñada con una interfaz fluida y atractiva, priorizando la experiencia del usuario.",
    tech: ["TypeScript", "JavaScript", "CSS"],
    image: "/Sonovibe.png",
    url: "https://reproductor-de-musica-six.vercel.app",
  },
  {
    name: "Animal Care",
    description: "Aplicación fullstack para clínicas veterinarias construida con Java y JavaScript/HTML/CSS. Gestiona módulos de pacientes animales, doctores, citas médicas y más.",
    tech: ["Java", "JavaScript", "HTML", "CSS"],
    image: "/AnimalCare.png",
    url: "https://veterinaria-animal-care.onrender.com",
  },
  {
    name: "Multivar 3D",
    description: "Calculadora graficadora multivariable fullstack en Python/Django y Three.js, con procesamiento simbólico vía WolframAlpha. Visualización 3D interactiva.",
    tech: ["Python", "Django", "Three.js"],
    image: "/Multivar3d.png",
    url: "https://multivar-3d.onrender.com",
  },
  {
    name: "Mentes Creativas",
    description: "Proyecto grupal en React + Vite con componentes 3D usando Three.js y React Three Fiber. Pruebas unitarias, CI/CD con GitHub Actions y despliegue en Vercel.",
    tech: ["React", "TypeScript", "Three.js", "Vite"],
    image: "/MentesCreativas.png",
    url: "https://fpc-ten.vercel.app",
  },
];

export default function ProjectsSlider() {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const slide = useCallback((direction: number) => {
    setCurrent((prev) => {
      let next = prev + direction;
      if (next < 0) next = projects.length - 1;
      if (next >= projects.length) next = 0;
      return next;
    });
  }, []);

  const startAutoplay = useCallback(() => {
    intervalRef.current = setInterval(() => slide(1), 5000);
  }, [slide]);

  const stopAutoplay = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  }, []);

  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
  }, [startAutoplay, stopAutoplay]);

  const p = projects[current];

  return (
    <div className="pj-wrapper">
      <div className="pj-outer">
        {/* Controls outside */}
        <button className="pj-btn pj-btn--prev" onClick={() => slide(-1)} aria-label="Previous">
          &#8249;
        </button>

        <div
          className="pj-carousel"
          onMouseEnter={stopAutoplay}
          onMouseLeave={startAutoplay}
          onTouchStart={stopAutoplay}
          onTouchEnd={startAutoplay}
        >
          {/* Image side */}
          <div className="pj-image">
            {projects.map((project, i) => (
              <img
                key={i}
                src={project.image}
                alt={project.name}
                className={`pj-img ${i === current ? "pj-img--active" : ""}`}
              />
            ))}
          </div>

          {/* Text side */}
          <div className="pj-content">
            <h3 className="pj-name">{p.name}</h3>
            <p className="pj-desc">{p.description}</p>
            <div className="pj-tags">
              {p.tech.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
            <a
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="pj-link"
            >
              Ver Proyecto →
            </a>
          </div>
        </div>

        <button className="pj-btn pj-btn--next" onClick={() => slide(1)} aria-label="Next">
          &#8250;
        </button>
      </div>

      <div className="pj-dots">
        {projects.map((_, i) => (
          <div
            key={i}
            className={`pj-dot ${i === current ? "pj-dot--active" : ""}`}
            onClick={() => setCurrent(i)}
          />
        ))}
      </div>
    </div>
  );
}
