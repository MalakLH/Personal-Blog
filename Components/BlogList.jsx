'use client'
import { blog_data } from '@/assets/assets'
import React, { useEffect, useState } from 'react'
import BlogItem from './BlogItem'
import axios from 'axios';

const BlogList = () => {

    const [menu,setMenu]= useState("All");
    const [blogs,setBlogs]=useState([]);

    const fetchBlogs = async () => {
      const response = await axios.get('/api/blog');
      setBlogs(response.data.blogs);
    }

    useEffect(() =>{
      fetchBlogs();
    },[]);

  return (
    <div className='pb-5'>
      <div className='flex justify-center gap-6 py-10'>
        <button onClick={() =>setMenu('All')} className={menu==="All"?'bg-[#4B1535] text-[#ffe4f1ff] py-1 px-4 rounded-sm':'text-[#4B1535] cursor-pointer'}>All</button>
        <button onClick={() =>setMenu('Beauty')} className={menu==="Beauty"?'bg-[#4B1535] text-[#ffe4f1ff] py-1 px-4 rounded-sm':'text-[#4B1535] cursor-pointer'}>Beauty</button>
        <button onClick={() =>setMenu('Education')} className={menu==="Education"?'bg-[#4B1535] text-[#ffe4f1ff] py-1 px-4 rounded-sm':'text-[#4B1535] cursor-pointer'}>Education</button>
        <button onClick={() =>setMenu('Decoration')} className={menu==="Decoration"?'bg-[#4B1535] text-[#ffe4f1ff] py-1 px-4 rounded-sm':'text-[#4B1535] cursor-pointer'}>Decoration</button>
      </div>
      <div className='flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24'>
        {blogs.filter((item)=> menu==="All"?true:item.category===menu).map((item,index) => {
            return <BlogItem key={index} id={item._id} image={item.image} title={item.title} description={item.description} category={item.category}/>
        })}
      </div>
    </div>
  )
}

export default BlogList
