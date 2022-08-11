import { useState } from 'react';

export default function InputTag({ title, classes, labelColor = null, message = null, inputValue = '' }) {
  const [initialValue, setInitialValue] = useState(inputValue);
  const handleChange = (e) => {
    setInitialValue(e.target.value);
  };
  return (
    <div className=' my-3 max-w-max'>
      <p className=' font-xs leading-4 my-3 font-ubuntuMono font-normal'>{title}</p>
      <p className={`${labelColor} text-xs leading-4 my-1 font-NotoSansJP`}>Label</p>
      <input type='text' className={classes} placeholder='Placeholder' value={initialValue} onChange={handleChange} />
      <p className={`${labelColor} text-xs`}>{message}</p>
    </div>
  );
}
