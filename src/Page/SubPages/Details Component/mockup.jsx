import React from 'react'

function Mockup({mockup}) {
  return (
    <div className="flex flex-col items-center text-slate-800 dark:text-slate-200 bg-white dark:bg-black">
      {mockup.map((mock , index)=>{
        console.log(mock)
        return  <div key={index} className={`flex gap-12 px-4 md:w-2/3 my-24 items-center justify-between ${(index%2)!=0?"md:flex-row-reverse":"md:flex-row"} flex-col `}>
          <img src={mock.img} alt="" className="md:w-1/2 rounded-xl" />
          <div className="flex flex-col ">
            <p className="text-4xl font-bold">{mock.title}</p>
            <p className="text-sm md:text-lg ">{mock.subtitle}</p>
          </div>
        </div>
      })}
      </div>
  )
}

export default Mockup