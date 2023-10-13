import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
return (
    <div className='h-[100px] px-[15px] sm:px-[30px] flex justify-between items-center bg-[#111] sticky top-0 z-30'>

        <Link to ='/'>
            <span className='font-bold text-[16px] sm:text-[36px] text-[#bbb]'>Fut</span>
            <span className='font-bold text-[16px] sm:text-[36px] text-amber-500'>N</span>
            <span className='font-bold text-[16px] sm:text-[36px] text-[#bbb]'>yte</span>
        </Link>     
        <Link to ='/' className='flex items-center gap-[20px] text-[#bbb] font-semibold text-[12px] sm:text-[18px] hover:text-[#555]'>Home</Link>
        <Link to ="/posts" className='flex items-center gap-[20px] text-[#bbb] font-semibold text-[12px] sm:text-[18px] hover:text-[#555]'>Posts</Link>
        <Link to = '/about' className='flex items-center gap-[20px] text-[#bbb] font-semibold text-[12px] sm:text-[18px] hover:text-[#555] cursor-pointer'>About</Link>    
        <input type= 'text' placeholder='Search..' className='border-[3px] p-[3px] sm:p-[7px] lg:p-[10px] text-[7px] sm:text-[9px] lg:text-[16px] rounded-l-lg' />  

    </div>
)
}

export default Navbar
