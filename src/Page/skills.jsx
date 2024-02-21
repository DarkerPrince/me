import React from "react";
import reactLogo from "../assets/skills/react.png";
import flutterLogo from "../assets/skills/flutter.png";
import tailwindLogo from "../assets/skills/tailwind.png";
import htmlLogo from "../assets/skills/html.png";
import cssLogo from "../assets/skills/css.png";
import jsLogo from "../assets/skills/js.png";

import figma from "../assets/skills/figma.png";
import xd from "../assets/skills/xd.png";
import sketch from "../assets/skills/sketch.png";
import Ps from "../assets/skills/ps.png";
import Ai from "../assets/skills/ai.png";
import Pr from "../assets/skills/pr.png";
import divider from "../assets/divider.svg";

function Skills() {
  return (
    <div className="my-32 flex flex-col items-center ">
      <div className="flex relative items-center flex-col gap-4 my-12 py-2 group">
        <p className="text-2xl font-bold font-leuleScri dark:text-slate-200">
          {" "}
          Designing Skills
        </p>
        <div className="flex gap-12 flex-wrap items-center justify-center">
          <img src={figma} alt="flutterLogo" className="md:h-16 h-12" />
          <img src={xd} alt="reactLogo" className="md:h-16 h-12" />
          <img src={sketch} alt="tailwind" className="md:h-16 h-12" />
          <img src={Ps} alt="html" className="md:h-16 h-12" />
          <img src={Ai} alt="css" className="md:h-16 h-12" />
          <img src={Pr} alt="jsLogo" className="md:h-16 h-12" />
        </div>
        <div className="absolute flex flex-col invisible group-hover:visible transition-all duration-100 ease-in-out items-center justify-center w-full h-full  backdrop-blur-sm bg-[#fdfbf6]/70 dark:bg-[#121212]/70">
          <p className=" text-2xl font-light font-leuleScri text-center dark:text-slate-200">
            "Everything should be made as simple as possible, but not simpler."
          </p>
          <p className=" text-2xl font-semibold font-leuleScri text-Secondary">
            "Albert Einstein"
          </p>
        </div>
      </div>
      <img src={divider} alt="" className="h-12" />
      <div className=" relative flex items-center flex-col gap-4 my-12 group">
        <p className="text-2xl font-bold dark:text-slate-200">
          Programming Skills
        </p>

        <div className="flex flex-wrap items-center justify-center gap-12">
          <img src={flutterLogo} alt="flutterLogo" className="md:h-16 h-12" />
          <img src={reactLogo} alt="reactLogo" className="md:h-16 h-12" />
          <img src={tailwindLogo} alt="tailwind" className="md:h-16 h-12" />
          <img src={htmlLogo} alt="html" className="md:h-16 h-12" />
          <img src={cssLogo} alt="css" className="md:h-16 h-12" />
          <img src={jsLogo} alt="jsLogo" className="md:h-16 h-12" s />
        </div>
        <div className="absolute flex invisible group-hover:visible transition-all duration-100 ease-in-out items-center justify-center w-full h-full  backdrop-blur-sm bg-[#fdfbf6]/70 dark:bg-[#121212]/70">
          <p className=" text-2xl font-semibold text-center dark:text-slate-200">
            Code that is Effective, Readable, and Maintainable
          </p>
        </div>
      </div>
    </div>
  );
}

export default Skills;
