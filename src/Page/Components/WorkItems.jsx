import React from "react";
import { useNavigate } from "react-router-dom";
import { uiFiles } from "../../assets/Files/UI";
import { useRef } from "react";

function WorkItems({ blogItem, index ,setFunction }) {
  const navigate = useNavigate();
  const imageRef = useRef(null);
  const gradientStyle = {
    background: `linear-gradient(to right bottom, ${blogItem.primarycolor}, ${blogItem.colors[0]})`,
  };

  function navigateMethod(idindex) {
    console.log("navigating on the gallery function");
    navigate(`/UIUX/${idindex}`, { state: { ...uiFiles[idindex]}});
  }

  function zoomEffect (){
    if (imageRef.current) {
    imageRef.current.classList.add("rescaleingImg");
  }
  }

  return (
    <div 
      className=" p-4  h-full backdrop-blur-lg bg-slate-200/20 dark:bg-white/10 group rounded-xl z-20"
      onClick={()=>{ 
        setFunction(index);
        zoomEffect();  
      } }
    >
      <span className="absolute -z-10 h-4 w-4 top-1/3 left-1/2 flex items-center  rounded-full bg-gradient-to-br from-slate-300 to-slate-700 dark:bg-gradient-to-br dark:from-purple-100 dark:to-pink-100 opacity-10 transition-all duration-500 ease-in-out "></span> 
      <div style={gradientStyle} className="p-1 rounded-lg">
      <img ref={imageRef}
     
      // onClick={zoomEffect}
        className={`h-56 w-full object-contain align-bottom transition-all duration-400 ease-in-out rounded-lg`}
        src={blogItem.headerimg}
        alt=""
      />
      </div>
      <div className="mt-4">
        <div className="w-full">
          <h5 className=" truncate text-lg text-pink-400 dark:text-slate-200 font-leuleAfa font-semibold ">
            {blogItem.title}
          </h5>
        </div>

        {/* <p className="mb-3 text-sm font-normal text-gray-700 ">{blogItem.content}</p> */}
        <p className=" flex text-sm mb-4 text-slate-500">{blogItem.subtitle}</p>
        <div className=" flex text-sm flex-wrap gap-2">
          {blogItem.tag.map((tagItem) => {
            return (
              <div className="text-bg rounded-full border px-2 text-xs bg-slate-100 text-slate-500 dark:bg-slate-50/20 dark:text-slate-400">
                {tagItem}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default WorkItems;
