import React from 'react'
import { Link } from 'react-router-dom'

const Post = () => {
  return (
    <div className='pt-[90px] pb-[130px] bg-[#111]' >
      <div className='flex flex-wrap items-center justify-center gap-[50px] '>
        <Link to='/allposts' className='border-[5px] border-[#bbb] rounded-[5px] w-[300px] h-[350px] relative '>
          <img src='/images/ronaldo3.jpeg' alt='' className='object-cover h-full w-full' />
          <span className='absolute left-[10px] bottom-[10px] text-[40px] font-bold text-amber-300 '>All Posts</span>
        </Link>
        <Link to='/myposts' className='border-[5px] border-[#bbb] rounded-[5px] w-[300px] h-[350px] relative '>
          <img src='/images/messi.png' alt='' className='object-cover h-full w-full' />
          <span className='absolute left-[10px] bottom-[10px] text-[40px] font-bold text-amber-300 '>My Posts</span>
        </Link>
        <Link to='/createpost' className='border-[5px] border-[#bbb] rounded-[5px] w-[300px] h-[350px] relative '>
          <img src='/images/neymar.jpg' alt='' className='object-cover h-full w-full' />
          <span className='absolute left-[10px] bottom-[10px] text-[40px] font-bold text-amber-300 '>Create Post +</span>
        </Link> 
      </div>
    </div>
  )
}

export default Post
