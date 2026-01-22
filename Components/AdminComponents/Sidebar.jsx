import assets from '@/assets/assets'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const Sidebar = () => {
  return (
    <div className='flex flex-col bg-[#ffe4f1ff]'>
      <div className='w-28 sm:w-80 h-screen relative py-12'>
        <div className='px-2 sm:pl-14 py-6'></div>
        <div className='w-[50%] sm:w-[80%] absolute right-0 '>
          <Link href='/admin/addProduct' className='flex xs:flex-col items-center border-[#D183A9] gap-3 font-medium px-3 py-2 shadow-[-5px_5px_0px_#D183A9] border-2'>
            <Image  src={assets.add} alt='add icon' width={28} height={28}/>
            <p className='text-[#4B1535]'>Add blogs</p>
          </Link>
          <Link href='/admin/blogList' className='mt-5 flex xs:flex-col items-center border-[#D183A9] gap-3 font-medium px-3 py-2 shadow-[-5px_5px_0px_#D183A9] border-2'>
            <Image  src={assets.blog} alt='add icon' width={28} height={28}/>
            <p className='text-[#4B1535]'>Blog lists</p>
          </Link>
          <Link href='/admin/subscriptions' className='mt-5 flex xs:flex-col items-center border-[#D183A9] gap-3 font-medium px-3 py-2 shadow-[-5px_5px_0px_#D183A9] border-2'>
            <Image  src={assets.email} alt='add icon' width={28} height={28}/>
            <p className='text-[#4B1535]'>Subscriptions</p>
          </Link>
        </div>
      </div>
      
    </div>
  )
}

export default Sidebar
