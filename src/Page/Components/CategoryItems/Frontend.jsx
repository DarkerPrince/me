import React from "react";
import { MdWeb } from "react-icons/md";
import land from "../../../assets/workImg/land.png";
import getin from "../../../assets/workImg/getin.png";
import { MdOutlineArrowOutward } from "react-icons/md";

function Frontend() {
  return (
    <div className="h-[400px] min-w-[350px] max-w-[400px] relative bg-white  dark:bg-white/10 text-slate-700 dark:text-slate-200 hover:dark:bg-white/20 hover:shadow-xl p-4 group  rounded-2xl flex flex-col justify-between ">
      <div>
        <p className="text-lg font-semibold">Front end Projects</p>
        <div className="flex flex-col items-start gap-2 mt-4">
          <div className=" flex items-center justify-center gap-2">
            <MdWeb />
            <p>React</p>
          </div>
          <div className=" flex items-center justify-center gap-2">
            <MdWeb />
            <p>Next Js</p>
          </div>
          <div className=" flex items-center justify-center gap-2">
            <MdWeb />
            <p>Tailwind</p>
          </div>
          <div className=" flex items-center justify-center gap-2">
            <MdWeb />
            <p>Html / Css</p>
          </div>
        </div>
      </div>
      <div className="h-48 w-full backback overflow-hidden rounded-xl flex justify-center self-center items-end ">
        <div className="flex w-full h-full items-start py-4 justify-center">
          <img
            src={land}
            alt=""
            className=" w-2/3 group-hover:-translate-y-16 duration-300 ease-in-out"
          />
          <img
            src={getin}
            alt=""
            className="w-1/2 -ml-12 rounded-xl mt-12 shadow-lg group-hover:-translate-y-4 duration-300 ease-in-out"
          />
        </div>
      </div>
    </div>
  );
}

export default Frontend;
