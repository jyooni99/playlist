type InputProps = {
  label?: string;
  id: string;
  type?: string;
  value: string;
  placeholder?: string;
  required?: boolean;
  error?: string;
  touched?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({
  label,
  id,
  type = 'text',
  value,
  placeholder,
  required,
  error,
  touched,
  onChange,
  onBlur,
}: InputProps) => {
  const hasError = touched && error;

  return (
    <div className='mb-4'>
      {label && (
        <label htmlFor={id} className='block text-sm font-medium text-gray-700'>
          {label}
        </label>
      )}

      <input
        className={`mt-2 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 ${
          hasError ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-black'
        }`}
        id={id}
        type={type}
        name={id}
        value={value}
        placeholder={placeholder}
        required={required}
        onChange={onChange}
        onBlur={onBlur}
      />

      {hasError && <p className='mt-1 text-sm text-red-600'>{error}</p>}
    </div>
  );
};

export default Input;
