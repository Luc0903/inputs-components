import InputTag from './InputTag';
import { FaPhoneAlt } from 'react-icons/fa';
import ImageInput from './ImageInput';

export default function InputsGroup3() {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2'>
      <InputTag
        title={'<Input helperText=”Some interesting text” />'}
        classes=' w-50 h-14 rounded-lg 
        border border-default__input text-default__input font-medium px-3 font-NotoSansJP'
        message='some interesting text'
      />
      <InputTag
        title={'<Input helperText=”Some interesting text” error />'}
        classes=' w-50 h-14 rounded-lg 
        border border-input__error text-default__input font-medium px-3 font-NotoSansJP'
        labelColor='text-input__error'
        message='some interesting text'
      />
      <ImageInput title='<Input startIcon />' startIcon={true} />
      <ImageInput title='<Input endIcon />' endIcon={true} />
    </div>
  );
}
