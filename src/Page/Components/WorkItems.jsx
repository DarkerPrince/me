import React from 'react'
import mobile from '../../assets/mob.jpeg'
import { Link } from 'react-router-dom'

function WorkItems({blogItem}) {
  return (

 <Link to={'Detail'}>

<div class="max-w-sm bg-white h-full border-gray-200 rounded-lg shadow">
    <a href="#">
        <img class="rounded-t-lg h-56 w-full object-cover" src={blogItem.imageID[0]} alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 font-bold tracking-tight text-gray-900">{blogItem.title}</h5>
        </a>
        {/* <p class="mb-3 text-sm font-normal text-gray-700 ">{blogItem.content}</p> */}
        <div className=" flex text-sm flex-wrap gap-1 mt-4">
                {
                  blogItem.tags.map((tagItem)=>{
                    return   <div className="text-bg rounded-sm px-2 text-xs bg-slate-600 text-slate-50">
                    {tagItem}
                  </div>;
                  })
                }
             
            </div>
    </div>
</div>
 </Link>

  )
}

export default WorkItems