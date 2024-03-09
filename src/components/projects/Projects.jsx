import React, { useState } from 'react'
import Project from './Project'

function Projects() {

    const [projects , setProjects] = useState([
        {id : 1,
        title : 'Commune', 
        contents : 'Commune은 이미지를 공유하고 상호 작용할 수 있는 온라인 커뮤니티 플랫폼입니다. React를 기반으로하여 사용자들은 서로의 게시글에 좋아요를 표시하고 댓글을 남기며 친목을 형성할 수 있습니다.' , 
        img : 'src/assets/images/sample.jpg'},
        
        {id : 2,
        title : '펫파크', 
        contents : '펫파크는 React로 구현된 애견 용품의 온라인 쇼핑 플랫폼입니다. 판매 인증을 받은 사용자들은 안전하고 신뢰성 있는 제품을 판매하며, 고객들은 다양한 기술로 제작된 제품을 구매할 수 있습니다.' , 
        img : 'src/assets/images/sample.jpg'},
            
        {id : 3,
        title : '오늘의 위로', 
        contents : '오늘의 위로는 React 기반의 프로젝트로, ChatGPT API를 활용하여 용자가 일상에서 받는 고민이나 스트레스를 공유하고 위로를 받을 수 있는 서비스입니다.' , 
        img : 'src/assets/images/sample.jpg'},
        
        {id : 4,
        title : '나무늘보의 서재', 
        contents : '나무늘보의 서재는 Next.js를 기반의 프로젝트로 저의 학습 여정을 기록하고, 참고 자료와 학습 내용을 공유하는 공간입니다.' , 
        img : 'src/assets/images/sample.jpg'},
        
        {id : 5,
        title : '스마트 쑥쑥 웹', 
        contents : '스마트 쑥쑥은 농장 환경 정보를 실시간으로 모니터링하고 제공하는 웹 서비스입니다. 리액트를 사용하여 만들어졌으며, Firebase와 Google Cloud Platform을 활용하여 사용자들에게 쉽고 편리한 환경 정보 솔루션을 제공합니다.' , 
        img : 'src/assets/images/sample.jpg'},

        {id : 6,
        title : '스마트 쑥쑥 앱', 
        contents : '스마트 쑥쑥 앱은 플러터를 사용하여 개발된 모바일 애플리케이션으로, 농장 환경 정보를 실시간으로 모니터링하고 사용자에게 제공합니다. Firebase와 Google Cloud Platform을 통해 데이터를 관리하여 사용자들이 편리하게 정보를 얻을 수 있습니다.' , 
        img : 'src/assets/images/sample.jpg'},
    
    ])


        return (
        <section>
            <div className='container m-auto px-4'>
            <h2 className='text-2xl font-semibold'>Projects</h2>
                <div className='flex flex-wrap justify-between gap-10 mt-10 '>
            {projects.map((item) => (
                    <Project key={item.id} project={item} />
                ))}
                </div>
            </div>
        </section>
        )
}

export default Projects
