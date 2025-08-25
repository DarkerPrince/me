import React from "react";
import { MdWeb } from "react-icons/md";
import land from "../../../assets/workImg/land.png";
import getin from "../../../assets/workImg/uidash.png";
import getin1 from "../../../assets/workImg/getin.png";
import { MdOutlineArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";
import { PiBehanceLogo } from "react-icons/pi";
import { FaDribbble } from "react-icons/fa";

function Frontend() {
  return (
    <Link to={"Graphic"}>
      <div className="h-[400px] min-w-[350px] border-gray-400 border-2 max-w-[400px] relative bg-white dark:bg-white/10 text-slate-700 dark:text-slate-200  hover:dark:bg-white/20 p-4 hover:shadow-xl  rounded-2xl flex flex-col justify-between group">
        <div className="h-[400px] w-full mx-auto  rounded-xl flex justify-center self-center items-end">
          <img
            src={land}
            alt=""
            className="w-1/2  -mr-6 mt-8 absolute right-4 -top-3 rounded-md translate-y-4 -rotate-3 group-hover:-rotate-6 group-hover:-translate-y-8 duration-500 ease-in-out "
          />
          <img
            src={getin}
            alt=""
            className="absolute w-3/4 bottom-4 z-10  rounded-md translate-y-4 group-hover:-translate-y-2  duration-300 ease-in-out"
          />
          <img
            src={getin1}
            alt=""
            className="w-2/3 -ml-6 mt-8 z-0 left-3 top-3 absolute rounded-md translate-y-4 rotate-6 group-hover:rotate-12 group-hover:-translate-y-4 duration-500 ease-in-out"
          />
        </div>
        <div
          className="relative backback z-10 h-36 p-4 pl-6 pr-14 rounded-xl shadow-md"
          style={{
            borderColor: "#d97706", // Darker yellow-orange border
            color: "#1f2937", // Dark gray text
            clipPath: `
                    polygon(
                      0 0,          /* Top-left */
                      30% 0,        /* Start tab */
                      35% 15%,      /* Tab drop */
                      100% 15%,     /* Top-right of tab */
                      100% 100%,    /* Bottom-right */
                      0 100%        /* Bottom-left */
                    )
                  `,
          }}
        >


          {/* Title */}
          <h2 className="text-gray-800 font-semibold text-sm my-2 flex ">
            Mobile Applications Dev
            <GoArrowUpRight className="group-hover:translate-x-2 group-hover:-translate-y-1 duration-300 ease-in-out " />
          </h2>

          {/* Description */}
          <p className="text-gray-600 text-xs italic">User Friendly apps</p>
          <p className="text-gray-600 text-xs italic">Flutter</p>

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

export default Frontend;
