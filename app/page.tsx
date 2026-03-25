"use client";

import { useEffect } from "react";
import HeaderMenu from "./src/components/HeaderMenu";
// import Intro from "./src/components/Intro";
import ScrollStory from "./src/components/ScrollStory";
import TubesBackground from "./src/components/TubesBackground";
import LogoFlipTransition from "./src/components/LogoFlipTransition";
import KnowledgeSection from "./src/components/KnowledgeSection";
import ContactSection from "./src/components/ContactSection";
import Footer from "./src/components/Footer";
import HeroSection from "./src/components/HeroSection";
import WhatsAppButton from "./src/components/WhatsAppButton";

export default function Home() {
  useEffect(() => {
    // Desactivar restauración automática del scroll
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    
    // Forzar scroll al inicio inmediatamente
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    
    // También forzar después de que todo se renderice
    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <TubesBackground />
      <div className="intro-tubes-bg">
        <TubesBackground disableClick />
      </div>
      <HeaderMenu />
      {/* <Intro /> */}
      <div id="home">
        <HeroSection />
      </div>
      <div id="about">
        <ScrollStory />
      </div>
      <div id="knowledge">
        <KnowledgeSection />
      </div>
      <div id="contact">
        <ContactSection />
      </div>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
