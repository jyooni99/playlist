import React from 'react';

type FormHelperMessageProps = {
  children?: React.ReactNode;
};

const FormHelperMessage = ({ children }: FormHelperMessageProps) => {
  return <p className='text-xs text-gray-400 mt-2 mb-2'>{children}</p>;
};

export default FormHelperMessage;
