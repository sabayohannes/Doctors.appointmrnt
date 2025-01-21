import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import {assets} from '../assets/assets'
import { useState } from 'react';

const Navbar = () => {
const navigate=useNavigate();
const [token,setToken]=useState(true)

  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400'>
      <img className='w-44 cursor-pointer' src={assets.logo} alt=''/>
      <ul className='hidden md:flex items-start gap-5 font-medium'>
        <NavLink to='/'><li className='py-1'>HOME</li></NavLink> <hr className='border-none outlie-none h-0.5 bg-primay w-3/5 m-auto hidden'/>  
        <NavLink to='/doctors'> <li className='py-1'>ALLDOCTORS</li></NavLink> <hr className='border-none outlie-none h-0.5 bg-primay w-3/5 m-auto hidden'/>  
        <NavLink to='/about'><li className='py-1'>ABOUT </li></NavLink> <hr className='border-none outlie-none h-0.5 bg-primay w-3/5 m-auto hidden'/>  
        <NavLink to='/contact'><li className='py-1'>CONTACT</li></NavLink> <hr className='border-none outlie-none h-0.5 bg-primay w-3/5 m-auto hidden'/>  
        
        </ul>
        <div className='flex items-center gap-4'>{token?<div className='flex items-center gap-2 cursor-pointer group-relative'>
          <img className='w-8 rounded-full' src={assets.profile_pic} alt=''/>
        <img className='w-2.5' src={assets.dropdown_icon} alt=''/>
        <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
          <div>
            <p>My Profile</p>
            <p>My Appointment</p>
            <p>Logout</p>
          </div>
        </div>
        </div>:<button  onClick={()=>navigate('/login')}className='bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block'>Create account</button>}</div>
 
    </div>
  )
}

export default Navbar;
