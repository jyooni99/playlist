import { Routes, Route } from 'react-router-dom';
import Home from './pages';
import Login from './pages/login';
import SignUp from './pages/signup';
import Users from './pages/users';
import ProfileEdit from './pages/profile-edit';
import NotFound from './pages/not-found';
import Layout from './components/layout/layout';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Home />} /> {/*동영상 리스트 페이지*/}
        <Route path='/login' element={<Login />} /> {/* 로그인 페이지 */}
        <Route path='/signup' element={<SignUp />} /> {/* 회원가입 페이지 */}
        <Route path='/users' element={<Users />} />
        <Route path='profile-edit' element={<ProfileEdit />} /> {/* 프로필 수정 페이지 */}
        <Route path='*' element={<NotFound />} /> {/*Not found*/}
      </Routes>
    </Layout>
  );
}

export default App;
