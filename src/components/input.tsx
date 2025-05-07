type InputProps = {
  label?: string;
  id: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
};

const Input = ({ label, id, type = 'text', placeholder, required }: InputProps) => {
  return (
    <div className='mb-4'>
      {label && (
        <label htmlFor={id} className='block text-sm font-medium text-gray-700'>
          {label}
        </label>
      )}

      <input
        type={type}
        id={id}
        name={id}
        className='mt-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black'
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
};

export default Input;
