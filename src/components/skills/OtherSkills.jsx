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
  <div className='flex justify-between'>
    {other.map((item, index)=> (
        <OtherSkill key={index} other={item}/>
    ))}

  </div>
  </div>
</section>
  )
}

export default OtherSkills
