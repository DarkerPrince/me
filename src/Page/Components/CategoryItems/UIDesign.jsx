import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";
import { PiBehanceLogo } from "react-icons/pi";
import { FaDribbble } from "react-icons/fa";

import ics from "../../../assets/workImg/ics.png";
import transport from "../../../assets/workImg/transport.png";
import negat from "../../../assets/workImg/negatweb.png";
import telebirr from "../../../assets/workImg/Telebirr.png";
import NegatApp from "../../../assets/workImg/Negat.png";
import SouqApp from "../../../assets/workImg/Souq.png";

function ShimmerImage({ src, alt, className }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`${className}`}>
      {/* Shimmer effect */}
      {!loaded && (
        <div className="absolute inset-0 rounded-md overflow-hidden">
          <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent dark:via-white/10 animate-[shimmer_1.5s_infinite]"></div>
        </div>
      )}

      {/* Image */}
      <img
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        className={`w-full h-full object-contain rounded-md transition-all duration-700 ease-out
          ${loaded ? "opacity-100 scale-100" : "opacity-0 scale-105"}
        `}
      />
    </div>
  );
}

function UIDesign({ className = "" }) {
  return (
    <Link className={`${className}`} to={"UIUX"}>
      <div className="h-[400px] lg:col-span-2 border-gray-400 border-2 relative bg-white dark:bg-white/20 text-slate-700 dark:text-slate-200 hover:dark:bg-white/20 p-4 hover:shadow-xl rounded-2xl flex flex-col justify-between group">
        <div className="flex w-full h-full ">
          {/* Left cluster */}
          <div className="relative hidden w-1/2 mx-auto h-full rounded-xl lg:flex justify-center self-center items-end">
            <ShimmerImage
              src={negat}
              alt="Negat"
              className=" w-72 absolute border-2 rounded-lg border-black mt-4 top-0 translate-y-4 group-hover:-rotate-3 group-hover:-translate-y-6 duration-500 ease-in-out"
            />
            <ShimmerImage
              src={ics}
              alt="ICS"
              className="w-80 mt-8 border-2 rounded-lg border-amber-500 absolute top-6  translate-y-4 group-hover:rotate-3 group-hover:-translate-y-6 duration-500 ease-in-out"
            />
            <ShimmerImage
              src={transport}
              alt="Transport"
              className="w-[350px] mt-8 bottom-8 border-2 rounded-lg border-blue-500 z-10 absolute translate-y-2 group-hover:-translate-y-4 duration-500 ease-in-out"
            />
          </div>

          {/* Right cluster */}
          <div className="h-full w-1/2 mx-auto rounded-xl flex justify-center self-center items-end">
            <ShimmerImage
              src={negat}
              alt="Negat Mobile"
              className="w-full lg:hidden absolute border-2 border-amber-500 top-0 rounded-md translate-y-4 group-hover:-rotate-12 group-hover:-translate-y-6 duration-500 ease-in-out"
            />
            <ShimmerImage
              src={telebirr}
              alt="Telebirr"
              className="w-2/3 lg:w-1/3 -mr-6 relative top-12 lg:-top-4 rounded-md translate-y-4 -rotate-6 group-hover:-translate-y-8 duration-500 ease-in-out"
            />
            <ShimmerImage
              src={NegatApp}
              alt="Negat App"
              className="w-3/4 lg:w-1/2 z-10 rounded-md relative top-12 lg:-top-4 translate-y-4 group-hover:-translate-y-2 duration-500 ease-in-out"
            />
            <ShimmerImage
              src={SouqApp}
              alt="Souq App"
              className="w-2/3 lg:w-1/3 -ml-6 mt-8 rounded-md relative top-12 lg:-top-4 translate-y-4 rotate-6 group-hover:-translate-y-8 duration-500 ease-in-out"
            />
          </div>
        </div>

        {/* Info */}
        <div
          className="backback shadow-lg rounded-lg lg:bottom-[90px] p-4 pl-5 pr-12 relative z-10"
          style={{
            clipPath:
              "polygon(0 0, 70% 0, 75% 20%, 100% 20%, 100% 100%, 0 100%)",
          }}
        >
          <h2 className="font-semibold text-sm mb-2 flex text-white">
            Frontend Dev't & UI/UX Design (Web and Mobile)
            <GoArrowUpRight className="group-hover:translate-x-2 group-hover:-translate-y-1 duration-300 ease-in-out" />
          </h2>
          <p className="text-white text-xs italic">
            Simple, Clean and User Friendly Designs
          </p>
          <p className="text-gray-600 text-xs italic">React , Tailwind , Figma</p>
          <div className="absolute flex gap-2 top-1/2 right-4 -translate-y-1/2 text-gray-700">
            <PiBehanceLogo className="w-6 h-6" />
            <FaDribbble className="w-6 h-6" />
          </div>
        </div>
      </div>
    </Link>
  );
}

export default UIDesign;
