import React from "react";
import { SiApostrophe } from "react-icons/si";
import { MdDesignServices } from "react-icons/md";
import { visualFiles } from "../../assets/Files/visual";
import background from "../../assets/background.png";
import GraphixItems from "../Components/GraphicItems";

function GraphicList() {
  return (
    <div className="relative w-full flex flex-col items-center">
      
      {/* Hero Section */}
      <div className="relative w-full md:w-5/6 lg:w-3/4 h-96 rounded-2xl bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 flex items-center justify-center overflow-hidden md:mt-12 p-8">
        <div className="text-center z-10">
          <p className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white">
            Visual Designs
          </p>
          <SiApostrophe className="inline-block mt-2 text-4xl text-white" />
        </div>
        <MdDesignServices className="absolute top-0 right-0 text-[180px] text-white opacity-20 pointer-events-none" />
      </div>

      {/* Graphic Items Grid */}
      <div className="w-full md:w-5/6 lg:w-3/4 -mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-0">
        {visualFiles.map((graphicItem, index) => (
          <GraphixItems key={index} graphix={graphicItem} />
        ))}
      </div>

      {/* Background Accent */}
      <img
        src={background}
        alt="decorative background"
        className="absolute bottom-0 rotate-180 w-full opacity-30 -z-10"
      />
    </div>
  );
}

export default GraphicList;
