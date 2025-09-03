import React, { useEffect, useState } from "react";

export default function CursorGlow({
  size = 400,          // glow size
  intensity = 0.25,    // opacity
  blur = "blur-2xl",   // tailwind blur
  mixMode = "screen",  // blend mode
}) {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [colors, setColors] = useState([]);

  // Track mouse position
  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  // Update colors based on theme
  useEffect(() => {
    const updateColors = () => {
      const isDarkMode = document.documentElement.classList.contains("dark");

     const lightColors = [
  "rgba(255, 0, 150, 0.7)",  // Vibrant neon pink
  "rgba(0, 200, 255, 0.6)",  // Neon water blue
  "rgba(255, 255, 255, 0.3)" // Soft white for blending
];

const darkColors = [
  "rgba(255, 50, 180, 0.8)",  // Brighter neon pink
  "rgba(0, 150, 255, 0.1)",   // Brighter neon blue
  "rgba(0, 0, 0, 0.3)"        // Dark blending
];

      setColors(isDarkMode ? darkColors : lightColors);
    };

    updateColors();

    // Optional: watch for theme changes dynamically
    const observer = new MutationObserver(updateColors);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  return (
   <div
  className="pointer-events-none fixed inset-0 z-50"
  style={{
    background: `radial-gradient(circle at ${pos.x}px ${pos.y}px, ${colors[0]} 0%, ${colors[1]} 20%, ${colors[2]} 40%)`,
    opacity: intensity,
    width: "100%",
    height: "100%",
    filter: `blur(${size / 10}px)`, // smaller blur for tighter glow
    mixBlendMode: mixMode,
    transition: "background 0.1s ease-out",
  }}
></div>
  );
}
