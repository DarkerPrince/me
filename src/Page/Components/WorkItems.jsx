import React, { useRef } from "react";
import { Link } from "react-router-dom";

function WorkItems({ blogItem }) {
  const imageRef = useRef(null);

  // Gradient background based on blogItem colors
  const gradientStyle = {
    background: `linear-gradient(135deg, ${blogItem.primarycolor}, ${blogItem.colors[0]})`,
  };

  return (
    <Link to={`/UIUX/${blogItem.id}`}>
      <div
        className="group relative h-full cursor-pointer rounded-2xl border border-slate-200/40 bg-white/60 shadow-md backdrop-blur-md transition-all duration-300 ease-in-out 
                   hover:scale-[1.02] hover:shadow-xl dark:border-white/10 dark:bg-slate-900/50"
      >
        {/* Gradient Background Blob */}
        <span
          className="absolute -z-10 h-40 w-40 -top-8 -right-8 rounded-full 
                     bg-gradient-to-br from-slate-300 to-slate-700 opacity-10 blur-3xl 
                     transition-all duration-700 ease-in-out group-hover:opacity-20 
                     dark:from-pink-200/40 dark:to-purple-300/40"
        ></span>

        {/* Image Section */}
        <div
          style={gradientStyle}
          className="rounded-t-2xl p-1 transition-all duration-300 ease-in-out group-hover:brightness-105"
        >
          <img
            ref={imageRef}
            className="h-56 w-full rounded-xl object-contain transition-transform duration-500 ease-in-out group-hover:scale-105"
            src={blogItem.headerimg}
            alt={blogItem.title}
          />
        </div>

        {/* Content Section */}
        <div className="space-y-2 p-4">
          {/* Title */}
          <h5 className="truncate text-lg font-semibold text-slate-800 dark:text-slate-100">
            {blogItem.title}
          </h5>

          {/* Subtitle */}
          <p className="text-sm text-slate-500 dark:text-slate-400">
            {blogItem.subtitle}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {blogItem.tag.map((tagItem, idx) => (
              <span
                key={idx}
                className="rounded-full border border-slate-300/40 bg-slate-100 px-3 py-0.5 text-xs text-slate-600 transition-colors duration-200 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
              >
                {tagItem}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default WorkItems;
