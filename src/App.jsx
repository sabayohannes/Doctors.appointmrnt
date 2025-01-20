import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Doctors from './pages/Doctors'

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
        <Routes> 
          <Route path='/' element={<Home/>}/>
          <Route path='/doctors' element={<Doctors/>}/>
          <Route path='/doctors:speciality' element={<Doctors/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/my-profile' element={<MyProfile/>}/>
          <Route path='/my-appointment' element={<MyAppointment/>}/>
         
          
          
            </Routes>
    </div>
  )
}

export default App
