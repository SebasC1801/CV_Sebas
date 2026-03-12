"use client";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 w-full py-10 px-6 border-t border-[var(--border)] opacity-60">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm font-neuton tracking-wider">
        <div className="mb-4 md:mb-0">
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
