import { Link, useNavigate } from 'react-router-dom';

import Input from '../components/form/input';
import useForm from '../hooks/use-form';
import { loginValidator } from '../utils/validators';
import { loginFields, loginInitialValues } from '../constants/form-fields';
import type { LoginFormValuesType } from '../types/form';
import { useAuthStore } from '../stores/use-auth-store';
import InputWrapper from '../components/form/input-wrapper';

const Login = () => {
  const nav = useNavigate();
  const { login } = useAuthStore();

  // 로그인 폼 제출 함수
  const onSubmit = (values: LoginFormValuesType) => {
    try {
      login({ email: values.email, password: values.password });
      nav('/home');
    } catch {
      setFieldError('email', ' ');
      setFieldError('password', '이메일 또는 비밀번호를 확인해주세요.');
    }
  };

  const {
    values,
    touched,
    errors,
    isValid,
    handleInputChange,
    handleBlur,
    handleSubmit,
    setFieldError,
  } = useForm<LoginFormValuesType>({
    initialValues: loginInitialValues,
    onSubmit,
    validate: loginValidator,
  });

  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-gray-100'>
      <div className='w-full max-w-md bg-white pt-10 pb-20 px-8 rounded-xl'>
        <h2 className='text-3xl font-bold text-center text-gray-800 mb-12'>로그인</h2>
        <form onSubmit={handleSubmit}>
          {loginFields.map(({ id, type, label, placeholder }) => {
            return (
              <InputWrapper key={id} id={id} label={label} error={errors[id]} touched={touched[id]}>
                <Input
                  id={id}
                  type={type}
                  placeholder={placeholder}
                  value={values[id]}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  error={errors[id]}
                  touched={touched[id]}
                />
              </InputWrapper>
            );
          })}
          <div className='mt-8'>
            <button
              type='submit'
              className='w-full py-2 bg-black text-white rounded-full cursor-pointer hover:bg-gray-800 transition disabled:bg-gray-400 disabled:cursor-default'
              disabled={!isValid}
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
