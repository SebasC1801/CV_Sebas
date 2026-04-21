"use client";

import { motion } from "framer-motion";
import { useLanguage } from "./LanguageController";
import { t } from "../i18n/translations";

export default function HeroSection() {
  const { lang } = useLanguage();
  const tr = t(lang);

  return (
    <main className="intro-main relative z-10 flex min-h-[70vh] md:min-h-screen items-center justify-center px-4 md:px-6 py-12 md:py-20 overflow-hidden">
      <section className="hero-wrap w-full max-w-6xl px-2 md:px-6 text-center">
        <motion.p
          className="hero-text hero-outline"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.span
            className="hero-line hero-hollow"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {tr.hero.greeting} <span className="hero-solid">{tr.hero.name}</span>
          </motion.span>
          <motion.span
            className="hero-line hero-hollow"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            {tr.hero.callMe}
          </motion.span>
          <motion.span
            className="hero-line hero-solid"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            {tr.hero.nickname}
          </motion.span>
          <motion.span
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <a className="hero-button hero-button-primary" href="/Hoja de vida Sebas.pdf" target="_blank" rel="noopener noreferrer">
              {tr.hero.viewCv}
            </a>
            <a className="hero-button hero-button-ghost" href="/Hoja de vida Sebas.pdf" download="CV_Sebastian_Ceballos.pdf">
              {tr.hero.downloadCv}
            </a>
            <a className="hero-button hero-button-ghost" href="#projects">
              {tr.hero.viewProjects}
            </a>
          </motion.span>
        </motion.p>
      </section>
    </main>
  );
}
