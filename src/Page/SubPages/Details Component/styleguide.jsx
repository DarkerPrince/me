import React from 'react'
import persona from "../../../assets/persona.png";
import sketch1 from "../../../assets/sketch1.png";
import sketch2 from "../../../assets/sketch2.png";
import wireframe from "../../../assets/wireframe.png";

function StyleGuide() {
  return (
    <div className="gap-12">
      <p className="text-xl font-bold">Style Guide</p>
      <div className="flex flex-col md:flex-row items-center gap-4 md:gap-12 mb-6">
        <div className="flex flex-col items-center">
          <p className="text-9xl font-bold">Aa</p>
          <p className="text-xl">Poppins</p>
        </div>
        <div className="flex gap-12 bg-slate-100 rounded-lg items-center p-4 md:p-12">
          <div className="flex flex-col justify-center">
            <p className='text-sm md:text-base'>A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</p>
            <p className="lowercase text-sm md:text-base">
              A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
            </p>
          </div>
          <div className="flex flex-col">
            <p className="font-bold">Bold</p>
            <p className="font-semibold">Semibold</p>
            <p className="font-medium">Medium</p>
            <p className="">Regular</p>
          </div>
        </div>
      </div>
      <hr />
      {/* color plate */}
      <div className="flex flex-wrap gap-4 my-6">
        <div className="bg-white shadow-md p-4 flex flex-col rounded-md items-center gap-2">
          <div className="w-24 h-24 bg-red-500 rounded-lg"></div>
          <p className="text-xs font-semibold">#FF00FF</p>
          <p className="text-xs font-bold">Primary Color</p>
        </div>
        <div className="bg-white shadow-md p-4 flex flex-col rounded-md items-center gap-2">
          <div className="w-24 h-24 bg-violet-400 rounded-lg"></div>
          <p className="text-xs font-semibold">#FF00FF</p>
          <p className="text-xs font-bold">Primary Color</p>
        </div>
        <div className="bg-white shadow-md p-4 flex flex-col rounded-md items-center gap-2">
          <div className="w-24 h-24 bg-blue-500 rounded-lg"></div>
          <p className="text-xs font-semibold">#FF00FF</p>
          <p className="text-xs font-bold">Primary Color</p>
        </div>
        <div className="bg-white shadow-md p-4 flex flex-col rounded-md items-center gap-2">
          <div className="w-24 h-24 bg-purple-500 rounded-lg"></div>
          <p className="text-xs font-semibold">#FF00FF</p>
          <p className="text-xs font-bold">Primary Color</p>
        </div>
        <div className="bg-white shadow-md p-4 flex flex-col rounded-md items-center gap-2">
          <div className="w-24 h-24 bg-gray-500 rounded-lg"></div>
          <p className="text-xs font-semibold">#FF00FF</p>
          <p className="text-xs font-bold">Primary Color</p>
        </div>
        <div className="bg-white shadow-md p-4 flex flex-col rounded-md items-center gap-2">
          <div className="w-24 h-24 bg-yellow-500 rounded-lg"></div>
          <p className="text-xs font-semibold">#FF00FF</p>
          <p className="text-xs font-bold">Primary Color</p>
        </div>
      </div>
      <p className="text-2xl">User Persona</p>
      <div className="rounded-lg bg-slate-100 shadow-inner flex w-full overflow-x-scroll overflow-visible ">
  <img src={persona} alt="persona" className="" />
  <img src={persona} alt="persona" className="" />
  <img src={persona} alt="persona" className="" />
  <img src={persona} alt="persona" className="" />
</div>
<div className=" flex flex-col mt-12">
  <p className="text-2xl">Sketch</p>
  <div className="flex">
  <img src={sketch1} alt="wireframe" className="w-1/2" />
  <img src={sketch2} alt="wireframe" className="w-1/2" />
  </div>
</div>
<div className=" flex flex-col mt-12">
  <p className="text-2xl">Wireframe</p>
  <div className="flex">
  <img src={wireframe} alt="wireframe" className="" />
  </div>
</div>
    </div>
  )
}

export default StyleGuide