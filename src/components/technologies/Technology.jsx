import React from 'react'

function Technology({technology, check}) {
  return (
    <div className='flex-1'>
    <h3 className='text-lg font-semibold mt-4 mb-2'>{technology.title}</h3>
      <p className={`${check? 'text-gray-400': 'text-gray-600' }`}>{technology.contents} </p>
    </div>
  )
}

export default Technology
