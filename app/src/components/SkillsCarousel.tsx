"use client";

import { useEffect, useState } from "react";

const skillIcons = [
  { name: "HTML", path: "/icons/HTML.svg", needsInvert: false },
  { name: "Tailwind CSS", path: "/icons/tailwind.svg", needsInvert: false },
  { name: "Next.js", path: "/icons/Next.js.svg", needsInvert: true },
  { name: "Node.js", path: "/icons/Node.js.svg", needsInvert: false },
  { name: "Python", path: "/icons/Python.svg", needsInvert: false },
  { name: "Django", path: "/icons/Django.svg", needsInvert: false },
  { name: "Java", path: "/icons/Java.svg", needsInvert: false },
  { name: "GitHub", path: "/icons/GitHub.svg", needsInvert: true },
];

export default function SkillsCarousel() {
  const [mounted, setMounted] = useState(false);
  const n = skillIcons.length;

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="skills-carousel-scene">
      <div className="skills-carousel-3d" style={{ "--n": n } as React.CSSProperties}>
        {skillIcons.map((skill, i) => (
          <div
            key={skill.name}
            className="skills-carousel-card"
            style={{ "--i": i } as React.CSSProperties}
          >
            <img 
              src={skill.path} 
              alt={skill.name}
              className={skill.needsInvert ? "skill-icon-invert" : ""}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
