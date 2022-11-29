import React, {useEffect, useState} from 'react'
import { GiHamburgerMenu } from 'react-icons/gi';
import { ImCross } from 'react-icons/im';

const Navbar = () => {

  const [open, setOpen] = useState(false);

  useEffect(()=>{
    if(window.innerWidth >= 667){
        setOpen(true)
    }
    function screenResize(e){
        if(window.innerWidth >= 667){
            setOpen(true);
        }
        else{
            setOpen(false);
        }
    }
    window.addEventListener("resize", screenResize)
  }, [])

  let handleOpen = () => {
    setOpen(!open);
  } 

  return (
    <nav className='bg-main py-7'>
        <div className='max-w-smContainer md:max-w-mdContainer lg:max-w-container mx-auto h-full flex flex-wrap md:flex-nowrap md:flex-col lg:flex-row'>
            <div className='w-2/4 md:w-1/5 justify-start'>
                <picture>
                    <img className='w-full' src="images/logo.png" loading='lazy' alt="logo"/>
                </picture>
            </div>
            <div className='flex md:hidden w-2/4 items-center justify-end'>
                <button onClick={handleOpen}>
                    {open
                    ?
                    <ImCross className='text-white text-base'/>  
                    :
                    <GiHamburgerMenu className='text-white text-base'/>
                    }
                </button>
            </div>
            {open && 
            <div className='w-full lg:w-4/5 flex items-center justify-end mt-6 lg:mt-0'>
                <ul className='flex flex-col md:flex-row text-white list-none font-poppins font-semibold text-base md:gap-x-8 lg:gap-x-12'>
                    <li className='md:border-0 border-solid border-lighten border-b-2 p-2 md:p-0'><a href="#" className='capitalize no-underline'>Home</a></li>
                    <li className='md:border-0 border-solid border-lighten border-b-2 p-2 md:p-0'><a href="#" className='capitalize no-underline'>About</a></li>
                    <li className='md:border-0 border-solid border-lighten border-b-2 p-2 md:p-0'><a href="#" className='capitalize no-underline'>Services</a></li>
                    <li className='md:border-0 border-solid border-lighten border-b-2 p-2 md:p-0'><a href="#" className='capitalize no-underline'>Gallery</a></li>
                    <li className='md:border-0 border-solid border-lighten border-b-2 p-2 md:p-0'><a href="#" className='capitalize no-underline'>Blog</a></li>
                    <li className='p-2 md:p-0 mt-4 md:mt-0'><a href="#" className='uppercase no-underline border-solid border-white border-2 px-4 py-2'>Contact</a></li>
                </ul>
            </div>
            }
        </div>
    </nav> 
  )
}

export default Navbar