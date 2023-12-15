import React from 'react'
import mobile from '../../assets/mob.jpeg'
import { AiFillBehanceCircle } from "react-icons/ai";
import { RiInstagramFill } from "react-icons/ri";
import { TbBrandDribbbleFilled } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";

function MyProfileCard() {
  return (
   

<div class="w-full bg-white max-w-sm bg-  rounded-lg md:shadow">
    <div class="flex flex-col items-center pb-10 pt-4">
        <img class=" w-16 md:w-24 h-16 md:h-24 mb-3 rounded-full shadow-lg" src={mobile} alt="Bonnie image"/>
        <h5 class="mb-1 text-lg lg:text-xl font-medium text-gray-900 ">Domino Pizza</h5>
        <span class="text-sm text-gray-500 ">UI/UX Designer</span>
        <div class="flex mt-4 md:mt-6">
        <div className='flex gap-4'>
              <AiFillBehanceCircle className='text-3xl'/>
              <TbBrandDribbbleFilled className='text-3xl' />
              <RiInstagramFill className='text-3xl'/>
              <div className='border-l border-gray-300 pl-4'>
              <FaGithub className='text-3xl'/>
              </div>
            </div>
        </div>
    </div>
</div>

  )
}

export default MyProfileCard