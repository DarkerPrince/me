import React, { useState, useEffect } from "react";
import { Blurhash } from "react-blurhash";




function ShowcaseItem({ showImg }) {
  const [imgLoaded, setImageLoaded] = useState(false);
  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageLoaded(true);
    };
    img.src = showImg;
  }, [showImg]);

  // openFullscreen = () => { 
  //   console.log("Some ==============> Some <============")
  //   const image = document.getElementById('myImage');
  //   if (image.requestFullscreen) {
  //       image.requestFullscreen();
  //   } else if (image.mozRequestFullScreen) { // Firefox
  //       image.mozRequestFullScreen();
  //   } else if (image.webkitRequestFullscreen) { // Chrome, Safari and Opera
  //       image.webkitRequestFullscreen();
  //   } else if (image.msRequestFullscreen) { // IE/Edge
  //       image.msRequestFullscreen();
  //   }
  // };
  return (
    <div className="group cursor-pointer relative">
      <div style={{display:imgLoaded?'none':'inline w-full h-48 object-cover rounded-md'}} className="">
        <Blurhash
          hash="LEHV6nWB2yk8pyo0adR*.7kCMdnj"  
          width={250}
          height={192}
          resolutionX={32}
          resolutionY={32}
          punch={1}
        />
      </div>
      <img
      id="Image"
        src={showImg}
        alt="Image 1"
        style={{display:!imgLoaded?'none':'inline'}}
        className="w-full h-48 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
      />
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
        <button className="bg-white/25 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors" 
        >
          View
        </button>
      </div>
    </div>
  );
}

export default ShowcaseItem;
