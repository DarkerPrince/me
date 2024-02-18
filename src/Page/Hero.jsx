import React from "react";
import heroImg from "../assets/hero.png";
import { AiFillBehanceCircle } from "react-icons/ai";
import { TbBrandDribbbleFilled } from "react-icons/tb";
import { FaGithub, FaTelegram } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import FunButton from "./Components/ContactmeButton";

function HeroSection() {
  return (
    <div className=" flex flex-col-reverse items-center justify-center  ">
      <div className="flex flex-col gap-2 items-center justify-center ">
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
        <div className="flex gap-4 mt-4 md:mt-6 z-10 mb-4">
          <a href="https://www.behance.net/luel_sisay">
            <AiFillBehanceCircle className="text-slate-500 hover:text-Primary transition-colors duration-300 text-3xl" />
          </a>
          <a href="https://dribbble.com/PrinceMag">
            <TbBrandDribbbleFilled className="text-slate-500 hover:text-Primary transition-colors duration-300 text-3xl" />
          </a>
          <a href="https://github.com/DarkerPrince">
            <div className="border-l border-gray-300 pl-4">
              <FaGithub className="text-slate-500 hover:text-Primary transition-colors duration-300 text-3xl" />
            </div>
          </a>
        </div>
        <FunButton />
      </div>
      <img src={heroImg} alt="hero" className=" xl:w-1/2" />
    </div>
  );
}

export default HeroSection;
