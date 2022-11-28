import React from 'react'

const Service = () => {
  return (
    <section className='mt-7'>
        <div className='flex flex-wrap'>
            <div className='w-full lg:w-2/4'>
                <div className='sm:max-w-smContainer md:max-w-mdContainer lg:max-w-halfContainer ml-auto pt-28 lg:pt-[134px]'>
                    <h2 className='text-black text-[40px] md:text-[50px] lg:text-[60px] font-poppins font-bold leading-[28px] md:leading-[48px] lg:leading-[72px]'>Our Services</h2>
                    <p className='text-paragraph text-base font-poppins font-medium leading-5 max-w-full lg:max-w-[405px] mt-6 mb-6 lg:mt-2 lg:mb-0'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                </div>
            </div>
            <div className='w-full lg:w-2/4 bg-service1 bg-no-repeat bg-fixed bg-center bg-cover'>
                <div className='bg-darken py-20 lg:py-[145px]'>
                    <div className='ml-10 lg:ml-[116px]'>
                        <h5 className='text-white text-4xl font-poppins font-bold'>Modern natural oil and gas refineries.</h5>
                        <a href="#" type='button' className='text-white bg-main font-poppins font-semibold text-base capitalize no-underline border-solid border-main border-2 px-5 py-2.5 hover:bg-transparent hover:border-white ease-linear duration-300 mt-[44px]'>Learn More</a>
                    </div>
                </div>
            </div>
            <div className='w-full lg:w-2/4 bg-service1 bg-no-repeat bg-fixed bg-center bg-cover'>
                <div className='bg-darken py-20 lg:py-[145px]'>
                    <div className='ml-10 lg:ml-[116px]'>
                        <h5 className='text-white text-4xl font-poppins font-bold'>Supply of national industries.</h5>
                        <a href="#" type='button' className='text-white bg-main font-poppins font-semibold text-base capitalize no-underline border-solid border-main border-2 px-5 py-2.5 hover:bg-transparent hover:border-white ease-linear duration-300 mt-[44px]'>Learn More</a>
                    </div>
                </div> 
            </div>
            <div className='w-full lg:w-2/4 bg-service1 bg-no-repeat bg-fixed bg-center bg-cover'>
                <div className='bg-darken py-20 lg:py-[145px]'>
                    <div className='ml-10 lg:ml-[116px]'>
                        <h5 className='text-white text-4xl font-poppins font-bold'>National fuel distribution and supply.</h5>
                        <a href="#" type='button' className='text-white bg-main font-poppins font-semibold text-base capitalize no-underline border-solid border-main border-2 px-5 py-2.5 hover:bg-transparent hover:border-white ease-linear duration-300 mt-[44px]'>Learn More</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Service