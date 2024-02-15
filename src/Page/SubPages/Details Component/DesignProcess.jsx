import React from "react";
import DesignProcessItems from "./DesignProcessItems";

function DesignProcess({primary,paletts}) {
  const gradientStyle = {
    background: `linear-gradient(to right bottom, ${primary}, ${paletts[0]})`,
  };
  return (
    <div style={gradientStyle} className=' rounded-2xl px-8 py-4'>
    <div className="flex flex-col items-start gap-4 text-slate-800 dark:text-slate-200">
      <div className='flex flex-col items-start w-fit'>
      <p className="text-2xl font-bold text-slate-800">Design Process</p>
      <div className="w-1/2 border-slate-800 border-b-4 rounded-lg left-0"></div>
      </div>
      <div className="">
      <DesignProcessItems Primary={primary}/>
      </div>
    
    </div>
    </div>
  );
}



export default DesignProcess;
