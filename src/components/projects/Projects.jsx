import React, {useState } from 'react'
import Project from './Project'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import slider_sample from '../../assets/images/sample.jpg';

function Projects({check}) {

    const [projects , setProjects] = useState([
        {id : 1,
        title : 'HH99', 
        Description :  'HH99는 서로의 포스트를 공유하고 상호 작용할 수 있는 온라인 커뮤니티 플랫폼입니다. 사용자들은 서로의 게시글에 좋아요를 표시하고 댓글을 남기며 친목을 형성할 수 있습니다..',
        TechStack  : 'JavaScript, React, Redux, styled-components, Tailwind css, Firebase, Jest, Git actions',
        img : slider_sample,
        liveLink : 'https://hh99-ac7ee.web.app',
        gitLink : 'https://github.com/yunamoon/react-community'},
        
        // {id : 2,
        // title : '오늘의 위로', 
        // Description :  'Chat GPT API를 활용하여 유저가 일기를 남기면 하루 일과를 분석하여 그에 상응하는 공감과 피드백을 제공하는 서비스입니다.',
        // TechStack  : 'TypeScript, JavaScript, React, Redux, Chat GPT API, Tailwind css, Firebase, Jest, Netlify',
        // img :  slider_sample,
        // liveLink : 'https://hh99-ac7ee--pr2-develop-hl070utt.web.app',
        // gitLink : 'https://github.com/yunamoon/react-community'},

        // {id : 3,
        // title : '펫파크', 
        // Description :  '펫파크는 React로 구현된 애견 용품의 온라인 쇼핑 플랫폼입니다. 판매 인증을 받은 사용자들은 안전하고 신뢰성 있는 제품을 판매하며, 고객들은 다양한 기술로 제작된 제품을 구매할 수 있습니다.',
        // TechStack  : 'TypeScript, JavaScript, React, Redux, Chat GPT API, Tailwind css, Firebase, Jest, Netlify',
        // img :  slider_sample,
        // liveLink : 'https://hh99-ac7ee--pr2-develop-hl070utt.web.app',
        // gitLink : 'https://github.com/yunamoon/react-community'},

        
        // {id : 4,
        // title : '나무늘보의 서재', 
        // Description :  '나무늘보의 서재는 Next.js를 기반의 블로그 프로젝트로 저의 학습 여정을 기록하고, 참고 자료와 학습 내용을 공유하는 공간입니다.',
        // TechStack  : 'TypeScript, Next.js, Redux, Tailwind css, Firebase, Jest, Netlify',
        // img :  slider_sample,
        // liveLink : 'https://hh99-ac7ee--pr2-develop-hl070utt.web.app',
        // gitLink : 'https://github.com/yunamoon/react-community'},
        
        {id : 5,
        title : '스마트 쑥쑥 웹', 
        Description :  '신규 서비스인 스마트 쑥쑥의 초기 기획과 프로젝트 설계에 참여하고 베타, 초기 버전, 마이그레이션 중 프론트엔드 영역을 개발했습니다.',
        TechStack  : 'Angular , Angular-Material, Chart.Js, TypeScript, JavaScript, React, Redux, Redux Saga, Sass, styled-components, Tailwind css, GCP, Firebase , Jest, Git actions',
        img :  slider_sample,
        liveLink : '/',
        gitLink : '/'},

        // {id : 6,
        // title : '스마트 쑥쑥 앱', 
        // contents : '스마트 쑥쑥 앱은 플러터를 사용하여 개발된 모바일 애플리케이션으로, 농장 환경 정보를 실시간으로 모니터링하고 사용자에게 제공합니다. Firebase와 Google Cloud Platform을 통해 데이터를 관리하여 사용자들이 편리하게 정보를 얻을 수 있습니다.' , 
        // Description :  '신규 서비스인 스마트 쑥쑥의 초기 기획과 프로젝트 설계에 참여하고 베타 버전의 프론트엔드 영역을 개발했습니다.',
        // TechStack  : 'Angular , Angular-Material, Chart.Js,  Firebase, Git actions',
        // img : 'src/assets/images/sample.jpg',
        // liveLink : 'https://hh99-ac7ee--pr2-develop-hl070utt.web.app',
        // gitLink : 'https://github.com/yunamoon/react-community'},
    
    ])


        return (
        <section className='py-8'>
            <div className='container m-auto px-4 py-9'>
            <h2 className='text-2xl font-semibold mb-5'>Projects</h2>
            <div className='flex flex-wrap flex-col sm:flex-row '> 
           {projects.map((item) => (
                 <Project key={item.id} project={item} check={check} />))}
            </div>
          
            {/* <Swiper
              className=''
              effect={'coverflow'}
              grabCursor={true}
              centeredSlides={true}
              loop={true}
              slidesPerView={1}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2.5,
              }}
              modules={[EffectCoverflow, Pagination, Navigation]}>
              
              {projects.map((item) => (
                <SwiperSlide>
                 <Project key={item.id} project={item} />
                </SwiperSlide>))}
            </Swiper> */}
            </div>
        </section>
        )
}

export default Projects
