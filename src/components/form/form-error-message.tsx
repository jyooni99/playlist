type FormErrorMessageProps = {
  error?: string;
  touched?: boolean;
};

const FormErrorMessage = ({ error, touched }: FormErrorMessageProps) => {
  if (!touched || !error) return null;

  return <p className='mt-2 text-xs text-red-600'>{error}</p>;
};

export default FormErrorMessage;
