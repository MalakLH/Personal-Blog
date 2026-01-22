import React from 'react'

const BlogTableItem = ({title,date,deleteBlog,mongoId}) => {

  const BlogDate= new Date(date);

  return (
    <tr className='border-b border-[#D183A9]'>
      <td className='px-6 py-4 text-[#4B1535] '>
        {title?title:"no title"}
      </td>
      <td className='px-6 py-4 text-[#4B1535] '>
        {BlogDate.toDateString()}
      </td>
      <td onClick={()=>deleteBlog(mongoId)} className='px-6 py-4 text-[#4B1535] cursor-pointer'>
        x
      </td>
    </tr>
  )
}

export default BlogTableItem
