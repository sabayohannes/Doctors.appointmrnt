import React, { useContext } from 'react'

import { useNavigate } from 'react-router-dom'
import {AppContext} from '../context/AppContext';


const TopDoctors = () => {
  const {doctors}=useContext(AppContext)
  const navigate=useNavigate();
  return (
    <div className='flex flex-col items-center gap-4 my-16 text-gray-900 md:m-10'>
      <div>
        <h1 className='text-3xl font-medium'>Top Doctors To Book</h1>
        <p className='text-center text-sm'>In our facility you can be healthy</p>
      </div>
      <div className='w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
        {doctors.slice(0, 10).map((item, index) => (
          <div onClick={()=>navigate(`/appointment/${item._id}`)}
            className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500'
            key={index}
          >
            <img className='w-full object-cover' src={item.image} alt={item.name} />
            <div className='p-4'>
              <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                <p className='w-2 h-2 bg-green-500 rounded-full'>available</p>
              </div>
              <p className='text-gray-900 ext-lg font-medium'>{item.name}</p>
              <p className='text-gray-600 text-sm'>{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>
      <button onClick ={()=>{navigate('/doctors');scrollTo(0,0)}}className='bg-blue-50 text-gray-600 px-12 py-3 rounded-full mt-10'>more</button>
    </div>
  )
}

export default TopDoctors
