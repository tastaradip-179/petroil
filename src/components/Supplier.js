import React from 'react'

const Supplier = () => {
  return (
    <section className='mt-[78px]'>
        <div className='max-w-smContainer md:max-w-mdContainer lg:max-w-container mx-auto'>
            <div className='flex flex-wrap lg:flex-nowrap lg:justify-between'>
                <div className='max-w-full lg:max-w-[290px]'>
                    <h3 className='font-poppins font-bold text-black text-3xl md:text-4xl lg:text-5xl leading-[40px] md:leading-[52px] lg:leading-[64px]'>The biggest supplier on the country</h3>
                </div>
                <div  className='max-w-full lg:max-w-[652px] flex items-center mt-6 lg:mt-0'>
                    <p className='font-poppins font-medium text-fadedBlack text-base leading-6'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.</p>
                </div>
            </div>
        </div>
        <div className='mt-[100px]'>
            <div className='flex lg:gap-x-6 gap-y-4 flex-wrap lg:flex-nowrap'>
                <div className='w-full md:w-2/4 lg:w-1/4 px-2 lg:px-0'>
                    <picture>
                        <img className='w-full' src="images/supplier1.png" loading='lazy'/>
                    </picture>    
                </div>
                <div className='w-full md:w-2/4 lg:w-1/4 px-2 lg:px-0'>
                    <picture>
                        <img className='w-full' src="images/supplier2.png" loading='lazy'/>
                    </picture>    
                </div>
                <div className='w-full md:w-2/4 lg:w-1/4 px-2 lg:px-0'>
                    <picture>
                        <img className='w-full' src="images/supplier3.png" loading='lazy'/>
                    </picture>    
                </div>
                <div className='w-full md:w-2/4 lg:w-1/4 px-2 lg:px-0'>
                    <picture>
                        <img className='w-full' src="images/supplier4.png" loading='lazy'/>
                    </picture>    
                </div>
            </div>
        </div>
    </section>
  )
}

export default Supplier