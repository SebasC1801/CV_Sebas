"use client";

import { useEffect, useRef } from "react";

type CursorTrailBackgroundProps = {
  className?: string;
  style?: React.CSSProperties;
};

export default function CursorTrailBackground({
  className,
  style,
}: CursorTrailBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const requestRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let mouseMoved = false;
    const isMobile = window.innerWidth <= 768 || 'ontouchstart' in window;

    const pointer = {
      x: 0.5 * window.innerWidth,
      y: 0.5 * window.innerHeight,
    };
    
    const params = {
      pointsNumber: 40,
      widthFactor: 0.3,
      mouseThreshold: 0.6,
      spring: 0.4,
      friction: 0.5,
    };

    const trail = new Array(params.pointsNumber);
    for (let i = 0; i < params.pointsNumber; i++) {
      trail[i] = {
        x: pointer.x,
        y: pointer.y,
        dx: 0,
        dy: 0,
      };
    }

    const updateMousePosition = (eX: number, eY: number) => {
      pointer.x = eX;
      pointer.y = eY;
    };

    const handleClick = (e: MouseEvent) => {
      if (!isMobile) updateMousePosition(e.pageX, e.pageY);
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isMobile) {
        mouseMoved = true;
        updateMousePosition(e.pageX, e.pageY);
      }
    };

    const setupCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const update = (t: number) => {
      // On mobile: always use subtle automatic movement
      // On desktop: use automatic movement until mouse moves
      if (!mouseMoved || isMobile) {
        pointer.x =
          (0.5 + 0.15 * Math.cos(0.001 * t) * Math.sin(0.002 * t)) *
          window.innerWidth;
        pointer.y =
          (0.5 + 0.1 * Math.cos(0.002 * t) + 0.05 * Math.cos(0.003 * t)) *
          window.innerHeight;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw trail
      trail.forEach((p, pIdx) => {
        const prev = pIdx === 0 ? pointer : trail[pIdx - 1];
        const spring = pIdx === 0 ? 0.4 * params.spring : params.spring;
        p.dx += (prev.x - p.x) * spring;
        p.dy += (prev.y - p.y) * spring;
        p.dx *= params.friction;
        p.dy *= params.friction;
        p.x += p.dx;
        p.y += p.dy;
      });

      ctx.lineCap = "round";
      ctx.beginPath();
      ctx.moveTo(trail[0].x, trail[0].y);

      for (let i = 1; i < trail.length - 1; i++) {
        const xc = 0.5 * (trail[i].x + trail[i + 1].x);
        const yc = 0.5 * (trail[i].y + trail[i + 1].y);
        ctx.quadraticCurveTo(trail[i].x, trail[i].y, xc, yc);
        ctx.lineWidth = params.widthFactor * (params.pointsNumber - i);
        ctx.stroke();
      }
      ctx.lineTo(trail[trail.length - 1].x, trail[trail.length - 1].y);
      ctx.stroke();

      requestRef.current = window.requestAnimationFrame(update);
    };

    if (!isMobile) {
      window.addEventListener("click", handleClick);
      window.addEventListener("mousemove", handleMouseMove);
    }
    window.addEventListener("resize", setupCanvas);

    setupCanvas();
    requestRef.current = window.requestAnimationFrame(update);

    return () => {
      window.removeEventListener("click", handleClick);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", setupCanvas);
      if (requestRef.current) {
        window.cancelAnimationFrame(requestRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{
        display: "block",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none", // Let clicks pass through to content? 
        // The original code tracks clicks but doesn't block them. 
        // But if it's a background, it should probably be pointer-events: none so buttons work.
        // However, the original code attaches listeners to window, so pointer-events: none on canvas is fine.
        zIndex: 0,
        ...style,
      }}
    />
  );
}
