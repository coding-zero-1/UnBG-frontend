import {assets} from '../assets/assets';

const Navbar = () => {
  return (
    <div className="flex justify-between items-center mx-4 py-1 lg:mx-44">
        <img src={assets.unbg_logo} alt="logo image" className="w-40 rounded-xl"/>
        <button className='flex items-center cursor-pointer bg-zinc-800 gap-2 text-white px-4 py-2 rounded-full sm:px-8 sm:py-3 text-sm lg:text-base'>
          <span>Get Started</span>
          <img src={assets.arrow_icon} alt="" className='w-3 sm:w-4' />
        </button>
    </div>
  )
}

export default Navbar