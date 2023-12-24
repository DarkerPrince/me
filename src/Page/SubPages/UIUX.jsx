import React from "react";
import WorkItems from "../Components/WorkItems";
import { PiPencilCircleDuotone } from "react-icons/pi";
import { PiPenNibDuotone } from "react-icons/pi";
import blogFiles from "../../assets/Files/files";

function UIUX() {
  return (
    <div className="bg-[#fdfbf6] dark:bg-[#121212]"> 
    

    <div className="pt-12">
      <div className="relative   h-96 flex  backback rounded-2xl md:mx-12 p-12 ">
       <p className="text-6xl md:text-5xl lg:text-9xl font-bold text-slate-100"> UI/UX</p>
      <PiPencilCircleDuotone className="text-5xl text-slate-100"/>
       <PiPenNibDuotone className="text-[200px] absolute top-0 right-0 text-slate-50 opacity-25"/>
      </div>
    </div>
      
      
      <div className=" -mt-24 w-full flex items-center justify-center">

        <div className="grid grid-cols-1 md:grid-col-2 lg:grid-cols-3 px-4 lg:w-2/3 gap-6 mb-12 items-center justify-center">
          {
            blogFiles.map((item)=>{
             return <WorkItems blogItem={item}/>
            })
          }
        </div>
      </div>
    </div>
  );
}

export default UIUX;
