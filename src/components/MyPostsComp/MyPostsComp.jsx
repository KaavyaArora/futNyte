import React from 'react'

const MyPostsComp = ({title,desc,imgSrc}) => {
  return (
    <div className='flex flex-col gap-[40px] border-[3px] border-amber-500 p-[20px] '>

    <div className='flex flex-col sm:flex-row gap-[80px] bg-[#111] text-[#bbb] '>
    <div className='flex flex-1 '>
      <img src={imgSrc} alt='' className='object-cover w-full sm:h-[300px] h-[150px] '/>
    </div>

    <div className='flex flex-1 flex-col justify-center gap-[20px]'>
      <h1 className='sm:text-[30px] text-[16px] font-bold'>{title}</h1>
      <p className='sm:text-[16px] text-[10px]'>{desc}</p>
    </div>
    </div>

    <div className='flex sm:flex-row flex-col justify-center items-center gap-[20px] sm:gap-[100px]  '>
        <button className='sm:p-[10px] p-[6px] sm:text-[16px] text-[12px] cursor:pointer bg-amber-500 border-[2px] border-amber-500 rounded-[5px] w-max text-white font-semibold hover:text-[#111]'>
            Edit Post
        </button>
        <button className='sm:p-[10px] p-[6px] sm:text-[16px] text-[12px] cursor:pointer bg-red-500 border-[2px] border-red-500 rounded-[5px] w-max text-white font-semibold hover:text-[#111]'>
            Delete Post
        </button>
    </div>

    
  </div>
  )
}

export default MyPostsComp
