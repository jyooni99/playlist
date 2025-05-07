type InputProps = {
  label?: string;
  id: string;
  type?: string;
  value: string;
  placeholder?: string;
  required?: boolean;
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
  onChange,
  onBlur,
}: InputProps) => {
  return (
    <div className='mb-4'>
      {label && (
        <label htmlFor={id} className='block text-sm font-medium text-gray-700'>
          {label}
        </label>
      )}

      <input
        className='mt-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black'
        id={id}
        type={type}
        name={id}
        value={value}
        placeholder={placeholder}
        required={required}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  );
};

export default Input;
