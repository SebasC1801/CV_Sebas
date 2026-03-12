"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface TypewriterTextProps {
  text: string;
  className?: string;
  delay?: number;
  speed?: number;
}

export default function TypewriterText({ 
  text, 
  className = "", 
  delay = 0,
  speed = 0.02 
}: TypewriterTextProps) {
  const [displayedText, setDisplayedText] = useState("");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  useEffect(() => {
    if (!isInView) {
      setDisplayedText("");
      return;
    }

    let currentIndex = 0;
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        if (currentIndex <= text.length) {
          setDisplayedText(text.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(interval);
        }
      }, speed * 1000);

      return () => clearInterval(interval);
    }, delay * 1000);

    return () => clearTimeout(timeout);
  }, [isInView, text, delay, speed]);

  return (
    <span ref={ref} className={className}>
      {displayedText}
      {displayedText.length < text.length && displayedText.length > 0 && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
          className="inline-block"
        >
          |
        </motion.span>
      )}
    </span>
  );
}
