import React from "react";
import heroImg from "../assets/hero.png";
import { AiFillBehanceCircle } from "react-icons/ai";
import { RiInstagramFill } from "react-icons/ri";
import { TbBrandDribbbleFilled } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";

function HeroSection() {
  return (
    <div className=" flex flex-col-reverse items-center justify-center  ">
      <div className="flex flex-col gap-2 items-center justify-center">
        <h1 className="text-4xl  lg:text-6xl font-extrabold  md:text-center dark:text-slate-200">
          Leul Sisay G.
        </h1>
        <p className="text-center text-slate-400 mb-6">
          UI/UX and Visual Designer | Front end & Mobile App Developer
        </p>
        <p className="text-center dark:text-slate-200 md:text-xl">
          A Habesha who's absolutely crazy about coding and design. My graphics
          and UI designs are like love notes from my heart. I create awesome web
          pages and mobile apps that feel like pure magic, all thanks to my
          talent for UI design.
        </p>
        <div className="flex gap-4">
          <AiFillBehanceCircle className="text-gray-300 text-3xl hover:text-Primary transition duration-300 ease-in-out" />
          <TbBrandDribbbleFilled className="text-gray-300 text-3xl hover:text-Primary transition duration-300 ease-in-out" />
          <RiInstagramFill className="text-gray-300 text-3xl hover:text-Primary transition duration-300 ease-in-out" />
          <div className="border-l border-gray-300 pl-4">
            <FaGithub className="text-gray-300 text-3xl hover:text-black dark:hover:text-white transition duration-300 ease-in-out" />
          </div>
        </div>
      </div>
      <img src={heroImg} alt="hero" className=" xl:w-1/2" />
    </div>
  );
}

export default HeroSection;
