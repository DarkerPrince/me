import React from "react";
import DesignProcessItems from "./DesignProcessItems";

function DesignProcess({primary,paletts}) {

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

  return (
    <div style={gradientStyle} className="flex flex-col rounded-2xl px-8 py-4 items-start gap-4 text-slate-800 dark:text-slate-200">
      <div className='flex flex-col items-start w-fit'>
      <p className="text-2xl font-bold text-slate-800">Design Process</p>
      </div>
      <DesignProcessItems Primary={primary}/>
    </div>
  );
}



export default DesignProcess;
