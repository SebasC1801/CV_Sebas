"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

type Language = "es" | "en";

type LanguageContextValue = {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

const getInitialLang = (): Language => {
  if (typeof window === "undefined") return "es";
  const stored = window.localStorage.getItem("lang");
  if (stored === "es" || stored === "en") return stored;
  return "es";
};

export function LanguageController({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>("es");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setLang(getInitialLang());
  }, []);

  useEffect(() => {
    if (!mounted) return;
    window.localStorage.setItem("lang", lang);
  }, [lang, mounted]);

  const setLangWithTransition = (newLang: Language) => {
    if (newLang === lang) return;
    const html = document.documentElement;
    html.classList.add("lang-transition", "lang-fade");
    setTimeout(() => {
      setLang(newLang);
      html.classList.remove("lang-fade");
      setTimeout(() => {
        html.classList.remove("lang-transition");
      }, 350);
    }, 300);
  };

  const toggleLang = () => {
    setLangWithTransition(lang === "es" ? "en" : "es");
  };

  const value = useMemo(() => ({ lang, setLang: setLangWithTransition, toggleLang }), [lang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    return {
      lang: "es" as Language,
      setLang: () => undefined,
      toggleLang: () => undefined,
    };
  }
  return context;
}
