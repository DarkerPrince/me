import React from "react";
import ShowcaseItem from "./Components/showcaseItem";


var sampleimages = [
  "https://drive.google.com/uc?export=view&id=1_BwX42niIGbyMhVnkvUQCHCZ9XDZZEj_",
  "https://drive.google.com/uc?export=view&id=1E_MDvfqXDjZiLxyYm9FKjfUmzadAzpxJ",
  "https://drive.google.com/uc?export=view&id=10FZiz-mlwR4UUtgCBM4yqNz2nyt2g1Xk",
  "https://drive.google.com/uc?export=view&id=1zmVwk7VGG5SaTW8yQdWWen8XoJYSEs-_",

  "https://drive.google.com/uc?export=view&id=14fFgnMGME5-oYDDwBWGWNdcjOFEzUwUx",
  "https://drive.google.com/uc?export=view&id=1eYFh5WHWkf1DS_9A-8OGTAap5Kxq8aod",
  "https://drive.google.com/uc?export=view&id=10gBB-JgnzUUAq_m_fp7cngC4D9kRSJvI",
  "https://drive.google.com/uc?export=view&id=1nfNH-cFpSdhIV88koGejQARJkCwZ7owd",

  "https://drive.google.com/uc?export=view&id=1CjpEwHDYF-Z1wh8QLKJF2lhAR-5Vqc-p",
  
];
 var socialMediaSample = [
      "https://drive.google.com/uc?export=view&id=10N1OlB1vXMpNw5yrqdPU7tzx_2Yu6t_2",
      "https://drive.google.com/uc?export=view&id=1FivsMV1xxyxAFg8TIVh9UgcIt36bAkxA",
      "https://drive.google.com/uc?export=view&id=17FnK9CYDC8FaQcCZux7GWvMwDREy4u_u",
      "https://drive.google.com/uc?export=view&id=1hc9qftcv8hbQOA67zuTOYkqAvu7vJJZa",
      "https://drive.google.com/uc?export=view&id=1FivsMV1xxyxAFg8TIVh9UgcIt36bAkxA",
      "https://drive.google.com/uc?export=view&id=17FnK9CYDC8FaQcCZux7GWvMwDREy4u_u",
      "https://drive.google.com/uc?export=view&id=1hc9qftcv8hbQOA67zuTOYkqAvu7vJJZa",
      "https://drive.google.com/uc?export=view&id=14yMegGOXNZ743tp0IOIpGThSRGIB695K",
      "https://drive.google.com/uc?export=view&id=1JKhuecDuB2j2-3cJKF1bORKF_r0BoCTZ",
      "https://drive.google.com/uc?export=view&id=1WdAsvHc-b4g1_NIKwa1gO8HxKWizFrOg",
      "https://drive.google.com/uc?export=view&id=1Oik6iqGivMvQgfhmG0u2YNlXlSX6k1xd",
      "https://drive.google.com/uc?export=view&id=1AnrqKndYkTQwFNt2k9a49YqXnyO3Kl-A",
      "https://drive.google.com/uc?export=view&id=1lBI_qDi8k6qZo1c6a9Oc1AQ2lLAvn08X",
 ]

 

function Showcase() {
  return (
    <div className="flex flex-col items-center lg:w-1/2">
     
      <div className=" px-12 lg:w-1/2 flex flex-col items-center justify-center">
        <p className="font-extrabold text-transparent text-2xl md:text-3xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"> Sample Showcase</p>
        <p className="text-center text-sm text-slate-400">Mobile & Web UI Designs: Inspiring categories for modern interfaces.</p>
      </div>
       <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 p-4">
        {
          sampleimages.map((imgUrl,index)=>{
            console.log({imgUrl});
            return <ShowcaseItem showImg={imgUrl} key={index}/>
          })
        }
      
 </div>
    </div>
   

  );
}

export default Showcase;
