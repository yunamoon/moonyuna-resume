import React, { useState } from 'react'
import OtherSkill from './OtherSkill'

function OtherSkills() {

 const [other , setOther] = useState([
    'Git' , 'XD', 'Slack' , 'Notion' ,'Jira', 'Confluence'
 ])
  return (
   
  <section>
  <div className='container m-auto px-4 py-8'>
  <h2 className='text-2xl font-semibold mb-8'>Other skills</h2>
  <div className='flex flex-col sm:flex-row gap-4 sm:gap-28 mt-11 w-[85%]'>
    {other.map((item, index)=> (
        <OtherSkill key={index} other={item}/>
    ))}

  </div>
  </div>
</section>
  )
}

export default OtherSkills
