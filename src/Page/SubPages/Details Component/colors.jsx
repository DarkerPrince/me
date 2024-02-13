import React from 'react'

function ColorPaletts({primary,paletts}) {
  console.log(paletts);
  const gradientStyle = {
    background: `linear-gradient(to right bottom, ${primary}, ${paletts[0]})`,
  };
  return (
    <div style={gradientStyle}  className={`rounded-2xl px-8 py-4`}>
    <div className='flex flex-col gap-4'>
    <div className='flex flex-col items-start w-fit'>
      <p className="text-2xl font-bold">Color Pallets</p>
      <div className="w-1/2 border-slate-800 border-b-4 rounded-lg left-0"></div>
      </div>
    <div className="flex flex-wrap gap-2">
      <div className="bg-white/40 shadow-sm p-2 flex flex-col rounded-md items-center gap-2">
        <div style={{backgroundColor: primary}} className={`w-16 h-16 rounded-lg`}></div>
        <p className="text-xs font-semibold text-white">{primary}</p>
      </div>

      {paletts.map((colorItem,index)=>{
       return <div key={index} className="bg-white/10 shadow-sm p-2 flex flex-col rounded-md items-center gap-2">
        <div style={{backgroundColor: colorItem}} className="w-16 h-16 rounded-lg"></div>
        <p className="text-xs font-semibold text-white">{colorItem}</p>
      </div>
      })}

    </div>
    </div>
    </div>
  )
}

export default ColorPaletts