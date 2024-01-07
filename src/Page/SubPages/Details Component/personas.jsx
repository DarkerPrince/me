import React, { useRef, useEffect } from "react";
import PersonaItem from './personaComponent'


function Personas() {
  const scrollContainer = useRef();

  useEffect(() => {
    const timerId = setInterval(() => {
      if (scrollContainer.current) {
        scrollContainer.current.scrollLeft += 1; // Adjust the number for slower or faster scrolling
      }
    }, 50); // Adjust the interval for slower or faster scrolling

    return () => clearInterval(timerId);
  }, []);


  return (
   <div className='col-span-2 backback rounded-2xl'>
 <p className="text-2xl font-bold px-8 pt-4">User Persona</p>
    <div ref={scrollContainer} className="overflow-x-auto flex scroll-smooth no-scrollbar">
      
    <div className='flex  scale-75 items-end gap-3'>
     <PersonaItem/>
     <PersonaItem/>
     <PersonaItem/>
     <PersonaItem/>
    </div>
  </div>
   </div>
  )
}

export default Personas