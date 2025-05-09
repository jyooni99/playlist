import type React from 'react';

import FormHelperMessage from './form-helper-message';
import FormLabel from './form-label';
import FormErrorMessage from './form-error-message';

type InputWrapperProps = {
  id: string;
  label?: string;
  helperText?: string;
  error?: string;
  touched?: boolean;
  children: React.ReactNode;
};

const InputWrapper = ({ label, id, helperText, error, touched, children }: InputWrapperProps) => {
  return (
    <div className='mb-4'>
      {label && <FormLabel htmlFor={id}>{label}</FormLabel>}

      <div className='w-full relative mt-2'>
        {helperText && <FormHelperMessage>{helperText}</FormHelperMessage>}
        {children}
        {<FormErrorMessage error={error} touched={touched} />}
      </div>
    </div>
  );
};

export default InputWrapper;
