import React, { useState } from 'react'

const AllPostsComp = ({title,desc,imgSrc,commentCnt,viewsCnt,likesCnt}) => {


    const [isLiked, setIsLiked] = useState(false);
    const [isSaved,setIsSaved] =  useState(false);

    const [countLikes, setCountLikes] = useState(likesCnt);

    // const toggleLike = () => {
    //     setIsLiked(!isLiked);
    // }

    console.log(countLikes)
    const addLike =()=> {
        setIsLiked(!isLiked);
        setCountLikes(countLikes => ++countLikes )
    }
    const removeLike =()=> {
        setIsLiked(!isLiked);
        setCountLikes(countLikes=>  --countLikes)
    }

    const toggleSaved = () => {
        setIsSaved(!isSaved);
    }


  return (

<div className='flex flex-col gap-[20px] border-[3px] border-emerald-500 p-[20px] '>

    <div className='flex flex-col sm:flex-row gap-[80px] bg-[#111] text-[#bbb] '>

        <div className='flex flex-1 '>
            <img src={imgSrc} alt='' className='object-cover w-full lg:h-[300px] sm:h-[180px] h-[150px] '/>
        </div>

        <div className='flex flex-1 flex-col justify-center gap-[20px]'>
            <h1 className='lg:text-[30px] sm:[20px] text-[16px] font-bold'>{title}</h1>
            <p className='lg:text-[16px] sm:[14px] text-[10px]'>{desc}</p>
        </div>    
    </div>

    <div className='flex justify-center items-center gap-[25px] lg:gap-[100px] '>

        <div className='flex flex-col gap-[5px] '>
            <div className='flex items-center justify-center gap-[5px] sm:gap-[10px]'>
                {
                    isLiked ? (
                        <img onClick={removeLike} src = '/images/icons/like2.png' alt= '' className= 'sm:h-[20px] sm:w-[20px] h-[14px] w-[14px] cursor-pointer ' />
                    ) : (
                        <img onClick={addLike} src = '/images/icons/like1.png' alt= '' className= 'sm:h-[20px] sm:w-[20px] h-[14px] w-[14px] cursor-pointer ' />
                    )
                }
            </div>
            <div className='text-[#bbb] font-semibold text-[8px] lg:text-[12px]'>Likes ({countLikes})</div>
        </div>

        <div className='flex flex-col gap-[5px] '>
            <div className='flex items-center justify-center gap-[5px] sm:gap-[10px]'>
                <img src = '/images/icons/comments.png' className='sm:h-[20px] sm:w-[20px] h-[14px] w-[14px] cursor-pointer' alt = '' />
            </div>
            <div className='text-[#bbb] font-semibold text-[8px] lg:text-[12px]'>Comments ({commentCnt})</div>
        </div>

        <div className='flex flex-col gap-[5px] '>
            <div className='flex items-center justify-center gap-[5px] sm:gap-[10px]'>
                <img src = '/images/icons/views.png' className='sm:h-[20px] sm:w-[20px] h-[14px] w-[14px] cursor-pointer' alt = '' />
            </div>
            <div className='text-[#bbb] font-semibold text-[8px] lg:text-[12px]'>Views ({viewsCnt})</div>
        </div>
        
        <div className='flex flex-col gap-[5px] '>
            <div className='flex items-center justify-center gap-[5px] sm:gap-[10px]'>
                {
                    isSaved ? (
                        <img onClick={toggleSaved} src = '/images/icons/save2.png' title="save icons" alt= '' className= 'sm:h-[20px] sm:w-[20px] h-[14px] w-[14px] cursor-pointer' />
                    ) : (
                        <img onClick={toggleSaved} src = '/images/icons/save1.png' alt= '' className= 'sm:h-[20px] sm:w-[20px] h-[14px] w-[14px] cursor-pointer' />
                    )
                } 
            </div>
            <div className='text-[#bbb] font-semibold text-[8px] lg:text-[12px]'>Save</div>
        </div>

        <div className='flex flex-col gap-[5px] '>
            <div className='flex items-center justify-center gap-[5px] sm:gap-[10px]'>
                <img src = '/images/icons/share.png' className='sm:h-[20px] sm:w-[20px] h-[14px] w-[14px] cursor-pointer' alt = '' />
            </div>
            <div className='text-[#bbb] font-semibold text-[8px] lg:text-[12px]'>Share</div>
        </div>

    </div>

    <div className='w-full flex flex-col justify-center items-center gap-[10px]'>
        <textarea rows='1' placeholder='Add a comment' className=' text-white w-full bg-transparent border-[1px] outline-none p-[20px] '></textarea>
        <button className='sm:py-[5px] sm:px-[10px] py-[2px] px-[5px] sm:text-[16px] text-[12px] cursor:pointer bg-emerald-500 border-[2px] border-emerald-500 rounded-[5px] w-max text-white font-semibold hover:text-[#111]'>
            Submit
        </button>
    </div>

</div>

)
}

export default AllPostsComp
