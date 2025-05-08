import { Link } from 'react-router-dom';

import Input from '../components/input';
import useForm from '../hooks/use-form';
import { loginValidator } from '../utils/validators';
import { jobCategory, signUpFields, signUpInitialValues } from '../constants/form-fields';
import Radio from '../components/radio';

const SignUp = () => {
  const onSubmit = (values: Record<string, string>) => {
    console.log('로그인 성공', values);
  };

  const { values, touched, errors, handleInputChange, handleBlur, handleSubmit } = useForm({
    initialValues: signUpInitialValues,
    onSubmit,
    validate: loginValidator,
  });

  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-gray-100'>
      <div className='w-full max-w-md bg-white pt-10 pb-20 px-8 rounded-xl'>
        <h2 className='text-3xl font-bold text-center text-gray-800 mb-12'>회원가입</h2>
        <form onSubmit={handleSubmit}>
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

          <div className='mt-8'>
            <button
              type='submit'
              className='w-full py-2 bg-black text-white rounded-full cursor-pointer hover:bg-gray-800 transition'
            >
              회원가입
            </button>
          </div>
        </form>

        {/* 회원가입 버튼 */}
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
