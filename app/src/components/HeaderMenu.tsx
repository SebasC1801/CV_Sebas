"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Grip, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useTheme } from "./ThemeController";

const menuItems = [
  { index: "01", label: "Inicio", href: "#home" },
  { index: "02", label: "Acerca de mí", href: "#about" },
  { index: "03", label: "Skills", href: "#skills" },
  { index: "04", label: "Proyectos", href: "#projects" },
  { index: "05", label: "Contacto", href: "#contact" },
];

export default function HeaderMenu() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <header className="header-floating">
        <span className="header-lang">SC</span>
        <button
          className="header-icon"
          type="button"
          aria-label={
            theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
          }
          onClick={toggleTheme}
          suppressHydrationWarning
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={theme}
              initial={{ opacity: 0, rotate: -12, scale: 0.9 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 12, scale: 0.9 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              suppressHydrationWarning
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </motion.span>
          </AnimatePresence>
        </button>
        <button
          className="header-icon"
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((prev) => !prev)}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={open ? "close" : "open"}
              initial={{ opacity: 0, rotate: -12, scale: 0.9 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 12, scale: 0.9 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              {open ? <X size={18} /> : <Grip size={18} />}
            </motion.span>
          </AnimatePresence>
        </button>
      </header>
      <AnimatePresence>
        {open && (
          <motion.nav
            className="menu-floating"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 24 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <button
              className="menu-close-btn"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
            <ul className="menu-list">
              {menuItems.map((item) => (
                <motion.li
                  key={item.index}
                  className="menu-item"
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                >
                  <span className="menu-index">{item.index}</span>
                  <a 
                    className="menu-link" 
                    href={item.href}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
