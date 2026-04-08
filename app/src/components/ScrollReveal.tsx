"use client";

import { useEffect, useRef, ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export default function ScrollReveal({ children, className, delay = 0 }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.style.transitionDelay = `${delay}s`;
    let timeout: NodeJS.Timeout;

    const observer = new IntersectionObserver(
      ([entry]) => {
        clearTimeout(timeout);
        if (entry.isIntersecting) {
          el.classList.add("sr-visible");
        } else {
          // Small delay before hiding to prevent flickering
          timeout = setTimeout(() => {
            el.classList.remove("sr-visible");
          }, 100);
        }
      },
      { threshold: 0.05 }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      clearTimeout(timeout);
    };
  }, [delay]);

  return (
    <div ref={ref} className={`sr-reveal ${className || ""}`}>
      {children}
    </div>
  );
}
