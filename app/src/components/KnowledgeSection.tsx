"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLanguage } from "./LanguageController";
import { t } from "../i18n/translations";

const skills = [
  { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "GSAP", "Framer Motion"] },
  { category: "Design", items: ["Figma", "Adobe XD", "UI/UX", "Prototyping", "Wireframing"] },
  { category: "Tools", items: ["Git", "VS Code", "Webpack", "Vite", "Jest"] },
];

export default function KnowledgeSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { lang } = useLanguage();
  const tr = t(lang);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section ref={containerRef} className="relative z-10 w-full py-32 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-8xl font-bold font-oswald tracking-widest text-center mb-24 uppercase"
        >
          {tr.knowledge.title}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="flex flex-col items-center"
            >
              <h3 className="text-2xl font-neuton tracking-widest uppercase border-b border-[var(--border)] pb-4 mb-8 w-full text-center">
                {skillGroup.category}
              </h3>
              <ul className="space-y-4 text-center">
                {skillGroup.items.map((item) => (
                  <li key={item} className="text-xl font-light tracking-wide opacity-80 hover:opacity-100 transition-opacity">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Decorative background element */}
      <motion.div 
        style={{ y }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] -z-10 opacity-5 pointer-events-none border-[1px] border-[var(--foreground)] rounded-full"
      />
    </section>
  );
}
