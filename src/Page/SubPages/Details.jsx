import React from "react";

import MyProfileCard from "../Components/myProfileCard";
import ShowcaseItem from "../Components/showcaseItem";

import StyleGuide from "./Details Component/styleguide";
import Define from "./Details Component/Define";
import Mockup from "./Details Component/mockup";
import { useLocation } from "react-router-dom";
import { PiArrowBendRightDownBold } from "react-icons/pi";
import { MdOutlineArrowBack } from "react-icons/md";

const imageURL = "https://drive.google.com/uc?export=view&id=";

function DetailsPage(props) {
  console.log("The props in Details are :", props.uiDetailInfo.title);
  // const location = useLocation();
  // console.log(props.uiDetailInfo, "🏀");

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
    <div className="flex flex-col items-center bg-white dark:bg-black gap-8 ">
      <div className="flex gap-2 p-2 fixed top-4 cursor-pointer left-4 rounded-lg dark:text-slate-200  hover:bg-slate-300/10 hover:shadow-sm justify-center items-center">
        <MdOutlineArrowBack />
        <p className="d" onClick={props.closeFunction}>
          Go Back
        </p>
      </div>
      
      <img
        src={`${props.uiDetailInfo.headerimg}`}
        className=" lg:w-3/4 rounded-3xl focusImg overflow-hidden mx-auto mt-4 "
        alt=""
      />
      <div className="">
        <iframe
        style={{ border: "0px solid rgba(0, 0, 0, 0.1)" }}
        width="800"
        height="450"
        src="https://embed.figma.com/proto/mzPw5bJaJSKvGuYYYPDKma/My-PortFolio?page-id=0%3A1&node-id=10-36741&viewport=-2867%2C-11053%2C0.37&scaling=contain&content-scaling=fixed&starting-point-node-id=10%3A36741&embed-host=share"
        allowFullScreen
      ></iframe>
      </div>
      <div className="w-3/4 flex flex-col items-start">
        <p
          style={{
            color: `${props.uiDetailInfo.primarycolor}`,
          }}
          className="text-slate-800 dark:text-slate-200 text-4xl font-bold "
        >
          {props.uiDetailInfo.title}
        </p>
        <p className="text-slate-800 dark:text-slate-200 text-lg">
          {props.uiDetailInfo.subtitle}
        </p>
      </div>
      <div className="flex flex-col items-start  justify-center p-2 lg:w-3/4 md:justify-start gap-8 ">
        {/* problem and solution of template */}
        <div className="flex md:items-start md:flex-row flex-col items-center ">
          <Define
            problem={props.uiDetailInfo.problem}
            solution={props.uiDetailInfo.solution}
          />
          <MyProfileCard />
        </div>
        <StyleGuide state={props.uiDetailInfo} />
      </div>

      <Mockup mockup={props.uiDetailInfo.mockup} />

      <div className="w-full">
        <div className="flex flex-col items-center">
          <div className="flex items-end my-12 w-full  md:px-6 md:w-3/4">
            <p
              style={{ color: `${props.uiDetailInfo.primarycolor}` }}
              className=" text-3xl md:text-4xl font-bold px-6"
            >
              Sample Showcase
            </p>
            <PiArrowBendRightDownBold
              style={{ color: `${props.uiDetailInfo.primarycolor}` }}
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:w-3/4 mb-12">
            {props.uiDetailInfo.sampleView.map((sampleUI,index) => {
              return (
                < ShowcaseItem
                  key={index}
                  showImg={sampleUI}
                  blurHash="LEHV6nWB2yk8pyo0adR*.7kCMdnj" />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailsPage;
