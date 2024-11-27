import React ,{useRef} from "react";

import VisualItem from "./Components/CategoryItems/visualItem";
import UiItems from "./Components/CategoryItems/UiItems";
import Frontend from "./Components/CategoryItems/Frontend";
import Mobileapp from "./Components/CategoryItems/Mobileapp";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/src/ScrollTrigger";

// bg-gradient-to-br from-Primary to-Secondary
function Categories() {


  useGSAP(()=>{
    gsap.registerPlugin(ScrollTrigger);
    
    gsap.set(".item",{
    opacity:0,
    })
    gsap.to(".item", {
      opacity: 1, 
      ease: "none",
      stagger:{
        amount:1
      },
      scrollTrigger: {
        trigger: ".item",
        start: "center 90%",
        end: "center 10%",
        // markers: true,
        toggleActions: "play reverse play reverse"
      }
    })
  });



  return (
    <div className="rounded-3xl my-12 p-4 lg:p-12 flex flex-col justify-between overflow-clip">
      <p className="text-4xl font-bold mb-6 lg:mb-12 text-center bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 dark:text-slate-200">
        Proud Ethiopian <br /> with expertise in the fields
      </p>
      <div className="item grid grid-cols-1 lg:grid-cols-2 gap-4">
        
        <div className="item">
        <UiItems />
        </div>

        <div className="item">
        <VisualItem />
        </div>

        <div className="item">
        <Frontend />
        </div>

         <div className="item">
        <Mobileapp />
         </div>
      </div>
    </div>
  );
}

export default Categories;
