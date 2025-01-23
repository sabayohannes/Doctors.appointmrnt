import React from 'react'
import { assets } from '../assets/assets';

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row flex-wrap bg-primary rounded-1g px-6 md:px-1 1g:px-20">
        {/* leftside*/}
    <div className="md:w-1/2 flex flex-col  items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]">
        <p className="text-3xl md:text-4xl lg:text-5x1   text-white font-semibold md:leading-tight lg:leading-tight">
Book Your Appointment <br/> 
with Our Trusted Doctors
        </p>
        <div  className='flex flex-col md:flex-row  items center gap-3 text-white text-sm font-light'>
            <img className='w-28' src={assets.group_profiles}/>
        <p>Simply browse throuh our extensive list of doctors,<br/>
        schedule your Appointemt</p>
        </div>
        <a  className='flex items-center gap-2 bg-white px-3 py-3 rounded-full text-gray-600 text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300' href='#speciality'>Book Appointment <img className='w-3' src={assets.arrow_icon} alt=""/></a>
        </div>  

      {/* rightside*/}
    <div className='md:w-1/2 relative'>
        <img  className='w-full md:absolute bottom-0 h-auto rounded-lg'  src={assets.header_img} alt=""/></div> 
    </div>
  )
}

export default Header;
