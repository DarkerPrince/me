import React from 'react'
import mobile from "../../assets/mob.jpeg";

function GraphixItems({graphix}) {
  return (
    <div class="relative max-w-sm rounded-lg shadow h-64 w-full">
      <img
        class="rounded-lg w-full h-64 object-cover"
        src={graphix.otherImg[0]}
        alt=""
      />
      <div class="p-4 absolute bottom-0 rounded-b-lg bg-gradient-to-t from-black to-transparent w-full">
        <h5 class="font-semibold tracking-tight text-white">
          {graphix.title}
        </h5>
        
        <div className=" flex text-sm flex-wrap gap-3 mt-2">
        {
          graphix.tag.map((tag)=>{
            return <div className="text-bg rounded-sm px-2 text-xs bg-slate-600 text-slate-50">
            {tag}
          </div>;
          })
        }
        
        </div>
      </div>
    </div>
  )
}

export default GraphixItems