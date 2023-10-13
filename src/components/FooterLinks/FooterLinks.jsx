import React from 'react'

const FooterLinks = () => {
  return (
    <div className='bg-[#111] relative flex flex-1 flex-col py-[30px] px-[30px] '>
    

      <div className='flex  gap-[10px] '>         

        <div className="flex flex-1 flex-col gap-[10px] text-[10px] text-justify  ">          
          <h1 className='foot-heading'>Football News</h1>
          <span className='foot-comp'>Latest News</span>
          <span className='foot-comp'>Match Reports</span>
          <span className='foot-comp'>Player Interviews</span>
          <span className='foot-comp'>FAQ</span>
          <span className='foot-comp'>Contact Support</span>
        </div>

        <div className="flex flex-1  flex-col gap-[10px] text-[10px] text-justify">                  
          <h1 className='foot-heading' >TEAMS/LEAGUES</h1>
          <span className='foot-comp'>Team Profiles</span>
          <span className='foot-comp'>League Tables</span>
          <span className='foot-comp'>Fixtures/Results</span>
          <span className='foot-comp'>Player Stats</span>
          <span className='foot-comp'>Player Merchandise</span>
        </div>

        <div className="flex flex-1 flex-col gap-[10px] text-[10px] text-justify">                   
          <h1 className='foot-heading'>ABOUT</h1>
          <span className='foot-about'>Estd in 2022</span>
          <span className='foot-about break-all'>Our mission is to create a vibrant online hub where football lovers from all around the world can unite.</span>
          <span className='foot-about break-all'>We aim to foster a sense of unity , camaraderie , and knowledge-sharing among fans , players , coaches , and anyone with a love for the sport.</span>
        </div>

      </div>



      <div className='flex flex-1 items-center justify-between relative top-3  '>                          

        <div className="flex items-center  ">                                                     
          <div className='flex flex-col items-center -mt-5 sm:mt-0'>
          <span className='mt-3 text-bold text-emerald-500 text-[14px] sm:text-[24px] font-semibold'>FutNyte</span>
          <span className='foot-contactdet'>footynytecommunity@gmail.com</span>
          
          
          </div>
          <span className='ml-[20px] text-[12px] text-[#555] text-[7px] sm:text-[12px] mt-0 sm:mt-7 '>©Copyright 2023. All Right Reserved</span>
        </div>

        <div className="w-80">                                       
          <img src = '/img/footerbanner.png' alt=''/>
        </div>

      </div>

    </div>
  )
}

export default FooterLinks
