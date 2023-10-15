import React from 'react'
import { styles } from './styles'

const CreatePost = () => {
  return (
    <div className={styles.mainContainer}>


      <div className={styles.subContainer}>

        <div className='flex flex-1 '>
          <img src='/images/haaland1.jpg' alt='' className={styles.bannerImg} />
        </div>

        <div className='flex flex-1 items-center justify-center text-[#bbb] '>
          <form className={styles.form}>
            <input placeholder='Enter Title ' type='text' className={styles.inputBox} ></input>
            <input placeholder='Enter Image URL' type='text' className={styles.inputBox} ></input>
            <textarea cols='30' rows='10' placeholder='Enter Description' className={styles.inputBox} ></textarea>
            <button className={styles.button}>
                ADD
            </button>
          </form>
        </div>

      </div>


    </div>
  )
}

export default CreatePost