import land from "../../../assets/workImg/land.png";
import getin from "../../../assets/workImg/uidash.png";
import ics from "../../../assets/workImg/ics.png";
import transport from "../../../assets/workImg/transport.png";
import negat from "../../../assets/workImg/negatweb.png";
import mates from "../../../assets/workImg/mates.png";
import telebirrAll from "../../../assets/workImg/getin2.png";
import { Link } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";
import { PiBehanceLogo } from "react-icons/pi";
import { FaDribbble } from "react-icons/fa";
import telebirr from "../../../assets/workImg/Telebirr.png";
import NegatApp from "../../../assets/workImg/Negat.png";
import SouqApp from "../../../assets/workImg/Souq.png";

function UIDesign({className=""}) {
  return (
    <Link className={`${className}`} to={"UIUX"} >
      <div className={` h-[400px] lg:col-span-2 border-gray-400 border-2 relative bg-white dark:bg-white/20 text-slate-700 dark:text-slate-200  hover:dark:bg-white/20 p-4 hover:shadow-xl  rounded-2xl flex flex-col justify-between group`}>
        <div className="flex w-full h-full ">
          <div className="relative hidden w-1/2 mx-auto h-full  rounded-xl lg:flex justify-center self-center items-end">
          <img
            src={negat}
            alt=""
            className="w-2/3 absolute border-2 border-amber-500 -ml-6 mt-4 left-1 top-0 rounded-md translate-y-4 -rotate-6 group-hover:-rotate-12 group-hover:-translate-y-6 duration-500 ease-in-out "
          />
           <img
            src={ics}
            alt=""
            className="w-2/3  -mr-6 mt-2 border-2 border-blue-500 absolute right-0 -top-6 rounded-md translate-y-4 rotate-6 group-hover:rotate-12 group-hover:-translate-y-6 duration-500 ease-in-out "
          />
          <img
            src={transport}
            alt=""
            className=" -ml-6 mt-8  bottom-8 border-2 border-blue-500 z-10 absolute rounded-md translate-y-2 group-hover:-translate-y-4 duration-500 ease-in-out"
          />
          </div>
         <div className="h-full  w-1/2 mx-auto rounded-xl  flex justify-center self-center items-end">
         <img
            src={negat}
            alt=""
            className=" w-full lg:hidden absolute border-2 border-amber-500 top-0 rounded-md translate-y-4 group-hover:-rotate-12 group-hover:-translate-y-6 duration-500 ease-in-out "
          />
          <img
            src={telebirr}
            alt=""
            className="w-2/3 lg:w-1/3  -mr-6 mt- relative  top-12 lg:-top-4   lg:bottom-4 rounded-md translate-y-4 -rotate-6 group-hover:-translate-y-8 duration-500 ease-in-out "
          />
          <img
            src={NegatApp}
            alt=""
            className="w-3/4 lg:w-1/2 z-10  rounded-md relative  top-12 lg:-top-4   lg:bottom-4 translate-y-4 group-hover:-translate-y-2  duration-500 ease-in-out"
          />
          <img
            src={SouqApp}
            alt=""
            className="w-2/3 lg:w-1/3 -ml-6 mt-8 rounded-md relative top-12 lg:-top-4  lg:bottom-4 translate-y-4 rotate-6 group-hover:-translate-y-8 duration-500 ease-in-out"
          />
        </div>
        </div>
        <div
                 className="backback shadow-lg  rounded-lg lg:bottom-[90px]   p-4 pl-5 pr-12  relative z-10"
                 style={{
                   clipPath:
                     // Start at top-left → straight across → cut down diagonal tab on right → rectangle
                     "polygon(0 0, 70% 0, 75% 20%, 100% 20%, 100% 100%, 0 100%)",
                 }}
               >
                 {/* Title */}
                 <h2 className="font-semibold text-sm mb-2 flex text-white ">
                  UI/UX Products (Web and Mobile)
                   <GoArrowUpRight className="group-hover:translate-x-2 group-hover:-translate-y-1 duration-300 ease-in-out " />
                 </h2>
       
                 {/* Description */}
                 <p className="text-white text-xs italic ">
                    Simple , Clean and User Friendly Designs
                 </p>
                 <p className="text-gray-600 text-xs italic">
                   React , Tailwind 
                 </p>
       
                 {/* Icon Right */}
                 <div className="absolute flex gap-2 top-1/2 right-4 -translate-y-1/2 text-gray-700">
                   {/* <FiFigma className="w-6 h-6" /> */}
                   <PiBehanceLogo className="w-6 h-6" />
                   <FaDribbble className="w-6 h-6" />
                 </div>
               </div>
      </div>
    </Link>
  );
}

export default UIDesign;
