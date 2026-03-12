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
  return (
    <div className="relative min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <TubesBackground />
      <div className="intro-tubes-bg">
        <TubesBackground disableClick />
      </div>
      <HeaderMenu />
      {/* <Intro /> */}
      <HeroSection />
      <ScrollStory />
      <LogoFlipTransition />
      <KnowledgeSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
