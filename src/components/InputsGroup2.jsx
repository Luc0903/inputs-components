import InputTag from './InputTag';

export default function InputsGroup2() {
  return (
    <div>
      <InputTag
        title={'<Input disabled />'}
        classes=' w-50 h-14 rounded-lg 
        border border-input__disabled bg-input__disabled__bg text-default__input font-medium px-3 font-NotoSansJP'
      />
    </div>
  );
}
