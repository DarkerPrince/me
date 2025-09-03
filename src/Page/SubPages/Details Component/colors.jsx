import React from "react";

function ColorPaletts({ primary, paletts }) {
  const gradientStyle = {
    background: `linear-gradient(to right bottom, ${primary}, ${paletts[0]})`,
  };

  return (
    <div
      style={gradientStyle}
      className="rounded-2xl px-8 py-6 shadow-md transition-colors duration-300"
    >
      {/* Title */}
      <div className="flex flex-col items-start w-fit mb-4">
        <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">
          Color Palettes
        </p>
        <div className="w-1/2 border-b-4 border-slate-900 dark:border-slate-100 rounded-lg" />
      </div>

      {/* Palettes Grid */}
      <div className="flex flex-wrap gap-4">
        {/* Primary Color */}
        <div
          className="bg-white/40 dark:bg-black/40 shadow-sm p-3 flex flex-col rounded-lg items-center gap-2"
          title={primary}
        >
          <div
            style={{ backgroundColor: primary }}
            className="w-16 h-16 rounded-lg border border-white/30"
          ></div>
          <p className="text-xs font-semibold text-slate-900 dark:text-slate-100">
            {primary}
          </p>
        </div>

        {/* Other Colors */}
        {paletts.map((colorItem, index) => (
          <div
            key={index}
            className="bg-white/40 dark:bg-black/40 shadow-sm p-3 flex flex-col rounded-lg items-center gap-2"
            title={colorItem}
          >
            <div
              style={{ backgroundColor: colorItem }}
              className="w-16 h-16 rounded-lg border border-white/30"
            ></div>
            <p className="text-xs font-semibold text-slate-900 dark:text-slate-100">
              {colorItem}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ColorPaletts;
