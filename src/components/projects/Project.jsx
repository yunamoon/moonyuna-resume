import React from 'react'

function ProjectItem ({title , contents, check}) {

  return (
  <div className='h-[100px]'>
  <h4 className='font-semibold mt-3 text-lg ' >{title}</h4> 
  <p className={` mt-1 ${check? 'text-gray-400' :'text-gray-600'}`}>{contents}</p></div>
  );

}
 
function Project({project, check}) {

  const openExternalPage = (link) => {
    window.open(link, '_blank');
  };


  return (
   
          <div className='flex flex-col w-full sm:w-1/2 h-full'>

          <div className={`m-5 border rounded-md p-6 hover:scale-105 transform transition duration-300 cursor-pointer
          ${check? 'border-gray-500' : 'border-gray-200'}`}>
               
                <img className='w-full mb-5' src={project.img} />
      

                <div className='w-full'>
                  <h3 className='text-2xl font-semibold mb-5' >{project.title}</h3> 
                  
                  <ProjectItem  title={'Description.'} contents={project.Description} check={check}/>
                  {/* <ProjectItem title={'What did I do'} contents={(<>▷ 스마트 쑥쑥의 핵심 컨셉인 실시간 모니터링 화면 구현 <br/> ▷ 그래프를 추가해 농장 환경 데이터 시각화</>)}/> */}
                  <ProjectItem   title={'Tech Stack.'} contents={project.TechStack} check={check}/>             
                  
                  <div className='flex mt-8 gap-3'>
                  <button onClick={()=> openExternalPage(project.liveLink)} 
                  className={`text-base font-semibold flex-1 py-3  w-full 
                  ${check? 'bg-gradient-to-r from-yellow-600 rounded-full to-yellow-300 hover:from-yellow-700 hover:to-yellow-500' 
                  : 'bg-gradient-to-r from-yellow-300 rounded-full to-yellow-200 hover:from-yellow-400 hover:to-yellow-300 '}`}>Live Demo</button>
                  
                  <button onClick={()=>openExternalPage(project.gitLink)} 
                  className={`text-base font-semibold flex-1  py-3 w-full border rounded-full 
                  ${check? 'hover:border-yellow-300 hover:text-yellow-300 '
                  : 'hover:border-yellow-400 hover:text-yellow-400' }`}>
                    Github</button>
                  </div>
              </div>
      
            </div>
            </div>

  )
}

export default Project
