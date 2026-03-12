"use client";

import { motion } from "framer-motion";
import { useTheme } from "./ThemeController";

export default function ContactSection() {
  const { theme } = useTheme();
  
  return (
    <section className="relative z-10 w-full py-40 px-6 flex flex-col items-center justify-center min-h-[70vh]">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <p className="font-neuton text-xl tracking-widest mb-6 opacity-70">
          ¿TIENES UN PROYECTO EN MENTE?
        </p>
        <h2 className="text-6xl md:text-9xl font-bold font-oswald tracking-tighter mb-12 hover:text-[var(--accent)] transition-colors cursor-default">
          HABLEMOS
        </h2>
        
        <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
          <a 
            href="mailto:john.ceballosbel@campusucc.edu.co" 
            className="px-8 py-4 border border-[var(--foreground)] rounded-full hover:bg-[var(--foreground)] hover:text-[var(--background)] transition-all duration-300 font-medium tracking-wide flex items-center gap-3"
          >
            <img src="/icons/outlook.svg" alt="Outlook" className="w-6 h-6" />
            john.ceballosbel@campusucc.edu.co
          </a>
          <div className="flex gap-6">
            <a 
              href="https://www.linkedin.com/in/sebastian-ceballos-beltran-b4104a325/" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xl opacity-70 hover:opacity-100 transition-opacity"
            >
              <img 
                src="/icons/linkedin.svg" 
                alt="LinkedIn" 
                className="w-5 h-5" 
              />
              LinkedIn
            </a>
            <a 
              href="https://www.instagram.com/sxbv.ly?igsh=ZzhibmYzaWdodXp4" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xl opacity-70 hover:opacity-100 transition-opacity"
            >
              <img 
                src="/icons/instagram.svg" 
                alt="Instagram" 
                className="w-5 h-5" 
              />
              Instagram
            </a>
            <a 
              href="https://github.com/SebasC1801" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xl opacity-70 hover:opacity-100 transition-opacity"
            >
              <img 
                src="/icons/GitHub.svg" 
                alt="GitHub" 
                className="w-5 h-5 contact-github-icon" 
              />
              GitHub
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
