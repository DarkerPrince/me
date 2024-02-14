import React from "react";
import { SiApostrophe } from "react-icons/si";
import { MdDesignServices } from "react-icons/md";
import {visualFiles} from "../../assets/Files/visual"
import background from '../../assets/background.png'
import GraphixItems from "../Components/GraphicItems";

function GraphicList() {
  return (
    <div className="relative">
      <div className="relative -z-10  h-96 flex  backback rounded-2xl md:mx-12 md:mt-12 p-12">
        <p className="text-6xl md:text-5xl lg:text-9xl font-bold text-slate-100">
          Visual Designs
        </p>
        <SiApostrophe className="text-5xl text-slate-100" />
        <MdDesignServices className="text-[200px] absolute top-0 right-0 text-slate-50 opacity-25" />
      </div>

      <div className="z-10 -mt-24 w-full flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-col-2 lg:grid-cols-3 px-4 lg:w-2/3 gap-6 mb-12 items-center justify-center">
          {
            visualFiles.map((graphicItem,index)=>{
              return <GraphixItems graphix={graphicItem} key={index}/>;
            })
          }``
        </div>
      </div>
      <img src={background} alt="back" className='absolute rotate-180 mx-auto bottom-0 -z-10 self-center' />
    </div>
  );
}

export default GraphicList;
