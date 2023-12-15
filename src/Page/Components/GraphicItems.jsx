import React from 'react'
import mobile from "../../assets/mob.jpeg";

function GraphixItems({graphix}) {
  return (
    <div className="relative">
    <div class="absolute rotate-3 top-0 max-w-sm bg-white border border-gray-200 rounded-lg shadow">
      <img
        class="rounded-lg h-full w-full object-cover"
        src={graphix.imageID[0]}
        alt=""
      />
    </div>
    <div class="relative max-w-sm bg-white border border-gray-200 rounded-lg shadow">
      <img
        class="rounded-lg w-full"
        src={graphix.imageID[1]}
        alt=""
      />
      <div class="p-4 absolute bottom-0 rounded-b-lg bg-gradient-to-t from-slate-300 to-transparent w-full">
        <h5 class="font-bold tracking-tight text-gray-900">
          {graphix.title}
        </h5>
        
        <div className=" flex text-sm flex-wrap gap-3 mt-2">
        {
          graphix.tags.map((tag)=>{
            return <div className="text-bg rounded-sm px-2 text-xs bg-slate-600 text-slate-50">
            {tag}
          </div>;
          })
        }
        
        </div>
      </div>
    </div>
  </div>
  )
}

export default GraphixItems