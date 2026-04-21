"use client";

import { useState } from "react";
import { useTheme } from "./ThemeController";
import { useLanguage } from "./LanguageController";
import { t } from "../i18n/translations";
import ScrollReveal from "./ScrollReveal";

const testimonialsMeta = [
  { id: 1, name: "Marian Burgos", image: "/mariancita.jpeg", color: "linear-gradient(135deg, #7eb8c9, #a8d8e8, #5a9aad)" },
  { id: 2, name: "John Ceballos", image: "/johnsin.jpeg", color: "linear-gradient(135deg, #c9a87e, #e8d0a8, #ad8a5a)" },
  { id: 3, name: "Manuela", image: "/manuelita.jpeg", color: "linear-gradient(135deg, #b07ec9, #d0a8e8, #8a5aad)" },
  { id: 4, name: "Alejandra", image: "/alejita.jpeg", color: "linear-gradient(135deg, #7ec98a, #a8e8b4, #5aad66)" },
];

export default function TestimonialsSection() {
  const [currentStep, setCurrentStep] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);
  const { theme } = useTheme();
  const { lang } = useLanguage();
  const tr = t(lang);

  const nextCard = () => {
    setCurrentStep((prev) => (prev + 1) % testimonialsMeta.length);
  };
  const previousCard = () => {
    setCurrentStep((prev) => (prev - 1 + testimonialsMeta.length) % testimonialsMeta.length);
  };
  const onTouchStart = (event: React.TouchEvent) => {
    setTouchStartX(event.changedTouches[0].clientX);
  };
  const onTouchEnd = (event: React.TouchEvent) => {
    const deltaX = touchStartX - event.changedTouches[0].clientX;
    if (deltaX > 50) nextCard();
    else if (deltaX < -50) previousCard();
  };
  const getCardClass = (index: number) => {
    const total = testimonialsMeta.length;
    let diff = index - currentStep;
    // Normalize for circular navigation
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;
    if (diff === 0) return "principal";
    if (diff === 1) return "siguiente";
    if (diff === 2) return "siguiente2";
    if (diff === -1) return "anterior";
    if (diff === -2) return "anterior2";
    return "ocultar";
  };

  return (
    <section style={{
      position: 'relative', width: '100%', minHeight: 'auto',
      padding: '3rem 1rem', display: 'flex', flexDirection: 'column',
      alignItems: 'center', gap: '2rem', zIndex: 10
    }}>
      <ScrollReveal>
        <div style={{ maxWidth: '800px', textAlign: 'center', padding: '0 0.5rem' }}>
          <h2 style={{
            fontFamily: 'var(--font-oswald), Oswald, sans-serif',
            fontSize: 'clamp(1.8rem, 4vw, 4.5rem)',
            fontWeight: 700, textTransform: 'uppercase',
            color: theme === 'dark' ? '#ffffff' : '#1b1b1b',
            marginBottom: '1rem'
          }}>
            {tr.testimonials.title}
          </h2>
          <p style={{
            fontFamily: 'var(--font-neuton), Neuton, sans-serif',
            fontSize: 'clamp(1rem, 2vw, 1.35rem)',
            lineHeight: 1.6, color: theme === 'dark' ? '#ffffff' : '#1b1b1b',
            opacity: 0.85, textAlign: 'justify'
          }}>
            {tr.testimonials.description}
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.1} className="testimonials-reveal">
        <div className="testimonials-container">
        {testimonialsMeta.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className={`testimonial-card ${getCardClass(index)}`}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <div className="card-image" style={{ background: testimonial.color }}>
              <div className="testimonial-avatar">
                <img src={testimonial.image} alt={testimonial.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} />
              </div>
            </div>
            <div className="card-content">
              <h3>{testimonial.name}</h3>
              <p className="testimonial-role" style={{
                fontSize: '12px', color: theme === 'dark' ? '#aaa' : '#666',
                marginBottom: '10px', fontStyle: 'italic'
              }}>
                {tr.testimonials.items[index].role}
              </p>
              <p>{tr.testimonials.items[index].text}</p>
              <div className="card-navigation">
                <div className="dots">
                  {testimonialsMeta.map((_, dotIndex) => (
                    <span key={dotIndex} className={`dot ${dotIndex === currentStep ? "active-dot" : ""}`}></span>
                  ))}
                </div>
                <div className="buttons">
                    <button onClick={previousCard} className="previous-button" aria-label="Previous testimonial">&#8592;</button>
                    <button onClick={nextCard} className="next-button" aria-label="Next testimonial">&#8594;</button>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="div-transparent-previous" onClick={previousCard}></div>
        <div className="div-transparent-next" onClick={nextCard}></div>
      </div>
      </ScrollReveal>
    </section>
  );
}
