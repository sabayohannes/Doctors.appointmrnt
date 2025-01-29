import React from 'react'
import { useState } from 'react'
import {assets} from '../assets/assets'

const MyProfile = () => {
  const[isEdit,setIsEdit]=useState(false)
  const[userData,setUserData]=useState(
    {
      name:"ediward vincent",
      image:assets.profile_pic,
      email:'richardjameswap@gmail.com',
      phone:'251-9-555-333',
      address:{
        line1:'4 kutir mazoriya',
        line2:'torhayloch'
      },
gender:'male',
dob:'2000-01-20'
    }
  )
  return (
    <div>
      <img src={userData.image} alt=''/>
      {isEdit? <input type="text" value={userData.name} onChange={(e)=>setUserData(prev=>({...prev,name:e.target}))}/> :<p>{userData.name}</p>
           } <hr/>
           <div>
            <p>CONTACT INFORMATION</p>
           </div>
           <div>
            <p>Email id:</p>
            <p>{userData.email}</p>
            <p>phone</p>
            {isEdit? <input type="text" value={userData.phone} onChange={e=>setUserData(prev=>({...prev,phone:e.target}))}/> :<p>{userData.phone}</p>}
            <p>Address:</p>
            {isEdit? <p><input type="text" value={userData.address.line1} onChange={e=>setUserData(prev=>({...prev,address:e.target}))}/> <br/><input type="text" value={userData.address.line2} onChange={e=>setUserData(prev=>({...prev,address:e.target}))}/></p>:<p>{userData.address.line1}<br/>{userData.address.line2}</p>}
           </div>
    </div>
  )
}

export default MyProfile
