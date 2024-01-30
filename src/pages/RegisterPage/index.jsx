import React, { useState } from 'react';
import Header from '../../components/header/header'
import { Link } from 'react-router-dom';
import styles from './register.module.css'; 
function RegisterPage() {

 // 파일 선택 상태와 미리보기 URL을 관리하는 상태
 const [selectedFile, setSelectedFile] = useState(null);
 const [previewUrl, setPreviewUrl] = useState(null);

 // 파일 선택 시 호출되는 함수
 const fileSelectedHandler = event => {
   const file = event.target.files[0];
   setSelectedFile(file);
   // 파일이 선택되면 미리보기 URL 생성
   const fileReader = new FileReader();
   fileReader.onload = () => {
     setPreviewUrl(fileReader.result);
   };
   fileReader.readAsDataURL(file);
 };


  return (
    <>
      <Header/>
      <div className={styles.registerWrapper}>
      <div className={styles.registerContainer}>
        <form className={styles.registerForm}>
          <h2>회원가입</h2>

          {/* 파일 선택을 위한 버튼과 미리보기를 위한 원형 구간 */}
          <div className={styles.formGroup}>
          {previewUrl && <img src={previewUrl} alt="프로필 이미지 미리보기" className={styles.previewImage} />}
            <label htmlFor="profileImage">프로필 이미지</label>
            <div className={styles.fileInputWrapper}>
              <input type="file" id="profileImage" name="profileImage" accept="image/*" onChange={fileSelectedHandler} className={styles.fileInput} />
              <button type="button" className={styles.fileSelectButton} htmlFor="profileImage">파일 선택</button>
            </div>
           
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="Name">Name</label>
            <input type="text" id="Name" name="Name" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />
          </div>
          
          <button type="submit">회원가입</button>
          <p>이미 회원이신가요? <Link to="/login">로그인하기</Link></p>
        </form>
      </div>
    </div>
    </>
  )
}

export default RegisterPage
