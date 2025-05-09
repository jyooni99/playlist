import type { CheckboxField } from '../../types/field';

type CheckboxProps = CheckboxField & {
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Checkbox = ({ id, name, value, checked, onChange }: CheckboxProps) => {
  return (
    <label
      htmlFor={id}
      className={`inline-flex items-center py-1 px-3 mt-2 mx-1 rounded-md border cursor-pointer ${checked ? 'outline-1 outline-black' : 'border-gray-300'}`}
    >
      <span className='text-center'>{value}</span>
      <input
        type='checkbox'
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        checked={checked}
        className='appearance-none absolute'
      />
    </label>
  );
};

export default Checkbox;
