import React from 'react'

import { assets } from '../assets/assets'

const Footer = () => {
    return (
        <div className='md:mx-10'>
            <div className='flex flex-col  sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
                <div>
                    <img className= 'mb-5 w-40' src={assets.logo} alt='' />
                    <p className='w-full md:w-2/3 text-gray-600 leading-6'> Learn our basic rules about Health <br /> you will be suprise if you know all the technique of healthy life style</p>
                </div>
                <div>
                    {/*center section */}
                    <p className='text-xl font-medium mb-5'>COMPANY</p>
                    <ul className='flex flex-col gap-2 text-gray-600'>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Contact us</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>

                <div>
                    {/*right section */}
                    <p className='text-xl font-medium mb-5'> GET IN TOUCH</p>
                    <ul className='flex flex-col gap-2 text-gray-600'>
                        <li>0913892222</li>
                        <li>makidaqueens2@gmail.com</li>
                    </ul>

                </div>
                
            </div>
            <div>
                    <hr />
                    <p className='py-5 text-sm text-center'> Copy right 2025@Prescripto All Right Reserved</p>
                </div>
        </div>
    )
}

export default Footer
