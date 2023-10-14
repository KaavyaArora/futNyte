import React from 'react'
import AllPostsComp from '../../components/AllPostsComp/AllPostsComp'

const AllPosts = () => {
  return (
    <div className='flex flex-col gap-[120px] px-[40px] pt-[30px] pb-[50px]'>
        <AllPostsComp 
        title='Neymar inspires comeback for football giants Paris Saint Germain'
        desc='Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.'
        imgSrc='/images/neymar1.jpg'
        commentCnt = '18'
        viewsCnt = '399'
        likesCnt = '68' />
        <AllPostsComp 
        title='Bellingham inspires comeback for football giants Real Madrid'
        desc='Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.'
        imgSrc='/images/bellingham.webp'
        commentCnt = '29'
        viewsCnt = '558'
        likesCnt = '75' />
        <AllPostsComp 
        title='Messi inspires comeback for football giants Barcelona'
        desc='Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.'
        imgSrc='/images/messi1.jpg'
        commentCnt = '23'
        viewsCnt = '679'
        likesCnt = '83' />
        <AllPostsComp 
        title='Zlatan inspires comeback for football giants AC Milan'
        desc='Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.'
        imgSrc='/images/zlatan.webp'
        commentCnt = '27'
        viewsCnt = '666'
        likesCnt = '76' />
        <AllPostsComp 
        title='Haaland inspires comeback for football giants Manchester City'
        desc='Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.'
        imgSrc='/images/haaland.webp'
        commentCnt = '33'
        viewsCnt = '857'
        likesCnt = '88' />
        <AllPostsComp 
        title='Ronado inspires comeback for football giants Manchester United'
        desc='Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.'
        imgSrc='/images/ronaldo4.jpg'
        commentCnt = '25'
        viewsCnt = '745'
        likesCnt = '77' />
    </div>
    
)
}

export default AllPosts
