import React from "react";

import { BsCardHeading } from "react-icons/bs";

import dash from "../../../assets/workImg/uidash.png";
import mob from "../../../assets/workImg/Negat.png";
import { Link } from "react-router-dom";

function UiItems() {
  return (
    <Link to={"UIUX"}>
      <div className="h-[400px] min-w-[350px] max-w-[400px] relative bg-white  dark:bg-white/10 text-slate-700 dark:text-slate-200 hover:dark:bg-white/20 p-4 hover:shadow-xl rounded-2xl flex flex-col justify-between group">
        <div>
          <p className="text-lg font-semibold">UI Designs Projects</p>
          <div className="flex flex-col items-start gap-2 mt-4">
            <div className=" flex items-center justify-center gap-2">
              <BsCardHeading />
              <p>Websites</p>
            </div>
            <div className=" flex items-center justify-center gap-2">
              <BsCardHeading />
              <p>Mobile App Designs</p>
            </div>
            <div className=" flex items-center justify-center gap-2">
              <BsCardHeading />
              <p>Data Analytics Design</p>
            </div>
            <div className=" flex items-center justify-center gap-2">
              <BsCardHeading />
              <p>Dashboard Designs</p>
            </div>
          </div>
        </div>
        <div className="h-48 w-full backback overflow-hidden  group-hover:overflow-visible rounded-xl flex items-end  ">
          <div className="flex w-full items-end justify-center align-middle ">
            <img
              src={dash}
              alt=""
              className="w-3/4 translate-y-8 group-hover:-translate-y-0 duration-300 ease-in-out"
            />
            <img
              src={mob}
              alt=""
              className="w-1/4 shadow-md rounded-md -ml-6 translate-y-8 group-hover:-translate-y-0 group-hover:rotate-6 duration-300 ease-in-out"
            />
          </div>
        </div>
      </div>
    </Link>
  );
}

export default UiItems;
