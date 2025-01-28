import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'><p>
        About< span className=' text-gray-700 font-medium' > US</span>
        </p>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt=''/>
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>wellcome to our clinic your trusted partner in managing your healthcare needs you wont face any problem concerened  to scheduling doctor appointements and managing their health records</p>
          <p>prescripto is excellence in healthcare technology we continiously strive to enhance our platform</p>
          <b className='text-gray-800'>our vision</b>
          <p >our vision at prescripto is to creae a seamess healthcare experiance for everyone</p>
        
        </div>
      </div>
      <div className='text-xl my-4'>
        <p>WHY <span className='text-gray-700 font-semibold'></span>CHOOSE US</p>
      </div>
      <div className='flex flex-col md:flex-row mb-20'>
      <div className='px-10 md:px-16 py-8 sm:py-16 flex flex-col  gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer '>
        <b>Efficiency</b>
        <p>Streamlined appointment scheduling that fits into your busy lifestyle</p>
      </div>
      <div className=' px-10 md:px-16 py-8 sm:py-16 flex flex-col  gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer '>
      
      <b>Convenience:</b>
      <p>Access to a network of trusted healthcare professionals in your area</p>
      </div>
      <div className='px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer '>
      
      <b>Personalization</b>
      <p>Tailored recommendations and reminders to help you stay on top of your health</p>
      </div>



      </div>
    </div>
  )
}

export default About

