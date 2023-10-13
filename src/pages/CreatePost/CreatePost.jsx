import React from 'react'

const CreatePost = () => {
  return (
    <div className='flex flex-col gap-[35px] px-[50px] pb-[50px] '>


      <div className='flex flex-col lg:flex-row items-center justify-center gap-[50px] '>

        <div className='flex flex-1 '>
          <img src='/images/haaland1.jpg' alt='' className='w-full sm:h-[500px] h-[200px] object-cover ' />
        </div>

        <div className='flex flex-1 items-center justify-center text-[#bbb] '>
          <form className='flex justify-center items-center flex-col gap-[20px] lg:ml-[120px] '>
            <input placeholder='Enter Title ' type='text' className='bg-transparent border-[3px] outline-none p-[20px] ' ></input>
            <input placeholder='Enter Image URL' type='text' className='bg-transparent border-[3px] outline-none p-[20px] ' ></input>
            <textarea cols='30' rows='10' placeholder='Enter Description' className='bg-transparent border-[3px] outline-none p-[20px] ' ></textarea>
            <button className='py-[10px] px-[20px] cursor:pointer bg-emerald-500 border-[2px] border-emerald-500 rounded-[5px] w-max text-white font-semibold hover:text-[#111]'>
                ADD
            </button>
          </form>
        </div>

      </div>


    </div>
  )
}

export default CreatePost
