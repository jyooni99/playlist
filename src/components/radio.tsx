import type { RadioField } from '../types/field';

type RadioProps = RadioField & {
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Radio = ({ id, name, value, checked, onChange }: RadioProps) => {
  return (
    <div
      className={`w-full flex gap-2 items-center border mb-3 py-2 px-3 rounded-md  ${checked ? 'outline-1 outline-black' : 'border-gray-300'}`}
    >
      <div className='flex items-center justify-center w-[13px] h-[13px] relative'>
        <input
          type='radio'
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          checked={checked}
          className='appearance-none w-[13px] h-[13px] border-1 border-gray-800 rounded-full shrink-0 bg-white'
        />
        <div
          className={`absolute w-[7px] h-[7px] rounded-full bg-gray-800 ${checked ? 'opacity-100' : 'opacity-0'}`}
        />
      </div>
      <label htmlFor={id} className='w-full'>
        {value}
      </label>
    </div>
  );
};

export default Radio;
