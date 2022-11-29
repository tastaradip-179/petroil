import React from 'react'

const Banner = () => {
  return (
    <div className='bg-banner bg-no-repeat bg-fixed bg-center bg-cover'>
        <div className='bg-darken sm:py-32 md:py-48 lg:py-64'>
            <div className='max-w-smContainer md:max-w-mdContainer lg:max-w-container mx-auto'>
                <h1 className='text-white font-poppins font-bold text-4xl md:text-5xl lg:text-6xl tracking-wide lg:w-[842px] sm:leading-[44px] md:leading-[64px] lg:leading-[84px]'>We exist since 1975 on the oil and gas industry.</h1>
                <a href="#" type='button' className='text-white bg-main font-poppins font-semibold text-base uppercase no-underline border-solid border-main border-2 px-6 py-2.5 hover:bg-transparent hover:border-white ease-linear duration-300 mt-[44px]'>Learn More</a>
            </div>
        </div>
    </div>
  )
}

export default Banner