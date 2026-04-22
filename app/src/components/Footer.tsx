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
    <footer className="relative z-10 w-full py-8 px-6 md:px-10 border-t border-[var(--border)] bg-transparent">
      <div className="w-full max-w-3xl mx-auto flex flex-col md:flex-row items-center md:items-end justify-between gap-6">
        {/* Izquierda: SEBAS + copyright */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <div className="text-4xl md:text-5xl lg:text-6xl font-bold font-oswald tracking-widest text-[var(--foreground)] select-none">
            SEBAS
          </div>
          <span className="text-xs md:text-sm font-neuton tracking-wider text-[var(--foreground)] opacity-50">
            {copyright}
          </span>
        </div>

        {/* Derecha: Made with + iconos */}
        <div className="flex items-center gap-3">
          <span className="text-xs md:text-sm font-neuton text-[var(--foreground)] opacity-50 tracking-wider">
            {lang === "es" ? "Hecho con" : "Made with"}
          </span>
          {techIcons.map((icon) => (
            <div key={icon.name} className="flex flex-col items-center gap-1">
              <img
                src={icon.path}
                alt={icon.name}
                width={28}
                height={28}
                className={`opacity-70 hover:opacity-100 transition-opacity ${
                  icon.needsInvert && theme === "dark" ? "invert" : ""
                }`}
              />
              <span className="text-[10px] font-neuton text-[var(--foreground)] opacity-50">
                {icon.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
