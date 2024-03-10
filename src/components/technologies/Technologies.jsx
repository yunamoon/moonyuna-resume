import React, { useState } from 'react'
import Technology from './Technology'

function Technologies() {
    
    const [technologies , setTechnologies] = useState([ 
        {title : 'Front-End' , contents: 'Experience with JS, TS, React, Next, Flutter'},
        {title : 'Back-End' , contents: 'Experience with Node, Express, Java'},
        {title : 'DB' , contents: 'Experience with GCP, Firebase, MongoDB'},
        {title : 'Other' , contents: 'Experience with Gihub, XD, Slack, Notion, Jira, Confluence'},
    ])
  
    return (
    <section className='py-8'>
    <div className='container m-auto px-4'>
     <h2 className='text-2xl font-semibold'>Technologies</h2>
     <div className='flex gap-10 flex-col sm:flex-row mt-5'>
            {technologies.map((item, index)=> (
            <Technology key={index} technology={item} />
            ))}
     </div>
   </div>
   </section>
  )
}

export default Technologies
