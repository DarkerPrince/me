import React, { useState } from 'react';

function Mockup({ mockup }) {
  return (
    <div className="flex flex-col items-center text-slate-800 dark:text-slate-200 bg-white dark:bg-black">
      {mockup.map((mock, index) => {
        const [loaded, setLoaded] = useState(false);

        return (
          <div
            key={index}
            className={`flex gap-12 px-4 md:w-2/3 my-24 items-center justify-between ${
              index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'
            } flex-col`}
          >
            {/* Image Container */}
            <div
              className={`relative ${
                mock.title === '' ? '' : 'md:w-1/2'
              } aspect-[4/3] overflow-hidden rounded-xl`}
            >
              {/* Shimmer Loader */}
              {!loaded && (
                <div className="absolute inset-0 rounded-xl overflow-hidden">
                  <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-800 dark:to-gray-700"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent dark:via-white/10 animate-[shimmer_1.5s_infinite]"></div>
                </div>
              )}

              {/* Actual Image */}
              <img
                src={mock.img}
                alt={mock.title}
                onLoad={() => setLoaded(true)}
                className={`w-full h-full object-contain rounded-xl transition-all duration-700 ease-out transform ${
                  loaded
                    ? 'opacity-100 scale-100'
                    : 'opacity-0 scale-105'
                }`}
              />
            </div>

            {/* Text Section */}
            {mock.title === '' ? (
              <div></div>
            ) : (
              <div
                className={`flex flex-col flock transition-all duration-700 ease-out ${
                  loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                <p className="text-4xl font-bold mb-4">{mock.title}</p>
                <p className="text-sm text-slate-400">{mock.subtitle}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Mockup;
