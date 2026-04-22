"use client";

import { useLanguage } from "./LanguageController";
import { useTheme } from "./ThemeController";

const techIcons = [
  { name: "Next.js", path: "/icons/Next.js.svg", needsInvert: true },
  { name: "Tailwind CSS", path: "/icons/tailwind.svg", needsInvert: false },
];

export default function Footer() {
  const { lang } = useLanguage();
  const { theme } = useTheme();

  const copyright =
    lang === "es"
      ? "© 2026 Sebas. Todos los derechos reservados."
      : "© 2026 Sebas. All rights reserved.";

  return (
    <footer className="relative z-10 w-full py-8 px-4 md:px-6 border-t border-[var(--border)] bg-transparent">
      <div className="w-full flex items-center justify-center py-2 mb-6">
        <div className="text-4xl md:text-6xl lg:text-8xl font-bold font-oswald tracking-widest text-[var(--foreground)] select-none">
          SEBAS
        </div>
      </div>

      <div className="w-full flex flex-wrap items-center justify-center gap-4 md:gap-6 mb-6">
        <span className="text-xs md:text-sm font-neuton text-[var(--foreground)] opacity-50 tracking-wider">
          {lang === "es" ? "Hecho con" : "Made with"}
        </span>
        {techIcons.map((icon) => (
          <div key={icon.name} className="flex flex-col items-center gap-1">
            <img
              src={icon.path}
              alt={icon.name}
              width={32}
              height={32}
              className={`opacity-70 hover:opacity-100 transition-opacity ${
                icon.needsInvert && theme === "dark" ? "invert" : ""
              }`}
            />
            <span className="text-[10px] md:text-xs font-neuton text-[var(--foreground)] opacity-50">
              {icon.name}
            </span>
          </div>
        ))}
      </div>

      <div className="w-full text-center text-xs md:text-sm font-neuton tracking-wider text-[var(--foreground)] opacity-50">
        {copyright}
      </div>
    </footer>
  );
}
