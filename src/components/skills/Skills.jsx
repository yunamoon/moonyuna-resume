import React, { useState } from 'react'
import Skill from './Skill';

function Skills() {

    const [skills , setSkills] = useState([
      { title: 'JavaScript, TypeScript', percentage: 'w-[80%]' },
      { title: 'React', percentage: 'w-[70%]' },
      { title: 'Next', percentage: 'w-[50%]' },
      { title: 'Flutter', percentage: 'w-[60%]' },
      { title: 'Angular', percentage: 'w-[30%]' },
    ])

    console.log(skills)
  return (
    <section className='py-8'>
    <div className='container m-auto px-4'>
     <h2 className='text-2xl font-semibold'>Skills</h2>
     {skills.map((item, index)=> (
            <Skill key={index} skill={item}/>
     ))}
   </div>
   </section>
  )
}

export default Skills
