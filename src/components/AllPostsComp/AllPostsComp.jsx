import React, { useState } from 'react'

const AllPostsComp = ({title,desc,imgSrc}) => {


    const [isLiked, setIsLiked] = useState(false);
    const [isSaved,setIsSaved] =  useState(false);

    const [countLikes, setCountLikes] = useState(68);

    // const toggleLike = () => {
    //     setIsLiked(!isLiked);
    // }

    const addLike =()=> {
        setIsLiked(!isLiked);
        setCountLikes(countLikes => countLikes + 1)
    }
    const removeLike =()=> {
        setIsLiked(!isLiked);
        setCountLikes(countLikes=>  countLikes - 1)
    }

    const toggleSaved = () => {
        setIsSaved(!isSaved);
    }


  return (

<div className='flex flex-col gap-[20px] border-[1px] p-[20px] '>

    <div className='flex flex-col sm:flex-row gap-[80px] bg-[#111] text-[#bbb] '>

        <div className='flex flex-1 '>
            <img src={imgSrc} alt='' className='object-cover w-full lg:h-[300px] sm:h-[180px] h-[150px] '/>
        </div>

        <div className='flex flex-1 flex-col justify-center gap-[20px]'>
            <h1 className='lg:text-[30px] sm:[20px] text-[16px] font-bold'>{title}</h1>
            <p className='lg:text-[16px] sm:[14px] text-[10px]'>{desc}</p>
        </div>    
    </div>

    <div className='flex justify-center items-center gap-[25px] sm:gap-[100px] '>
        <div className='flex items-center justify-center gap-[5px] sm:gap-[10px]'>
            {
                isLiked ? (
                    <img onClick={removeLike} src = '/images/icons/like2.png' alt= '' className= 'sm:h-[20px] sm:w-[20px] h-[14px] w-[14px] cursor-pointer ' />
                ) : (
                    <img onClick={addLike} src = '/images/icons/like1.png' alt= '' className= 'sm:h-[20px] sm:w-[20px] h-[14px] w-[14px] cursor-pointer ' />
                )
            }
            <span className='text-[#bbb] font-semibold text-[10px] sm:text-[16px]'>{countLikes}</span>   
        </div>
        <div className='flex items-center justify-center gap-[5px] sm:gap-[10px]'>
            <img src = '/images/icons/comments.png' className='sm:h-[20px] sm:w-[20px] h-[14px] w-[14px] cursor-pointer' alt = '' />
            <span className='text-[#bbb] font-semibold text-[10px] sm:text-[16px] '>16</span> 
        </div>
        <div className='flex items-center justify-center gap-[5px] sm:gap-[10px]'>
            <img src = '/images/icons/views.png' className='sm:h-[20px] sm:w-[20px] h-[14px] w-[14px] cursor-pointer' alt = '' />
            <span className='text-[#bbb] font-semibold text-[10px] sm:text-[16px] '>329</span> 
        </div>
        
        <div>
            {
                isSaved ? (
                    <img onClick={toggleSaved} src = '/images/icons/save2.png' title="save icons" alt= '' className= 'sm:h-[20px] sm:w-[20px] h-[14px] w-[14px] cursor-pointer' />
                ) : (
                    <img onClick={toggleSaved} src = '/images/icons/save1.png' alt= '' className= 'sm:h-[20px] sm:w-[20px] h-[14px] w-[14px] cursor-pointer' />
                )
            } 
        </div>
        <img src = '/images/icons/share.png' className='sm:h-[20px] sm:w-[20px] h-[14px] w-[14px] cursor-pointer' alt = '' />
    </div>

</div>

)
}

export default AllPostsComp
