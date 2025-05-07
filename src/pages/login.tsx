import { Link } from 'react-router-dom';
import Input from '../components/input';
import useForm from '../hooks/use-form';
import { loginValidator } from '../utils/validators';

const Login = () => {
  const initialValues = { email: '', password: '' };

  const onSubmit = (values: Record<string, string>) => {
    console.log('로그인 성공', values);
  };

  const { values, touched, errors, handleInputChange, handleBlur, handleSubmit } = useForm({
    initialValues,
    onSubmit,
    validate: loginValidator,
  });

  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-gray-100'>
      <div className='w-full max-w-md bg-white pt-10 pb-20 px-8 rounded-xl'>
        {/* 로그인 */}
        <h2 className='text-3xl font-bold text-center text-gray-800 mb-12'>로그인</h2>
        <form onSubmit={handleSubmit}>
          <Input
            id='email'
            type='email'
            label='이메일'
            placeholder='이메일을 입력하세요'
            value={values.email}
            onChange={handleInputChange}
            onBlur={handleBlur}
          />
          {touched.email && errors.email && <span>{errors.email}</span>}

          <Input
            id='password'
            type='password'
            label='비밀번호'
            placeholder='비밀번호를 입력하세요'
            value={values.password}
            onChange={handleInputChange}
            onBlur={handleBlur}
          />
          {touched.password && errors.password && <span>{errors.password}</span>}

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
