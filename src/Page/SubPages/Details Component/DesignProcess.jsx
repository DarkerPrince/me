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
      <div className='flex items-end'>
      <p className="text-2xl font-bold">Design Process</p>
      
      </div>
      <div className="flex flex-wrap items-start justify-start gap-4">
        <div className="h-40 w-40 rounded-md bg-white dark:bg-white/10 shadow-md flex flex-col items-center gap-6 p-2">
          <p>1. Empathize</p>
          <SiSlideshare className="text-6xl text-slate-300" />
        </div>
        <div className="h-40 w-40 rounded-md bg-white dark:bg-white/10 shadow-md flex flex-col items-center gap-6 p-2">
          <p>2. Define</p>
          <IoNewspaper className="text-6xl text-slate-300" />
        </div>
        <div className="h-40 w-40 rounded-md bg-white dark:bg-white/10 shadow-md flex flex-col items-center gap-6 p-2">
          <p>3. Ideate</p>
          <FaLightbulb className="text-6xl text-slate-300" />
        </div>
        <div className="h-40 w-40 rounded-md bg-white dark:bg-white/10 shadow-md flex flex-col items-center gap-6 p-2">
          <p>4. Prototype</p>
          <FaGears className="text-6xl text-slate-300" />
        </div>
        <div className="h-40 w-40 rounded-md bg-white dark:bg-white/10 shadow-md flex flex-col items-center gap-6 p-2">
          <p>Final Test</p>
          <BsShieldFillCheck className="text-6xl text-green-400" />
        </div>
      </div>
    </div>
    </div>
  );
}

export default DesignProcess;
