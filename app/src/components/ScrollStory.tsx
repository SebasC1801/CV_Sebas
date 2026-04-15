"use client";

import SkillsCarousel from "./SkillsCarousel";
import GlowingCard from "./GlowingCard";
import ProjectsSlider from "./ProjectsSlider";
import ScrollReveal from "./ScrollReveal";
import { useLanguage } from "./LanguageController";
import { t } from "../i18n/translations";

export default function ScrollStory() {
  const { lang } = useLanguage();
  const tr = t(lang);

  return (
    <section className="relative w-full text-[var(--foreground)] isolate z-20 bg-transparent font-inherit">

      {/* About */}
      <div className="w-full flex flex-col items-center justify-center py-10 lg:py-16 px-4 md:px-8 overflow-hidden">
        <ScrollReveal className="w-full flex justify-center">
          <div style={{ maxWidth: "800px", width: "100%", textAlign: "center", marginBottom: "2rem" }}>
            <h2 style={{
              fontFamily: 'var(--font-oswald), Oswald, sans-serif',
              fontSize: "clamp(2rem, 4vw, 4.5rem)",
              fontWeight: 700,
              textTransform: "uppercase",
              color: "var(--foreground)",
              marginBottom: "1rem",
            }}>
              {tr.about.title}
            </h2>
            <p style={{
              fontFamily: 'var(--font-neuton), Neuton, sans-serif',
              fontSize: "clamp(1rem, 2vw, 1.35rem)",
              lineHeight: 1.6,
              color: "var(--foreground)",
              opacity: 0.85,
              textAlign: "justify",
            }}>
              {tr.about.p1}
            </p>
            <p style={{
              fontFamily: 'var(--font-neuton), Neuton, sans-serif',
              fontSize: "clamp(1rem, 2vw, 1.35rem)",
              lineHeight: 1.6,
              color: "var(--foreground)",
              opacity: 0.85,
              textAlign: "justify",
              marginTop: "1rem",
            }}>
              {tr.about.p2}
            </p>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.15} className="w-full flex justify-center">
          <div className="w-full flex justify-center px-4">
            <div className="max-w-[300px] md:max-w-[350px]">
              <GlowingCard />
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Projects */}
      <div className="w-full flex flex-col items-center justify-center py-10 lg:py-16 px-4 md:px-8" id="projects">
        <ScrollReveal>
          <div style={{ maxWidth: "800px", textAlign: "center", marginBottom: "2rem" }}>
            <h2 style={{
              fontFamily: 'var(--font-oswald), Oswald, sans-serif',
              fontSize: "clamp(2rem, 4vw, 4.5rem)",
              fontWeight: 700,
              textTransform: "uppercase",
              color: "var(--foreground)",
              marginBottom: "1rem",
            }}>
              {tr.projects.title}
            </h2>
            <p style={{
              fontFamily: 'var(--font-neuton), Neuton, sans-serif',
              fontSize: "clamp(1rem, 2vw, 1.35rem)",
              lineHeight: 1.6,
              color: "var(--foreground)",
              opacity: 0.85,
              textAlign: "justify",
            }}>
              {tr.projects.description}
            </p>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <div className="w-full">
            <ProjectsSlider />
          </div>
        </ScrollReveal>
      </div>

      {/* Skills */}
      <div id="skills" className="w-full flex flex-col items-center justify-center py-10 lg:py-16 px-4 md:px-8">
        <ScrollReveal>
          <div style={{ maxWidth: "800px", textAlign: "center", marginBottom: "2rem" }}>
            <h2 style={{
              fontFamily: 'var(--font-oswald), Oswald, sans-serif',
              fontSize: "clamp(2rem, 4vw, 4.5rem)",
              fontWeight: 700,
              textTransform: "uppercase",
              color: "var(--foreground)",
              marginBottom: "1rem",
            }}>
              {tr.skills.title}
            </h2>
            <p style={{
              fontFamily: 'var(--font-neuton), Neuton, sans-serif',
              fontSize: "clamp(1rem, 2vw, 1.35rem)",
              lineHeight: 1.6,
              color: "var(--foreground)",
              opacity: 0.85,
              textAlign: "justify",
            }}>
              {tr.skills.description}
            </p>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <div className="flex items-center justify-center">
            <SkillsCarousel />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
