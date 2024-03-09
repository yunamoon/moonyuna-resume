import React from 'react'

function Skill({ skill }) {
  
  return (
    <div className='mt-8'>
            <div className='flex justify-between items-center'> 
            <h2 className='text-lg font-semibold mb-2'>{skill.title}</h2>
            <p className='text-gray-400'>Advanced</p>
            </div>
            <span className={`${skill.percentage} h-2 mt-2 bg-gradient-to-t from-gray-700 to-gray-500 block rounded-md`}></span>
    </div>
  )
}

export default Skill
