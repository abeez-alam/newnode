import React from 'react'
import {FaMapMarkerAlt, FaCalendarAlt} from 'react-icons/fa'
import BannerImage from '../assets/Hotels/indoors-4234072_640.jpg'

const Banner = () => {
  return (
    <div className=" relative w-full h-[500px] bg-cover bg-center " 
    style={{background:`url(${BannerImage})`}}>

        {/*overlay*/}
   <div className='absolute inset-0 bg-black opacity-40'></div>
    {/*content*/}
    <div className='relative z-10 flex flex-col items-center justify-center
     text-white h-full px-4'>
        <h1 className='text-3xl sm:text-4xl font-bold text-center'>
            enjoy your vacational experience
        </h1>
        <p className='text-base sm:text-lg mt-2 text-center'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt est quo optio recusandae consequatur labore!
        </p>
        <div className='mt-8 w-full max-w-[57rem] sm:w-[80%] md:w-[60%] bg-white p-4
        rounded-lg shadow-lg flex items-center space-x-4'>
            <input type="text"
            className='flex-grow p-2 border border-gray-300 rounded-md text-black
            focus:outline-none focus:ring-blue-500 bg-white' 
            placeholder='Search Destination.......'
            />
            <button className='px-4 py-2 bg-blue-600 text-white font-medium rounded-md 
            hover:bg-blue-700 transition'>
                Search
            </button>

        </div>
     </div>
    </div>
  )
}

export default Banner
