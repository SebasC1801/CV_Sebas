"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
type IntroProps = {
  onFinish?: () => void;
};

export default function Intro({ onFinish }: IntroProps) {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHidden(true);
      document.body.classList.add("intro-done");
      onFinish?.();
    }, 2800);

    return () => {
      clearTimeout(timer);
      document.body.classList.remove("intro-done");
    };
  }, [onFinish]);

  return (
    <div className={`intro-overlay ${hidden ? "intro-overlay-hidden" : ""}`}>
      <motion.div
        className="intro-loading"
        aria-label="Intro loading"
        initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.div
          className="intro-orbit"
          animate={{ rotate: [0, 12, 0], scale: [0.95, 1, 0.95] }}
          transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <Sparkles size={40} strokeWidth={1.6} />
        </motion.div>
        <motion.p
          className="intro-loading-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Materializing shapes…
        </motion.p>
        <motion.p
          className="intro-loading-foot"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.6 }}
        >
          Designed and coded by SeBas © 2026
        </motion.p>
      </motion.div>
    </div>
  );
}
