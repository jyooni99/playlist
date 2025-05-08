import { useState } from 'react';
import type { SignUpInputField } from '../types/field';

type InputProps = SignUpInputField & {
  id: string;
  value: string | string[];
  error?: string;
  touched?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({
  label,
  id,
  type,
  value,
  placeholder,
  helperText,
  error,
  touched,
  onChange,
  onBlur,
  showToggle = false,
  rightButtonLabel,
  rightButtonAction,
  inputMode,
}: InputProps) => {
  const hasError = touched && error;
  const [visible, setVisible] = useState(false);

  return (
    <div className='mb-4'>
      {label && (
        <label htmlFor={id} className='block text-sm font-medium text-gray-700'>
          {label}
        </label>
      )}

      <div className='w-full relative mt-2'>
        {/* 헬퍼 텍스트 */}
        {helperText && <p className='text-xs text-gray-400 mt-2 mb-2'>{helperText}</p>}

        {/* input */}
        <input
          className={` ${rightButtonLabel ? 'w-[76%]' : 'w-full'} px-4 py-2 border rounded-md focus:outline-none focus:ring-1 ${
            hasError ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-black'
          }`}
          id={id}
          type={type}
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
            className='absolute inset-y-0 right-10 px-2 text-sm text-gray-500'
            onClick={() => setVisible((prev) => !prev)}
          >
            {visible ? '숨김' : '표시'}
          </button>
        )}

        {/* 버튼 */}
        {rightButtonLabel && (
          <button
            className='absolute right-0 top-1/2 px-3 cursor-pointer h-full rounded-sm text-white text-xs transform -translate-y-1/2 bg-black'
            onClick={rightButtonAction}
          >
            {rightButtonLabel}
          </button>
        )}
      </div>

      {/* 에러 메시지*/}
      {hasError && <p className='mt-2 text-xs text-red-600'>{error}</p>}
    </div>
  );
};

export default Input;
