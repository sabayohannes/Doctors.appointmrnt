import React from 'react'
import { Link } from 'react-router-dom'
import { doctors } from '../assets/assets.js'

const TopDoctors = () => {
  return (
    <div>
      <div>
        <h1>Top Doctors To Book</h1>
        <p>In our facility you can be healthy </p>
      </div>
      <div>{doctors.slice(0,10).map((item,index)=>(<div key={index}>
        {<img src='item.image' alt=''/>} 
       <div>  <div>
       <p>available</p></div>
        <p>{item.name}</p>
        <p>{item.speciality}</p>
       
        </div>
        </div>  ))}
   

      </div>
    </div>
  )
}

export default TopDoctors
