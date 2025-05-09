import type React from 'react';

type DuplicateButtonProps = {
  value: string;
  onCheck: (value: string) => void;
  children: string | React.ReactNode;
};

export const DuplicateButton = ({ value, onCheck, children }: DuplicateButtonProps) => {
  return (
    <button
      type='button'
      className='text-sm bg-black h-[42px] rounded-sm px-3 cursor-pointer text-white'
      onClick={() => onCheck(value)}
    >
      {children}
    </button>
  );
};
