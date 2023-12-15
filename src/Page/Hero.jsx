import React from 'react'
import heroImg from '../assets/hero.png'
import { AiFillBehanceCircle } from "react-icons/ai";
import { RiInstagramFill } from "react-icons/ri";
import { TbBrandDribbbleFilled } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";

function HeroSection() {
  return (
    <div className=' flex flex-col-reverse items-center justify-center '>
    <div className='flex flex-col gap-2 items-center justify-center'>
        <h1 className='text-8xl font-extrabold md:text-left text-center'>Mr. Dominos Pizza</h1>
        <p className='md:text-left text-center'>UI Designer, Front end Developer & Mobile App Developer</p>
        <div className='flex gap-4'>
          <AiFillBehanceCircle className='text-3xl'/>
          <TbBrandDribbbleFilled className='text-3xl' />
          <RiInstagramFill className='text-3xl'/>
          <div className='border-l border-gray-300 pl-4'>
          <FaGithub className='text-3xl'/>
          </div>
        </div>
    </div>
    <img src={heroImg} alt="hero" className='w-1/2'/>
    </div>
  );
}

export default HeroSection