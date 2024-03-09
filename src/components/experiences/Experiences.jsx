import React, { useState } from 'react'
import Experience from './Experience'

function Experiences() {
   const [experience, setExperience] = useState([
    { year : 2021 , contents : ['단국대학교 식품공학과 졸업', '방송통신대학교 컴퓨터과학과 입학', 'Java 기반 부트캠프 수료', '(주)팀스페이스팜 입사']},
    { year : 2022 , contents : ['스마트 쑥쑥 웹 서비스 개발']},
    { year : 2023 , contents : ['스마트 쑥쑥 앱 서비스 개발']},
    { year : 2023 , contents : ['(주)팀스페이스팜 퇴사']},
    { year : 2024 , contents : ['원티드 프리온보딩코스 수료', '항해99 리부트 캠프 수료']},
   ])

  return (
    <section className='pt-8'>
    <div className='container m-auto px-4'>
      <h2 className='text-2xl font-semibold'>Experience</h2>
      <div className='mt-12 relative before:absolute before:top-0 before:left-16 before:rounded-full before:bottom-20 before:w-1 before:bg-white'>
        {experience.map((item, index)=> (
            <Experience key={index} experience={item} />
        ))}
      </div>
    </div>
  </section>
  )
}

export default Experiences
