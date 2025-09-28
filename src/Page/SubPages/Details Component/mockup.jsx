import React, { useState } from "react";

function Mockup({ mockup, primary }) {
  return (
    <div className="flex flex-col items-center text-slate-800 dark:text-slate-200 dark:bg-black">
      <div className="flex items-center gap-2">
              <p className="text-3xl md:text-4xl font-bold">Mockup Designs</p>
            </div>
      {mockup.map((mock, index) => {
        const [loaded, setLoaded] = useState(false);

        return (
          <div
            key={index}
            className="relative flex flex-col md:w-2/3  my-12 lg:my-24 items-center px-4"
          >
            
            {/* Image Container */}
            <div className="relative w-full aspect-[16/9] overflow-hidden rounded-2xl ">
              {/* Shimmer Loader */}
              {!loaded && (
                <div className="absolute inset-0 rounded-2xl overflow-hidden">
                  <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-800 dark:to-gray-700"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent dark:via-white/10 animate-[shimmer_1.5s_infinite]"></div>
                </div>
              )}

              {/* Actual Image */}
              <img
                src={mock.img}
                alt={mock.title}
                onLoad={() => setLoaded(true)}
                className={`w-full h-full object-contain transition-all duration-700 ease-out transform ${
                  loaded ? "opacity-100 scale-100" : "opacity-0 scale-105"
                }`}
              />

              {/* Text Overlay */}
              {mock.title && (
                <div
                  className={`absolute ${
                    index % 2 === 0 ? "bottom-6 left-6" : "bottom-6 right-6"
                  } max-w-[70%] md:max-w-[40%] transition-all duration-700 ease-out ${
                    loaded
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
                >
                  <div
                    key={index}
                    style={{ backgroundColor: `${primary}80` }}
                    className="relative group rounded-xl bottom-4 overflow-hidden shadow-lg border border-white/30"
                    title={primary}
                  >
                    {/* Blurred colorful background */}
                    <div
                      className="absolute inset-0"
                      style={{
                        backgroundColor: primary,
                        filter: "blur(30px)",
                        opacity: 0.1,
                      }}
                    />

                    {/* Gradient overlay for readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>

                    {/* Text content */}
                    <div className="relative z-10 p-3 flex flex-col justify-end h-full">
                      <p className="text-white text-sm font-bold truncate">
                        {mock.title}
                      </p>
                      <p className="text-white/80 text-xs line-clamp-2">
                        {mock.subtitle}
                      </p>
                    </div>

                    {/* Hover effect */}
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition"></div>
                  </div>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Mockup;
