import React from 'react'
import { Link } from 'react-router-dom'
import { styles } from './styles'

const Home = () => {
  return (
    <div className='flex flex-col'>
        <img src = '/images/icons/bg5.png' alt=''  className={styles.img}/>
        <div className={styles.middleSubContainer}>
            <h1 className={styles.slogan}>More Than Just a Game</h1>
            <button className={styles.button}>
                <Link to = '/posts'>Click to Enter Community</Link>
            </button>
            <h1 className={styles.slogan}>Where Football Lives</h1>
        </div>
        
        
        <img src = '/images/bg4.webp' alt=''  className={styles.img}/>
    </div>
  )
}

export default Home