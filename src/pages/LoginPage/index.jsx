import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import Header from '../../components/header/header';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import app from '../../firebase';
import styles from './login.module.css';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const auth = getAuth(app);
  const navigate = useNavigate();
  
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/'); // 로그인 성공 시 홈페이지로 이동
    } catch (error) {
      setError(error.message); // 로그인 실패 시 에러 메시지 설정
    }
  };

  return (
    <>
      <Header />
      <div className={styles.loginWrapper}>
        <div className={styles.loginContainer}>
          <form onSubmit={handleLogin} className={styles.loginForm}>
            <h2>로그인</h2>
            <div className={styles.formGroup}>
              <label htmlFor="email">이메일</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="password">비밀번호</label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {error && <p className={styles.error}>{error}</p>}
            <button type="submit">로그인</button>
            <p>
              아직 회원이 아니신가요? <Link to="/register">회원가입하기</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
