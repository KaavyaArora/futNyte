import React from 'react'
import { styles } from './styles'



const MyPostsComp = ({title,desc,imgSrc}) => {
  return (
    <div className={styles.mainContainer}>

    <div className={styles.subContainer}>
      <div className='flex flex-1 '>
        <img src={imgSrc} alt='' className={styles.img}/>
      </div>

      <div className='flex flex-1 flex-col justify-center gap-[20px]'>
        <h1 className='sm:text-[30px] text-[16px] font-bold'>{title}</h1>
        <p className='sm:text-[16px] text-[10px]'>{desc}</p>
      </div>
    </div>

    <div className={styles.buttonContainer}>
        <button className={`${styles.button} bg-amber-500`}>
            Edit Post
        </button>
        <button className={`${styles.button} bg-red-500`}>
            Delete Post
        </button>
    </div>

    
  </div>
  )
}

export default MyPostsComp