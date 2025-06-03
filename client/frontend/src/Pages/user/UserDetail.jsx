import React from "react";
import { useAuth } from "../../Context/UserContext";

const UserDetail = () => {
    const [auth] = useAuth(); 
    const user = {
        name: auth.user?.name,
        email: auth.user?.email,

    }
  return (
    <div className='p-8 max-x-sm bg-white mt-6'>
        <h2 className='text-2xl font-bold text-gray-800 mb-6 text-center'>
            user Details
        </h2>
        <div className='space-y-4'>
            <div className='flex items-center'>
              <span className='font-semibold text-gray-800 w-24'>Name:</span>
              <span className='text-gray-600'>{user.name}</span>
            </div>
            <div className='flex items-center'>
              <span className='font-semibold text-gray-800 w-24'>Email:</span>
              <span className='text-gray-600'>{user.email}</span>
            </div>

        </div>
    </div>
  )
}

export default UserDetail
