import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Context/UserContext';

const Login = () => {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [error, setError] = useState("");
   const {auth, setAuth} = useAuth();

   
   const navigate = useNavigate();
   const handelSubmit = async ()=>{
        e.preventDefault();
        setEmail("");
        try {
          const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/auth/login`,
            {email, password}
        );
        toast.success("login Succesfully");
        setAuth({
        ...auth,
        user: parseData?.user,
        token: parseData?.token,
      });
        navigate("/");
      } catch (error) {
           setError(error.response.data.message);
                      toast.error("login Failed Please Try Again");
                      console.log(error);
        }
   }
  return (
    <div className='flex items-center justify-center 
    bg-gray-100 pt-10 pb-10'>
      <div className='w-full max-w-md bg-white p-8 
      rounded-lg shadow-md '>
        <h2 className='text-2xl font-semibold text-center mb-6'>Sign In</h2>
        <form onSubmit={handelSubmit}>
          <div className='mb-4'>
            <label className='black text-sm font-medium text-gray-700'>Email</label>
            <input type="email"
            value={email}
            onChange={(e)=>{ setEmail(e.target.value)}}
            className='mt-1 block w-full px-3 py-2  border bg-white text-black 
             border-gray-300 rounded-md 
            shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500' />

          </div>
            <div className='mb-4'>
            <label className='black text-sm font-medium text-gray-700'>Password</label>
            <input type="password"
            value={password}
             onChange={(e)=> setPassword(e.target.value)}
            className='mt-1 block w-full px-3 py-2  border bg-white text-black border-gray-300 rounded-md 
            shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500' />
          </div>
          <div className='flex items-center justify-between'>
            <label className='flex-items-center'>
               <input type="checkbox" 
             className='h-4 w-4 text-in focus:ring-indigo-600 border-gray-300 rounded'
             />
             <span className='ml-2 text-sm text-gray-700'>Keep me signed  in</span>
             </label>
             <a href="" className='text-sm text-indigo-600 hover:underline'>Forget Password</a> 
          </div>
          {error && <p className='text-red-500 text-sm mt-3'>{error}</p>}
          <button type='submit' className='w-full bg-blue-500 text-white py-22 rounded-md
          hover:bg-blue-600 my-3'>
           Login
          </button>
        </form>
       <p className='text-center mt-4 text-sm text-gray-700'>
        Don't Have an Account {""}
        <a href="/register" className='text-blue-500 hover:underline'>Register</a>
       </p>
      </div>
      
    </div>
  )
}

export default Login
