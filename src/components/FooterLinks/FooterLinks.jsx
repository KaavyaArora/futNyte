import React from 'react'
import { styles } from './styles'

const FooterLinks = () => {
  return (
    <div className={styles.mainContainer}>
    

      <div className='flex gap-[10px] '>         

        <div className={styles.column}>          
          <h1 className={styles.footHeading}>Football News</h1>
          <span className={styles.footLink}>Latest News</span>
          <span className={styles.footLink}>Match Reports</span>
          <span className={styles.footLink}>Player Interviews</span>
          <span className={styles.footLink}>FAQ</span>
          <span className={styles.footLink}>Contact Support</span>
        </div>

        <div className={styles.column}>                  
          <h1 className={styles.footHeading} >TEAMS/LEAGUES</h1>
          <span className={styles.footLink}>Team Profiles</span>
          <span className={styles.footLink}>League Tables</span>
          <span className={styles.footLink}>Fixtures/Results</span>
          <span className={styles.footLink}>Player Stats</span>
          <span className={styles.footLink}>Player Merchandise</span>
        </div>

        <div className={styles.column}>                   
          <h1 className={styles.footHeading}>ABOUT</h1>
          <span className={styles.footAbout}>Estd in 2022</span>
          <span className={`${styles.footAbout} break-all`}>Our mission is to create a vibrant online hub where football lovers from all around the world can unite.</span>
          <span className={`${styles.footAbout} break-all`}>We aim to foster a sense of unity , camaraderie , and knowledge-sharing among fans , players , coaches , and anyone with a love for the sport.</span>
        </div>

      </div>



      <div className={styles.subContainer}>                          

        <div className="flex items-center  ">                                                     
          <div className={styles.info}>
            <span className={styles.title}>FutNyte</span>
            <span className={styles.email}>footynytecommunity@gmail.com</span>          
          </div>
          <span className={styles.copyright}>©Copyright 2023. All Right Reserved</span>
        </div>

        <div className="w-80">                                       
          <img src = '/img/footerbanner.png' alt=''/>
        </div>

      </div>

    </div>
  )
}

export default FooterLinks