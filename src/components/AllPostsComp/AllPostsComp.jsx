import React, { useState } from 'react'
import { styles } from './styles';

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

<div className={styles.mainContainer}>

    <div className={styles.subContainer1}>

        <div className='flex flex-1 '>
            <img src={imgSrc} alt='' className={styles.img}/>
        </div>

        <div className='flex flex-1 flex-col justify-center gap-[20px]'>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.desc}>{desc}</p>
        </div>    
    </div>

    <div className={styles.subContainer2}>

        <div className={styles.info}>
            <div className={styles.infoIconDiv}>
                {
                    isLiked ? (
                        <img onClick={removeLike} src = '/images/icons/like2.png' alt= '' className= {styles.infoImg} />
                    ) : (
                        <img onClick={addLike} src = '/images/icons/like1.png' alt= '' className= {styles.infoImg} />
                    )
                }
            </div>
            <div className={styles.infoCount}>Likes ({countLikes})</div>
        </div>

        <div className={styles.info}>
            <div className={styles.infoIconDiv}>
                <img src = '/images/icons/comments.png' className={styles.infoImg} alt = '' />
            </div>
            <div className={styles.infoCount}>Comments ({commentCnt})</div>
        </div>

        <div className={styles.info}>
            <div className={styles.infoIconDiv}>
                <img src = '/images/icons/views.png' className={styles.infoImg} alt = '' />
            </div>
            <div className={styles.infoCount}>Views ({viewsCnt})</div>
        </div>
        
        <div className={styles.info}>
            <div className={styles.infoIconDiv}>
                {
                    isSaved ? (
                        <img onClick={toggleSaved} src = '/images/icons/save2.png' title="save icons" alt= '' className= {styles.infoImg} />
                    ) : (
                        <img onClick={toggleSaved} src = '/images/icons/save1.png' alt= '' className= {styles.infoImg} />
                    )
                } 
            </div>
            <div className={styles.infoCount}>Save</div>
        </div>

        <div className={styles.info}>
            <div className={styles.infoIconDiv}>
                <img src = '/images/icons/share.png' className={styles.infoImg} alt = '' />
            </div>
            <div className={styles.infoCount}>Share</div>
        </div>

    </div>

    <div className={styles.subContainer3}>
        <textarea rows='1' placeholder='Add a comment' className={styles.textarea}></textarea>
        <button className={styles.button}>
            Submit
        </button>
    </div>

</div>

)
}

export default AllPostsComp