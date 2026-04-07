"use client";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 w-full py-6 px-4 md:px-6 border-t border-[var(--border)] bg-transparent">
      <div className="w-full flex items-center justify-center py-2">
        <div className="text-4xl md:text-6xl lg:text-8xl font-bold font-oswald tracking-widest text-[var(--foreground)] select-none">
          SEBAS
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto flex flex-col items-center text-xs md:text-sm font-neuton tracking-wider text-[var(--foreground)] opacity-60 mt-2 gap-1">
        <div className="text-center">
          &copy; {year} SEBAS. ALL RIGHTS RESERVED.
        </div>
        <div className="flex gap-3 md:gap-6 flex-wrap justify-center">
          <span>NEXT.JS</span>
          <span>TAILWIND CSS</span>
          <span>GSAP</span>
        </div>
      </div>
    </footer>
  );
}
