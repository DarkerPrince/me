import dash from "../../../assets/workImg/uidash.png";
import mob from "../../../assets/workImg/Negat.png";
import { Link } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";
import { PiBehanceLogo } from "react-icons/pi";
import { FaDribbble } from "react-icons/fa";
import negatImg from "../../../assets/images/negat.png";

function UiItems() {
  return (
    <Link to={"UIUX"}>
      <div
        id="work-section"
        className="relative h-[400px] border-gray-400 border-2 min-w-[350px] max-w-[400px] bg-white/20  dark:bg-white/10 text-slate-700 dark:text-slate-200 hover:dark:bg-white/20 p-4 hover:shadow-xl rounded-2xl flex flex-col justify-between group"
      >
        {/* <div className="flex w-full justify-between ">
          <p className="text-lg font-semibold">UI Designs Projects</p>
          <GoArrowUpRight className="group-hover:translate-x-2 group-hover:-translate-y-1 duration-300 ease-in-out "/>
          
        </div> */}
        <div className="h-48 relative ">
          <img
            src={negatImg}
            alt="alternativeImg"
            className="w-full absolute -top-5 -left-8 -rotate-6 right-5 translate-y-0 group-hover:-translate-y-4 duration-300 ease-in-out"
          />
          <img
            src={negatImg}
            alt="alternativeImg"
            className="w-full absolute rounded-md -bottom-24 -right-4 rotate-6 translate-y-0 group-hover:-translate-y-2 duration-300 ease-in-out"
          />
        </div>

        {/* <img
              src={negatImg}
              alt="alternativeImg"
              className="w-3/4 translate-y-0 group-hover:-translate-y-2 duration-300 ease-in-out"
            /> */}

        {/* <div className="h-48 w-full overflow-hidden rounded-xl flex items-end  ">
          <div className="flex w-full items-end justify-center align-middle ">
            <img
              src={dash}
              alt=""
              className="w-3/4 translate-y-8 group-hover:-translate-y-0 duration-300 ease-in-out"
            />
            <img
              src={mob}
              alt=""
              className="w-1/4 shadow-md rounded-md -ml-6 translate-y-8 group-hover:-translate-y-0 group-hover:rotate-6 duration-300 ease-in-out"
            />
          </div>
        </div> */}
        <div className="absolute bottom-4 self-center z-40 flex items-end justify-center">
          <div className="relative bottom-0 min-w-[350px] max-w-[400px] ">
            {/* Folder-shaped card (reversed + diagonal tab) */}
            <div
              className="bg-indigo-50 border rounded-lg border-gray-300 shadow-sm p-4 pl-5 pr-12 relative"
              style={{
                clipPath:
                  // Start at top-left → straight across → cut down diagonal tab on right → rectangle
                  "polygon(0 0, 70% 0, 75% 20%, 100% 20%, 100% 100%, 0 100%)",
              }}
            >
              {/* Title */}
              <h2 className="text-gray-800 font-semibold text-sm mb-2 flex ">
                UI/UX Design Projects
                <GoArrowUpRight className="group-hover:translate-x-2 group-hover:-translate-y-1 duration-300 ease-in-out " />
              </h2>

              {/* Description */}
              <p className="text-gray-600 text-xs italic">
                Simple , Clean and User Friendly Designs
              </p>
              <p className="text-gray-600 text-xs italic">
                Figma , Illustrator
              </p>

              {/* Icon Right */}
              <div className="absolute flex gap-2 top-1/2 right-4 -translate-y-1/2 text-gray-700">
                {/* <FiFigma className="w-6 h-6" /> */}
                <PiBehanceLogo className="w-6 h-6" />
                <FaDribbble className="w-6 h-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default UiItems;
