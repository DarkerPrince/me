import React from 'react'
import { SiSlideshare } from "react-icons/si";
import { IoNewspaper } from "react-icons/io5";
import { FaLightbulb } from "react-icons/fa";
import { FaGears } from "react-icons/fa6";
import { BsShieldFillCheck } from "react-icons/bs";
import { PiArrowBendRightDownBold } from "react-icons/pi";

function DesignProcessItems({Primary}){
        return <div className=''>
      
      
      <ol class="relative text-gray-500 border-s border-gray-200 dark:border-gray-700 dark:text-gray-400">                  
          <li class="mb-10 ms-6">            
              <span class="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900">
                  <SiSlideshare className="" style={{ color: `${Primary}` }} />  
              </span>
              <h3 class="font-medium leading-tight text-white">Empathize</h3>
              <p class="text-xs text-slate-200">Understanding and relating to the users' perspective to create designs that address their needs, emotions, and aspirations effectively.</p>
          </li>
          <li class="mb-10 ms-6">
              <span class="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
              <IoNewspaper style={{ color: `${Primary}` }} className="" />
              </span>
              <h3 class="font-medium text-white leading-tight">Define</h3>
              <p class="text-xs text-slate-200">involves clearly stating the problem, goals, and requirements to guide the design process and create effective user interfaces.</p>
          </li>
          <li class="mb-10 ms-6">
              <span class="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
                  <FaLightbulb style={{ color: `${Primary}` }} className="" /> 
              </span>
              <h3 class="font-medium text-white leading-tight">Ideate</h3>
              <p class="text-xs text-slate-200">This includes generating creative solutions to address design goals and requirements.</p>
          </li>
          <li class="mb-10 ms-6">
              <span class="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
              <FaGears style={{ color: `${Primary}` }} className=" " />
              </span>
              <h3 class="font-medium text-white leading-tight">Prototype</h3>
              <p class="text-xs text-slate-200">creating interactive representations to simulate functionality, gather feedback, and refine the user experience before development.</p>
          </li>
          <li class="ms-6">
              <span class="absolute flex items-center bg-green-200 justify-center w-8 h-8  rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
              <BsShieldFillCheck className=" text-green-400" />
              </span>
              <h3 class="font-medium text-white leading-tight"> Test</h3>
              <p class="text-xs text-slate-200">User Test</p>
          </li>
          
      </ol>
              </div>
      }

export default DesignProcessItems;