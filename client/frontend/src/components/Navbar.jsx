import React, { useState } from 'react'
import { FaUser } from "react-icons/fa"
// import logo from "../assets/Hotels/bedroom-1285156_640.jpg"
import {useAuth} from "../context/UserContext";
import {useNavigate} from 'react-router-dom';

const Navbar = () => {
  const isSignIn  = false;
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [auth] = useAuth();
  const Navigate = useNavigate();
  const handleDropDownToggle = () => {
    setIsDropDownOpen((prevState) => !prevState);
    
  };
  const closeDropDown = ()=>{
    setIsDropDownOpen(false);
  }
  const handeRedirect = ()=>{
    if(auth.user.role === "admin"){
       Navigate("/admin/details");
    }else{
      Navigate("/user");
    }
  }

  return (
    <nav className='flex items-center justify-between p-2 bg-white'>
      {/* Navbar logo */}
      <div className='flex items-center space-x-2'>
        {/* <img src={logo} alt="logo" className="ml-[7rem]" /> */}
        <p>HOTEL</p>
        
      </div>

      {/* Navbar links */}
      <div className='hidden md:flex space-x-6'>
        <a href="/" className='text-gray-600 hover:text-gray-900'>Home</a>
        <a href="/" className='text-gray-600 hover:text-gray-900'>Discover</a>
        <a href="/" className='text-gray-600 hover:text-gray-900'>Activities</a>
        <a href="/" className='text-gray-600 hover:text-gray-900'>Contact</a>
        <a href="/" className='text-gray-600 hover:text-gray-900'>About</a>
      </div>

      {/* Notification and profile */}
      <div className='flex items-center space-x-4 mr-[9rem] relative cursor-pointer'>
        <FaUser
          size={20}
          onClick={handleDropDownToggle}
          className='cursor-pointer'
        />
        {isDropDownOpen && (
            <div className='absolute right-0 mt-36 w-48 bg-white border border-gray-200 rounded shadow-lg 
            z-50'
            onMouseLeave={closeDropDown}
            >
              <ul>
                <li onClick={handeRedirect} className='px-4 py-2 hover:bg-gray-100 cursor-pointer'>
                 Your Profile
                </li>
                 <li className='px-4 py-2 hover:bg-gray-100 cursor-pointer'>
                  <a href="/">Your Orders</a>
                </li>
                
                  {isSignIn ? (
                     <li className='px-4 py-2 hover:bg-gray-100 cursor-pointer'>
                  <a href="/">Sign Out</a>
                </li>
                  ) : (
                     <li className='px-4 py-2 hover:bg-gray-100 cursor-pointer'>
                  <a href="/">Sign In</a>
                </li>
                  )}
                
              </ul>

            </div>
          )}
      </div>
    </nav>
  )
}

export default Navbar
