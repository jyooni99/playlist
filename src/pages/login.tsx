import { Link } from 'react-router-dom';
import Input from '../components/input';

const Login = () => {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-gray-100'>
      <div className='w-full max-w-md bg-white pt-10 pb-20 px-8 rounded-xl'>
        {/* 로그인 */}
        <h2 className='text-3xl font-bold text-center text-gray-800 mb-12'>로그인</h2>
        <form>
          <Input
            label='이메일'
            type='email'
            id='email'
            placeholder='이메일을 입력하세요'
            required
          />
          <Input
            label='비밀번호'
            type='password'
            id='password'
            placeholder='비밀번호를 입력하세요'
          />
          <div className='mt-8'>
            <button
              type='submit'
              className='w-full py-2 bg-black text-white rounded-full cursor-pointer hover:bg-gray-800 transition'
            >
              로그인
            </button>
          </div>
        </form>

        {/* 회원가입 버튼 */}
        <div className='mt-6 text-center'>
          <p className='text-sm text-gray-600'>
            <span>아직 회원이 아니신가요?</span>
            <Link to='/signup' className='text-black font-semibold hover:underline ml-1'>
              회원가입
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
