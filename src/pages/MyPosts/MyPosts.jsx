import React from 'react'
import MyPostsComp from '../../components/MyPostsComp/MyPostsComp'
const MyPosts = () => {
  return (
    <div className='flex flex-col gap-[40px] px-[40px] pt-[30px] pb-[50px]'>
        <MyPostsComp 
        title='Neymar inspires comeback for football giants Paris Saint Germain'
        desc='Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.'
        imgSrc='/images/neymar1.jpg' />
        <MyPostsComp 
        title='Ronaldo inspires comeback for football giants Manchester United'
        desc='Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.'
        imgSrc='/images/ronaldo4.jpg' />
        <MyPostsComp 
        title='Messi inspires comeback for football giants Barcelona'
        desc='Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.'
        imgSrc='/images/messi1.jpg' />
    </div>
  )
}

export default MyPosts
