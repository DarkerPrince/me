import React from "react";

import MyProfileCard from "../Components/myProfileCard";
import ShowcaseItem from "../Components/showcaseItem";

import StyleGuide from "./Details Component/styleguide";
import Define from "./Details Component/Define";
import Mockup from "./Details Component/mockup";
import { useLocation } from "react-router-dom";
import { PiArrowBendRightDownBold } from "react-icons/pi";

const imageURL = "https://drive.google.com/uc?export=view&id=";

function DetailsPage() {
  const location = useLocation();
  console.log(location.state, "🏀");

  function hexToRgb(hex) {
    // Remove the # symbol if present
    hex = hex.replace("#", "");

    // Convert hex to decimal
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    // Return the RGB color format
    return `rgb(${r}, ${g}, ${b} ,0.2)`;
  }

  return (
    <div className="flex flex-col items-center bg-white dark:bg-black gap-8">
      <img
        src={`${location.state.headerimg}`}
        className=" lg:w-3/4 rounded-3xl overflow-hidden mx-auto mt-4 "
        alt=""
      />
      <div className="w-3/4 flex flex-col items-start">
        <p
          style={{
            color: `${location.state.primarycolor}`,
          }}
          className="text-slate-800 dark:text-slate-200 text-4xl font-bold "
        >
          {location.state.title}
        </p>
        <p className="text-slate-800 dark:text-slate-200 text-lg">
          {location.state.subtitle}
        </p>
      </div>
      <img
        src={
          "https://www.dropbox.com/scl/fi/y38mkfnml2mu31aked96z/Suk-Header.png"
        }
        alt=""
      />
      <div className="flex flex-col items-start  justify-center p-2 lg:w-3/4 md:justify-start gap-8 ">
        {/* problem and solution of template */}
        <div className="flex md:items-start md:flex-row flex-col items-center ">
          <Define
            problem={location.state.problem}
            solution={location.state.solution}
          />
          <MyProfileCard />
        </div>
        <StyleGuide state={location.state} />
      </div>

      <Mockup mockup={location.state.mockup} />

      <div className="w-full">
        <div className="flex flex-col items-center">
          <div className="flex items-end my-12 w-full  md:px-6 md:w-3/4">
            <p
              style={{ color: `${location.state.primarycolor}` }}
              className=" text-xl md:text-4xl font-bold"
            >
              Sample Showcase
            </p>
            <PiArrowBendRightDownBold
              style={{ color: `${location.state.primarycolor}` }}
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 w-3/4">
            {location.state.sampleView.map((sampleUI) => {
              return (
                <ShowcaseItem
                  showImg={sampleUI}
                  blurHash="LEHV6nWB2yk8pyo0adR*.7kCMdnj"
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailsPage;
