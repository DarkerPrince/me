import React, { useEffect, useState } from "react";
import { MdOutlineArrowBack } from "react-icons/md";
import { PiArrowBendRightDownBold } from "react-icons/pi";
import { useParams } from "react-router-dom";

import MyProfileCard from "../Components/myProfileCard";
import ShowcaseItem from "../Components/showcaseItem";
import StyleGuide from "./Details Component/styleguide";
import Define from "./Details Component/Define";
import Mockup from "./Details Component/mockup";

function DetailsPage() {
  const { id } = useParams();
  // const id = 11;
  const [uiDetailInfo, setUiDetailInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;

    // Replace with your backend API endpoint
    fetch(`https://portfolio-backend-gaxc.vercel.app/uiux/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch UI detail");
        return res.json();
      })
      .then((data) => setUiDetailInfo(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p className="text-center mt-12">Loading UI details...</p>;
  if (error) return <p className="text-center mt-12 text-red-500">{error}</p>;
  if (!uiDetailInfo) return null;

  return (
    <div className="flex flex-col items-center gap-12 bg-white dark:bg-black text-slate-800 dark:text-slate-200 px-4 md:px-8 py-8">

      {/* Back Button */}
      {/* <div
        // onClick={closeFunction}
        className="fixed top-4 left-4 z-50 flex items-center gap-2 cursor-pointer rounded-lg 
                   bg-white/20 dark:bg-gray-800/30 px-3 py-2 backdrop-blur-sm shadow-md 
                   hover:shadow-lg transition-all duration-300"
      >
        <MdOutlineArrowBack size={20} />
        <span className="font-semibold">Go Back</span>
      </div> */}

      {/* Header Image */}
      <img
        src={uiDetailInfo.headerimg}
        alt={uiDetailInfo.title}
        className="rounded-3xl w-full md:w-3/4 lg:w-2/3 shadow-lg object-cover focusImg transition-transform duration-500"
      />

      {/* Title & Subtitle */}
      <div className="w-full md:w-3/4 lg:w-2/3 text-center md:text-left">
        <h1 style={{ color: uiDetailInfo.primarycolor }} className="text-4xl md:text-5xl font-bold mb-2">
          {uiDetailInfo.title}
        </h1>
        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300">
          {uiDetailInfo.subtitle}
        </p>
      </div>

      {/* Problem & Solution */}
      <div className="flex flex-col lg:flex-row w-full md:w-3/4 gap-8">
        <Define problem={uiDetailInfo.problem} solution={uiDetailInfo.solution} />
        <MyProfileCard />
      </div>

      {/* Style Guide */}
      <div className="w-full md:w-3/4">
        <StyleGuide state={uiDetailInfo} />
      </div>

      {/* Mockups */}
      <div className="w-full">
        <Mockup mockup={uiDetailInfo.mockup} />
      </div>

      {/* Sample Showcase */}
      <div className="w-full md:w-3/4">
        <div className="flex items-center gap-2 mb-6">
          <h2 style={{ color: uiDetailInfo.primarycolor }} className="text-3xl md:text-4xl font-bold">
            Sample Showcase
          </h2>
          <PiArrowBendRightDownBold size={28} style={{ color: uiDetailInfo.primarycolor }} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {uiDetailInfo.sampleView.map((sampleUI, index) => (
            <ShowcaseItem
              key={index}
              showImg={sampleUI}
              blurHash="LEHV6nWB2yk8pyo0adR*.7kCMdnj"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default DetailsPage;
