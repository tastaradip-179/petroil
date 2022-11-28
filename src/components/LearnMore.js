import React from 'react'

const LearnMore = () => {
  return (
    <section className='mt-20 lg:mt-0 lg:py-[136px] bg-white lg:bg-lightAsh'>
        <div className='max-w-container mx-auto'>
            <div className='flex flex-wrap md:flex-nowrap'>
                <div className='w-full md:w-2/6 bg-main flex items-center'>
                    <h4 className='text-white text-2xl md:text-3xl lg:text-4xl font-poppins font-bold leading-[28px] md:leading-[36px] lg:leading-[48px] max-w-full lg:max-w-[262px] sm:p-12 sm:ml-0 md:p-0 md:ml-[28px] lg:ml-[74px]'>Learn more about our company</h4>
                </div>
                <div className='w-full md:w-4/6 bg-learn bg-no-repeat bg-fixed bg-center bg-cover'>
                    <div className='py-40 text-center'>
                        <a href="#" type='button' className='text-main bg-white font-poppins font-semibold text-base capitalize no-underline border-solid border-white border-2 px-5 py-2.5 hover:bg-main hover:border-main hover:text-white ease-linear duration-300'>Learn More</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default LearnMore