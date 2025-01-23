import React from 'react'
import { specialityData } from '../assets/assets';
import { Link } from 'react-router-dom';

const SpecialityMenu = () => {
  return (
    <div className='flex flex-col items-center gap-4 py-16 text-gray-800'  id="speciality">
<h1 className='text-3xl fonte-medium'>Find by Speciality</h1>
<p className='sm:w-1/3 text-center text-sm'>simply browse to our extensive list of trusted doctors <br/>
schedule your appointment hasle free </p>
<div>{specialityData.map((item,index)=>(
<Link to={`/doctors/${item.speciality}`}>
<img src={item.image} alt=''/>
<p>{item.speciality}</p>
   </Link>))}</div>
    </div>
  )
}

export default SpecialityMenu;
