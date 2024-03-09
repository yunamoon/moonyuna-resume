import React from 'react'

function Project({project}) {
  return (
   
        <div className='flex-auto sm:w-[40%]'>
          <div className='border border-gray-500 rounded-md p-6 w-full transform transition duration-300 hover:scale-105 hover:bg-gray-600 cursor-pointer'>
            <img 
            src={project.img} className='w-full h-50'/>
            <h3 className='text-2xl font-semibold mt-8' >{project.title}</h3>
            <p className='text-gray-400 text-sm mt-2'>
            {project.contents}
            </p>
            <div className='flex mt-8 gap-3'>
            <button className='text-sm flex-1 py-3  w-full bg-gradient-to-t from-yellow-600 rounded-full to-yellow-300 hover:from-yellow-700 hover:to-yellow-500'>Live Demo</button>
            <button className='ext-sm flex-1  py-3 w-full border rounded-full hover:border-yellow-300 hover:text-yellow-300'>Github</button>
            </div>
            </div>
            </div>
  )
}

export default Project
