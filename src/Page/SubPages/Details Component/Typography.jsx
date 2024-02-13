import React from 'react'

function Typography({primary,paletts}) {
  const gradientStyle = {
    background: `linear-gradient(to right bottom, ${primary}, ${paletts[0]})`,
  };
  return (
    <div style={gradientStyle} className=' col-span-2 rounded-2xl px-8 py-4 '>
    <div className='flex flex-col gap-4'>
    <div className='flex flex-col items-start w-fit'>
      <p className="text-2xl font-bold">Typography</p>
      <div className="w-1/2 border-slate-800 border-b-4 rounded-lg left-0"></div>
      </div>
    <div className="flex flex-col md:flex-row items-center gap-4 md:gap-12 mb-6 bg-slate-100/10 p-4 rounded-lg">
      <div className="flex flex-col items-center">
        <p className="text-9xl font-bold">Aa</p>
        <p className="text-xl">Poppins</p>
      </div>
      <div className="flex gap-12 bg-slate-100/10 rounded-lg items-center p-4 md:p-12">
        <div className="flex flex-col justify-center">
          <p className='text-sm md:text-base'>A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</p>
          <p className="lowercase text-sm md:text-base"> A B C D E F G H I J K L M N O P Q R S T U V W X Y Z </p>
        </div>
        <div className="flex flex-col">
          <p className="font-bold">Bold</p>
          <p className="font-semibold">Semibold</p>
          <p className="font-medium">Medium</p>
          <p className="">Regular</p>
        </div>
      </div>
    </div></div>
    </div>
  )
}

export default Typography