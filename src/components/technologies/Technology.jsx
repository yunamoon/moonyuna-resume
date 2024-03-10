import React from 'react'

function Technology({technology}) {
  return (
    <div className='flex-1'>
    <h3 className='text-lg font-semibold mt-4 mb-2'>{technology.title}</h3>
      <p className='text-gray-400 '>{technology.contents} </p>
    </div>
  )
}

export default Technology
