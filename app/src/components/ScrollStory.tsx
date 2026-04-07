"use client";

import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useMemo, useRef } from "react";
import SkillsCarousel from "./SkillsCarousel";
import GlowingCard from "./GlowingCard";
import ProjectsSlider from "./ProjectsSlider";

type ScrollSection = {
  focus: string;
  description: string;
  visual:
    | "outline-circle"
    | "stone-block"
    | "minimal-grid"
    | "balance-circles"
    | "glow-orb"
    | "end-line";
};

type ScrollRange = {
  start: number;
  mid: number;
  end: number;
};

const sections: ScrollSection[] = [
  {
    focus: "Skills/Habilidades",
    description:
      "Estas son algunas de las tecnologías y herramientas que he explorado durante mi proceso de aprendizaje. No soy experto en todas, pero cada una forma parte de mi camino para seguir creciendo como desarrollador.",
    visual: "outline-circle",
  },
  {
    focus: "Proyectos",
    description:
      "Aquí puedes encontrar algunos de los proyectos que he desarrollado durante mi proceso de aprendizaje en programación. Cada uno me ha permitido poner en práctica mis conocimientos, explorar nuevas tecnologías y mejorar mis habilidades como desarrollador.",
    visual: "minimal-grid",
  },
];

function ScrollTextBlock({ item }: { item: ScrollSection }) {
  const blockRef = useRef<HTMLElement | null>(null);
  
  return (
    <section ref={blockRef} className="min-h-screen w-full flex flex-col justify-center items-start py-16 px-8 md:px-16 lg:px-24">
      <motion.p 
        className="relative z-10 font-[family-name:var(--font-oswald)] text-[clamp(2.5rem,4vw,4.5rem)] font-medium leading-[1.1] text-[var(--foreground)] mb-8 max-w-[800px] tracking-[0.02em] uppercase"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        {item.focus}
      </motion.p>
      <motion.p 
        className="relative z-10 font-[family-name:var(--font-neuton)] text-[1.35rem] text-[var(--foreground)] opacity-85 max-w-[600px] leading-[1.6] font-normal text-justify before:content-[''] before:block before:w-[40px] before:h-[1px] before:bg-[var(--accent,#fff)] before:mb-6 before:opacity-50"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 0.85, y: 0 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      >
        {item.description}
      </motion.p>
    </section>
  );
}

function VisualLayer({
  visual,
  range,
  progress,
  className,
}: {
  visual: ScrollSection["visual"];
  range: ScrollRange;
  progress: MotionValue<number>;
  className: string;
}) {
  // Para el libro (minimal-grid), ya no se usa
  if (visual === "minimal-grid") {
    return null;
  }

  const opacity = useTransform(
    progress,
    [range.start, range.mid, range.end],
    [0, 1, 0],
  );
  const scale = useTransform(
    progress,
    [range.start, range.mid, range.end],
    [0.9, 1, 1.1],
  );
  const y = useTransform(
    progress,
    [range.start, range.mid, range.end],
    [40, 0, -40],
  );
  
  return (
    <motion.div className={className} style={{ opacity, scale, y }}>
      {visual === "outline-circle" && <div className="circle-outline" />}
      {visual === "stone-block" && <div className="stone-block" />}
      {visual === "balance-circles" && (
        <div className="balance">
          <div className="b-circle b-1" />
          <div className="b-circle b-2" />
        </div>
      )}
      {visual === "glow-orb" && <div className="light-orb" />}
      {visual === "end-line" && <div className="end-line" />}
    </motion.div>
  );
}

