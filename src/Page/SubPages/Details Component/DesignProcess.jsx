import React from "react";
import { SiSlideshare } from "react-icons/si";
import { IoNewspaper } from "react-icons/io5";
import { FaLightbulb } from "react-icons/fa";
import { FaGears } from "react-icons/fa6";
import { BsShieldFillCheck } from "react-icons/bs";

function DesignProcess() {
  return (
    <div className="flex flex-col mt-4 items-start gap-2">
      <p className="text-lg font-bold">My Design Process</p>
      <div className="flex flex-wrap gap-4">
        <div className="h-40 w-40 rounded-md bg-white dark:bg-white/10 shadow-md flex flex-col items-center gap-6 p-2">
          <p>Empathize</p>
          <SiSlideshare className="text-6xl text-slate-300" />
        </div>
        <div className="h-40 w-40 rounded-md bg-white dark:bg-white/10 shadow-md flex flex-col items-center gap-6 p-2">
          <p>Define</p>
          <IoNewspaper className="text-6xl text-slate-300" />
        </div>
        <div className="h-40 w-40 rounded-md bg-white dark:bg-white/10 shadow-md flex flex-col items-center gap-6 p-2">
          <p>Ideate</p>
          <FaLightbulb className="text-6xl text-slate-300" />
        </div>
        <div className="h-40 w-40 rounded-md bg-white dark:bg-white/10 shadow-md flex flex-col items-center gap-6 p-2">
          <p>Prototype</p>
          <FaGears className="text-6xl text-slate-300" />
        </div>
        <div className="h-40 w-40 rounded-md bg-white dark:bg-white/10 shadow-md flex flex-col items-center gap-6 p-2">
          <p>Test</p>
          <BsShieldFillCheck className="text-6xl text-green-400" />
        </div>
      </div>
    </div>
  );
}

export default DesignProcess;
