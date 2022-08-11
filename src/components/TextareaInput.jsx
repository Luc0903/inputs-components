export default function TextareaInput({ title }) {
  return (
    <div>
      <p className=' font-xs leading-3 my-3 font-ubuntuMono'>{title}</p>
      <p className='text-xs leading-4 my-1 font-NotoSansJP'>Label</p>
      <textarea
        placeholder='Placeholder'
        className=' w-50 h-38 rounded-lg 
        border border-default__input text-default__input font-medium px-3 py-4 font-NotoSansJP'
      ></textarea>
    </div>
  );
}
