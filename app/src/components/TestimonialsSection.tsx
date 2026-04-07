"use client";

import { useState } from "react";
import { useTheme } from "./ThemeController";

const testimonials = [
  {
    id: 1,
    name: "Marian Burgos",
    role: "Contadora",
    text: "Sebas me apoyó con el desarrollo de una página sencilla para mi trabajo independiente. Fue muy puntual, se comunicó bien durante todo el proceso y el resultado fue justo lo que tenía en mente. Lo recomendaría sin pensarlo.",
    image: "/mariancita.jpeg",
    color: "linear-gradient(135deg, #7eb8c9, #a8d8e8, #5a9aad)",
  },
  {
    id: 2,
    name: "John Ceballos",
    role: "Tecnólogo en Ventas",
    text: "Le pedí a Sebas que me ayudara con una página para promocionar mis servicios y quedé muy contento con el resultado. Se tomó el tiempo de entender lo que necesitaba y entregó algo que se veía profesional. Para ser estudiante, la verdad superó mis expectativas.",
    image: "/johnsin.jpeg",
    color: "linear-gradient(135deg, #c9a87e, #e8d0a8, #ad8a5a)",
  },
  {
    id: 3,
    name: "Manuela",
    role: "Estudiante de Diseño Gráfico",
    text: "Trabajamos juntos en un proyecto y fue muy buena experiencia. Sebas tiene buen ojo para los detalles visuales, algo que no es tan común en alguien de software. Siempre estuvo abierto a ajustes y el resultado final quedó muy bien.",
    image: "/manuelita.jpeg",
    color: "linear-gradient(135deg, #b07ec9, #d0a8e8, #8a5aad)",
  },
  {
    id: 4,
    name: "Alejandra",
    role: "Administradora de Ventas",
    text: "Le encargué el desarrollo de una página para un emprendimiento y cumplió muy bien. Explicó cada paso con claridad, fue responsable con los tiempos y se notó el compromiso con el trabajo. Definitivamente lo volvería a contratar.",
    image: "/alejita.jpeg",
    color: "linear-gradient(135deg, #7ec98a, #a8e8b4, #5aad66)",
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
      minHeight: 'auto',
      padding: '3rem 1rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '2rem',
      zIndex: 10
    }}>
      <div style={{ 
        maxWidth: '800px', 
        textAlign: 'center',
        padding: '0 0.5rem'
      }}>
        <h2 style={{ 
          fontFamily: 'var(--font-oswald), Oswald, sans-serif',
          fontSize: 'clamp(1.8rem, 4vw, 4.5rem)',
          fontWeight: 700,
          textTransform: 'uppercase',
          color: theme === 'dark' ? '#ffffff' : '#1b1b1b',
          marginBottom: '1rem'
        }}>
          Testimonios
        </h2>
        <p style={{
          fontFamily: 'var(--font-neuton), Neuton, sans-serif',
          fontSize: 'clamp(1rem, 2vw, 1.35rem)',
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
              style={{ background: testimonial.color }}
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
