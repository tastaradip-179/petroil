import React from 'react'
import { BsEnvelopeFill, BsTelephoneOutbound } from 'react-icons/bs';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';


const Header = () => {
  return (
    <header className='bg-smokyBlack py-4 border-b-2 border-solid border-yellowOrange'>
      <div className='sm:max-w-smContainer md:max-w-mdContainer lg:max-w-container mx-auto'>
        <div className='w-full flex sm:flex-wrap md:flex-nowrap text-white'>
          <div className='w-full lg:w-2/4'>
            <div className='justify-start flex sm:flex-wrap lg:flex-nowrap sm:gap-2 lg:gap-20'>
              <div className='flex w-full md:w-2/4 border-0 lg:border-r-2 lg:border-solid lg:border-[#5C6A92]'>
                <BsEnvelopeFill className='text-base font-normal mr-1'/>
                <span className='font-poppins font-normal text-xs'>mail@yourcompany.com</span>
              </div>
              <div className='flex w-full md:w-2/4'>
                <BsTelephoneOutbound className='text-base font-normal mr-1'/>
                <span className='font-poppins font-normal text-xs'>+896 120 5889 (Toll free)</span>
              </div>
            </div>
          </div>
          <div className='w-full md:w-2/4 mt-4 md:mt-0'>
            <div className='justify-end flex'>
              <FaFacebookF className='text-lg font-normal'/>
              <FaTwitter className='text-lg font-normal ml-5'/>
              <FaInstagram className='text-lg font-normal ml-5'/>
              <FaLinkedinIn className='text-lg font-normal ml-5'/>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header