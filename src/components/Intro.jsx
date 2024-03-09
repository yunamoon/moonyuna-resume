import React from 'react'
import profile from '../assets/images/profile.jpeg'
function Intro() {

  const PDF_FILE_URL = 'http://localhost:5173/resume.pdf';

  const DownloadResume = (url) => {
    const a = document.createElement('a');
    a.href = url;
    a.setAttribute('download', 'resume.pdf');
    document.body.appendChild(a);
    a.click();
    a.remove();
  }
  return (
    <main>
    <section className='container m-auto px-4 py-16 flex flex-col sm:flex-row justify-between items-center'>
            <div className='w-full sm:w-7/12'>
            <h2 className='font-bold text-2xl sm:text-4xl text-nowrap'>안녕하세요, 문유나입니다.</h2>
            <h2 className='font-bold text-2xl mt-1 gradiant-text sm:text-4xl'>저는 3년차 프론트엔드 개발자입니다.</h2>
            <p className='mt-4 text-gray-400'> 
            프로젝트를 통해 사용자 편의성을 개선하고 사용자에게 좋은 경험을 남기는 것을 중요시하며,
            그러기 위해 새로운 기술 도입도 주저하지 않는 편입니다. 대학 졸업 이후 부트캠프를 수료하고 
            초기 스타트업에서 개발자로 근무했던 이력만큼 도전적인 경험을 쌓는 것을 좋아하고, 
            그 성취감을 발판으로 다음 도전을 준비하고 있습니다.</p>
            <button 
            className="px-8 py-5 mt-5 bg-gradient-to-t from-yellow-600 rounded-full to-yellow-300 hover:from-yellow-700 hover:to-yellow-500"
            onClick={()=>{DownloadResume(PDF_FILE_URL)}}
            >
            Download resume
            </button>
            </div>
        <img src={profile} className='sm:w-[380px] w-[300px] mt-10' ></img>
        
    </section>
  </main>
  )
}

export default Intro
