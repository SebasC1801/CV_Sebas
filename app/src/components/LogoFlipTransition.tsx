"use client";

  // useLayoutEffect is preferred for GSAP to ensure DOM is ready
  import { useLayoutEffect, useRef } from "react";
  import gsap from "gsap";
  import { Flip, ScrollTrigger } from "gsap/all";
  import { useTheme } from "./ThemeController";

  // Register GSAP plugins
  if (typeof window !== "undefined") {
    gsap.registerPlugin(Flip, ScrollTrigger);
  }

  export default function LogoFlipTransition() {
    const { theme } = useTheme();
    const containerRef = useRef<HTMLDivElement>(null);
    const heroLogoRef = useRef<HTMLDivElement>(null);
    const fixedLogoRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
      const container = containerRef.current;
      const heroLogo = heroLogoRef.current;
      const fixedLogo = fixedLogoRef.current;
      const ctx = gsap.context(() => {
        if (!container || !heroLogo || !fixedLogo) return;

        // Hide placeholder always
        gsap.set(heroLogo, { autoAlpha: 0 });
        
        // Initial state: Make fixedLogo visible
        gsap.set(fixedLogo, { autoAlpha: 1 });

        // Fit the fixed logo to the hero logo's position immediately
        const flip = Flip.fit(fixedLogo, heroLogo, {
          scale: true,
          duration: 0.8,
          ease: "power2.inOut",
        }) as gsap.core.Tween;

        if (!flip) return;

        // Set the flip tween to the end (fitted state) and pause
        flip.progress(1).pause();

        ScrollTrigger.create({
          trigger: container,
          start: "center center",
          end: "bottom top",
          // markers: true,
          onEnter: () => {
            // Animate to fixed position when scrolling down
            flip.reverse();
          },
          onLeave: () => {}, // Do nothing
          onEnterBack: () => {}, // Do nothing
          onLeaveBack: () => {
            flip.play(); // Animate back to hero position when scrolling up
          },
        });
      }, containerRef); // Scope to container

      return () => ctx.revert(); // Cleanup
    }, []);

    return (
      <div 
        ref={containerRef} 
        className="relative z-10 w-full min-h-[50vh] flex flex-col items-center justify-center py-20 overflow-hidden"
      >
        {/* Placeholder Container (In Flow) - Visible to show logo */}
        <div className="hero-logo-container p-10 flex items-center justify-center w-[80vw] max-w-md aspect-video relative z-10">
          {/* The target for the flip (visible) */}
          <div 
            ref={heroLogoRef} 
            className="text-6xl md:text-8xl font-bold font-oswald tracking-widest text-[var(--foreground)] select-none"
          >
            SEBAS
          </div>
        </div>

        {/* The Actual Moving Element (Fixed) */}
        <div 
          className="fixed-container fixed bottom-4 left-1/2 -translate-x-1/2 z-50 pointer-events-none"
        >
          <div 
            ref={fixedLogoRef} 
            className="text-6xl md:text-8xl font-bold font-oswald tracking-widest text-[var(--foreground)] opacity-0 invisible"
          >
            SEBAS
          </div>
        </div>
      </div>
    );
  }
