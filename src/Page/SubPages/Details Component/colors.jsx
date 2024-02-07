import React from 'react'

function ColorPaletts({primary,paletts}) {
  console.log(paletts);
  const gradientStyle = {
    background: `linear-gradient(to right bottom, ${primary}, ${paletts[0]})`,
  };
  return (
    <div style={gradientStyle}  className={`rounded-2xl px-8 py-4`}>
    <div className='flex flex-col gap-4'>
      <p className="text-xl font-bold ">Color Paletts</p>
    <div className="flex flex-wrap gap-6">
      <div className="bg-white/10 shadow-md p-2 flex flex-col rounded-md items-center gap-2">
        <div style={{backgroundColor: primary}} className={`w-16 h-16 rounded-lg`}></div>
        <p className="text-xs font-semibold">{primary}</p>
        <p className="text-xs font-bold">Primary</p>
      </div>

      {paletts.map((colorItem,index)=>{
       return <div key={index} className="bg-white/10 shadow-md p-2 flex flex-col rounded-md items-center gap-2">
        <div style={{backgroundColor: colorItem}} className="w-16 h-16 rounded-lg"></div>
        <p className="text-xs font-semibold">{colorItem}</p>
        <p className="text-xs font-bold">#{index} Color</p>
      </div>
      })}
    </div></div>
    </div>
  )
}

export default ColorPaletts