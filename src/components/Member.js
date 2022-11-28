import React from 'react'

const Member = () => {
  return (
    <section className='bg-main border-b-2 border-solid border-yellowOrange'>
        <div className='sm:max-w-smContainer md:max-w-mdContainer lg:max-w-container mx-auto'>
            <div className='flex flex-wrap lg:flex-nowrap justify-between py-11'>
                <div>
                    <h4 className='text-white text-4xl font-poppins font-bold'>Want to join as member branch in your area?</h4>
                </div>
                <div>
                    <a href="#" type='button' className='text-white bg-main font-poppins font-semibold text-base capitalize no-underline border-solid border-white border-2 px-5 py-2.5 hover:bg-white hover:border-white hover:text-main ease-linear duration-300 mt-5 lg:mt-0'>Contact</a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Member