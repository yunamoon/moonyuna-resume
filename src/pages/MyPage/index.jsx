import React, { useState,useEffect } from 'react';
import Header from '../../components/header/header'
import styles from './mypage.module.css'; 
import app from '../../firebase';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
function MyPage( {user}) {

  const auth = getAuth(app);
  const [loginUser , setLoginUser] = useState();
  const [displayName , setDisplayName] = useState();
  const [photoURL , setPhotoURL] = useState();
  const [lastLogin , setLastLogin] = useState();
  const [email, setEmail] = useState();

  setLoginUser(user);
  setEmail(user.email);
  setDisplayName(user.displayName);
  setPhotoURL(user.photoURL);
  setLastLogin(user.metadata.lastLoginAt);

  return (
    <>
     <Header/>
     <div className={styles.myPageWrapper}>
      <div className={styles.myPageContainer}>
 
        <div className={styles.profileInfo}>
          <img src={photoURL} alt="프로필" className={styles.profileImage} />
          <div className={styles.userInfo}>
            <p><strong>이름:</strong> {displayName}</p>
            <p><strong>이메일:</strong> {email}</p>
            <p><strong>최근 로그인 시간:</strong> {lastLogin}</p>
            
          </div>
        </div>
        
        <div className={styles.buttonGroup}>
          <button className={styles.logoutButton}>로그아웃</button>
          <button  className={styles.updateButton}>회원 정보 수정하기</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default MyPage
