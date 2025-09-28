import React from 'react';
import Personas from './personas';
import DesignProcess from "./DesignProcess";
import Sketch from './sketch';
import Wireframe from './wireframe';
import ColorPaletts from './colors';
import Typography from './Typography';
import { PiArrowBendRightDownBold } from "react-icons/pi";

function StyleGuide({ state }) {
  return (
    <div className="flex flex-col w-full gap-12 text-slate-800 dark:text-slate-200 px-4 md:px-8">
      
      {/* Header */}
      <div className="flex items-center gap-2">
        <p className="text-3xl md:text-4xl font-bold">Style Guidelines</p>
      </div>

      {/* Core Style Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ColorPaletts primary={state.primarycolor} paletts={state.colors} />
        <Typography primary={state.primarycolor} paletts={state.colors} />
        <Personas 
          primary={state.primarycolor} 
          paletts={state.colors} 
          personaList={state.userPersona} 
        />
        <DesignProcess primary={state.primarycolor} paletts={state.colors} />
      </div>

      {/* Sketch & Wireframe */}
      <div >
        <div className="flex-1">
          <Sketch image={state.sketch} />
        </div>
        <div className="flex-1">
          <Wireframe image={state.wireframe} />
        </div>
      </div>
    </div>
  );
}

export default StyleGuide;