export default function ScrollStory() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const ranges = useMemo<ScrollRange[]>(() => {
    const step = 1 / sections.length;
    return sections.map((_, index) => {
      const start = step * index;
      const end = start + step;
      const mid = start + step * 0.5;
      return { start, mid, end };
    });
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full text-[var(--foreground)] isolate z-20 bg-transparent font-inherit">
      {/* Mobile Progress Indicator */}
      <div className="mobile-progress">
        <motion.svg viewBox="0 0 100 100">
          <circle className="track-circle" cx="50" cy="50" r="40" />
          <motion.circle
            className="progress-circle"
            cx="50"
            cy="50"
            r="40"
            style={{ pathLength: scrollYProgress }}
          />
        </motion.svg>
      </div>

      {/* Header inicial con layout de dos columnas */}
      <div className="grid lg:flex lg:flex-row">
        {/* Left Column: Header Content */}
        <div className="w-full lg:w-1/2 relative z-[5]">
          <header className="min-h-0 lg:min-h-[90vh] flex flex-col items-start justify-center px-6 md:px-12 lg:px-16 w-full py-10 lg:py-0">
            <div className="w-full flex flex-col items-start">
              <motion.p 
                className="relative z-10 font-[family-name:var(--font-oswald)] text-[clamp(2rem,4vw,4.5rem)] font-medium leading-[1.1] text-[var(--foreground)] mb-6 md:mb-8 tracking-[0.02em] uppercase"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                Acerca de mi
              </motion.p>
              <motion.div 
                className="space-y-4 md:space-y-6 before:content-[''] before:block before:w-[40px] before:h-[1px] before:bg-[var(--accent,#fff)] before:mb-6 before:opacity-50"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              >
                <p className="font-[family-name:var(--font-neuton)] text-[clamp(1rem,2vw,1.35rem)] text-[var(--foreground)] opacity-85 leading-[1.6] font-normal text-justify">
                  Soy estudiante universitario con interés en el desarrollo web, especialmente en el frontend. Me gusta aprender a crear interfaces modernas, intuitivas y visualmente atractivas que mejoren la experiencia de los usuarios. Actualmente me encuentro en proceso de aprendizaje, fortaleciendo mis bases en desarrollo web y explorando nuevas tecnologías.
                </p>
                <p className="font-[family-name:var(--font-neuton)] text-[clamp(1rem,2vw,1.35rem)] text-[var(--foreground)] opacity-85 leading-[1.6] font-normal text-justify">
                  Disfruto resolver problemas, practicar y desarrollar pequeños proyectos que me ayuden a seguir creciendo y mejorando mis habilidades como programador.
                </p>
              </motion.div>
            </div>
          </header>
        </div>

        {/* Right Column: GlowingCard - hidden on mobile/tablet, sticky on desktop */}
        <div className="hidden lg:block w-full lg:w-1/2 relative">
          <div className="sticky top-0 h-screen w-full grid place-items-center border-l border-[var(--border)] overflow-hidden">
            <GlowingCard />
          </div>
        </div>
        
        {/* Mobile/Tablet: GlowingCard below text, centered */}
        <div className="block lg:hidden w-full flex justify-center pt-0 pb-4 px-8">
          <div className="max-w-[300px] md:max-w-[350px] mx-auto">
            <GlowingCard />
          </div>
        </div>
      </div>

      {/* Sección de Proyectos centrada */}
      <div className="w-full flex flex-col items-center justify-center py-10 lg:py-16 px-4 md:px-8" id="projects">
        <div style={{ maxWidth: "800px", textAlign: "center", marginBottom: "2rem" }}>
          <motion.h2
            style={{
              fontFamily: 'var(--font-oswald), Oswald, sans-serif',
              fontSize: "clamp(2rem, 4vw, 4.5rem)",
              fontWeight: 700,
              textTransform: "uppercase",
              color: "var(--foreground)",
              marginBottom: "1rem",
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            {sections[1].focus}
          </motion.h2>
          <motion.p
            style={{
              fontFamily: 'var(--font-neuton), Neuton, sans-serif',
              fontSize: "clamp(1rem, 2vw, 1.35rem)",
              lineHeight: 1.6,
              color: "var(--foreground)",
              opacity: 0.85,
              textAlign: "justify",
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 0.85, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {sections[1].description}
          </motion.p>
        </div>
        
        <div className="w-full">
          <ProjectsSlider />
        </div>
      </div>

      {/* Sección de Skills centrada */}
      <div id="skills" className="w-full flex flex-col items-center justify-center py-10 lg:py-16 px-4 md:px-8">
        <div style={{ maxWidth: "800px", textAlign: "center", marginBottom: "2rem" }}>
          <motion.h2
            style={{
              fontFamily: 'var(--font-oswald), Oswald, sans-serif',
              fontSize: "clamp(2rem, 4vw, 4.5rem)",
              fontWeight: 700,
              textTransform: "uppercase",
              color: "var(--foreground)",
              marginBottom: "1rem",
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            {sections[0].focus}
          </motion.h2>
          <motion.p
            style={{
              fontFamily: 'var(--font-neuton), Neuton, sans-serif',
              fontSize: "clamp(1rem, 2vw, 1.35rem)",
              lineHeight: 1.6,
              color: "var(--foreground)",
              opacity: 0.85,
              textAlign: "justify",
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 0.85, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {sections[0].description}
          </motion.p>
        </div>
        
        <div className="flex items-center justify-center">
          <SkillsCarousel />
        </div>
      </div>

      <style jsx>{`
        /* --- Progress Indicators --- */
        .desktop-progress {
          position: absolute;
          left: -1px; /* Attached to section edge (divider) */
          top: 0;
          width: 3px;
          height: 100%;
          background: var(--accent, #fff);
          transform-origin: top;
          z-index: 20;
        }
        @media (max-width: 900px) {
          .desktop-progress { display: none; }
        }

        .mobile-progress {
          display: none;
          position: fixed;
          bottom: 30px;
          right: 30px;
          width: 60px;
          height: 60px;
          z-index: 40;
          background: var(--glass, rgba(0,0,0,0.5));
          border-radius: 50%;
          padding: 5px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(10px);
          pointer-events: none;
        }
        @media (max-width: 900px) {
          .mobile-progress { display: block; }
        }

        .mobile-progress svg {
          width: 100%;
          height: 100%;
          transform: rotate(-90deg);
        }

        .progress-circle {
          fill: none;
          stroke: var(--accent, #fff);
          stroke-width: 8;
          stroke-linecap: round;
        }

        .track-circle {
          fill: none;
          stroke: var(--border);
          stroke-width: 8;
        }

        /* --- Visual Shapes --- */
        .shape-container {
          position: absolute;
          width: 400px;
          height: 400px;
          display: grid;
          place-items: center;
        }

        .circle-outline {
          width: 300px;
          height: 300px;
          border: 2px solid var(--foreground);
          border-radius: 50%;
          box-shadow: 0 0 60px var(--overlay-glow);
        }

        .stone-block {
          width: 250px;
          height: 350px;
          background: linear-gradient(135deg, var(--muted), var(--surface));
          border-radius: 4px;
          position: relative;
          overflow: hidden;
        }

        .stone-block::after {
          content: "";
          position: absolute;
          inset: 0;
          background: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.4'/%3E%3C/svg%3E");
          mix-blend-mode: overlay;
        }

        .grid-lines {
          width: 300px;
          height: 300px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: 1fr 1fr;
          gap: 20px;
        }

        .grid-box {
          border: 1px solid var(--border);
        }

        .grid-box:nth-child(1) { border-top: 0; border-left: 0; }
        .grid-box:nth-child(4) { border-bottom: 0; border-right: 0; }

        .balance {
          width: 300px;
          height: 300px;
          position: relative;
        }

        .b-circle {
          position: absolute;
          width: 150px;
          height: 150px;
          border-radius: 50%;
          mix-blend-mode: exclusion;
        }

        .b-1 { background: var(--accent); top: 20%; left: 20%; }
        .b-2 { background: var(--muted); bottom: 20%; right: 20%; }

        .light-orb {
          width: 300px;
          height: 300px;
          border-radius: 50%;
          background: radial-gradient(circle at 30% 30%, var(--accent), transparent 60%);
          filter: blur(40px);
          opacity: 0.6;
        }

        .end-line {
          width: 2px;
          height: 300px;
          background: var(--foreground);
          position: relative;
        }

        .end-line::before {
          content: "";
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 40px;
          height: 1px;
          background: var(--foreground);
        }
      `}</style>
    </section>
  );
}
