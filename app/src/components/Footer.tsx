"use client";

import { useLanguage } from "./LanguageController";

export default function Footer() {
  const { lang } = useLanguage();

  const copyright =
    lang === "es"
      ? "© 2026 Sebas. Todos los derechos reservados."
      : "© 2026 Sebas. All rights reserved.";

  return (
    <footer className="relative z-10 w-full py-8 px-6 border-t border-[var(--border)] bg-transparent">
      <div className="flex flex-col items-center gap-1">
        <div className="text-4xl md:text-5xl lg:text-6xl font-bold font-oswald tracking-widest text-[var(--foreground)] select-none">
          SEBAS
        </div>
        <span className="text-xs md:text-sm font-neuton tracking-wider text-[var(--foreground)] opacity-50">
          {copyright}
        </span>
      </div>
    </footer>
  );
}
