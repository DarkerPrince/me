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
        "rgba(253,27,83,0.6)",  // Primary light
        "rgba(255,112,69,0.4)", // Secondary light
        "rgba(255,255,255,0.3)" // White for blending
      ];

      const darkColors = [
        "rgba(253,27,83,0.7)",  // Primary dark
        "rgba(255,112,69,0.5)", // Secondary dark
        "rgba(0,0,0,0.3)"       // Black for blending
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
        background: `radial-gradient(circle at ${pos.x}px ${pos.y}px, ${colors.join(", ")})`,
        opacity: intensity,
        width: "100%",
        height: "100%",
        filter: `blur(${size / 40}px)`,
        mixBlendMode: mixMode,
        transition: "background 0.2s ease-out",
      }}
    ></div>
  );
}
