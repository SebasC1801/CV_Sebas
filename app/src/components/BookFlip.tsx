"use client";

import { useEffect, useRef } from "react";

const pages = [
  // Proyecto 1: Sonovibe - Página izquierda (introducción)
  `
    <div style="height: 100%; display: flex; flex-direction: column; justify-content: center;">
      <h2 style="font-size: 2rem; margin-bottom: 1rem; color: #1a1a1a;">Sonovibe</h2>
      <p style="text-align: justify; line-height: 1.6; margin-bottom: 1.5rem;">
        Aplicación web de reproducción de música desarrollada con TypeScript, CSS y JavaScript. 
        Diseñada con una interfaz fluida y atractiva, priorizando la experiencia del usuario.
      </p>
      <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; margin-top: auto;">
        <span style="background: #e8f4f8; color: #2c5f7a; padding: 0.4rem 1rem; border-radius: 6px; font-size: 0.8rem; font-weight: 600; border: 1px solid #d0e7f0;">TypeScript</span>
        <span style="background: #fff9e6; color: #8b7500; padding: 0.4rem 1rem; border-radius: 6px; font-size: 0.8rem; font-weight: 600; border: 1px solid #f7e89d;">JavaScript</span>
        <span style="background: #e6f0ff; color: #1a4d8f; padding: 0.4rem 1rem; border-radius: 6px; font-size: 0.8rem; font-weight: 600; border: 1px solid #b3d4ff;">CSS</span>
      </div>
    </div>
  `,
  // Proyecto 1: Sonovibe - Página derecha (tarjeta interactiva)
  `
    <div style="height: 100%; display: flex; flex-direction: column; position: relative; padding: 0 !important;">
      <div style="position: relative; flex: 1; overflow: hidden; border-radius: 8px; margin: 20px;">
        <img src="/Sonovibe.png" alt="Sonovibe" style="width: 100%; height: 100%; object-fit: cover;" />
        <div style="position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 60%, transparent 100%); display: flex; align-items: flex-end; justify-content: center; padding-bottom: 0.5rem;">
          <a href="https://reproductor-de-musica-six.vercel.app" target="_blank" rel="noopener noreferrer" class="project-link"
             style="background: white; color: #1a1a1a; padding: 0.7rem 1.5rem; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 0.9rem; display: inline-flex; align-items: center; gap: 0.5rem; box-shadow: 0 4px 20px rgba(0,0,0,0.3); transition: all 0.3s ease; cursor: pointer;">
            Ver Proyecto
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  `,
  // Proyecto 2: Animal Care - Página izquierda (introducción)
  `
    <div style="height: 100%; display: flex; flex-direction: column; justify-content: center;">
      <h2 style="font-size: 2rem; margin-bottom: 1rem; color: #1a1a1a;">Animal Care</h2>
      <p style="text-align: justify; line-height: 1.6; margin-bottom: 1.5rem;">
        Aplicación fullstack para clínicas veterinarias construida con Java (backend) y JavaScript/HTML/CSS (frontend). 
        Gestiona módulos de pacientes animales, doctores, citas médicas, prioridades y categorías, con despliegue en Render.
      </p>
      <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; margin-top: auto;">
        <span style="background: #fff3e6; color: #b35900; padding: 0.4rem 1rem; border-radius: 6px; font-size: 0.8rem; font-weight: 600; border: 1px solid #ffd9a3;">Java</span>
        <span style="background: #fff9e6; color: #8b7500; padding: 0.4rem 1rem; border-radius: 6px; font-size: 0.8rem; font-weight: 600; border: 1px solid #f7e89d;">JavaScript</span>
        <span style="background: #ffe6e6; color: #cc0000; padding: 0.4rem 1rem; border-radius: 6px; font-size: 0.8rem; font-weight: 600; border: 1px solid #ffb3b3;">HTML</span>
        <span style="background: #e6f0ff; color: #1a4d8f; padding: 0.4rem 1rem; border-radius: 6px; font-size: 0.8rem; font-weight: 600; border: 1px solid #b3d4ff;">CSS</span>
      </div>
    </div>
  `,
  // Proyecto 2: Animal Care - Página derecha (tarjeta interactiva)
  `
    <div style="height: 100%; display: flex; flex-direction: column; position: relative; padding: 0 !important;">
      <div style="position: relative; flex: 1; overflow: hidden; border-radius: 8px; margin: 20px;">
        <img src="/AnimalCare.png" alt="Animal Care" style="width: 100%; height: 100%; object-fit: cover;" />
        <div style="position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 60%, transparent 100%); display: flex; align-items: flex-end; justify-content: center; padding-bottom: 0.5rem;">
          <a href="https://veterinaria-animal-care.onrender.com" target="_blank" rel="noopener noreferrer" class="project-link"
             style="background: white; color: #1a1a1a; padding: 0.7rem 1.5rem; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 0.9rem; display: inline-flex; align-items: center; gap: 0.5rem; box-shadow: 0 4px 20px rgba(0,0,0,0.3); transition: all 0.3s ease; cursor: pointer;">
            Ver Proyecto
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  `,
  // Proyecto 3: Multivar 3D - Página izquierda (introducción)
  `
    <div style="height: 100%; display: flex; flex-direction: column; justify-content: center;">
      <h2 style="font-size: 2rem; margin-bottom: 1rem; color: #1a1a1a;">Multivar 3D</h2>
      <p style="text-align: justify; line-height: 1.6; margin-bottom: 1.5rem;">
        Calculadora graficadora multivariable fullstack construida en Python/Django (backend) y Three.js (frontend), 
        con procesamiento simbólico vía WolframAlpha. Permite visualización 3D interactiva de superficies y operaciones 
        como gradientes, integrales dobles y multiplicadores de Lagrange.
      </p>
      <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; margin-top: auto;">
        <span style="background: #e6f7ff; color: #0066cc; padding: 0.4rem 1rem; border-radius: 6px; font-size: 0.8rem; font-weight: 600; border: 1px solid #99d6ff;">Python</span>
        <span style="background: #e8f5e9; color: #2e7d32; padding: 0.4rem 1rem; border-radius: 6px; font-size: 0.8rem; font-weight: 600; border: 1px solid #a5d6a7;">Django</span>
        <span style="background: #fff3e0; color: #e65100; padding: 0.4rem 1rem; border-radius: 6px; font-size: 0.8rem; font-weight: 600; border: 1px solid #ffcc80;">Three.js</span>
      </div>
    </div>
  `,
  // Proyecto 3: Multivar 3D - Página derecha (tarjeta interactiva)
  `
    <div style="height: 100%; display: flex; flex-direction: column; position: relative; padding: 0 !important;">
      <div style="position: relative; flex: 1; overflow: hidden; border-radius: 8px; margin: 20px;">
        <img src="/Multivar3d.png" alt="Multivar 3D" style="width: 100%; height: 100%; object-fit: cover;" />
        <div style="position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 60%, transparent 100%); display: flex; align-items: flex-end; justify-content: center; padding-bottom: 0.5rem;">
          <a href="https://multivar-3d.onrender.com" target="_blank" rel="noopener noreferrer" class="project-link"
             style="background: white; color: #1a1a1a; padding: 0.7rem 1.5rem; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 0.9rem; display: inline-flex; align-items: center; gap: 0.5rem; box-shadow: 0 4px 20px rgba(0,0,0,0.3); transition: all 0.3s ease; cursor: pointer;">
            Ver Proyecto
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  `,
  // Proyecto 4: Mentes Creativas - Página izquierda (introducción)
  `
    <div style="height: 100%; display: flex; flex-direction: column; justify-content: center;">
      <h2 style="font-size: 2rem; margin-bottom: 1rem; color: #1a1a1a;">Mentes Creativas</h2>
      <p style="text-align: justify; line-height: 1.6; margin-bottom: 1.5rem;">
        Proyecto grupal construido en React + Vite (JavaScript/TypeScript) con componentes 3D usando Three.js y React Three Fiber. 
        Implementa pruebas unitarias con Jest y React Testing Library, pipeline CI/CD con GitHub Actions y despliegue en Vercel.
      </p>
      <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; margin-top: auto;">
        <span style="background: #e1f5fe; color: #01579b; padding: 0.4rem 1rem; border-radius: 6px; font-size: 0.8rem; font-weight: 600; border: 1px solid #81d4fa;">React</span>
        <span style="background: #e8f4f8; color: #2c5f7a; padding: 0.4rem 1rem; border-radius: 6px; font-size: 0.8rem; font-weight: 600; border: 1px solid #d0e7f0;">TypeScript</span>
        <span style="background: #fff3e0; color: #e65100; padding: 0.4rem 1rem; border-radius: 6px; font-size: 0.8rem; font-weight: 600; border: 1px solid #ffcc80;">Three.js</span>
        <span style="background: #f3e5f5; color: #6a1b9a; padding: 0.4rem 1rem; border-radius: 6px; font-size: 0.8rem; font-weight: 600; border: 1px solid #ce93d8;">Vite</span>
      </div>
    </div>
  `,
  // Proyecto 4: Mentes Creativas - Página derecha (tarjeta interactiva)
  `
    <div style="height: 100%; display: flex; flex-direction: column; position: relative; padding: 0 !important;">
      <div style="position: relative; flex: 1; overflow: hidden; border-radius: 8px; margin: 20px;">
        <img src="/MentesCreativas.png" alt="Mentes Creativas" style="width: 100%; height: 100%; object-fit: cover;" />
        <div style="position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 60%, transparent 100%); display: flex; align-items: flex-end; justify-content: center; padding-bottom: 0.5rem;">
          <a href="https://fpc-ten.vercel.app" target="_blank" rel="noopener noreferrer" class="project-link"
             style="background: white; color: #1a1a1a; padding: 0.7rem 1.5rem; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 0.9rem; display: inline-flex; align-items: center; gap: 0.5rem; box-shadow: 0 4px 20px rgba(0,0,0,0.3); transition: all 0.3s ease; cursor: pointer;">
            Ver Proyecto
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  `,
];

