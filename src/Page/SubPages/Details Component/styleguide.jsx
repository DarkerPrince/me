import React from 'react'
import Personas from './personas';
import DesignProcess from "./DesignProcess";


import Sketch from './sketch';
import Wireframe from './wireframe';
import ColorPaletts from './colors';
import Typography from './Typography';
import { PiArrowBendRightDownBold } from "react-icons/pi";

function StyleGuide({state}) {
  return (
    <div className="text-slate-800 flex flex-col w-full gap-8  dark:text-slate-200 items-center md:items-start">
      <div className='flex items-end'>
      <p className="text-2xl font-bold">Style Guidelines</p>
      <PiArrowBendRightDownBold/>
      </div>
      <div className='w-full  h-1/2'>
       <div className='grid grid-cols-3 gap-4'>
          <ColorPaletts primary={state.primarycolor} paletts={state.colors}/>
          <Typography primary={state.primarycolor} paletts={state.colors}/>
          <Personas primary={state.primarycolor} paletts={state.colors} personaList={state.userPersona}/>
          <DesignProcess primary={state.primarycolor} paletts={state.colors}/>
          
       </div>
      </div>

      <Sketch image={state.sketch}/>
      <Wireframe image={state.wireframe} />
    </div>
  )
}

export default StyleGuide