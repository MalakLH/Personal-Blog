'use client'
import assets from '@/assets/assets'
import React, { useState } from 'react'
import Image from 'next/image';
import axios from 'axios';
import {toast } from 'react-toastify';


const page = () => {

  const [image, setImage]= useState(false);
  const [data,setData] = useState({
    title:"",
    description:"",
    category:"Beauty"
  });

  const onChangeHandler = (event) =>{
    const name= event.target.name;
    const value= event.target.value;
    setData(data=>({...data, [name]:value}));
    console.log(data);
  }

  const onSubmitHandler = async (e)=>{
    e.preventDefault();
    const formData = new FormData();
    formData.append('title',data.title);
    formData.append('description',data.description);
    formData.append('category',data.category);
    formData.append('image',image);
    const response = await axios.post('/api/blog',formData);
    if (response.data.success) {
      toast.success(response.data.msg)
      setImage(false);
      setData({
    title:"",
    description:"",
    category:"Beauty"
  });
    } 
    else{
      toast.error("Error");
    }
  }

  return (
    <div>
      <form onSubmit={onSubmitHandler} className='pt-5 px-5 sm:pt-12 sm:pl-16'>
        <p className='text-xl text-[#4B1535] pb-4'>Upload thumbnail</p>
        <label htmlFor="image">
          <Image className='' src={!image?assets.upload:URL.createObjectURL(image)} alt='upload here' width={140} height={70}/>
        </label>
        <input onChange={(e) => setImage(e.target.files[0])} type="file" id='image' hidden required/>
        <p className='text-xl text-[#4B1535]  mt-4'>Blog title </p>
        <input name='title' onChange={onChangeHandler} value={data.title} className='w-full sm:w-[500px] mt-4 px-4 py-3 border border-[#D183A9] border-2 focus:bg-[#ffe4f1ff] focus:text-[#4B1535]' type="text" placeholder='Write the blog title here' required/>
        <p className='text-xl text-[#4B1535]  mt-4'>Blog description </p>
        <textarea name='description' onChange={onChangeHandler} value={data.description} className='w-full sm:w-[500px] mt-4 px-4 py-3 border border-[#D183A9] border-2 focus:bg-[#ffe4f1ff] focus:text-[#4B1535]' type="text" placeholder='Write the blog description here' rows={6} required/>
        <p className='text-xl text-[#4B1535]  mt-4'>Blog category</p>
        <select name="category" onChange={onChangeHandler} value={data.category} className='text-l text-[#4B1535]  mt-4 w-40 mp-4 py-3 border border-[#D183A9] border-2'>
          <option value="Beauty" >Beauty</option>
          <option value="Education">Education</option>
          <option value="Decoration">Decoration</option>
        </select>
        <br />
        <button type="submit" className='cursor-pointer text-l font-medium text-white h-12 mt-8 w-40 bg-[#D183A9]'>ADD</button>
      </form>
    </div>
  )
}

export default page
