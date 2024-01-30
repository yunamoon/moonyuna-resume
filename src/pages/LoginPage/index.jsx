import React from 'react'
import Header from '../../components/header/header'
import { Link } from 'react-router-dom';
import styles from './login.module.css'; 
function LoginPage() {
  return (
    <>
         <Header/>
         <div className={styles.loginWrapper}>
      <div className={styles.loginContainer}>
        <form className={styles.loginForm}>
          <h2>로그인</h2>
          <div className={styles.formGroup}>
            <label htmlFor="email">email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />
          </div>
          <button type="submit">Login</button>
          <p>아직 회원이 아니신가요? <Link to="/register">회원가입하기</Link></p> 
        </form>
      </div>
    </div>
         </>
    
  )
}

export default LoginPage
