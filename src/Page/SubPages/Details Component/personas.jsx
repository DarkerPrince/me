import React, { useRef, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import PersonaItem from "./personaComponent";

function Personas({ primary, paletts, personaList }) {
  const scrollContainer = useRef();
  const [scrollDirection, setScrollDirection] = useState(1); // 1 = forward, -1 = backward

 
  const gradientStyle = {
    background: `linear-gradient(
      to right bottom, 
      ${addOpacity(primary, 0.10)}, 
      ${addOpacity(paletts[0], 0.10)}
    )`,
    border: `1px solid ${primary}`, // solid border using primary color
    borderRadius: "1rem",
  };

  function getContrastColor(hex) {
  // Remove # if present
  // hex = hex.replace('#', '');

   // Ensure hex is 6 digits
  if (hex.startsWith('#') && hex.length === 7) {
    hex = hex.slice(1);
  } else if (hex.startsWith('#') && hex.length === 9) {
    hex = hex.slice(1, 7); // ignore alpha for brightness
  }
  
  // Convert to RGB
  const r = parseInt(hex.substr(0,2),16);
  const g = parseInt(hex.substr(2,2),16);
  const b = parseInt(hex.substr(4,2),16);

  // Calculate brightness (YIQ formula)
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;

  console.log(`Color: #${hex}, Brightness: ${brightness}`);

  // Return readable color
  return brightness > 128 ? 'text-slate-900' : 'text-slate-100';
}

  function addOpacity(hex, alpha) {
  const opacity = Math.round(alpha * 255).toString(16).padStart(2, '0');
  return `${hex}${opacity}`;
}


  useEffect(() => {
    const container = scrollContainer.current;

    const scrollStep = () => {
      if (!container) return;

      container.scrollLeft += scrollDirection; // Move based on direction

      // Loop scroll when hitting edges
      if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
        setScrollDirection(-1); // Reverse direction at the end
      } else if (container.scrollLeft <= 0) {
        setScrollDirection(1); // Reverse direction at the start
      }
    };

    const timerId = setInterval(scrollStep, 20); // Smooth scrolling
    return () => clearInterval(timerId);
  }, [scrollDirection]);

  const scrollByAmount = (amount) => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollBy({ left: amount, behavior: "smooth" });
    }
  };

  return (
    <div
      style={gradientStyle}
      className="col-span-2 rounded-2xl dark:from-slate-800 dark:to-slate-900"
    >
      {/* Header */}
      <div className="flex flex-col items-start px-8 w-fit">
        <p className="text-2xl font-bold pt-4 text-slate-800 dark:text-slate-100">
          User Persona
        </p>
      </div>

      {/* Scrollable Personas */}
      <div className="relative">
        {/* Scroll Buttons */}
        <button
          onClick={() => scrollByAmount(-200)}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-slate-700/80 rounded-full p-2 shadow-md hover:scale-110 transition z-10"
        >
          <ChevronLeft className="text-slate-700 dark:text-white" />
        </button>
        <button
          onClick={() => scrollByAmount(200)}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-slate-700/80 rounded-full p-2 shadow-md hover:scale-110 transition z-10"
        >
          <ChevronRight className="text-slate-700 dark:text-white" />
        </button>

        {/* Scrollable Content */}
        <div
          ref={scrollContainer}
          className="overflow-x-auto flex scroll-smooth no-scrollbar"
        >
          <div className="flex scale-75 items-end gap-3 px-10">
            {personaList.map((itemPersona, index) => (
              <PersonaItem key={index} persona={itemPersona} index={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Personas;
