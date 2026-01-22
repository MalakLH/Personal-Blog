// app/blogs/[id]/page.jsx
'use client'  // Add this if using React.use()
import { blog, blog_data } from '@/assets/assets';
import Footer from '@/Components/Footer';
import axios from 'axios';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'

const Page = ({ params }) => {

  const unwrappedParams = React.use(params);
  const { id } = unwrappedParams;

  const [data, setData]= useState(null);

  const fetchBlogData = async () => {
    const response = await axios.get('/api/blog',{
      params: {
        id: id
      }
    })
    setData(response.data);
  }

  useEffect(()=>{
    fetchBlogData();
  },[])

  return (data? <>
    <div className='bg-[#ffe4f1ff] py-10 px-5 md:px-12 lg:px-28'>
        <div className='flex justify-between items-center'>
            <Image src={null} alt="Logo" width={180} className='w-[130px] sm:w-auto'/>
            <button className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border-2 border-solid border-[#D183A9] shadow-[-7px_7px_0px_#D183A9] text-[#4B1535]'>Get started </button>
        </div>
        <div className='text-center my-18 px-0'>
            <h1 className='text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto text-[#4B1535] font-[Nunito]'>{data.title}</h1>
        </div>
    </div>
    <div className='mx-5 max-w-[800px] md:mx-auto mt-[-65px] mb-10'>
      <Image className='mx-auto border-4 border-[#ffe4f1ff]' src={data.image} width={500} height={500} alt=''></Image>
      
      <div className='blog-content text-[#4B1535]' dangerouslySetInnerHTML={{__html:data.description}}>
      </div>
      <p className='my-3 text-[#4B1535]'>
        u did great ! congrats yeyy
      </p>
    </div>
    <Footer />
    </>:<></>
  )
}

export default Page