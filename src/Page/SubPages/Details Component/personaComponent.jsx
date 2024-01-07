import React from 'react'
import photo from '../../../assets/mob.jpeg'

function PersonaItem() {
  return (
    <div className=' shadow-xl bg-white hover:z-10 hover:scale-125 duration-300 ease-in-out transition-all hover:shadow-2xl  dark:bg-white/20 rounded-xl flex flex-col p-4 gap-2'>
        <p className='text-xl font-bold'>"Ill be God Damned"</p>
        <div className='flex gap-2'>
          <div className='flex flex-col gap-2 items-center'>
            <p className=' underline'>User Information</p>
            <div className='flex flex-col gap-1 items-center'>
            <img src={photo} alt="" srcset="" className=' h-32 w-full object-cover rounded-lg' />
              <p className='text-Primary font-semibold'>Personal Name here</p>
              <p>25 years old</p>
              <div className='flex flex-col p-3 text-sm text-slate-600 dark:text-slate-200 gap-2'>
                <div className='flex gap-4 w-full justify-between'>
                  <p>Education</p>
                  <p className='font-bold'>Degree</p>
                </div>
                <div className='flex gap-4 w-full justify-between'>
                  <p>Location</p>
                  <p className='font-bold'>A.A</p>
                </div>
                <div className='flex gap-4 w-full justify-between'>
                  <p>Occupation</p>
                  <p className='font-bold'>Employed</p>
                </div>
                <div className='flex gap-4 w-full justify-between'>
                  <p>Maritial Stat</p>
                  <p className='font-bold'>Engaged</p>
                </div>


              </div>
            </div>
          </div>
          <div className='flex flex-col gap-4 '>
            <div className='flex flex-col p-2 bg-slate-100 dark:bg-slate-100/20 rounded-lg'>
              <p className='text-sm font-semibold text-slate-400'>Biography</p>
              <p className='text-sm '>Biog raphyBiogra phyBiograph  yBiograp hyBiographyBiog raphyBiog raphyBiographyBiography</p>
            </div>
            <div className='flex flex-col p-2 bg-slate-100 dark:bg-slate-100/20 rounded-lg'>
            <p className='text-sm font-semibold text-slate-400 dark:text-slate-100'>Goal / Objective</p>
              <p className='text-sm' >BiographyBiographyBio graphyBiographyB iographyBiogr aphyBiogr aphyBiographyBiography</p>
            </div>
            <div className='flex flex-col p-2 bg-slate-100 dark:bg-slate-100/20  rounded-lg'>
            <p className='text-sm font-semibold text-slate-400 dark:text-slate-100'>Frustration / Pain points</p>
              <p className='text-sm'>BiographyBiographyBiograph yBiographyBi ographyBio graphyBiogr aphyBiograp hyBiography</p>
            </div>
            <div className='flex gap-4 h-full'>
            <div className='flex flex-col p-2 w-1/2 bg-slate-100 dark:bg-slate-100/20 rounded-lg'>
            <p className='text-sm font-semibold text-slate-400 dark:text-slate-100'>Social Media</p>
              <p className='text-sm'>Biograp hyBiograph yBiograph yBiographyBio graphyBiographyBio graphyBiogra phyBiography</p>
            </div>
            <div className='flex flex-col p-2 w-1/2 bg-slate-100 dark:bg-slate-100/20 rounded-lg'>
            <p className='text-sm font-semibold text-slate-400 dark:text-slate-100'>Technologies</p>
              <p className='text-sm'>BiographyBiographyBio graphyBiographyBiogr aphyBiograp hyBiogr aphyBiographyB iography</p>
            </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default PersonaItem