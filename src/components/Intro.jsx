import React from 'react'
import profile from '../assets/images/profile.jpeg'
function Intro() {
  return (
    <main>
    <section className='container mx-auto my-auto px-4 py-10 flex justify-between items-center gap-6'>
            <div className='max-w-screen-md'>
            <h2 className='font-bold text-4xl'>안녕하세요, 문유나입니다.</h2>
            <h2 className='font-bold text-4xl mt-1 gradiant-text'>저는 3년차 프론트엔드 개발자입니다.</h2>
            <p className='mt-4 text-gray-400 '> 
            프로젝트를 통해 사용자 편의성을 개선하고 사용자에게 좋은 경험을 남기는 것을 중요시하며,
            그러기 위해 새로운 기술 도입도 주저하지 않는 편입니다. 대학 졸업 이후 부트캠프를 수료하고 
            초기 스타트업에서 개발자로 근무했던 이력만큼 도전적인 경험을 쌓는 것을 좋아하고, 
            그 성취감을 발판으로 다음 도전을 준비하고 있습니다.</p>
            <button className='custom-btn mt-8'>Download resume</button>
            </div>
        <img src={profile} width={450}></img>
        
    </section>
  </main>
  )
}

export default Intro
