import { styles } from "./styles"



const FooterContact = () => {


  return (
    <div className={styles.mainContainer}>                                                                     
      <div className={styles.bannerContainer}>                                                             

        <span className={styles.bannerTitle}>GET IN TOUCH WITH US</span>

        <div>                                                   
            <input type='text' placeholder='Enter your e-mail' className={`${styles.contactInput} rounded-l-lg`}  />
            <button className={`${styles.contactInput} rounded-r-lg bg-black`}>
                <h3 className={styles.hoverButton}>JOIN US</h3>
            </button>
        </div>

        <div className="flex gap-[5px] lg:gap-[10px]">  
            <img src = '/images/icons/1.png' className={styles.linksIcons} alt=''/>
            <img src = '/images/icons/2.png' className={styles.linksIcons} alt=''/>
            <img src = '/images/icons/3.webp' className={styles.linksIcons} alt=''/>
            <img src = '/images/icons/4.png' className={styles.linksIcons} alt=''/>
            <img src = '/images/icons/5.png' className={styles.linksIcons} alt=''/>
        </div>
      </div>
    </div>
  )
}

export default FooterContact