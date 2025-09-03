import React from 'react'

function Define({problem,solution}) {
  return (
    <div className='flex flex-col gap-4 flock '>
         <div>
            <p className="text-lg font-bold text-slate-800 dark:text-slate-200">Problem</p>
            <p className='text-sm md:w-3/4 text-slate-700 dark:text-slate-200 font-light'>
              {problem}
            </p>
          </div>
          <div className="mt-4">
            <p className="text-lg font-bold text-slate-800 dark:text-slate-200">Solution</p>
            <p className='text-sm md:w-3/4 text-slate-800 dark:text-slate-200 font-light'>
              {solution}
            </p>
          </div>
    </div>
  )
}

export default Define