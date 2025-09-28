import React, { useState, useRef, useEffect } from "react";
import WorkItems from "../Components/WorkItems";
import { PiPencilCircleDuotone, PiPenNibDuotone } from "react-icons/pi";
import DetailsPage from "./Details";

function UIUX() {
  const [uiFiles, setUiFiles] = useState([]);
  const [previewDetails, setPreviewDetails] = useState(false);
  const [chosenUIindex, setChosenUiIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const imageRef = useRef(null);

  useEffect(() => {
    // Replace with your backend API endpoint
    // fetch("https://portfolio-backend-gaxc.vercel.app/uiux")
    fetch("http://localhost:8000/uiux")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch UI files");
        return res.json();
      })
      .then((data) => setUiFiles(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  const previewDetailsMethod = async (index) => {
    zoomEffect();
    await delay(100);
    setChosenUiIndex(index);
    setPreviewDetails(true);
  };

  const closeDetailsMethod = () => {
    setPreviewDetails(false);
    setChosenUiIndex(-1);
  };

  const zoomEffect = () => {
    if (imageRef.current) {
      imageRef.current.classList.add("moveouttop");
    }
  };

  if (loading) return <p className="text-center mt-12">...</p>;
  if (error) return <p className="text-center mt-12 text-red-500">{error}</p>;

  if (previewDetails) {
    return (
      <DetailsPage
        id={chosenUIindex}
        closeFunction={closeDetailsMethod}
      />
    );
  }

  return (
    <div className="bg-[#fdfbf6] dark:bg-[#121212] flex flex-col items-center pb-12">
      {/* Hero Section */}
      <div
        ref={imageRef}
        className="relative w-full md:w-5/6 lg:w-3/4 h-96 mt-12 rounded-3xl overflow-hidden p-8 backback flex items-center justify-center"
      >
        <div className="text-center z-10">
          <p className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white">
            UI/UX
          </p>
          <PiPencilCircleDuotone className="inline-block mt-2 text-4xl text-white" />
        </div>
        <PiPenNibDuotone className="absolute top-0 right-0 text-[180px] text-white opacity-20 pointer-events-none" />
      </div>

      {/* UI Cards Grid */}
      <div className="-mt-24 w-full flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 px-4 lg:w-2/3">
          {uiFiles.map((item, index) => (
            <WorkItems
              key={index}
              blogItem={item}
              index={index}
              // setFunction={previewDetailsMethod}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default UIUX;
