import { useState } from 'react';
import type { SignUpInputField } from '../../types/field';

type InputProps = SignUpInputField & {
  id: string;
  value: string | string[];
  error?: string;
  touched?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({
  id,
  type,
  value,
  placeholder,
  error,
  touched,
  onChange,
  onBlur,
  showToggle = false,
  inputMode,
}: InputProps) => {
  const hasError = touched && error;
  const [visible, setVisible] = useState(false);

  return (
    <>
      <input
        className={`w-full px-4 py-2 border rounded-md relative focus:outline-none focus:ring-1 ${
          hasError ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-black'
        }`}
        id={id}
        type={visible ? 'text' : type}
        name={id}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        inputMode={inputMode}
      />

      {/* 비밀번호 확인 */}
      {showToggle && type === 'password' && (
        <button
          type='button'
          className='absolute bottom-0 right-2 px-2 text-sm text-gray-500 transform -translate-y-1/2 cursor-pointer'
          onClick={() => setVisible((prev) => !prev)}
        >
          {visible ? '숨김' : '표시'}
        </button>
      )}
    </>
  );
};

export default Input;
