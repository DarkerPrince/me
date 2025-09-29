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
    // fetch("http://localhost:8000/uiux/" + id)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch UI detail");
        return res.json();
      })
      .then((data) => setUiDetailInfo(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p className="text-center mt-12">...</p>;
  if (error) return <p className="text-center mt-12 text-red-500">{error}</p>;
  if (!uiDetailInfo) return null;

  return (
    <div className="flex flex-col items-center gap-12 bg-slate-50 dark:bg-black text-slate-800 dark:text-slate-200 px-4 md:px-8 py-8">
      {/* Header Image */}
      <img
        src={uiDetailInfo.headerimg}
        alt={uiDetailInfo.title}
        className=" w-3/4 md:text-left dark:bg-slate-100 mt-2 dark:bg-slate-100/10  rounded-3xl  focusImg transition-transform duration-500"
      />

      {/* Title & Subtitle */}
      <div className="w-full  md:text-left md:w-3/4 px-4 md:px-8 ">
        <h1
          style={{ color: uiDetailInfo.primarycolor }}
          className="text-4xl md:text-5xl font-bold mb-2"
        >
          {uiDetailInfo.title}
        </h1>
        <p className="text-lg md:text-xl text-slate-600 font-leuleScri dark:text-slate-300">
          {uiDetailInfo.subtitle}
        </p>
      </div>

      {/* Problem & Solution */}
      <div className="flex flex-col lg:flex-row w-full  md:w-3/4 gap-8 px-4 md:px-8">
        <Define
          problem={uiDetailInfo.problem}
          solution={uiDetailInfo.solution}
        />
      </div>

      {/* Style Guide */}
      <div className="w-full md:w-3/4">
        <StyleGuide state={uiDetailInfo} />
      </div>

      {/* Mockups */}
      <div className="w-full">
        <Mockup
          mockup={uiDetailInfo.mockup}
          primary={uiDetailInfo.primarycolor}
        />
      </div>

      {/* Sample Showcase */}
      <div className="w-full md:w-3/4 flex lg:flex-row flex-col  items-center">
        <div className="mb-8 text-center md:text-left">
          {/* Title */}
          <h2
            style={{ color: uiDetailInfo.primarycolor }}
            className="text-3xl md:text-4xl font-extrabold tracking-tight"
          >
            Sample Showcase
          </h2>

          {/* Subtitle */}
          <p
            style={{ color: uiDetailInfo.primarycolor }}
            className="mt-2 text-sm font-medium opacity-80 max-w-xl"
          >
            Explore the list of pages available on the platform.
            Click on any page to preview and navigate through them one by one.
          </p>
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
