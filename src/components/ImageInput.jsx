import { FaPhoneAlt, FaLock } from 'react-icons/fa';

export default function ImageInput({ title, startIcon = false, endIcon = false }) {
  return (
    <div>
      <p className=' font-xs leading-3 my-3 font-ubuntuMono'>{title}</p>
      <p className='text-xs leading-4 my-1 font-NotoSansJP'>Label</p>
      <label className='relative block'>
        <span className='sr-only'>Search</span>
        {startIcon && (
          <span className='absolute text-default__input inset-y-0 left-0 flex items-center pl-2'>
            <FaPhoneAlt />
          </span>
        )}
        <input
          className='w-50 h-14 rounded-lg 
        border border-default__input text-default__input font-medium px-8 font-NotoSansJP'
          placeholder='Placeholder'
          type='text'
        />
        {endIcon && (
          <span className='absolute text-default__input inset-y-0 left-40 flex items-center pl-2'>
            <FaLock />
          </span>
        )}
      </label>
    </div>
  );
}
