import React, { useEffect, useState } from 'react'
import './header.css';
import app from '../../firebase';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { useLocation, useNavigate} from 'react-router-dom';

function header() {

  const auth = getAuth(app);
  const navigate = useNavigate();
  const pathname = useLocation();
  const [userData , setUserData] = useState({});

  useEffect(()=> {
   const unsubscribe = onAuthStateChanged(auth, (user)=> {
    setUserData(user)
      if (!user) {
      } else if (user && pathname =="/login") {
        navigate('/')
      }
    })
    
    return() => {
      unsubscribe();
    }
  },[pathname])

  const handleLogout = () => {
    signOut(auth)
    .then(()=> {
      setUserData({});
    })
    .catch(error=>{
      alert(error.message);
    })
  }

  return (
    <header>
    <div className="logo">
    <h1>항해99</h1>
    </div>
    <nav>
      <ul>

      {!userData 
      &&  <li><a href="login">로그인</a></li>}
      {!userData 
      && <li><a href="register">회원가입</a></li>}
      {userData && <li onClick={handleLogout}><a href="/">로그아웃</a></li>  }  
        
        <li><a href="mypage">마이페이지</a></li>
        <li><a href="anotheruser">다른 유저 보기</a></li>
      </ul>
    </nav>
  </header>
  )
}

export default header
