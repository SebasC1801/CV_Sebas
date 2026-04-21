"use client";

import { useEffect, useState } from "react";
import HeaderMenu from "./src/components/HeaderMenu";
import LoadingScreen from "./src/components/LoadingScreen";
import ScrollStory from "./src/components/ScrollStory";
import TubesBackground from "./src/components/TubesBackground";
import ExperienceSection from "./src/components/ExperienceSection";
import TestimonialsSection from "./src/components/TestimonialsSection";
import ContactSection from "./src/components/ContactSection";
import Footer from "./src/components/Footer";
import HeroSection from "./src/components/HeroSection";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Disable automatic scroll restoration
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    
    // Force scroll to top immediately
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    
    // Wait for page to be fully loaded
    const handleLoad = () => {
      setTimeout(() => {
        setIsLoaded(true);
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
      }, 600);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  return (
    <>
      <LoadingScreen />
      <div className={`relative min-h-screen bg-[var(--background)] text-[var(--foreground)] ${!isLoaded ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}>
        <TubesBackground />
        <HeaderMenu />
        <div id="home">
          <HeroSection />
        </div>
        <div id="about">
          <ScrollStory />
        </div>
        <div id="experience">
          <ExperienceSection />
        </div>
        <div id="testimonials">
          <TestimonialsSection />
        </div>
        <div id="contact">
          <ContactSection />
        </div>
        <Footer />
      </div>
    </>
  );
}
