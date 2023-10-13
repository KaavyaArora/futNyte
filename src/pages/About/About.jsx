import React from 'react'

const About = () => {
  return (
    <div className='flex flex-col pt-[20px] pb-[40px] gap-[40px] px-[40px]'>

      <div className='relative'>       
            <img className='object-cover w-full h-[300px] ' src='/images/bg2.jpeg' alt=''  />
      </div>


      <div className='flex sm:flex-row flex-col gap-[20px] text-[#bbb] '>

        <div className='flex flex-1 flex-col gap-[20px] '>
            <h1 className='font-bold'>About Us</h1>
            <p>
            "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
            </p>
        </div>

        <div className='flex flex-1 flex-col gap-[20px] '>
            <h1 className='font-bold'>Our Vision</h1>
            <p>
            "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
            </p>
        </div>

      </div>


    </div>
  )
}

export default About
