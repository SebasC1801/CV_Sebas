"use client";

import { useLanguage } from "./LanguageController";
import { t } from "../i18n/translations";
import ScrollReveal from "./ScrollReveal";

export default function ContactSection() {
  const { lang } = useLanguage();
  const tr = t(lang);
  
  return (
    <section className="relative z-10 w-full py-12 md:py-40 px-4 md:px-6 flex flex-col items-center justify-center min-h-[50vh] md:min-h-[70vh]">
      <ScrollReveal className="text-center w-full max-w-4xl">
        <p className="font-neuton text-base md:text-xl tracking-widest mb-4 md:mb-6 opacity-70">
          {tr.contact.subtitle}
        </p>
        <h2 className="text-4xl md:text-9xl font-bold font-oswald tracking-tighter mb-8 md:mb-12 hover:text-[var(--accent)] transition-colors cursor-default">
          {tr.contact.title}
        </h2>
        
        <div className="flex flex-col gap-6 md:gap-8 items-center justify-center">
          <a 
            href="mailto:john.ceballosbel@campusucc.edu.co" 
            className="px-6 md:px-8 py-3 md:py-4 border border-[var(--foreground)] rounded-full hover:bg-[var(--foreground)] hover:text-[var(--background)] transition-all duration-300 font-medium tracking-wide flex items-center gap-3 text-sm md:text-base break-all md:break-normal"
          >
            <img src="/icons/outlook.svg" alt="Outlook" className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0" />
            john.ceballosbel@campusucc.edu.co
          </a>
          <div className="flex gap-4 md:gap-6 flex-wrap justify-center">
            <a href="https://www.linkedin.com/in/sebastian-ceballos-beltran-b4104a325/" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 text-base md:text-xl opacity-70 hover:opacity-100 transition-opacity">
              <img src="/icons/linkedin.svg" alt="LinkedIn" className="w-5 h-5" /> LinkedIn
            </a>
            <a href="https://wa.me/qr/B2WGIMIDLJQ3J1" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 text-base md:text-xl opacity-70 hover:opacity-100 transition-opacity">
              <img src="/icons/Whatsapp.svg" alt="WhatsApp" className="w-5 h-5" /> WhatsApp
            </a>
            <a href="https://github.com/SebasC1801" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 text-base md:text-xl opacity-70 hover:opacity-100 transition-opacity">
              <img src="/icons/GitHub.svg" alt="GitHub" className="w-5 h-5 contact-github-icon" /> GitHub
            </a>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
