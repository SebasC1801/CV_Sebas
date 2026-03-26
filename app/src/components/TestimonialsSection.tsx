"use client";

import { useState } from "react";
import { useTheme } from "./ThemeController";

const testimonials = [
  {
    id: 1,
    name: "Testimonio 1",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut euismod mauris bibendum quam bibendum luctus. In sed erat vel arcu rutrum elementum non a turpis. Integer dignissim nisl eget tellus iaculis consectetur.",
    color: "rgb(71, 166, 185)",
  },
  {
    id: 2,
    name: "Testimonio 2",
    text: "Proin dolor massa, feugiat sit amet fringilla ac, pellentesque vitae nisl. Curabitur at auctor velit, ut ullamcorper nulla erat id neque. Vestibulum vel sollicitudin lacus.",
    color: "rgb(211, 212, 217)",
  },
  {
    id: 3,
    name: "Testimonio 3",
    text: "Proin pellentesque, justo a ornare posuere, justo elit tincidunt mi, a efficitur tellus risus in elit. Aenean et neque metus. Morbi porta viverra tellus, non volutpat lectus tincidunt quis.",
    color: "rgb(255, 209, 103)",
  },
];

export default function TestimonialsSection() {
  const [currentStep, setCurrentStep] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);
  const { theme } = useTheme();

  console.log('Theme:', theme);

  const textColor = theme === 'dark' ? '#ffffff' : '#1b1b1b';

  const nextCard = () => {
    if (currentStep < testimonials.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const previousCard = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const onTouchStart = (event: React.TouchEvent) => {
    setTouchStartX(event.changedTouches[0].clientX);
  };

  const onTouchEnd = (event: React.TouchEvent) => {
    const touchEndX = event.changedTouches[0].clientX;
    const deltaX = touchStartX - touchEndX;

    if (deltaX > 50 && currentStep < testimonials.length - 1) {
      nextCard();
    } else if (deltaX < -50 && currentStep > 0) {
      previousCard();
    }
  };

  const getCardClass = (index: number) => {
    const diff = index - currentStep;
    if (diff === 0) return "principal";
    if (diff === 1) return "siguiente";
    if (diff === 2) return "siguiente2";
    if (diff === -1) return "anterior";
    if (diff === -2) return "anterior2";
    return "ocultar";
  };

  return (
    <section style={{ 
      position: 'relative',
      width: '100%',
      minHeight: '100vh',
      padding: '4rem 2rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '3rem',
      zIndex: 10
    }}>
      <div style={{ 
        maxWidth: '800px', 
        textAlign: 'center'
      }}>
        <h2 style={{ 
          fontFamily: 'var(--font-oswald), Oswald, sans-serif',
          fontSize: 'clamp(2.5rem, 4vw, 4.5rem)',
          fontWeight: 700,
          textTransform: 'uppercase',
          color: theme === 'dark' ? '#ffffff' : '#1b1b1b',
          marginBottom: '1.5rem'
        }}>
          Testimonios
        </h2>
        <p style={{
          fontFamily: 'var(--font-neuton), Neuton, sans-serif',
          fontSize: '1.35rem',
          lineHeight: 1.6,
          color: theme === 'dark' ? '#ffffff' : '#1b1b1b',
          opacity: 0.85,
          textAlign: 'justify'
        }}>
          A lo largo de mi formación he tenido la oportunidad de colaborar con distintas personas en proyectos académicos y personales. A continuación, algunas de sus opiniones sobre nuestra experiencia trabajando juntos.
        </p>
      </div>

      <div className="testimonials-container">
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className={`testimonial-card ${getCardClass(index)}`}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <div
              className="card-image"
              style={{ backgroundColor: testimonial.color }}
            >
              <div className="testimonial-avatar">
                {testimonial.name.charAt(0)}
              </div>
            </div>
            <div className="card-content">
              <h3>{testimonial.name}</h3>
              <p>{testimonial.text}</p>
              <div className="card-navigation">
                <div className="dots">
                  {testimonials.map((_, dotIndex) => (
                    <span
                      key={dotIndex}
                      className={`dot ${dotIndex === currentStep ? "active-dot" : ""}`}
                    ></span>
                  ))}
                </div>
                <div className="buttons">
                  {currentStep > 0 && (
                    <button
                      onClick={previousCard}
                      className="previous-button"
                      aria-label="Previous testimonial"
                    >
                      &#8592;
                    </button>
                  )}
                  {currentStep < testimonials.length - 1 && (
                    <button
                      onClick={nextCard}
                      className="next-button"
                      aria-label="Next testimonial"
                    >
                      &#8594;
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}

        {currentStep > 0 && (
          <div
            className="div-transparent-previous"
            onClick={previousCard}
          ></div>
        )}
        {currentStep < testimonials.length - 1 && (
          <div className="div-transparent-next" onClick={nextCard}></div>
        )}
      </div>
    </section>
  );
}
