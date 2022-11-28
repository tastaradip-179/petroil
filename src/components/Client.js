import React from 'react'

const Client = () => {
  return (
    <section className='my-28'>
        <div className='sm:max-w-smContainer md:max-w-mdContainer lg:max-w-container mx-auto'>
            <div className='flex flex-wrap md:flex-nowrap'>
                <div className='w-2/4 md:w-1/4'>
                    <picture>
                        <img className='w-full' src="images/client1.png" alt="client1" loading='lazy'/>
                    </picture>
                </div>
                <div className='w-2/4 md:w-1/4'>
                    <picture>
                        <img className='w-full' src="images/client2.png" alt="client2" loading='lazy'/>
                    </picture>
                </div>
                <div className='w-2/4 md:w-1/4'>
                    <picture>
                        <img className='w-full' src="images/client3.png" alt="client3" loading='lazy'/>
                    </picture>
                </div>
                <div className='w-2/4 md:w-1/4'>
                    <picture>
                        <img className='w-full' src="images/client4.png" alt="client4" loading='lazy'/>
                    </picture>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Client