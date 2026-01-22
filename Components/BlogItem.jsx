import { blog_data } from '@/assets/assets'
import Link from 'next/link';
import Image from 'next/image';
import React from 'react'

const BlogItem = ({title, description,category,image,id}) => {
  return (
    <div className='max-w-[330px] sm:max-w-[300px] bg-white border-2 border-[#D183A9] hover:shadow-[-7px_7px_0px_#D183A9] mt-12 ml-12' style={{
    transition: 'box-shadow 0.3s ease'
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.boxShadow = '-7px 7px 0px #D183A9';
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.boxShadow = '';
  }}>
        <Link href={`/blogs/${id}`}>
        <Image src={image} alt='blog image' width={400} height={400} className='border-b border-[#D183A9]'/>
        </Link>
        <p className='ml-5 mt-5 px-1 inline-block bg-[#4B1535] text-[#ffe4f1ff] text-sm py-1 px-2'>{category}</p>
        <div className='p-5'>
            <h5 className='mb-2 text-lg font-medium tracking-tight text-[#4B1535]'>{title}</h5>
            <p className='mb-3 text-sm tracking-tight text-[#4b1535cb]' 
            dangerouslySetInnerHTML={{__html:description.slice(0,120)}}></p>
            <Link href={`/blogs/${id}`} className='inline-flex items-center py-2 font-semibold text-center text-[#D183A9]'>
                Read more
            </Link>
        </div>
    </div>
  )
}

export default BlogItem
