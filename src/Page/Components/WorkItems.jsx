import React from 'react'
import mobile from '../../assets/mob.jpeg'
import { Link } from 'react-router-dom'

function WorkItems({blogItem}) {
  return (

 <Link to={'Detail'}>

<div class=" relative max-w-sm p-4 h-full overflow-hidden group rounded-xl ">
    
    <span class="absolute top-10 -z-10 h-10 w-10 rounded-full backbac dark:bg-white/20 opacity-10 transition-all duration-500 ease-in-out group-hover:scale-[30]"></span>
    <img class="h-56 w-full object-cover rounded-lg" src={blogItem.imageID[0]} alt="" />
    <div class="mt-4">
        
          <div className='w-full'>
            <h5 class="mb-2 truncate text-gray-900 dark:text-slate-200">{blogItem.title}</h5>
          </div>
        
        {/* <p class="mb-3 text-sm font-normal text-gray-700 ">{blogItem.content}</p> */}
        <div className=" flex text-sm flex-wrap gap-2 mt-4">
                {
                  blogItem.tags.map((tagItem)=>{
                    return   <div className="text-bg rounded-sm px-2 text-xs bg-slate-100 text-slate-500 dark:bg-slate-50/20 dark:text-slate-400">
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