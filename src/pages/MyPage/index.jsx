import React from 'react'
import Header from '../../components/header/header'
import styles from './mypage.module.css'; 
function MyPage() {
  return (
    <>
     <Header/>
     <div className={styles.myPageWrapper}>
      <div className={styles.myPageContainer}>
        
        <div className={styles.profileInfo}>
          <img src='' alt="프로필" className={styles.profileImage} />
          <div className={styles.userInfo}>
            <p><strong>아이디:</strong> 로그인 아이디</p>
            <p><strong>최근 로그인 시간:</strong> 최근 로그인 시간</p>
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
