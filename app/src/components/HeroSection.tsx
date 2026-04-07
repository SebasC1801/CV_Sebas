"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <main className="intro-main relative z-10 flex min-h-[70vh] md:min-h-screen items-center justify-center px-4 md:px-6 py-12 md:py-20">
      <section className="hero-wrap w-full max-w-6xl px-6 text-center">
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
            HOLA, SOY <span className="hero-solid">SEBASTIAN CEBALLOS</span>
          </motion.span>
          <motion.span 
            className="hero-line hero-hollow"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            PERO PUEDES LLAMARME
          </motion.span>
          <motion.span 
            className="hero-line hero-solid"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            SEBAS
          </motion.span>
          <motion.span 
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <a className="hero-button hero-button-primary" href="/cv.pdf">
              ver cv
            </a>
            <a className="hero-button hero-button-ghost" href="#projects">
              ver proyectos
            </a>
          </motion.span>
        </motion.p>
      </section>
    </main>
  );
}
