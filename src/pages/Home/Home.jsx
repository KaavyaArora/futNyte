import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='flex flex-col'>
        <img src = '/images/icons/bg5.png' alt=''  className='w-full h-full opacity-90'/>
        <div className='w-full bg-[#111] flex justify-around items-center'>
            <h1 className='text-amber-500 font-bold font-black md:text-[20px] sm:text-[14px] text-[8px]'>More Than Just a Game</h1>
            <Link to = '/posts'>
              <button className='py-[10px] px-[20px] cursor:pointer bg-amber-500 border-[2px] border-red-500 rounded-[5px] w-max text-[#111] font-semibold hover:text-red-800 md:text-[20px] sm:text-[14px] text-[8px]'>
                  Click to Enter Community
              </button>
            </Link>
            <h1 className='text-amber-500 font-bold font-black md:text-[20px] sm:text-[14px] text-[8px]'>Where Football Lives</h1>
        </div>
        
        
        <img src = '/images/bg4.webp' alt=''  className='w-full h-full opacity-90'/>
    </div>
  )
}

export default Home
