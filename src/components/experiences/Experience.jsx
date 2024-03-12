import React from 'react'

function Experience({experience, check}) {
  return (
    
    <div className={`pb-10 pl-24 relative before:w-4 before:h-4 before:absolute before:rounded-full before:left-[58px]
    ${check? 'before:bg-gradient-to-r before:from-yellow-600 before:to-yellow-300' 
    : 'before:bg-gradient-to-r before:from-yellow-300 before:to-yellow-200'}`}>
    <h3 className='absolute left-0 text-lg font-semibold'>{experience.year}</h3>
    {experience.contents.map((item) => (
          <div className='mb-1' key={item.index}>
            <p className='mb-3'> {item.title}</p>
            {item.detail && <>{item.detail}</> }
          </div>
           
    ))}
    {experience.test}
  </div>
  )
}

export default Experience
