"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "./ThemeController";
import CursorTrailBackground from "./CursorTrailBackground";

interface TubesBackgroundProps {
  className?: string;
  canvasClassName?: string;
  disableClick?: boolean;
  colors?: string[];
  lightsColors?: string[];
  intensity?: number;
}

// Function to generate random colors for the click effect
function randomColors(count: number) {
  return new Array(count)
    .fill(0)
    .map(
      () =>
        "#" +
        Math.floor(Math.random() * 16777215)
          .toString(16)
          .padStart(6, "0"),
    );
}

function TubesCanvas({
  className,
  canvasClassName,
  disableClick = false,
  colors = ["#a78bfa", "#8b5cf6", "#6366f1"],
  lightsColors = ["#7c3aed", "#6d28d9", "#4f46e5", "#4338ca"],
  intensity = 120,
}: TubesBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const appRef = useRef<any>(null);
  const [tooWide, setTooWide] = useState(false);
  const baseWidth = useRef(0);

  // Detect zoom out by comparing current viewport to initial size
  useEffect(() => {
    baseWidth.current = window.innerWidth;

    const checkZoom = () => {
      // If viewport grew more than 40% from initial load, user zoomed out
      setTooWide(window.innerWidth > baseWidth.current * 1.4 || window.innerWidth > 2200);
    };

    window.addEventListener('resize', checkZoom);
    return () => window.removeEventListener('resize', checkZoom);
  }, []);

  useEffect(() => {
    // Don't init tubes if viewport is too wide
    if (tooWide) return;

    let mounted = true;
    let retryTimeout: ReturnType<typeof setTimeout>;

    const initTubes = () => {
      import(
        // @ts-ignore
        /* webpackIgnore: true */ "https://cdn.jsdelivr.net/npm/threejs-components@0.0.19/build/cursors/tubes1.min.js"
      )
        .then((module) => {
          if (!mounted || !canvasRef.current) return;

          const TubesCursor = module.default;

          const app = TubesCursor(canvasRef.current, {
            tubes: {
              colors: colors,
              lights: {
                intensity: intensity,
                colors: lightsColors,
              },
            },
          });
          
          appRef.current = app;

          setTimeout(() => {
            if (mounted) window.dispatchEvent(new Event('resize'));
          }, 500);
        })
        .catch((err) => {
          console.error("Failed to load tubes script:", err);
        });
    };

    retryTimeout = setTimeout(initTubes, 800);

    return () => {
      mounted = false;
      clearTimeout(retryTimeout);
    };
  }, [colors, lightsColors, intensity, tooWide]);

  // Click handler for random colors
  useEffect(() => {
    if (disableClick) return;

    const handleClick = () => {
      if (appRef.current && appRef.current.tubes) {
        const newColors = randomColors(3);
        const newLightsColors = randomColors(4);
        appRef.current.tubes.setColors(newColors);
        appRef.current.tubes.setLightsColors(newLightsColors);
      }
    };

    window.addEventListener("click", handleClick);
    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, [disableClick]);

  return (
    <div className={`tubes-layer ${className || ""}`}>
      {!tooWide && (
        <canvas
          ref={canvasRef}
          className={`tubes-canvas ${canvasClassName || ""}`}
        />
      )}
    </div>
  );
}

export default function TubesBackground(props: TubesBackgroundProps) {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  if (theme === "light") {
    // Use the new cursor trail animation in light mode
    return <CursorTrailBackground className={props.className} />;
  }

  // Use the original tubes animation in dark mode
  return <TubesCanvas {...props} />;
}
