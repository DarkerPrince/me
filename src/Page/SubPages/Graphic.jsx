import React from "react";
import { SiApostrophe } from "react-icons/si";
import { MdDesignServices } from "react-icons/md";
import { visualFiles } from "../../assets/Files/visual";
import background from "../../assets/background.png";
import GraphixItems from "../Components/GraphicItems";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function GraphicList() {
  const [graphicsFiles, setgraphicsFiles] = useState([]);
  const [previewDetails, setPreviewDetails] = useState(false);
  const [chosenUIindex, setChosenUiIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


useEffect(() => {
    // Replace with your backend API endpoint
    fetch("https://portfolio-backend-two-nu.vercel.app/graphics")
    // fetch("http://localhost:8000/graphics")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch UI files");
        return res.json();
      })
      .then((data) => setgraphicsFiles(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  const previewDetailsMethod = async (index) => {
    setChosenUiIndex(index);
    setPreviewDetails(true);
  };

  const closeDetailsMethod = () => {
    setPreviewDetails(false);
    setChosenUiIndex(-1);
  };


  if (loading) return <p className="text-center mt-12">...</p>;
  if (error) return <p className="text-center mt-12 text-red-500">{error}</p>;

 return (
    <div className="relative w-full flex flex-col items-center">
      
      {/* Hero Section */}
      <div className="relative w-full md:w-5/6 lg:w-3/4 h-96 rounded-2xl bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 flex items-center justify-center overflow-hidden md:mt-12 p-8">
        <div className="text-center z-10">
          <p className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white">
            Visual Designs
          </p>
          <SiApostrophe className="inline-block mt-2 text-4xl text-white" />
        </div>
        <MdDesignServices className="absolute top-0 right-0 text-[180px] text-white opacity-20 pointer-events-none" />
      </div>

      {/* Graphic Items Grid */}
      <div className="w-full md:w-5/6 lg:w-3/4 -mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-0">
        {graphicsFiles.map((graphicItem, index) => (
          <GraphixItems key={index} graphix={graphicItem} />
        ))}
      </div>

      {/* Background Accent */}
      <img
        src={background}
        alt="decorative background"
        className="absolute bottom-0 rotate-180 w-full opacity-30 -z-10"
      />
    </div>
  );


  
}

export default GraphicList;
