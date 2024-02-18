import React from "react";
import { useNavigate } from "react-router-dom";
import { uiFiles } from "../../assets/Files/UI";

function WorkItems({ blogItem, index }) {
  const navigate = useNavigate();

  function navigateMethod(idindex) {
    console.log("navigating on the gallery function");
    navigate(`/UIUX/${idindex}`, { state: { ...uiFiles[idindex] } });
  }

  return (
    <div
      className=" relative max-w-sm p-4 h-full overflow-hidden group rounded-xl z-20"
      onClick={() => navigateMethod(index)}
    >
      <span className="absolute -z-10 h-4 w-4 top-1/3 left-1/2 flex items-center  rounded-full bg-gradient-to-br from-slate-300 to-slate-700 dark:bg-gradient-to-br dark:from-purple-100 dark:to-pink-100 opacity-10 transition-all duration-500 ease-in-out group-hover:scale-[50]"></span>
      <img
        className="h-56 w-full object-cover  transition-all duration-400 ease-in-out rounded-lg"
        src={blogItem.headerimg}
        alt=""
      />
      <div className="mt-4">
        <div className="w-full">
          <h5 className="mb-2 truncate text-gray-900 dark:text-slate-200">
            {blogItem.title}
          </h5>
        </div>

        {/* <p className="mb-3 text-sm font-normal text-gray-700 ">{blogItem.content}</p> */}
        <div className=" flex text-sm flex-wrap gap-2">
          {blogItem.tag.map((tagItem) => {
            return (
              <div className="text-bg rounded-sm px-2 text-xs bg-slate-100 text-slate-500 dark:bg-slate-50/20 dark:text-slate-400">
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
