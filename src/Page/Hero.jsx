import React from 'react'
import heroImg from '../assets/hero.png'
import { AiFillBehanceCircle } from "react-icons/ai";
import { RiInstagramFill } from "react-icons/ri";
import { TbBrandDribbbleFilled } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";

function HeroSection() {
  return (
    <div className=' flex flex-col-reverse items-center justify-center '>
    <div className='flex flex-col gap-2 items-center justify-center md:w-1/2'>
        <h1 className='text-4xl  lg:text-6xl font-extrabold  md:text-center'>Mr. Dominos Pizza</h1>
        <p className='text-center'>UI/UX and Visual Designer | Front end & Mobile App Developer</p>
        <p className='text-center '>I'm a Habesha who's absolutely crazy about coding and design. My graphics and UI designs are like love notes from my heart. I create awesome web pages and mobile apps that feel like pure magic, all thanks to my talent for UI design. And guess what? I'm also building my very own event platform. Get ready for the wild ride of a lifetime!</p>
        <div className='flex gap-4'>
          <AiFillBehanceCircle className='text-3xl'/>
          <TbBrandDribbbleFilled className='text-3xl' />
          <RiInstagramFill className='text-3xl'/>
          <div className='border-l border-gray-300 pl-4'>
          <FaGithub className='text-3xl'/>
          </div>
        </div>
    </div>
    <img src={heroImg} alt="hero" className='lg:w-1/2 xl:w-1/4'/>
    </div>
  );
}

export default HeroSection