import React from 'react'

function Experience({experience}) {
  return (
    <div className='pb-10 pl-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-yellow-600 before:to-yellow-300 before:absolute before:rounded-full before:left-[58px]' >
    <h3 className='absolute left-0 text-lg font-semibold'>{experience.year}</h3>
    {experience.contents.map((item, index) => (
        <p className='mb-1' key={index}>{item}</p>
    ))}
  </div>
  )
}

export default Experience
