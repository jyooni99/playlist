import { Link, useNavigate } from 'react-router-dom';

import Input from '../components/form/input';
import Radio from '../components/radio';
import Checkbox from '../components/checkbox';
import useForm from '../hooks/use-form';
import { signUpValidator } from '../utils/validators';
import {
  interests,
  jobCategory,
  signUpFields,
  signUpInitialValues,
} from '../constants/form-fields';
import type { SignUpFormValuesType } from '../types/form';
import { useAuthStore } from '../stores/use-auth-store';
import InputWrapper from '../components/form/input-wrapper';
import { DuplicateButton } from '../components/duplicate-button';
import { isEmailDuplicated } from '../utils/is-email-duplicated';

const SignUp = () => {
  const nav = useNavigate();
  const { login } = useAuthStore();

  const onSubmit = (values: SignUpFormValuesType) => {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const updatedUsers = [...users, values];

    localStorage.setItem('users', JSON.stringify(updatedUsers));

    login({
      email: values.email,
      password: values.password,
    });

    nav('/home');
  };

  const checkEmail = (email: string) => {
    try {
      isEmailDuplicated(email);
      setFieldError('email', '');
    } catch {
      setFieldError('email', '이미 가입된 이메일입니다.');
    }
  };

  const {
    values,
    touched,
    errors,
    isValid,
    handleInputChange,
    handleCheckboxChange,
    handleBlur,
    handleSubmit,
    setFieldError,
  } = useForm<SignUpFormValuesType>({
    initialValues: signUpInitialValues,
    onSubmit,
    validate: signUpValidator,
  });

  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-gray-100'>
      <div className='w-full max-w-md bg-white pt-10 pb-20 px-8 rounded-xl'>
        <h2 className='text-3xl font-bold text-center text-gray-800 mb-12'>회원가입</h2>
        <form onSubmit={handleSubmit}>
          {/* 이메일, 비밀번호, 생년월일 */}
          {signUpFields.map(
            ({ id, type, label, placeholder, helperText, inputMode, showToggle }) => {
              return (
                <InputWrapper
                  key={id}
                  id={id}
                  label={label}
                  helperText={helperText}
                  error={errors[id]}
                  touched={touched[id]}
                >
                  <div className='flex gap-3'>
                    <Input
                      id={id}
                      type={type}
                      value={values[id]}
                      placeholder={placeholder}
                      error={errors[id]}
                      touched={touched[id]}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      showToggle={showToggle}
                      inputMode={inputMode}
                    />
                    {id === 'email' && (
                      <DuplicateButton value={values[id]} onCheck={checkEmail}>
                        중복 확인
                      </DuplicateButton>
                    )}
                  </div>
                </InputWrapper>
              );
            },
          )}

          {/* 직군: 단일 선택 */}
          <InputWrapper label='직군'>
            {jobCategory.map(({ name, id, value }) => {
              return (
                <Radio
                  key={id}
                  id={id}
                  name={name}
                  value={value}
                  checked={values.jobCategory === value}
                  onChange={handleInputChange}
                />
              );
            })}
          </InputWrapper>

          {/* 관심 카테고리: 복수 선택 */}
          <InputWrapper
            label='관심 카테고리'
            error={errors['interests']}
            touched={touched['interests']}
          >
            {interests.map(({ name, id, value }) => {
              return (
                <Checkbox
                  key={id}
                  id={id}
                  name={name}
                  value={value}
                  checked={values.interests.includes(value)}
                  onChange={handleCheckboxChange}
                />
              );
            })}
          </InputWrapper>

          {/* 회원가입 버튼 */}
          <div className='mt-8'>
            <button
              type='submit'
              className='w-full py-2 bg-black text-white rounded-full cursor-pointer hover:bg-gray-800 transition disabled:bg-gray-400 disabled:cursor-default'
              disabled={!isValid}
            >
              회원가입
            </button>
          </div>
        </form>

        {/* 로그인 이동 버튼 */}
        <div className='mt-6 text-center'>
          <p className='text-sm text-gray-600'>
            <span>Playlist 회원이신가요?</span>
            <Link to='/signup' className='text-black font-semibold hover:underline ml-1'>
              로그인
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
