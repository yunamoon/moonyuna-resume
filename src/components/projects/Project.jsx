import React from 'react'

function ProjectItem ({title , contents}) {

  return (
  <>
  <h4 className='text-1xl font-semibold mt-8' >{title}</h4> 
  <p className='text-gray-400 mt-2'>{contents}</p></>
  );

}
 
function Project({project}) {

  const openExternalPage = (link) => {
    window.open(link, '_blank');
  };


  return (
   
          <div className='flex flex-col w-1/2  sm:gap-10 border border-gray-500 rounded-md p-6 transform transition duration-300 cursor-pointer'>

                  <img className='w-[100px] h-full' src={project.img} />
      

                <div className='w-full'>
                <h3 className='text-2xl font-semibold mt-8' >스마트 쑥쑥 웹</h3> 
               
                <ProjectItem title={'Description.'} contents={'신규 서비스인 스마트 쑥쑥의 초기 기획과 프로젝트 설계에 참여하고 베타 버전의 프론트엔드 영역을 개발했습니다.'}/>
                <ProjectItem title={'What did I do'} contents={(<>▷ 스마트 쑥쑥의 핵심 컨셉인 실시간 모니터링 화면 구현 <br/> ▷ 그래프를 추가해 농장 환경 데이터 시각화</>)}/>
                <ProjectItem title={'Tech Stack.'} contents={'Angular , Angular-Material, Chart.Js,  Firebase, Git actions'}/>             
                
                <div className='flex mt-8 gap-3'>
                <button onClick={()=> openExternalPage(project.liveLink)} className='text-sm flex-1 py-3  w-full bg-gradient-to-t from-yellow-600 rounded-full to-yellow-300 hover:from-yellow-700 hover:to-yellow-500'>Live Demo</button>
                <button onClick={()=>openExternalPage(project.gitLink)} className='ext-sm flex-1  py-3 w-full border rounded-full hover:border-yellow-300 hover:text-yellow-300'>Github</button>
                </div>
              
              </div>
      
            </div>

  )
}

export default Project
