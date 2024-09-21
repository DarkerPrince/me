import React from 'react'

function Mockup({mockup}) {
  return (
    <div className="flex flex-col items-center text-slate-800 dark:text-slate-200 bg-white dark:bg-black">
      {mockup.map((mock , index)=>{
        console.log(mock)
        return  <div key={index} className={`flex gap-12 px-4 md:w-2/3 my-24 items-center justify-between ${(index%2)!=0?"md:flex-row-reverse":"md:flex-row"} flex-col `}>
          <img src={mock.img} alt="" className={`${mock.title ===""?"":"md:w-1/2"} rounded-xl focusImg`}/>
         { 
         mock.title ===""?<div></div>:<div className="flex flex-col flock ">
            <p className="text-4xl font-bold mb-4 ">{mock.title}</p>
            <p className="text-sm text-slate-400 ">{mock.subtitle}</p>
          </div>
          }
        </div>
      })}
      </div>
  )
}

export default Mockup