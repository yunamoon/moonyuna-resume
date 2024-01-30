import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import HomePage from './pages/HomePage/index';
import LoginPage from './pages/LoginPage/index';
import Mypage from './pages/MyPage/index';
import RegisterPage from './pages/RegisterPage/index';
import NotFoundPage from './pages/NotFoundPage/index';
function App() {
  return (
    <BrowserRouter>
    <Routes>
       <Route path='/' element={<HomePage/>}/>
       <Route index element={<HomePage/>} />
       <Route path="login" element={<LoginPage/>} />
       <Route path="register" element={<RegisterPage/>} />
       <Route path="mypage" element={<Mypage/>} />
       <Route path="*" element={<NotFoundPage/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;