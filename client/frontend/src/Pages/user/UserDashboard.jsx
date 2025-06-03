import React from 'react';
import Navbar from "./Navbar";
import UserDetail from "./UserDetail";

const UserDashboard = () => {
  return (
    <div className='flex items-center  p-10 bg-gray-50 min-h-screen'>
      <div className='flex shadow-lg rounded-lg overflow-hidden bg-white min-h-[28rem]
      w-[82rem]'>
        <Navbar/>
        <UserDetail/>

      </div>
      
    </div>
  )
}

export default UserDashboard
