import React from 'react'
import Tistory from '../assets/images/tistory.png';
import Github from '../assets/images/github-white.svg';
function Footer() {
  return (
    <footer className='pt-8'>
    <div className='container m-auto flex justify-between px-4 py-6'>
        <p className='text-gray-400 text-sm'>Copyright @ 2024</p>
        <ul className='flex gap-2 items-center'>
        <li>
            <a href='https://github.com/yunamoon'><img width={22} height={22} src={Github} className='cusor-pointer'/></a>
          </li>
          <li>
            <a href='https://moonyuna.tistory.com/'><img width={30} height={30} src={Tistory} className='cusor-pointer'/></a>
          </li>
        </ul>
    </div>
  </footer>
  )
}

export default Footer
