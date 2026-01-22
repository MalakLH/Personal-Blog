'use client'
import BlogTableItem from '@/Components/AdminComponents/BlogTableItem'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';

const page = () => {

  const [blogs,setBlogs] = useState([]);

  const fetchBlogs = async () => {
    const response= await axios.get('/api/blog');
    setBlogs(response.data.blogs);
  }

  const deleteBlog= async (mongoId) => {
    const response = await axios.delete('/api/blog',{
      params:{
        id: mongoId
      }
    })
    toast.success(response.data.msg);
    fetchBlogs();
  }

  useEffect(() => {
    fetchBlogs()
  },[])

  return (
    <div className='flex-1 pt-5 px-5 sm:pt-12 sm:pl-16'>
      <h1 className='text-[#4B1535] font-medium'>All blogs</h1>
      <div className='relative h-[80vh] max-w-[850px] overflow-x-auto mt-4 border-[#D183A9] border-2 scrollbar-hide'>
        <table className='w-full text-sm text-[#4B1535]'>
          <thead className='text-sm text-[#4B1535] text-left uppercase bg-[#fff3f8ff]'>
            <tr>
              <th scope='col' className='px-6 py-3'>
                Blog title
              </th>
              <th scope='col' className='px-6 py-3'>
                Date
              </th>
              <th scope='col' className='px-6 py-3'>
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((item,index)=>{
              return <BlogTableItem key={index} mongoId={item._id} title={item.title} date={item.date} deleteBlog={deleteBlog}/>
            })}
            
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default page
