import React, { useRef, useEffect } from "react";
import PersonaItem from "./personaComponent";

function Personas({ primary, paletts, personaList }) {
  const scrollContainer = useRef();
  const gradientStyle = {
    background: `linear-gradient(to right bottom, ${primary}, ${paletts[0]})`,
  };

  useEffect(() => {
    const timerId = setInterval(() => {
      if (scrollContainer.current) {
        scrollContainer.current.scrollLeft += 1; // Adjust the number for slower or faster scrolling
      }
    }, 50); // Adjust the interval for slower or faster scrolling

    return () => clearInterval(timerId);
  }, []);

  // useEffect(() => {
  //   let lastScrollLeft = 0;
  //   let scrollDirection = 1; // 1 for right, -1 for left

  //   const timerId = setInterval(() => {
  //     if (scrollContainer.current) {
  //       scrollContainer.current.scrollLeft += scrollDirection;

  //       // Check if the scroll has reached the leftmost point
  //       if (scrollContainer.current.scrollLeft <= lastScrollLeft) {
  //         scrollDirection *= -1; // Switch direction
  //       }

  //       lastScrollLeft = scrollContainer.current.scrollLeft;
  //     }
  //   }, 50); // Adjust the interval for slower or faster scrolling

  //   return () => clearInterval(timerId);
  //  }, []);

  return (
    <div style={gradientStyle} className="col-span-2 rounded-2xl">
      <div className="flex flex-col items-start px-8 w-fit">
        <p className="text-2xl font-bold pt-4">User Persona</p>
        <div className="w-1/2 border-b-4 rounded-lg left-0"></div>
      </div>
      <div
        ref={scrollContainer}
        className="overflow-x-auto flex scroll-smooth no-scrollbar"
      >
        <div className="flex  scale-75 items-end gap-3">
          {personaList.map((itemPersona, index) => {
            return <PersonaItem persona={itemPersona} index={index} />;
          })}
          {/* <PersonaItem/>
     <PersonaItem/>
     <PersonaItem/> */}
        </div>
      </div>
    </div>
  );
}

export default Personas;
