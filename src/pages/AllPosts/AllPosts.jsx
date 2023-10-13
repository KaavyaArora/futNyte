import React from 'react'
import AllPostsComp from '../../components/AllPostsComp/AllPostsComp'

const AllPosts = () => {
  return (
    <div className='flex flex-col gap-[60px] px-[40px] pt-[30px] pb-[50px]'>
        <AllPostsComp 
        title='Neymar inspires comeback for football giants Paris Saint Germain'
        desc='Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.'
        imgSrc='/images/neymar1.jpg' />
        <AllPostsComp 
        title='Bellingham inspires comeback for football giants Real Madrid'
        desc='Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.'
        imgSrc='/images/bellingham.webp' />
        <AllPostsComp 
        title='Messi inspires comeback for football giants Barcelona'
        desc='Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.'
        imgSrc='/images/messi1.jpg' />
        <AllPostsComp 
        title='Zlatan inspires comeback for football giants AC Milan'
        desc='Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.'
        imgSrc='/images/zlatan.webp' />
        <AllPostsComp 
        title='Haaland inspires comeback for football giants Manchester City'
        desc='Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.'
        imgSrc='/images/haaland.webp' />
        <AllPostsComp 
        title='Ronado inspires comeback for football giants Manchester United'
        desc='Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.'
        imgSrc='/images/ronaldo4.jpg' />
    </div>
    
)
}

export default AllPosts
