import React from "react";
import logo from "../assets/mylogo.svg";
import { BiCategoryAlt } from "react-icons/bi";
import { CgDetailsMore } from "react-icons/cg";
import { TbListDetails } from "react-icons/tb";
import "../App.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Navigator() {
  return (
    <div className="backdrop-blur-0   self-center rounded-md px-4 py-2 mt-6  flex items-center justify-between w-full">
      <img src={logo} alt="Logo" className="h-16 w-16  object-cover" />
      <div className="flex gap-8 items-center">
        <a
          href="#work-section"
          class="group text-slate-500 dark:text-slate-200 transition duration-300"
        >
          <BiCategoryAlt/>
          Work
          <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-Primary"></span>
        </a>
        <a
          href="#experience"
          class="group text-slate-500 dark:text-slate-200 transition duration-300"
        >
          <TbListDetails/>
          Experience
          <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-Primary"></span>
        </a>
        {/* <Link
          href="/Resume"
          class="group text-slate-500 dark:text-slate-200 transition duration-300"
        >
          <CgDetailsMore/>
          Resume
          <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-Primary"></span>
        </Link> */}
      </div>
    </div>
  );
}

export default Navigator;
