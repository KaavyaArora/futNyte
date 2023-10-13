const FooterContact = () => {


  return (
    <div className='bg-emerald-500 flex justify-center p-[10px]'>                                                                     
      <div className="w-full sm:w-[90%] lg:w-[80%] flex justify-between items-center">                                                             

        <span className='text-black font-bold hidden sm:block sm:text-[10px] lg:text-[16px]'>GET IN TOUCH WITH US</span>

        <div>                                                   
            <input type='text' placeholder='Enter your e-mail' className='border-none p-[7px] sm:p-[7px] lg:p-[10px] text-[7px] sm:text-[9px] lg:text-[16px] rounded-l-lg'  />
            <button className='bg-black p-[7px] sm:p-[7px] lg:p-[10px] text-[7px] sm:text-[9px] lg:text-[16px] border-none rounded-r-lg '>
                <h3 className='hover:translate-x-0 hover:translate-y-0 hover:scale-110 duration-300 text-white'>JOIN US</h3>
            </button>
        </div>

        <div className="flex gap-[5px] lg:gap-[10px]">  
            <img src = '/images/icons/1.png' className='cursor-pointer w-[15px] h-[15px] sm:w-[30px] sm:h-[30px]' alt=''/>
            <img src = '/images/icons/2.png' className='cursor-pointer w-[15px] h-[15px] sm:w-[30px] sm:h-[30px]' alt=''/>
            <img src = '/images/icons/3.webp' className='cursor-pointer w-[15px] h-[15px] sm:w-[30px] sm:h-[30px]' alt=''/>
            <img src = '/images/icons/4.png' className='cursor-pointer w-[15px] h-[15px] sm:w-[30px] sm:h-[30px]' alt=''/>
            <img src = '/images/icons/5.png' className='cursor-pointer w-[15px] h-[15px] sm:w-[30px] sm:h-[30px]' alt=''/>
        </div>
      </div>
    </div>
  )
}

export default FooterContact
