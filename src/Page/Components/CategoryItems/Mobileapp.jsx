import React from "react";
import { TbDeviceMobileCode } from "react-icons/tb";
import graphicImg1 from "../../../assets/workImg/Telebirr.png";
import graphicImg2 from "../../../assets/workImg/Negat.png";
import graphicImg3 from "../../../assets/workImg/Souq.png";
import { MdOutlineArrowOutward } from "react-icons/md";
function Mobileapp() {
  return (
    <div className="h-[400px] min-w-[350px] max-w-[400px] relative bg-white  dark:bg-white/10 text-slate-700 dark:text-slate-200 hover:dark:bg-white/20 p-4 hover:shadow-xl rounded-2xl flex flex-col justify-between group">
      <div>
        <p className="text-lg font-semibold">Mobile Apps</p>
        <div className="flex flex-col items-start gap-2 mt-4">
          <div className=" flex items-center justify-center gap-2">
            <TbDeviceMobileCode />
            <p>Flutter</p>
          </div>
          <div className=" flex items-center justify-center gap-2">
            <TbDeviceMobileCode />
            <p>Java</p>
          </div>
        </div>
      </div>
      <div className="h-48 w-full backback group-hover:overflow-visible overflow-hidden rounded-xl">
        <div className="flex w-full h-full items-end justify-center">
          <img
            src={graphicImg1}
            alt=""
            className="w-1/4  -mr-4 mt-8 rounded-md translate-y-8 group-hover:-translate-y-6 duration-300 ease-in-out "
          />
          <img
            src={graphicImg2}
            alt=""
            className="w-1/3 z-10  rounded-md translate-y-8 group-hover:-translate-y-2  duration-300 ease-in-out"
          />
          <img
            src={graphicImg3}
            alt=""
            className="w-1/4 -ml-4 mt-8 rounded-md translate-y-8 group-hover:-translate-y-6 duration-300 ease-in-out"
          />
        </div>
      </div>
    </div>
  );
}

export default Mobileapp;
