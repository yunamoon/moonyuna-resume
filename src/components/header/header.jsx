import React from 'react'
import './header.css';
function header() {
  return (
    <header>
    <div className="logo">
    <h1>항해99</h1>
    </div>
    <nav>
      <ul>
        <li><a href="login">로그인</a></li>
        <li><a href="logout">로그아웃</a></li>
        <li><a href="register">회원가입</a></li>
        <li><a href="mypage">마이페이지</a></li>
        <li><a href="anotheruser">다른 유저 보기</a></li>
      </ul>
    </nav>
  </header>
  )
}

export default header
