import React from 'react'
import mob from '../assets/mob.jpeg'
import {Certificates} from '../assets/Files/files'

function Certification() {
  return (
    <div className='my-12 lg:mx-32 lg:p-12 flex flex-col items-center justify-center'>
        
            <div className=' flex flex-col  items-center lg:w-1/2'>
            <p className="font-extrabold text-transparent text-2xl md:text-3xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"> Certification</p>
                <p className='text-xs md:text-sm text-center'>UI/UX Education & Certs: Design degrees, cool certifications, and specialized training.</p>
            </div> 
        <div className='grid grid-cols-1 md:grid-cols-2 gap-2 my-4 items-center justify-center'>
          {Certificates.map((cert)=>{
            return  <img src={cert.imageID} alt="Certificate" className=' bg-green-200 bg-contain  rounded-lg h-56' />;
          })}
       
        {/* <img src={mob} alt="Certificate" className=' bg-green-200 bg-contain rounded-2xl'/>
        <img src={mob} alt="Certificate" className=' bg-green-200 bg-contain rounded-2xl'/>
        <img src={mob} alt="Certificate" className=' bg-green-200 bg-contain rounded-2xl'/> */}
        </div>  
    </div>
  )
}

export default Certification