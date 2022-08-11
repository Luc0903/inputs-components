import InputTag from './InputTag';

export default function InputsGroup5() {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2'>
      <InputTag
        title={'<Input size=”sm” />'}
        classes=' w-50 h-10 rounded-lg 
        border border-default__input text-default__input font-medium px-3 font-NotoSansJP'
      />
      <InputTag
        title={'<Input size=”md” />'}
        classes=' w-50 h-14 rounded-lg 
        border border-default__input text-default__input font-medium px-3 font-NotoSansJP'
      />
    </div>
  );
}
