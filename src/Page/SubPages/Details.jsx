import React from "react";
import getin2 from "../../assets/workImg/getin2.png";
import MyProfileCard from "../Components/myProfileCard";
import ShowcaseItem from "../Components/showcaseItem";
import DesignProcess from "./Details Component/DesignProcess";
import StyleGuide from "./Details Component/styleguide";
import Define from "./Details Component/Define";

function DetailsPage() {
  return (
    <div className="flex flex-col items-center dark:text-slate-200">
      <img src={getin2} className=" p-2 lg:w-3/4 rounded-2xl mx-auto mt-4" alt="" />
      <div className="flex flex-col-reverse lg:flex-row items-center md:items-start gap-4 justify-center mt-12">
        <div className="flex flex-col items-start  justify-center px-4 md:justify-start lg:w-1/2 gap-6">
          {/* problem and solution of template */}
         <Define/>
          {/* Design process */}
          <DesignProcess/>
          {/* style guide */}
          <StyleGuide/>
        </div>
        <MyProfileCard />
      </div>
      <div className="w-full mt-12">
      <div className="flex flex-col items-center">
      <p className="font-extrabold text-transparent text-2xl md:text-3xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"> Sample Showcase</p>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4   w-3/4">
       <ShowcaseItem showImg={"https://drive.google.com/uc?export=view&id=1bRa3feT4MImq97-EIrOKpqAH7Cj2tfss"}/>
       <ShowcaseItem showImg={"https://drive.google.com/uc?export=view&id=1bRa3feT4MImq97-EIrOKpqAH7Cj2tfss"}/>
       <ShowcaseItem showImg={"https://drive.google.com/uc?export=view&id=1bRa3feT4MImq97-EIrOKpqAH7Cj2tfss"}/>
       <ShowcaseItem showImg={"https://drive.google.com/uc?export=view&id=1bRa3feT4MImq97-EIrOKpqAH7Cj2tfss"}/>

       <ShowcaseItem showImg={"https://drive.google.com/uc?export=view&id=1bRa3feT4MImq97-EIrOKpqAH7Cj2tfss"}/>
       <ShowcaseItem showImg={"https://drive.google.com/uc?export=view&id=1bRa3feT4MImq97-EIrOKpqAH7Cj2tfss"}/>
       <ShowcaseItem showImg={"https://drive.google.com/uc?export=view&id=1bRa3feT4MImq97-EIrOKpqAH7Cj2tfss"}/>
       <ShowcaseItem showImg={"https://drive.google.com/uc?export=view&id=1bRa3feT4MImq97-EIrOKpqAH7Cj2tfss"}/>

       <ShowcaseItem showImg={"https://drive.google.com/uc?export=view&id=1bRa3feT4MImq97-EIrOKpqAH7Cj2tfss"}/>
       <ShowcaseItem showImg={"https://drive.google.com/uc?export=view&id=1bRa3feT4MImq97-EIrOKpqAH7Cj2tfss"}/>
       <ShowcaseItem showImg={"https://drive.google.com/uc?export=view&id=1bRa3feT4MImq97-EIrOKpqAH7Cj2tfss"}/>
       <ShowcaseItem showImg={"https://drive.google.com/uc?export=view&id=1bRa3feT4MImq97-EIrOKpqAH7Cj2tfss"}/>
       
 </div>
    </div>
      </div>
    </div>
  );
}

export default DetailsPage;
