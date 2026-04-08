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
      <div className="grid lg:flex lg:flex-row">
        <div className="w-full lg:w-1/2 relative z-[5]">
          <header className="min-h-0 lg:min-h-[90vh] flex flex-col items-start justify-center px-6 md:px-12 lg:px-16 w-full py-10 lg:py-0">
            <div className="w-full flex flex-col items-start">
              <ScrollReveal>
                <p className="relative z-10 font-[family-name:var(--font-oswald)] text-[clamp(2rem,4vw,4.5rem)] font-medium leading-[1.1] text-[var(--foreground)] mb-6 md:mb-8 tracking-[0.02em] uppercase">
                  {tr.about.title}
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.15}>
                <div className="space-y-4 md:space-y-6 before:content-[''] before:block before:w-[40px] before:h-[1px] before:bg-[var(--accent,#fff)] before:mb-6 before:opacity-50">
                  <p className="font-[family-name:var(--font-neuton)] text-[clamp(1rem,2vw,1.35rem)] text-[var(--foreground)] opacity-85 leading-[1.6] font-normal text-justify">
                    {tr.about.p1}
                  </p>
                  <p className="font-[family-name:var(--font-neuton)] text-[clamp(1rem,2vw,1.35rem)] text-[var(--foreground)] opacity-85 leading-[1.6] font-normal text-justify">
                    {tr.about.p2}
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </header>
        </div>

        <div className="hidden lg:block w-full lg:w-1/2 relative">
          <div className="sticky top-0 h-screen w-full grid place-items-center border-l border-[var(--border)] overflow-hidden">
            <ScrollReveal>
              <GlowingCard />
            </ScrollReveal>
          </div>
        </div>
        
        <div className="block lg:hidden w-full flex justify-center pt-0 pb-4 px-8">
          <ScrollReveal className="max-w-[300px] md:max-w-[350px] mx-auto">
            <GlowingCard />
          </ScrollReveal>
        </div>
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
