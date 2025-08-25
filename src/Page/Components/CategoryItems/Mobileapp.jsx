import React from "react";
import { TbDeviceMobileCode } from "react-icons/tb";
import graphicImg1 from "../../../assets/workImg/Telebirr.png";
import graphicImg2 from "../../../assets/workImg/Negat.png";
import graphicImg3 from "../../../assets/workImg/Souq.png";
import { MdOutlineArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";
import { PiBehanceLogo } from "react-icons/pi";
import { FaDribbble } from "react-icons/fa";

function Mobileapp() {
  return (
    <Link to={"Graphic"}>
      <div className="h-[400px] min-w-[350px] border-gray-400 border-2 max-w-[400px] relative bg-white dark:bg-white/10 text-slate-700 dark:text-slate-200  hover:dark:bg-white/20 p-4 hover:shadow-xl  rounded-2xl flex flex-col justify-between group">
        {/* <div>
          <p className="text-lg font-semibold">Visual Design</p>
          <div className="flex flex-col items-start gap-2 mt-4">
            <div className=" flex items-center justify-center gap-2">
              <PiPenNibStraightBold />
              <p>Flyer</p>
            </div>
            <div className=" flex items-center justify-center gap-2">
              <PiPenNibStraightBold />
              <p>Social Media Posts</p>
            </div>
            <div className=" flex items-center justify-center gap-2">
              <PiPenNibStraightBold />
              <p>Banners & Rollups</p>
            </div>
            <div className=" flex items-center justify-center gap-2">
              <PiPenNibStraightBold />

              <p>Cards & Booklets </p>
            </div>
          </div>
        </div> */}

        <div className="h-[400px] w-full mx-auto  rounded-xl flex justify-center self-center items-end">
          <img
            src={graphicImg1}
            alt=""
            className="w-1/3  -mr-6 mt-8 rounded-md translate-y-4 -rotate-6 group-hover:-translate-y-8 duration-300 ease-in-out "
          />
          <img
            src={graphicImg2}
            alt=""
            className="w-1/2 z-10  rounded-md translate-y-4 group-hover:-translate-y-2  duration-300 ease-in-out"
          />
          <img
            src={graphicImg3}
            alt=""
            className="w-1/3 -ml-6 mt-8 rounded-md translate-y-4 rotate-6 group-hover:-translate-y-8 duration-300 ease-in-out"
          />
        </div>

        <div
          className="bg-indigo-50 border bottom-20 rounded-lg border-gray-300 shadow-sm p-4 pl-5 pr-12 relative z-10"
          style={{
            clipPath:
              // Start at top-left → straight across → cut down diagonal tab on right → rectangle
              "polygon(0 0, 70% 0, 75% 20%, 100% 20%, 100% 100%, 0 100%)",
          }}
        >
          {/* Title */}
          <h2 className="text-gray-800 font-semibold text-sm mb-2 flex ">
            Mobile Applications Dev
            <GoArrowUpRight className="group-hover:translate-x-2 group-hover:-translate-y-1 duration-300 ease-in-out " />
          </h2>

          {/* Description */}
          <p className="text-gray-600 text-xs italic">
            User Friendly apps
          </p>
          <p className="text-gray-600 text-xs italic">
            Flutter
          </p>

          {/* Icon Right */}
          <div className="absolute flex gap-2 top-1/2 right-4 -translate-y-1/2 text-gray-700">
            {/* <FiFigma className="w-6 h-6" /> */}
            <PiBehanceLogo className="w-6 h-6" />
            <FaDribbble className="w-6 h-6" />
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Mobileapp;
