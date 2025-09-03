
import graphicImg1 from "../../../assets/workImg/graphic1.png";
import graphicImg2 from "../../../assets/workImg/graphic2.png";
import graphicImg3 from "../../../assets/workImg/bet0.png";
import { Link } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";
import { PiBehanceLogo } from "react-icons/pi";
import { FaDribbble } from "react-icons/fa";
import betLong from "../../../assets/workImg/betLong.png";

function VisualItem() {
  return (
    <Link to={"Graphic"}>
      <div className="h-[400px] min-w-[350px] border-gray-400 border-2 max-w-[400px] relative bg-white dark:bg-white/10 text-slate-700 dark:text-slate-200  hover:dark:bg-white/20 p-4 hover:shadow-xl  rounded-2xl flex flex-col justify-between group">
      
        <div className="h-[400px] w-full mx-auto rounded-xl flex justify-center self-center items-end">
          <div className="flex w-full  items-end justify-between  ">
             <img
            src={betLong}
            alt="alternativeImg"
            className="w-full absolute px-6 left-0 mx-auto top-3 self-center translate-y-0 group-hover:-translate-y-4 duration-300 ease-in-out"
          />
            <img
              src={graphicImg1}
              alt=""
              className="w-1/3 -ml-4 -rotate-6 shadow-md rounded-md group-hover:-translate-y-8 duration-300 ease-in-out "
            />
            <img
              src={graphicImg2}
              alt=""
              className="w-1/2 -ml-6 -rotate-3 shadow-md rounded-md group-hover:-translate-y-10 group-hover:scale-110 duration-200 ease-in-out"
            />
            <img
              src={graphicImg3}
              alt=""
              className="w-1/3 -ml-6 rotate-6 shadow-md rounded-md group-hover:-translate-y-8 duration-300 ease-in-out"
            />
          </div>
        </div>
        <div
          className="backback rounded-lg shadow-sm p-4 pl-5 pr-12 relative"
          style={{
            clipPath:
              // Start at top-left → straight across → cut down diagonal tab on right → rectangle
              "polygon(0 0, 70% 0, 75% 20%, 100% 20%, 100% 100%, 0 100%)",
          }}
        >
          {/* Title */}
          <h2 className="text-white font-semibold text-sm mb-2 flex ">
            Graphic Designs
            <GoArrowUpRight className="group-hover:translate-x-2 group-hover:-translate-y-1 duration-300 ease-in-out " />
          </h2>

          {/* Description */}
          <p className="text-gray-600 text-xs italic">
            Direct and attractive Digital Designs
          </p>
          <p className="text-gray-600 text-xs italic">Photsoshop , Illustrator</p>

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

export default VisualItem;
