import React, { useState } from 'react';

function HeaderItem({item ,check}){
    return (
      <li>
      <a href={item.link} target={item.target}
      className={`${check ? 'text-gray-400 hover:text-white' : 'text-black hover:text-gray-400' } cursor-pointer`}  >{item.title}</a>
      </li>
    );
};

function Header({handleThema, check}) {

   const [headerItem, setHeaderItem] = useState([
    // {title : 'Experience' , link : '/' , target : '_self'},
    // {title : 'Projects' , link : '/' , target : '_self'},
    // {title : 'Technologies' , link : '/' , target : '_self'},
    {title : 'Blog' , link : 'https://moonyuna.tistory.com/' , target : '_blank'},
    {title : 'Github' , link : 'https://github.com/yunamoon' , target : '_blank'},
   ])

  return (
    <header className='flex justify-center '>
      <div className='container flex  flex-col sm:flex-row justify-between mx-auto px-6 py-6 '>
        <h1 className='font-bold text-xl mb-3 sm:mb-0'>YUNA🌕 Portfolio</h1>
        <ul className='flex gap-4'>
          {headerItem.map((item, index)=> (
            <HeaderItem  key={index} item={item} check={check} />
          ))}
          <li>
          <a className={`text-sm cursor-pointer py-1 px-3 rounded-md
          ${check? 'text-black bg-gray-400 hover:text-gray-900 hover:bg-white' 
                  :'text-white bg-gray-800 hover:text-white hover:bg-black'} `}
          onClick={handleThema} >dark</a>
          </li>
     
     
        </ul>
      </div>
    </header>
  );
}

export default Header;
