import React from 'react'
import { SiSlideshare } from "react-icons/si";
import { IoNewspaper } from "react-icons/io5";
import { FaLightbulb } from "react-icons/fa";
import { FaGears } from "react-icons/fa6";
import { BsShieldFillCheck } from "react-icons/bs";
import { PiArrowBendRightDownBold } from "react-icons/pi";

function DesignProcessItems({Primary}){
        return <div className=''>
      
      
      <ol className="relative text-gray-800 border-s border-gray-200 dark:border-gray-700 dark:text-gray-400">                  
          <li className="mb-10 ms-6">            
              <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
                  <SiSlideshare className="" />  
              </span>
              <h3 className="font-semibold leading-tight text-slate-800 dark:text-slate-400">Empathize</h3>
              <p className="text-xs">Understanding and relating to the users' perspective to create designs that address their needs, emotions, and aspirations effectively.</p>
          </li>
          <li className="mb-10 ms-6">
              <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
              <IoNewspaper className="" />
              </span>
              <h3 className="font-semibold text-slate-800 dark:text-slate-400 leading-tight">Define</h3>
              <p className="text-xs">involves clearly stating the problem, goals, and requirements to guide the design process and create effective user interfaces.</p>
          </li>
          <li className="mb-10 ms-6">
              <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
                  <FaLightbulb className="" /> 
              </span>
              <h3 className="font-semibold text-slate-800 dark:text-slate-400 leading-tight">Ideate</h3>
              <p className="text-xs">This includes generating creative solutions to address design goals and requirements.</p>
          </li>
          <li className="mb-10 ms-6">
              <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
              <FaGears className=" " />
              </span>
              <h3 className="font-semibold text-slate-800 dark:text-slate-400 leading-tight">Prototype</h3>
              <p className="text-xs">creating interactive representations to simulate functionality, gather feedback, and refine the user experience before development.</p>
          </li>
          <li className="ms-6">
              <span className="absolute flex items-center bg-green-200 justify-center w-8 h-8  rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
              <BsShieldFillCheck className=" text-green-400" />
              </span>
              <h3 className="font-semibold text-slate-800 dark:text-slate-400 leading-tight"> Test</h3>
              <p className="text-xs">User Test</p>
          </li>
          
      </ol>
              </div>
      }

export default DesignProcessItems;