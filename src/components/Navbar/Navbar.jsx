import React from 'react'
import { Link } from 'react-router-dom'
import { styles } from './styles'

const Navbar = () => {
return (
    <div className={styles.navContainer}>

        <Link to ='/'>
            <span className={`${styles.navLogo} text-[#bbb]`}>Fut</span>
            <span className={`${styles.navLogo} text-amber-500`}>N</span>
            <span className={`${styles.navLogo} text-[#bbb]`}>yte</span>
        </Link>     
        <Link to ='/' className={styles.navTitle}>Home</Link>
        <Link to ="/posts" className={styles.navTitle}>Posts</Link>
        <Link to = '/about' className={styles.navTitle}>About</Link>    
        <input type= 'text' placeholder='Search..' className={styles.navSearch} />  

    </div>
)
}

export default Navbar