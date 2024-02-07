import React from 'react'
import { PiArrowBendRightDownBold } from "react-icons/pi";



function Wireframe({image}) {
  return (
    (image.length !== 0)?
    <div className=" flex flex-col mt-12">
    <div className='flex items-end'>
      <p className="text-2xl font-bold">Wireframes</p>
      <PiArrowBendRightDownBold/>
      </div>
    <div className="flex relative">
    {
      image.map((wireframe,index)=>{
        return <img src={wireframe} key={index} alt="wireframe" className="" />;
      })
    }
    <div className='absolute w-full h-full z-10 bg-gradient-to-b dark:from-black dark:via-transparent dark:to-black from-white via-transparent to-white '></div>
    </div>
  </div>:<></>
  )
}

export default Wireframe