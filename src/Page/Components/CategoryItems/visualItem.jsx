import React from "react";
import { PiPenNibStraightBold } from "react-icons/pi";
import graphicImg1 from "../../../assets/workImg/graphic1.png";
import graphicImg2 from "../../../assets/workImg/graphic2.png";
import graphicImg3 from "../../../assets/workImg/graphic3.png";
import { MdOutlineArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";

function VisualItem() {
  return (
    <Link to={"Graphic"}>
      <div className="h-[400px] min-w-[350px] max-w-[400px] relative bg-white dark:bg-white/10 text-slate-700 dark:text-slate-200  hover:dark:bg-white/20 p-4 hover:shadow-xl  rounded-2xl flex flex-col justify-between group">
        <div>
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
        </div>
        <div className="h-48 w-full backback  overflow-hidden hover:overflow-visible rounded-xl flex justify-center self-center items-end">
          <div className="flex w-full  items-end justify-between  ">
            <img
              src={graphicImg1}
              alt=""
              className="w-1/3 -ml-4 -rotate-6 shadow-md rounded-md group-hover:-translate-y-8 duration-300 ease-in-out "
            />
            <img
              src={graphicImg2}
              alt=""
              className="w-1/2 -ml-6 -rotate-3 shadow-md rounded-md group-hover:-translate-y-10 group-hover:scale-110 duration-200 ease-in-out"
            />
            <img
              src={graphicImg3}
              alt=""
              className="w-1/3 -ml-6 rotate-6 shadow-md rounded-md group-hover:-translate-y-8 duration-300 ease-in-out"
            />
          </div>
        </div>
      </div>
    </Link>
  );
}

export default VisualItem;
