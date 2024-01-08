import React from "react";
import { SiSlideshare } from "react-icons/si";
import { IoNewspaper } from "react-icons/io5";
import { FaLightbulb } from "react-icons/fa";
import { FaGears } from "react-icons/fa6";
import { BsShieldFillCheck } from "react-icons/bs";
import { PiArrowBendRightDownBold } from "react-icons/pi";

function DesignProcess() {
  return (
    <div className=' backback rounded-2xl px-8 py-4'>
    <div className="flex flex-col items-start gap-4 text-slate-800 dark:text-slate-200">
      <div className='flex flex-col items-start'>
      <p className="text-2xl font-bold">Design Process</p>
      <div className="w-1/2 border-b-2 left-0 border-blue-500"></div>
      </div>
      <div className="flex flex-wrap items-st justify-between gap-8 items-center">
        <div className="rounded-md flex flex-col items-center gap-6 p-2">
          <SiSlideshare className="text-6xl text-white/50" />
          <p>1. Empathize</p>
        </div>
        <div className="rounded-md   flex flex-col items-center gap-6 p-2">
          <IoNewspaper className="text-6xl text-white/50" />
          <p>2. Define</p>
        </div>
        <div className="rounded-md flex flex-col items-center gap-6 p-2">
          <FaLightbulb className="text-6xl text-white/50" />
          <p>3. Ideate</p>
        </div>
        <div className="rounded-md flex flex-col items-center gap-6 p-2">
          <FaGears className="text-6xl text-white/50" />
          <p>4. Prototype</p>
        </div>
        <div className="rounded-md flex flex-col items-center gap-6 p-2">
          <BsShieldFillCheck className="text-6xl text-green-400/70" />
          <p>Final Test</p>
        </div>
      </div>
    </div>
    </div>
  );
}

export default DesignProcess;
