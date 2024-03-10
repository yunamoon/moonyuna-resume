import React, { useState } from 'react';

function HeaderItem({item}){
    return (
      <li>
      <a href={item.link} target={item.target} className='text-gray-400 hover:text-white cursor-pointer' >{item.title}</a>
      </li>
    );
};

function Header({handleThema}) {

   const [headerItem, setHeaderItem] = useState([
    {title : 'Experience' , link : '/' , target : '_self'},
    {title : 'Projects' , link : '/' , target : '_self'},
    {title : 'Technologies' , link : '/' , target : '_self'},
    {title : 'Blog' , link : 'https://moonyuna.tistory.com/' , target : '_blank'},
    {title : 'Github' , link : 'https://github.com/yunamoon' , target : '_blank'},
   ])

  return (
    <header className='flex justify-center '>
      <div className='container flex  flex-col sm:flex-row justify-between mx-auto px-6 py-6 '>
        <h1 className='font-bold text-xl mb-3 sm:mb-0'>YUNA🌕 Portfolio</h1>
        <ul className='flex gap-4'>
          {headerItem.map((item, index)=> (
            <HeaderItem  key={index} item={item} />
          ))}
          {/* <li>
          <a className='text-gray-200 bg-gray-400 py-1 px-3 rounded-md hover:text-white cursor-pointer'
          onClick={handleThema} >dark</a>
          </li> */}
     
     
        </ul>
      </div>
    </header>
  );
}

export default Header;
