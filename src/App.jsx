import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import HomePage from './pages/HomePage/index';
import LoginPage from './pages/LoginPage/index';
import Mypage from './pages/MyPage/index';
import RegisterPage from './pages/RegisterPage/index';
import NotFoundPage from './pages/NotFoundPage/index';
import { useEffect, useState } from 'react';
import app from './firebase';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

function App() {

  const [user, setUser] = useState(null);
  const auth = getAuth(app);

  useEffect(() => {
    // Firebase Auth의 onAuthStateChanged 이벤트 리스너를 등록하여 로그인 상태 변경을 감지합니다.
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user); // 사용자 정보를 업데이트합니다.
    });

    // 컴포넌트가 언마운트될 때 이벤트 리스너를 정리합니다.
    return () => unsubscribe();
  }, [auth]);


  return (
    <BrowserRouter>
    <Routes>
       <Route path='/' element={<HomePage/>}/>
       <Route index element={<HomePage/>} />
       <Route path="login" element={<LoginPage/>} />
       <Route path="register" element={<RegisterPage/>} />
       <Route path="mypage" element={<Mypage user={user}/>} />
       <Route path="*" element={<NotFoundPage/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;