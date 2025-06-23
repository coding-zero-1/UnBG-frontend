import {assets} from '../assets/assets';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="flex justify-between items-center mx-4 py-1 lg:mx-44">
        <Link to="/">
          <img src='/unbg-logo-navbar-2.png' alt="logo image" className="w-40 rounded-xl"/>
        </Link>
        <button className='flex items-center cursor-pointer bg-zinc-800 gap-2 text-white px-4 py-2 rounded-full sm:px-8 sm:py-3 text-sm lg:text-base'>
          <span>Get Started</span>
          <img src={assets.arrow_icon} alt="" className='w-3 sm:w-4' />
        </button>
    </div>
  )
}

export default Navbar