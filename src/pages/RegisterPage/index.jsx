import React, { useState } from 'react';
import Header from '../../components/header/header';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import app from '../../firebase';
import styles from './register.module.css';

function RegisterPage() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firebaseError, setFirebaseError] = useState('');
  const navigate = useNavigate();
  const auth = getAuth(app);

  const fileSelectedHandler = event => {
    const file = event.target.files[0];
    setSelectedFile(file);
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPreviewUrl(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log('회원가입 성공:', user);
      navigate('/');
    } catch (error) {
      console.error('회원가입 실패:', error.message);
      setFirebaseError('이메일 또는 비밀번호가 잘못되었습니다.');
    }
  };

  return (
    <>
      <Header />
      <div className={styles.registerWrapper}>
        <div className={styles.registerContainer}>
          <form onSubmit={onSubmit} className={styles.registerForm}>
            <h2>회원가입</h2>
            <div className={styles.formGroup}>
              {previewUrl && <img src={previewUrl} alt="프로필 이미지 미리보기" className={styles.previewImage} />}
              <label htmlFor="profileImage">프로필 이미지</label>
              <div className={styles.fileInputWrapper}>
                <input type="file" accept="image/*" onChange={fileSelectedHandler} className={styles.fileInput} />
                <button type="button" className={styles.fileSelectButton} htmlFor="profileImage">파일 선택</button>
              </div>
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="Name">이름</label>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email">이메일</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="password">비밀번호</label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            {firebaseError && <p className={styles.error}>{firebaseError}</p>}
            <button type="submit">회원가입</button>
            <p>이미 회원이신가요? <Link to="/login">로그인하기</Link></p>
          </form>
        </div>
      </div>
    </>
  );
}

export default RegisterPage;
