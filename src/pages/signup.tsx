import { Link } from 'react-router-dom';

import Input from '../components/input';
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

const SignUp = () => {
  const onSubmit = (values: SignUpFormValuesType) => {
    console.log('회원가입 성공', values);
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
            ({
              id,
              type,
              label,
              placeholder,
              helperText,
              rightButtonLabel,
              rightButtonAction,
              inputMode,
            }) => {
              return (
                <Input
                  key={id}
                  id={id}
                  type={type}
                  label={label}
                  placeholder={placeholder}
                  value={values[id]}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  error={errors[id]}
                  touched={touched[id]}
                  rightButtonLabel={rightButtonLabel}
                  rightButtonAction={rightButtonAction}
                  helperText={helperText}
                  inputMode={inputMode}
                />
              );
            },
          )}

          {/* 직군: 단일 선택 */}
          <p className='text-sm'>직군</p>
          <div className='flex flex-col py-2 gap-4'>
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
          </div>

          {/* 관심 카테고리: 복수 선택 */}
          <p className='text-sm pt-4'>관심 카테고리</p>
          <div className='gap-4'>
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
          </div>
          {errors['interests'] && touched['interests'] && (
            <p className='mt-2 text-xs text-red-600'>{errors['interests']}</p>
          )}

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
