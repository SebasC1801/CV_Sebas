"use client";

import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import { useTheme } from "./ThemeController";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

const experiences = [
  {
    id: 1,
    date: { day: "2021", month: "Presente" },
    title: "Ingeniería de Software",
    description: "Estudiante de Ingeniería de Software en la Universidad. Enfocado en desarrollo web, especialmente frontend, aprendiendo tecnologías modernas y mejores prácticas de programación.",
    image: "/avatar_sebas.jpeg",
  },
  {
    id: 2,
    date: { day: "2023", month: "2024" },
    title: "Proyecto Freelance",
    description: "Desarrollo de sitio web para cliente local. Implementación de diseño responsivo y funcionalidades personalizadas usando React y Next.js.",
    image: "/avatar_sebas.jpeg",
  },
  {
    id: 3,
    date: { day: "2024", month: "" },
    title: "Proyectos Académicos",
    description: "Desarrollo de múltiples proyectos universitarios aplicando conocimientos de frontend, backend y bases de datos. Trabajo en equipo y metodologías ágiles.",
    image: "/avatar_sebas.jpeg",
  },
];

export default function ExperienceSection() {
  const { theme } = useTheme();
  const itemBgRef = useRef<HTMLDivElement>(null);
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.currentTarget as HTMLElement;
      const rect = target.getBoundingClientRect();
      const bg = itemBgRef.current;
      const wrapper = document.querySelector('.news-wrapper');
      
      if (bg && wrapper) {
        const wrapperRect = wrapper.getBoundingClientRect();
        bg.classList.add('active');
        bg.style.width = rect.width + 'px';
        bg.style.height = rect.height + 'px';
        bg.style.left = (rect.left - wrapperRect.left) + 'px';
        bg.style.top = (rect.top - wrapperRect.top) + 'px';
      }
      
      // Remove active from all items
      document.querySelectorAll('.news__item').forEach(item => {
        item.classList.remove('active');
      });
      target.classList.add('active');
    };

    const handleMouseLeave = () => {
      const bg = itemBgRef.current;
      
      if (bg) {
        bg.classList.remove('active');
      }
      
      // Remove active from all items
      document.querySelectorAll('.news__item').forEach(item => {
        item.classList.remove('active');
      });
    };

    const newsItems = document.querySelectorAll('.news__item');
    newsItems.forEach((item) => {
      item.addEventListener('mouseover', handleMouseOver as EventListener);
      item.addEventListener('mouseleave', handleMouseLeave as EventListener);
    });

    return () => {
      newsItems.forEach((item) => {
        item.removeEventListener('mouseover', handleMouseOver as EventListener);
        item.removeEventListener('mouseleave', handleMouseLeave as EventListener);
      });
    };
  }, []);

  const handleSlideChange = (swiper: SwiperType) => {
    const activeSlide = swiper.slides[swiper.activeIndex];
    const sliderItem = activeSlide?.querySelector('.news__item') as HTMLElement;
    const bg = itemBgRef.current;
    const wrapper = document.querySelector('.news-wrapper');
    
    if (sliderItem && bg && wrapper) {
      const rect = sliderItem.getBoundingClientRect();
      const wrapperRect = wrapper.getBoundingClientRect();
      
      document.querySelectorAll('.news__item').forEach(item => {
        item.classList.remove('active');
      });
      
      sliderItem.classList.add('active');
      bg.classList.add('active');
      bg.style.width = rect.width + 'px';
      bg.style.height = rect.height + 'px';
      bg.style.left = (rect.left - wrapperRect.left) + 'px';
      bg.style.top = (rect.top - wrapperRect.top) + 'px';
    }
  };

  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        padding: "4rem 2rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "3rem",
        zIndex: 10,
      }}
    >
      <div style={{ maxWidth: "800px", textAlign: "center" }}>
        <h2
          style={{
            fontFamily: 'var(--font-oswald), Oswald, sans-serif',
            fontSize: "clamp(2.5rem, 4vw, 4.5rem)",
            fontWeight: 700,
            textTransform: "uppercase",
            color: theme === "dark" ? "#ffffff" : "#1b1b1b",
            marginBottom: "1.5rem",
          }}
        >
          Experiencia Académica y Laboral
        </h2>
        <p
          style={{
            fontFamily: 'var(--font-neuton), Neuton, sans-serif',
            fontSize: "1.35rem",
            lineHeight: 1.6,
            color: theme === "dark" ? "#ffffff" : "#1b1b1b",
            opacity: 0.85,
            textAlign: "justify",
          }}
        >
          Mi trayectoria académica y profesional refleja mi compromiso con el aprendizaje continuo y el desarrollo de habilidades en programación y diseño web.
        </p>
      </div>

      <div className="news-wrapper">
        <div ref={itemBgRef} className="item-bg"></div>
        
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          loop={true}
          speed={300}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 0,
            modifier: 3,
            slideShadows: false,
          }}
          navigation={{
            nextEl: ".news-slider-next",
            prevEl: ".news-slider-prev",
          }}
          pagination={{
            el: ".news-slider__pagination",
            clickable: true,
          }}
          modules={[Navigation, Pagination, EffectCoverflow]}
          className="news-slider"
          onSwiper={setSwiperInstance}
          onSlideChangeTransitionEnd={handleSlideChange}
          onInit={handleSlideChange}
        >
          {experiences.map((exp) => (
            <SwiperSlide key={exp.id} className="news-slider__item">
              <a href="#" className="news__item">
                <div className="news-date">
                  <span className="news-date__title">{exp.date.day}</span>
                  {exp.date.month && (
                    <span className="news-date__txt">{exp.date.month}</span>
                  )}
                </div>
                <div className="news__title">{exp.title}</div>
                <p className="news__txt">{exp.description}</p>
                <div className="news__img">
                  <img src={exp.image} alt={exp.title} />
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="news-slider__ctr">
          <div className="news-slider__arrows">
            <button className="news-slider__arrow news-slider-prev">
              <svg className="icon icon-arrow-left" width="32" height="32" viewBox="0 0 32 32">
                <path d="M0.704 17.696l9.856 9.856c0.896 0.896 2.432 0.896 3.328 0s0.896-2.432 0-3.328l-5.792-5.856h21.568c1.312 0 2.368-1.056 2.368-2.368s-1.056-2.368-2.368-2.368h-21.568l5.824-5.824c0.896-0.896 0.896-2.432 0-3.328-0.48-0.48-1.088-0.704-1.696-0.704s-1.216 0.224-1.696 0.704l-9.824 9.824c-0.448 0.448-0.704 1.056-0.704 1.696s0.224 1.248 0.704 1.696z"></path>
              </svg>
            </button>
            <button className="news-slider__arrow news-slider-next">
              <svg className="icon icon-arrow-right" width="32" height="32" viewBox="0 0 32 32">
                <path d="M31.296 14.336l-9.888-9.888c-0.896-0.896-2.432-0.896-3.328 0s-0.896 2.432 0 3.328l5.824 5.856h-21.536c-1.312 0-2.368 1.056-2.368 2.368s1.056 2.368 2.368 2.368h21.568l-5.856 5.824c-0.896 0.896-0.896 2.432 0 3.328 0.48 0.48 1.088 0.704 1.696 0.704s1.216-0.224 1.696-0.704l9.824-9.824c0.448-0.448 0.704-1.056 0.704-1.696s-0.224-1.248-0.704-1.664z"></path>
              </svg>
            </button>
          </div>
          <div className="news-slider__pagination"></div>
        </div>
      </div>
    </section>
  );
}
