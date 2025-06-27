import { useClerk, UserButton, useUser } from '@clerk/clerk-react';
import {assets} from '../assets/assets';
import { Link, useNavigate } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { AppContext } from '../context/AppContext';

const Navbar = () => {
  const {openSignIn} = useClerk();
  const { isSignedIn , user} = useUser();
  const {credit,loadCredits} = useContext(AppContext);
  const navigate=useNavigate()
  useEffect(() => {
    if(isSignedIn){
      loadCredits();
    }
  },[isSignedIn, loadCredits]);
  return (
    <div className="flex justify-between items-center mx-4 py-1 lg:mx-44">
        <Link to="/">
          <img src='/unbg-logo-navbar-2.png' alt="logo image" className="w-28 rounded-xl"/>
        </Link>
      { isSignedIn && user ? 
        <div className='flex items-center gap-2 sm:gap-3'>
          <button onClick={()=>navigate('/buy')} className='flex items-center gap-2 bg-blue-100 px-4 sm:px-7 py-1.5 sm:py-2.5 rounded-full hover:scale-105 transition-all duration-700 ease-in-out '>
            <img src={assets.credit_icon} alt="" className='w-5' />
            <p className='text-xs sm:text-sm font-medium text-gray-600'>Credits : {credit}</p>
          </button>
          <p className='text-gray-600 max-sm:hidden'>Hi, {user.fullName}</p>
          <UserButton />
        </div> :
        <button onClick={()=>openSignIn({})} className='flex items-center cursor-pointer bg-zinc-800 gap-2 text-white px-4 py-2 rounded-full sm:px-8 sm:py-3 text-sm lg:text-base'>
          <span>Get Started</span>
          <img src={assets.arrow_icon} alt="" className='w-3 sm:w-4' />
        </button>
      }
        
    </div>
  )
}

export default Navbar