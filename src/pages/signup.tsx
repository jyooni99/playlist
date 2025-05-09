import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Input from '../components/form/input';
import Radio from '../components/form/radio';
import Checkbox from '../components/form/checkbox';
import InputWrapper from '../components/form/input-wrapper';
import { DuplicateButton } from '../components/form/duplicate-button';

import useForm from '../hooks/use-form';
import { signUpValidator } from '../utils/validators';
import { isEmailDuplicated } from '../utils/is-email-duplicated';
import {
  interests,
  jobCategory,
  signUpFields,
  signUpInitialValues,
} from '../constants/form-fields';

import type { SignUpFormValuesType } from '../types/form';
import { useAuthStore } from '../stores/use-auth-store';

const SignUp = () => {
  const nav = useNavigate();
  const { login } = useAuthStore();

  const [isCheckedEmail, setIsCheckedEmail] = useState<boolean>(false);

  // 폼 제출 함수
  const onSubmit = (values: SignUpFormValuesType) => {
    if (!isCheckedEmail) {
      setFieldError('email', '이메일 중복확인을 해주세요.');
      return;
    } else {
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      const updatedUsers = [...users, values];

      localStorage.setItem('users', JSON.stringify(updatedUsers));

      login({
        email: values.email,
        password: values.password,
      });

      nav('/home');
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
    clearFieldError,
  } = useForm<SignUpFormValuesType>({
    initialValues: signUpInitialValues,
    validate: signUpValidator,
    onSubmit,
  });

  // 이메일이 중복되지 않을 경우 에러 제거, 중복일경우 에러 추가
  const checkEmail = (email: string) => {
    try {
      isEmailDuplicated(email);
      clearFieldError('email');
      setIsCheckedEmail(true);
    } catch {
      setFieldError('email', '이미 가입된 이메일입니다.');
      setIsCheckedEmail(false);
    }
  };

  // 이메일 값이 변경될 경우 중복확인 초기화 + 에러 제거
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    clearFieldError('email');
    setIsCheckedEmail(false);
    handleInputChange(e);
  };

  // 이메일 중복확인을 하지 않은 상태에서 필드를 나갈 경우 에러 처리
  useEffect(() => {
    if (touched.email && !isCheckedEmail && values.email) {
      setFieldError('email', '이메일 중복 확인을 해주세요.');
    }
  }, [values.email, touched.email, isCheckedEmail, setFieldError]);

  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-gray-100 py-20 px-5'>
      <div className='w-full max-w-lg bg-white pt-10 pb-20 sm:px-8 px-5 rounded-xl'>
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
                      onChange={id === 'email' ? handleEmailChange : handleInputChange}
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
              disabled={!(isValid && isCheckedEmail)}
            >
              회원가입
            </button>
          </div>
        </form>

        {/* 로그인 이동 버튼 */}
        <div className='mt-6 text-center'>
          <p className='text-sm text-gray-600'>
            <span>Playlist 회원이신가요?</span>
            <Link to='/login' className='text-black font-semibold hover:underline ml-1'>
              로그인
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
