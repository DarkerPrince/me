import React from "react";

function ColorPaletts({ primary, paletts }) {
  
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
    <div
      style={gradientStyle}
      className="rounded-2xl px-8 py-6 transition-colors duration-300"
    >
      {/* Title */}
      <div className="flex flex-col items-start w-fit mb-4">
        <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">
          Color Palettes
        </p>
      </div>

      {/* Palettes Grid */}
      <div className="flex flex-wrap gap-4">
        {/* Primary Color */}
        
        <div
           style={{ backgroundColor: primary }}
            className="bg-white/40 justify-center dark:bg-black/40 border border-white/30 shadow-sm p-3 flex flex-col rounded-lg items-center gap-2 w-16 h-16"
            title={primary}
          >
          <p className={`text-xs  font-semibold ${getContrastColor(primary)} text-slate-900 text-inv dark:text-slate-100`}>
            {primary}
          </p>
        </div>

        {/* Other Colors */}
        {paletts.map((colorItem, index) => (
          <div
            key={index}
            style={{ backgroundColor: colorItem }}
            className="bg-white/40 justify-center dark:bg-black/40 border border-white/30 shadow-sm p-3 flex flex-col rounded-lg items-center gap-2 w-16 h-16"
            title={colorItem}
          >
            <p 
            
            className={`text-xs font-semibold ${getContrastColor(colorItem)}`}>
              {colorItem}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ColorPaletts;