export default function BookFlip() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const book = containerRef.current.querySelector("#book") as HTMLElement;
    const flap = containerRef.current.querySelector("#flap") as HTMLElement;
    const flapContent = containerRef.current.querySelector("#flapContent") as HTMLElement;
    const foldGradient = containerRef.current.querySelector("#foldGradient") as HTMLElement;

    if (!book || !flap || !flapContent || !foldGradient) return;

    const state = {
      width: 0,
      height: 0,
      pageWidth: 0,
      spineX: 0,
      diagonal: 0,
      leftIndex: 0,
      activeSide: null as string | null,
      activeCorner: null as number[] | null,
      isDragging: false,
      cornerThreshold: 100,
    };

    function handleResize() {
      const rect = book.getBoundingClientRect();
      state.width = rect.width;
      state.height = rect.height;
      state.pageWidth = rect.width / 2;
      state.spineX = state.pageWidth;
      state.diagonal = Math.sqrt(state.pageWidth ** 2 + state.height ** 2);
      if (!state.isDragging) renderPages();
    }

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(book);

    function renderPages() {
      const leftFront = document.getElementById("left-front");
      const rightFront = document.getElementById("right-front");
      if (leftFront) {
        leftFront.innerHTML = pages[state.leftIndex] || "";
        leftFront.style.display = state.leftIndex < 0 ? "none" : "block";
      }
      if (rightFront) {
        rightFront.innerHTML = pages[state.leftIndex + 1] || "";
        rightFront.style.display = state.leftIndex + 1 >= pages.length ? "none" : "block";
      }
    }

    renderPages();

    function clipPolygon(points: number[][], a: number, b: number, c: number, keepInside: boolean) {
      let result: number[][] = [];
      for (let i = 0; i < points.length; i++) {
        let p1 = points[i],
          p2 = points[(i + 1) % points.length];
        let d1 = a * p1[0] + b * p1[1] + c;
        let d2 = a * p2[0] + b * p2[1] + c;
        let in1 = keepInside ? d1 <= 0 : d1 > 0;
        let in2 = keepInside ? d2 <= 0 : d2 > 0;
        if (in1) result.push(p1);
        if (in1 !== in2) {
          let t = d1 / (d1 - d2);
          result.push([p1[0] + t * (p2[0] - p1[0]), p1[1] + t * (p2[1] - p1[1])]);
        }
      }
      return result;
    }

    function reflectPoint(p: number[], a: number, b: number, c: number) {
      let d = (a * p[0] + b * p[1] + c) / (a * a + b * b);
      return [p[0] - 2 * d * a, p[1] - 2 * d * b];
    }

    function toClipPath(points: number[][]) {
      if (points.length === 0) return "polygon(0 0)";
      return "polygon(" + points.map((p) => `${p[0]}px ${p[1]}px`).join(", ") + ")";
    }

    function constrainPoint(mx: number, my: number) {
      const { pageWidth, height, spineX, diagonal, activeCorner } = state;
      if (!activeCorner) return [mx, my];

      for (let i = 0; i < 3; i++) {
        let c1x = spineX;
        let c1y = activeCorner[1];
        let dx1 = mx - c1x;
        let dy1 = my - c1y;
        let dist1 = Math.sqrt(dx1 * dx1 + dy1 * dy1);
        if (dist1 > pageWidth) {
          mx = c1x + (dx1 / dist1) * pageWidth;
          my = c1y + (dy1 / dist1) * pageWidth;
        }
        let c2x = spineX;
        let c2y = activeCorner[1] === 0 ? height : 0;
        let dx2 = mx - c2x;
        let dy2 = my - c2y;
        let dist2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);
        if (dist2 > diagonal) {
          mx = c2x + (dx2 / dist2) * diagonal;
          my = c2y + (dy2 / dist2) * diagonal;
        }
      }
      return [mx, my];
    }

    function updateFold(X: number, Y: number) {
      const { activeCorner, activeSide, width, height, pageWidth } = state;
      if (!activeCorner || (X === activeCorner[0] && Y === activeCorner[1])) return;

      let [mx, my] = constrainPoint(X, Y);
      const frontPage = document.getElementById(`${activeSide}-front`);
      if (!frontPage) return;

      let a = activeCorner[0] - mx;
      let b = activeCorner[1] - my;
      let midx = (activeCorner[0] + mx) / 2;
      let midy = (activeCorner[1] + my) / 2;
      let c = -(a * midx + b * midy);

      let basePage: number[][], p1_front: number[], p2_front: number[], shiftX: number;
      if (activeSide === "right") {
        basePage = [
          [pageWidth, 0],
          [pageWidth, height],
          [width, height],
          [width, 0],
        ];
        p1_front = [width, 0];
        p2_front = [pageWidth, 0];
        shiftX = pageWidth;
      } else {
        basePage = [
          [0, 0],
          [0, height],
          [pageWidth, height],
          [pageWidth, 0],
        ];
        p1_front = [pageWidth, 0];
        p2_front = [0, 0];
        shiftX = 0;
      }

      let frontPoints = clipPolygon(basePage, a, b, c, true);
      let fpCSS = frontPoints.map((p) => [p[0] - shiftX, p[1]]);
      frontPage.style.clipPath = toClipPath(fpCSS);

      let awayPoints = clipPolygon(basePage, a, b, c, false);
      let flapPoints = awayPoints.map((p) => reflectPoint(p, a, b, c));
      flap.style.clipPath = toClipPath(flapPoints);

      let p1_flap = reflectPoint(p1_front, a, b, c);
      let p2_flap = reflectPoint(p2_front, a, b, c);
      let transX = p1_flap[0];
      let transY = p1_flap[1];
      let angleRot = Math.atan2(p2_flap[1] - p1_flap[1], p2_flap[0] - p1_flap[0]);

      flapContent.style.transformOrigin = "0 0";
      flapContent.style.transform = `translate(${transX}px, ${transY}px) rotate(${angleRot}rad)`;

      let dxG = mx - activeCorner[0];
      let dyG = my - activeCorner[1];
      let angleG = Math.atan2(dyG, dxG);
      foldGradient.style.transform = `translate(${midx}px, ${midy}px) rotate(${angleG}rad)`;

      let progress = Math.abs(mx - activeCorner[0]) / width;
      let opacity = Math.sin(progress * Math.PI);
      foldGradient.style.opacity = opacity.toFixed(3);
    }

    function startDrag(side: string, corner: number[], x: number, y: number) {
      state.activeSide = side;
      state.activeCorner = corner;
      state.isDragging = true;
      flap.style.display = "block";

      if (side === "right") {
        const rightUnder = document.getElementById("right-under");
        if (rightUnder) rightUnder.innerHTML = pages[state.leftIndex + 3] || "";
        flapContent.innerHTML = pages[state.leftIndex + 2] || "";
        flapContent.className = "flap-content is-left";
      } else {
        const leftUnder = document.getElementById("left-under");
        if (leftUnder) leftUnder.innerHTML = pages[state.leftIndex - 2] || "";
        flapContent.innerHTML = pages[state.leftIndex - 1] || "";
        flapContent.className = "flap-content is-right";
      }
      updateFold(x, y);
    }

    book.addEventListener("pointerdown", (e: PointerEvent) => {
      // Si el click es en un enlace, no hacer nada
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' || target.closest('a')) {
        return;
      }

      let rect = book.getBoundingClientRect();
      let x = e.clientX - rect.left;
      let y = e.clientY - rect.top;
      const { width, height, cornerThreshold: TH, leftIndex } = state;

      book.setPointerCapture(e.pointerId);

      if (x > width - TH && y < TH && leftIndex + 1 < pages.length - 1)
        startDrag("right", [width, 0], x, y);
      else if (x > width - TH && y > height - TH && leftIndex + 1 < pages.length - 1)
        startDrag("right", [width, height], x, y);
      else if (x < TH && y < TH && leftIndex > 0) startDrag("left", [0, 0], x, y);
      else if (x < TH && y > height - TH && leftIndex > 0) startDrag("left", [0, height], x, y);
    });

    book.addEventListener("pointermove", (e: PointerEvent) => {
      if (!state.isDragging) return;
      let rect = book.getBoundingClientRect();
      updateFold(e.clientX - rect.left, e.clientY - rect.top);
    });

    book.addEventListener("pointerup", (e: PointerEvent) => {
      if (!state.isDragging) return;
      state.isDragging = false;
      let rect = book.getBoundingClientRect();
      let x = e.clientX - rect.left;
      const { width, activeSide, activeCorner } = state;

      let isComplete =
        (activeSide === "right" && x < width / 2 + 100) || (activeSide === "left" && x > width / 2 - 100);

      let targetX = isComplete ? (activeSide === "right" ? 0 : width) : activeCorner![0];
      let targetY = activeCorner![1];
      let startX = x,
        startY = e.clientY - rect.top;
      let startTime = performance.now();

      function animate(time: number) {
        let progress = Math.min((time - startTime) / 300, 1);
        let ease = 1 - Math.pow(1 - progress, 3);
        updateFold(startX + (targetX - startX) * ease, startY + (targetY - startY) * ease);
        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          flap.style.display = "none";
          const frontPage = document.getElementById(`${state.activeSide}-front`);
          if (frontPage) frontPage.style.clipPath = "none";
          if (isComplete) {
            state.leftIndex += activeSide === "right" ? 2 : -2;
            renderPages();
          }
          state.activeSide = null;
        }
      }
      requestAnimationFrame(animate);
    });

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div ref={containerRef} style={{ width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <div
        id="book"
        style={{
          width: "min(600px, 95%)",
          height: "clamp(280px, 50vw, 420px)",
          position: "relative",
          background: "#f0f0f0",
          boxShadow: "0 10px 40px rgba(0,0,0,0.5)",
          cursor: "grab",
          touchAction: "none",
        }}
      >
        <div
          className="page"
          id="left-under"
          style={{
            width: "50%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
            padding: "40px",
            boxSizing: "border-box",
            backgroundColor: "#fff",
            userSelect: "none",
            backgroundImage: "linear-gradient(to left, rgba(0,0,0,0.12) 0%, rgba(0,0,0,0) 8%)",
          }}
        ></div>
        <div
          className="page"
          id="right-under"
          style={{
            width: "50%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: "50%",
            padding: "40px",
            boxSizing: "border-box",
            backgroundColor: "#fff",
            userSelect: "none",
            backgroundImage: "linear-gradient(to right, rgba(0,0,0,0.12) 0%, rgba(0,0,0,0) 8%)",
            borderLeft: "1px solid #ddd",
          }}
        ></div>
        <div
          className="page front-page"
          id="left-front"
          style={{
            width: "50%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
            padding: "40px",
            boxSizing: "border-box",
            backgroundColor: "#fff",
            userSelect: "none",
            backgroundImage: "linear-gradient(to left, rgba(0,0,0,0.12) 0%, rgba(0,0,0,0) 8%)",
            zIndex: 2,
          }}
        ></div>
        <div
          className="page front-page"
          id="right-front"
          style={{
            width: "50%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: "50%",
            padding: "40px",
            boxSizing: "border-box",
            backgroundColor: "#fff",
            userSelect: "none",
            backgroundImage: "linear-gradient(to right, rgba(0,0,0,0.12) 0%, rgba(0,0,0,0) 8%)",
            borderLeft: "1px solid #ddd",
            zIndex: 2,
          }}
        ></div>
        <div
          id="flap"
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 5,
            filter: "drop-shadow(0px 0px 10px rgba(0,0,0,0.4))",
            pointerEvents: "none",
            display: "none",
          }}
        >
          <div
            className="flap-content"
            id="flapContent"
            style={{
              width: "50%",
              height: "100%",
              position: "absolute",
              top: 0,
              left: 0,
              padding: "40px",
              boxSizing: "border-box",
              backgroundColor: "#fdfdfd",
            }}
          ></div>
          <div
            id="foldGradient"
            style={{
              position: "absolute",
              width: "300%",
              height: "300%",
              left: "-150%",
              top: "-150%",
              background:
                "linear-gradient(to right, transparent 49.5%, rgba(0,0,0,0.3) 50%, rgba(255,255,255,0.7) 51.5%, rgba(0,0,0,0.05) 58%, transparent 65%)",
            }}
          ></div>
        </div>
      </div>
      <style jsx global>{`
        .page {
          background-color: #fff !important;
        }
        .flap-content {
          background-color: #fdfdfd !important;
        }
        .page h2,
        .flap-content h2 {
          margin-top: 0;
          color: #1a1a1a;
          font-weight: 700;
        }
        .page p,
        .flap-content p {
          color: #333;
          font-weight: 500;
        }
        .page a,
        .flap-content a {
          pointer-events: auto !important;
        }
        .project-link:hover {
          transform: scale(1.05) !important;
          box-shadow: 0 6px 30px rgba(0,0,0,0.4) !important;
        }
        @media (max-width: 640px) {
          .page, .flap-content {
            padding: 15px !important;
          }
          .page h2, .flap-content h2 {
            font-size: 1.2rem !important;
            margin-bottom: 0.5rem !important;
          }
          .page p, .flap-content p {
            font-size: 0.7rem !important;
            line-height: 1.4 !important;
            margin-bottom: 0.5rem !important;
          }
          .page span, .flap-content span {
            font-size: 0.6rem !important;
            padding: 0.2rem 0.5rem !important;
          }
          .page .news__img, .flap-content .news__img {
            margin-top: 10px !important;
            height: 120px !important;
          }
          .project-link {
            padding: 0.4rem 0.8rem !important;
            font-size: 0.7rem !important;
          }
        }
      `}</style>
    </div>
  );
}
