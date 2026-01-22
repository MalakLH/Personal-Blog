'use client'
import { useState } from 'react';
import React from 'react'
import Image from 'next/image';
import axios from 'axios';
import { toast } from 'react-toastify';

const Header = () => {

  const [email,setEmail] = useState("");

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("email",email);
    const response = await axios.post('/api/email',formData);
    if (response.data.success) {
      toast.success(response.data.msg);
      setEmail("");
    }
    else{
      toast.error("Error")
    }
  }

  return (
    <div className='py-5 px-5 md:px-12 lg:px-28 bg-[#ffe4f1ff]'>
      <div className='flex justify-between items-center'>
        <Image src={null} alt="Logo" width={180} className='w-[130px] sm:w-auto'/>
        <button className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border-2 border-solid border-[#D183A9] shadow-[-7px_7px_0px_#D183A9] text-[#4B1535]'>Get started </button>
      </div>
      <div className='text-center my-8'>
        <h1 className='text-[#4B1535] text-3xl sm:text-5xl font-medium font-[Nunito]'>Latest Blogs</h1>
        <p className='mt-10 max-w-[740px] m-auto text-xs sm:text-base'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam voluptates laudantium rem et facere temporibus possimus numquam molestiae repudiandae aliquam?</p>
        <form onSubmit={onSubmitHandler} className='flex justify-between max-w-[500px] scale-75 sm:scale-100 mx-auto mt-10 border-[#D183A9] border-2 shadow-[-7px_7px_0px_#D183A9]' action="">
          <input onChange={(e)=>setEmail(e.target.value)} value={email} type="email" placeholder='Enter your E-mail' className='pl-4 outline-none py-1 sm:py-3'/>
          <button type='submit' className=' border-l-2 px-4 text-[#4B1535] font-medium border-[#D183A9] '>Subscribe</button>
        </form>
      </div>
    </div>
  )
}

export default Header
