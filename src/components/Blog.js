import React from 'react'
import { AiOutlineRight } from 'react-icons/ai';
const Blog = () => {
  return (
    <section className='bg-lightAsh py-28'>
        <div className='sm:max-w-smContainer md:max-w-mdContainer lg:max-w-container mx-auto'>
            <div className='flex flex-wrap lg:flex-nowrap gap-x-14 gap-y-4'>
                <div className='bg-blog1 bg-no-repeat bg-fixed bg-center bg-cover'>
                    <div className='bg-darken px-12 pt-[75px] pb-[55px]'>
                        <h6 className='text-white font-poppins font-bold text-2xl leading-9 mb-[55px]'>lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</h6>
                        <a href="#" type='button' className='text-white bg-lighten font-poppins font-semibold text-xs px-5 py-2.5 hover:bg-main hover:text-white ease-linear duration-300'>Read More</a>
                    </div>
                </div>
                <div className='bg-blog2 bg-no-repeat bg-fixed bg-center bg-cover'>
                    <div className='bg-darken px-12 pt-[75px] pb-[55px]'>
                        <h6 className='text-white font-poppins font-bold text-2xl leading-9 mb-[55px]'>lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</h6>
                        <a href="#" type='button' className='text-white bg-lighten font-poppins font-semibold text-xs px-5 py-2.5 hover:bg-main hover:text-white ease-linear duration-300'>Read More</a>
                    </div> 
                </div>
                <div className='bg-blog3 bg-no-repeat bg-fixed bg-center bg-cover'>
                    <div className='bg-darken px-12 pt-[75px] pb-[55px]'>
                        <h6 className='text-white font-poppins font-bold text-2xl leading-9 mb-[55px]'>lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</h6>
                        <a href="#" type='button' className='text-white bg-lighten font-poppins font-semibold text-xs px-5 py-2.5 hover:bg-main hover:text-white ease-linear duration-300'>Read More</a>
                    </div>
                </div>
            </div>
            <div className='mt-6 flex justify-end'>
                <a href="#" className='text-black font-poppins font-bold text-base flex'>MORE FROM THE BLOG <AiOutlineRight className='mt-1'/></a>
            </div>
        </div>
    </section>
  )
}

export default Blog