import InputsGroup1 from './InputsGroup1';
import InputsGroup2 from './InputsGroup2';
import InputsGroup3 from './InputsGroup3';
import InputsGroup4 from './InputsGroup4';
import InputsGroup5 from './InputsGroup5';
import InputsGroup6 from './InputsGroup6';
import InputsGroup7 from './InputsGroup7';

export default function Inputs() {
  return (
    <div className=' w-full my-10'>
      <p className=' font-medium text-2xl leading-9'>Inputs</p>
      <div className=' grid grid-cols-1 gap-11'>
        <InputsGroup1 />
        <InputsGroup2 />
        <InputsGroup3 />
        <InputsGroup4 />
        <InputsGroup5 />
        <InputsGroup6 />
        <InputsGroup7 />
      </div>
    </div>
  );
}
