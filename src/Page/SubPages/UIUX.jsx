import React from "react";
import WorkItems from "../Components/WorkItems";
import { PiPencilCircleDuotone } from "react-icons/pi";
import { PiPenNibDuotone } from "react-icons/pi";
import { uiFiles } from "../../assets/Files/UI";

function UIUX() {
  return (
    <div className="bg-[#fdfbf6] dark:bg-[#121212]">
      <div className="pt-12">
        <div className="relative   h-96 flex  backback rounded-3xl m-2 md:rounded-2xl md:mx-12 p-12 ">
          <p className="text-6xl md:text-5xl lg:text-9xl font-bold text-slate-100">
            {" "}
            UI/UX
          </p>
          <PiPencilCircleDuotone className="text-5xl text-slate-100" />
          <PiPenNibDuotone className="text-[200px] absolute top-0 right-0 text-slate-50 opacity-25" />
        </div>
      </div>

      <div className=" -mt-24 w-full flex items-center justify-center">
        <div className="grid md:grid-cols-2 xl:grid-cols-3 px-4 lg:w-2/3 gap-6 mb-12 items-center justify-center">
          {uiFiles.map((item, index) => {
            return (
              <div key={index}>
                <WorkItems blogItem={item} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default UIUX;
