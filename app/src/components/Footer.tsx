"use client";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full py-4 px-6 border-t border-[var(--border)] bg-[var(--background)]">
      <div className="w-full flex items-center justify-center py-2">
        <div className="text-6xl md:text-8xl font-bold font-oswald tracking-widest text-[var(--foreground)] select-none">
          SEBAS
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm font-neuton tracking-wider text-[var(--foreground)] opacity-60 -mt-8">
        <div className="mb-2 md:mb-0 md:ml-20">
          &copy; {year} SEBAS. ALL RIGHTS RESERVED.
        </div>
        <div className="flex gap-6">
          <span>BUILT WITH NEXT.JS</span>
          <span>TAILWIND CSS</span>
          <span>GSAP</span>
        </div>
      </div>
    </footer>
  );
}
