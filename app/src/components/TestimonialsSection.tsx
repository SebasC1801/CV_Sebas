"use client";

import { useState } from "react";
import { useTheme } from "./ThemeController";

const testimonials = [
  {
    id: 1,
    name: "Andrés Mejía",
    role: "Compañero de equipo",
    text: "Trabajar con Sebastián en el proyecto fue muy buena experiencia. Se nota que le apasiona el frontend, siempre estaba pendiente de que la interfaz quedara bien hecha y era receptivo cuando había que hacer ajustes. Cumplió con su parte sin necesidad de estar encima de él.",
    image: "/senior1.jpg",
    color: "rgb(71, 166, 185)",
  },
  {
    id: 2,
    name: "Carolina Ruiz",
    role: "Docente de Desarrollo Web",
    text: "Sebastián es un estudiante comprometido con lo que hace. En los proyectos del curso se destacó por la calidad visual y funcional de sus entregas, y por buscar siempre ir un poco más allá de los requisitos mínimos. Tiene buenas bases y una actitud que lo va a llevar lejos.",
    image: "/seniora3.jpg",
    color: "rgb(211, 212, 217)",
  },
  {
    id: 3,
    name: "Jorge Patiño",
    role: "Cliente",
    text: "Le pedí a Sebastián que me ayudara con una página sencilla para mi negocio y quedé satisfecho con el resultado. Se comunicó bien durante el proceso, preguntó lo que necesitaba saber y entregó algo que realmente se veía profesional. Lo recomendaría.",
    image: "/senior2.jpg",
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
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '50%'
                  }}
                />
              </div>
            </div>
            <div className="card-content">
              <h3>{testimonial.name}</h3>
              <p className="testimonial-role" style={{
                fontSize: '12px',
                color: theme === 'dark' ? '#aaa' : '#666',
                marginBottom: '10px',
                fontStyle: 'italic'
              }}>
                {testimonial.role}
              </p>
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
