import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
        <div className='top-footer bg-fadedBlack text-white'>
            <div className='max-w-smContainer md:max-w-mdContainer lg:max-w-container mx-auto'>
                <div className='flex flex-wrap lg:flex-nowrap py-16 lg:py-32'>
                    <div className='w-full lg:w-2/5 flex justify-start'>
                        <ul className=''>
                            <li className='text-base font-bold'>
                                <picture>
                                    <img src='images/logo.png' alt='logo' className='w-full mb-5'/>
                                </picture>
                            </li>
                            <li className='pb-2'><a href=""></a>mail@yourcompany.com</li>
                            <li className='pb-2'>+896 120 5889 (Toll free)</li>
                            <li className='pb-2'>101 Baker Street, New York, USA, 12345</li>
                            <li className='flex gap-5 mt-5 mb-10 lg:mb-0'>
                                <FaFacebookF className='text-lg font-normal font-white border-main border-solid border-2 bg-main rounded-full w-8 h-8 p-1'/>
                                <FaTwitter className='text-lg font-normal font-white border-main border-solid border-2 bg-main rounded-full w-8 h-8 p-1'/>
                                <FaInstagram className='text-lg font-normal font-white border-main border-solid border-2 bg-main rounded-full w-8 h-8 p-1'/>
                                <FaLinkedinIn className='text-lg font-normal font-white border-main border-solid border-2 bg-main rounded-full w-8 h-8 p-1'/>
                            </li>
                        </ul>
                    </div>
                    <div className='w-2/4 md:w-2/6 lg:w-1/5 flex justify-start'>
                        <ul>
                            <li className='text-base font-bold mt-2 mb-5'>Company</li>
                            <li className='pb-2'>Home</li>
                            <li className='pb-2'>About</li>
                            <li className='pb-2'>Services</li>
                            <li className='pb-2'>Gallery</li>
                        </ul>
                    </div>
                    <div className='w-2/4 md:w-2/6 lg:w-1/5 flex justify-start'>
                        <ul className='font-poppins'>
                            <li className='text-base font-bold mt-3 mb-5'>Others</li>
                            <li className='pb-2'>Blog</li>
                            <li className='pb-2'>Contact</li>
                            <li className='pb-2'>Terms & Conditions</li>
                            <li className='pb-2'>Privacy Policy</li>
                        </ul>
                    </div>
                    <div className='w-2/4 md:w-2/6 lg:w-1/5 flex justify-end'>
                        <ul className=''>
                            <li className='text-base font-bold mt-3 mb-5'>Certificate</li>
                            <li className='flex gap-2'>
                                <div>
                                    <picture>
                                        <img src="images/certificate1.png" alt="ct1"/>
                                    </picture>
                                </div>
                                <div>
                                    <picture>
                                        <img src="images/certificate2.png" alt="ct1"/>
                                    </picture>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className='bottom-footer bg-smokyBlack'>
            <div className='max-w-smContainer md:max-w-mdContainer lg:max-w-container mx-auto'>
                <p className='font-poppins text-base font-medium font-paragraph py-10 text-black'>© Copyright 2022 by AltDesain Studio – All right reserved.</p>
            </div>  
        </div>
    </footer>
  )
}

export default Footer