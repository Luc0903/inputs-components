import InputTag from './InputTag';

export default function Inputs1() {
  return (
    <div className=' grid grid-cols-1 lg:grid-cols-3'>
      <InputTag
        title={'<Input />'}
        classes=' w-50 h-14 rounded-lg 
        border border-default__input text-default__input font-medium px-3 font-NotoSansJP'
      />
      <InputTag
        title={'&:hover'}
        classes=' w-50 h-14 rounded-lg 
        border border-default__hover text-default__input font-medium px-3 font-NotoSansJP'
      />
      <InputTag
        title={'&:focus'}
        classes=' w-50 h-14 rounded-lg 
        border border-default__focus text-default__input font-medium px-3 font-NotoSansJP'
        labelColor='text-default__focus'
      />
      <InputTag
        title={'<Input error/>'}
        classes=' w-50 h-14 rounded-lg 
        border border-input__error text-default__input font-medium px-3 font-NotoSansJP'
        labelColor='text-input__error'
      />
      <InputTag
        title={'&:hover'}
        classes=' w-50 h-14 rounded-lg 
        border border-default__hover text-default__input font-medium px-3 font-NotoSansJP'
      />
      <InputTag
        title={'&:focus'}
        classes=' w-50 h-14 rounded-lg 
        border border-input__error text-default__input font-medium px-3 font-NotoSansJP'
        labelColor='text-input__error'
      />
    </div>
  );
}
