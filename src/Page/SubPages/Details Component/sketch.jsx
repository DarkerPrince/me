import React from 'react'
import { PiArrowBendRightDownBold } from "react-icons/pi";

function Sketch({image}) {
  return (
    (image.length !== 0)?
    <div className=" flex flex-col mt-12">
    <div className='flex items-end'>
      <p className="text-2xl font-bold">Sketches</p>
      <PiArrowBendRightDownBold/>
      </div>
    
    <div className="flex">
    {
      image.map((sketch,index)=>{
        return <img src={sketch} key={index} alt="wireframe" className="w-1/2" />;
      })
    }
    </div>
  </div>:<></>
  )
}

export default Sketch