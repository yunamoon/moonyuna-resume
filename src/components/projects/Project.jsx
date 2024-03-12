import React from 'react'

function ProjectItem ({title , contents}) {

  return (
  <div className='h-[100px'>
  <h4 className='text-1xl font-semibold mt-3 ' >{title}</h4> 
  <p className='text-gray-400 mt-1'>{contents}</p></div>
  );

}
 
function Project({project}) {

  const openExternalPage = (link) => {
    window.open(link, '_blank');
  };


  return (
   
          <div className='flex flex-col w-full sm:w-1/2 h-full'>

          <div className='m-5 border border-gray-500 rounded-md p-6 hover:scale-105 transform transition duration-300 cursor-pointer'>
               
                <img className='w-full mb-5' src={project.img} />
      

                <div className='w-full'>
                  <h3 className='text-2xl font-semibold mb-5' >{project.title}</h3> 
                  
                  <ProjectItem  title={'Description.'} contents={project.Description}/>
                  {/* <ProjectItem title={'What did I do'} contents={(<>▷ 스마트 쑥쑥의 핵심 컨셉인 실시간 모니터링 화면 구현 <br/> ▷ 그래프를 추가해 농장 환경 데이터 시각화</>)}/> */}
                  <ProjectItem   title={'Tech Stack.'} contents={project.TechStack}/>             
                  
                  <div className='flex mt-8 gap-3'>
                  <button onClick={()=> openExternalPage(project.liveLink)} className='text-sm flex-1 py-3  w-full bg-gradient-to-t from-yellow-600 rounded-full to-yellow-300 hover:from-yellow-700 hover:to-yellow-500'>Live Demo</button>
                  <button onClick={()=>openExternalPage(project.gitLink)} className='ext-sm flex-1  py-3 w-full border rounded-full hover:border-yellow-300 hover:text-yellow-300'>Github</button>
                  </div>
              </div>
      
            </div>
            </div>

  )
}

export default Project
