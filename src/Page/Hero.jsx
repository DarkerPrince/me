import React, { useEffect, useRef } from "react";
import heroImg from "../assets/hero.png";
import { AiFillBehanceCircle } from "react-icons/ai";
import { TbBrandDribbbleFilled } from "react-icons/tb";
import { FaGithub, FaTelegram } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
import FunButton from "./Components/ContactmeButton";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/src/ScrollTrigger";


function HeroSection() {
  const handleEmailClick = (e) => {
    e.preventDefault();
    window.location.href = "mailto:leulsisay42@gmail.com";
  };



  const apps = useRef(null);
  const nameField = useRef(null);
  let tl = gsap.timeline();

  useGSAP(()=>{
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(apps.current, {
      x: 300, 
      duration:3,
      rotation: 360,
      scrollTrigger: {
        trigger: apps.current,
        toggleActions:"restart none none none",
        start: 'center center',
        end: 'bottom top',
        scrub: true
      }
    });

    tl.set(".namefield",{
      opacity:0,
      y:50,
    }).set(".subtitle",{
      opacity:0,
      y:50,
    }).to(".namefield",{
      opacity:1,
      ease:"power1.inOut",
      y:0,
      duration:1
    }).to(".subtitle",{
      opacity:1, 
      ease:"power1.inOut",
      y:0,
      duration:1
    })
  })

  return (
    <div className=" flex flex-col-reverse items-center justify-center  ">
      <div className="flex flex-col gap-2 items-center justify-center ">
        
        <h1 className="namefield text-4xl  lg:text-6xl font-extrabold  md:text-center dark:text-slate-200">
          Leul Sisay G.
        </h1>
        <p className="subtitle text-center text-slate-400 mb-6">
          UI/UX and Visual Designer | Front end & Mobile App Developer
        </p>
        <p className="subtitle text-center dark:text-slate-200 md:text-xl">
          Crazy about Designing and Coding. My graphics
          and UI designs are like love notes from my heart. I create awesome web
          pages and mobile apps that feel like pure magic.
        </p>
        <div className="flex gap-4 mt-4 md:mt-6 z-10 mb-4">
          <a href="https://www.behance.net/luel_sisay">
            <AiFillBehanceCircle className="text-slate-500 hover:text-Primary transition-colors duration-300 text-3xl" />
          </a>
          <a href="https://dribbble.com/PrinceMag">
            <TbBrandDribbbleFilled className="text-slate-500 hover:text-Primary transition-colors duration-300 text-3xl" />
          </a>
          <a href="mailto:luelsisay42@gmail.com">
            <MdAttachEmail className="text-slate-500 hover:text-Primary transition-colors duration-300 text-3xl" />
          </a>
          <a href="https://github.com/DarkerPrince">
            <div className="border-l border-gray-300 pl-4">
              <FaGithub className="text-slate-500 hover:text-Primary transition-colors duration-300 text-3xl" />
            </div>
          </a>
        </div>
        <div ref={apps} className="h-7 w-7 bg bg-green-500 "> Ref Current</div>
        <FunButton />
      </div>
      <img src={heroImg} alt="hero" className="xl:w-1/2" />
    </div>
  );
}

export default HeroSection;
