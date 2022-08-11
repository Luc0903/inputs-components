export default function Sidebar() {
  return (
    <div className=' w-1/3 md:max-w-xs min-h-screen bg-sidebar p-5 md:p-16'>
      <p className=' text-title_blue text-sm font-semibold leading-5'>
        <span className=' text-title_orange font-poppins'>Dev</span>challenges
      </p>
      <ul className=' text-navlinks font-medium text-xs my-12 font-NotoSansJP'>
        <li className='mb-7'>Typography</li>
        <li className='mb-7'>Grid</li>
        <li className='mb-7'>Buttons</li>
        <li className=' font-bold text-title_blue'>Inputs</li>
      </ul>
    </div>
  );
}
